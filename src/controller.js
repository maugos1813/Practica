import path from 'node:path'
import fs from 'node:fs/promises'
import { pool } from './db.js'

export const index = async (req,res) => {
    const ruta = path.resolve('./public/index.html') //El modulo path nos permite trabajar con rutas de nuestro sistema operativo
    const contenido = await fs.readFile(ruta, 'utf-8' )
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(contenido)
}

export const getUsuarios = async(req,res) => {
    const resul = await pool.query('SELECT * FROM usuarios')
    const usuarios = resul[0]
    const stringData = JSON.stringify(usuarios)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(stringData)
}