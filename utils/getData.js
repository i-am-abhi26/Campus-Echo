import fs from 'node:fs/promises'
import path from 'node:path'
import { experiencesCollection } from './db.js'

export async function getData(){
    try{
        /*const filePath=path.join('data','data.js')
        const content = await fs.readFile(filePath,'utf-8')
        const parsedData=JSON.parse(content)
        return parsedData*/

        const content=await experiencesCollection.find().toArray();
        return content;
    }
    catch(err){
        console.error("Could not fetch data in getData.js",err);
        throw err;
    }
}