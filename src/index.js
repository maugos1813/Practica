import http from 'node:http'
import { PORT } from './config.js'
import {getUsuarios, index} from './controller.js'
 
const server = http.createServer(async(req,res)=>{
    //const url = req.url
    //const method = req.method
    const {url, method} = req //esto es la abreviación de las 2 líneas de arriba

    if(method === 'GET'){
        switch (url) {
            case '/':
                index(req,res)
                break;
            
            case '/api/usuarios':
                getUsuarios(req,res)
                break;
        
            default:
                res.end('Ruta no encontrada');
                break;
        }
    }

    if(method === 'POST'){
        //Codigo para rutas en POST
    }
})

server.listen(PORT, ()=>console.log('Servidor ejecutandose'))