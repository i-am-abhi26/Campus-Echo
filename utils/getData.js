import fs from 'node:fs/promises'
import path from 'node:path'

export async function getData(){
    try{
        const filePath=path.join('data','data.js')
        const content = await fs.readFile(filePath,'utf-8')
        const parsedData=JSON.parse(content)
        return parsedData
    }
    catch(err){
        return []
    }
}