import http from 'node:http'
import { PORT } from './config.js'
import { getUsuarios, index, exportando, importando } from './controller.js'

const server = http.createServer(async (req, res) => {
  // const url = req.url
  // const method = req.method
  const { url, method } = req // esto es la abreviación de las 2 líneas de arriba

  if (method === 'GET') {
    switch (url) {
      case '/':
        index(req, res)
        break

      case '/api/usuarios':
        getUsuarios(req, res)
        break

      case '/api/usuarios/export':
        exportando(req, res)
        break

      case '/api/usuarios/import':
        importando(req, res)
        break

      default:
        res.end('Ruta no encontrada')
        break
    }
  }

  if (method === 'POST') {
    switch (url) {
      case '/api/usuarios/import':
        importando(req, res)
        break
    }
  }
})

server.listen(PORT, () => console.log('Servidor ejecutandose'))
