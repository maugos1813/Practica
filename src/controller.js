import path from 'node:path'
import fs from 'node:fs/promises'
import { pool } from './db.js'

export const index = async (req, res) => {
  const ruta = path.resolve('./public/index.html') // El modulo path nos permite trabajar con rutas de nuestro sistema operativo
  const contenido = await fs.readFile(ruta, 'utf-8')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(contenido)
}

export const getUsuarios = async (req, res) => {
  const resul = await pool.query('SELECT * FROM usuarios')
  const usuarios = resul[0]
  const stringData = JSON.stringify(usuarios)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(stringData)
}

export const exportando = async (req, res) => {
  try {
    const resul = await pool.query('SELECT * FROM usuarios')
    const usuarios = resul[0]

    let contenidoCSV = 'id,nombres,apellidos,direccion,correo,dni,edad,fechaCreacion,telefono\n'
    usuarios.forEach(usuario => {
      contenidoCSV += `${usuario.id},${usuario.nombres},${usuario.apellidos},${usuario.direccion},${usuario.email},${usuario.dni},${usuario.edad},${usuario.fechaCreacion},${usuario.telefono}\n`
    })

    await fs.writeFile('usuarios.csv', contenidoCSV, 'utf8')

    console.log('Archivo CSV creado exitosamente')
    res.end('Revisa el archivo, ya está creado')
  } catch (error) {
    console.error('Error al exportar usuarios a CSV:', error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Error al exportar usuarios a CSV')
  }
}

export const importando = async (req, res) => {
  try {
    const contenido = await fs.readFile('usuarios.csv', 'utf-8')
    console.log(contenido)
    const filas = contenido.split('\n')
    filas.shift() // Eliminar encabezado

    let lastId = 0 // Variable para almacenar el último ID existente en la tabla

    // Obtener el último ID existente en la tabla
    const [lastRow] = await pool.execute('SELECT id FROM usuarios ORDER BY id DESC LIMIT 1')
    if (lastRow.length > 0) {
      lastId = parseInt(lastRow[0].id) // Convertir el ID a entero
    }

    for (const fila of filas) {
      const valores = fila.split(',')
      const [nombres, apellidos, direccion, correo, dni, edad, fechaCreacion, telefono] = valores

      // Validar datos
      if (!nombres || !apellidos || !correo || !direccion || !dni || !edad || !fechaCreacion || !telefono) {
        console.log('Datos incompletos:', fila)
        continue // Saltar a la siguiente fila si faltan datos
      }

      // Validar formato de correo electrónico
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
      if (!correoValido) {
        console.log('Correo electrónico inválido:', correo)
        continue // Saltar a la siguiente fila si el correo es inválido
      }

      // Generar nuevo ID aumentando en 10 el último ID existente
      const newId = lastId + 10

      // Insertar usuario
      await pool.execute('INSERT INTO usuarios (id, nombres, apellidos, direccion, correo, dni, edad, fechaCreacion, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [newId, nombres, apellidos, direccion, correo, dni, edad, fechaCreacion, telefono])
      console.log('Datos insertados:', fila)

      lastId = newId // Actualizar el último ID insertado
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ message: 'Datos importados' }))
  } catch (error) {
    console.error('Error en la importación:', error)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ message: 'Error en la importación' }))
  }
}
