import { sendResponse } from './sendResponse.js'
import fs from 'node:fs/promises'
import path from 'node:path'
import { getContentType } from './getContentType.js'


export async function serveStatic(req,res,basedir){

    let filename,statuscode=200;
    const frontendPath=path.join(basedir,'frontend')

    if(req.url==='/') filename='index.html'
    else if(req.url==='/style.css') filename='style.css'
    else if(req.url=='/index.js') filename='index.js'
    else{
        statuscode=404
        filename='404.html'
    }

    let filePath=path.join(frontendPath,filename)

    const ext=path.extname(filePath)
    const contentType=getContentType(ext);

    try{
        const content=await fs.readFile(filePath)
        sendResponse(req,res,contentType,statuscode,content)
    }
    catch(err){
        console.log(err);
    }
}