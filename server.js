import http from 'node:http'
import { sendResponse } from './utils/sendResponse.js'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet,handlePost } from './handlers/routeHandler.js'
import fs from 'node:fs/promises'
import path from 'node:path'

const port = process.env.PORT || 3000;
const __dirname=import.meta.dirname

try {
    const server = http.createServer(async (req, res) => {

        if(req.url=='/api'){
            if(req.method==='GET'){
                await handleGet(req,res)
            }
            else if(req.method==='POST'){
                await handlePost(req,res)
            }
            else{
                serveStatic(req,res,__dirname)
            }
        }

        else if(!req.url.startsWith('/api')){
            serveStatic(req,res,__dirname)
        }

        else{
            serveStatic(req,res,__dirname)
        }
        
        
    })
    
    server.listen(port, () => console.log(`Server Listening at port ${port}`))
}
catch (err) {
    console.log(err)
}

