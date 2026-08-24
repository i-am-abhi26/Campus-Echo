import { getData } from "./getData.js";
import fs from 'fs/promises'
import path from 'node:path'

export async function addNewExperience(newData){
    try{
        const data= await getData();
        data.push(newData)

        const filePath=path.join('data','data.js')

        await fs.writeFile(filePath,JSON.stringify(data,null,2),"utf-8")
        console.log("New Experience Added")
    }
    catch(err){
        console.log("Could not add data")
    }
}