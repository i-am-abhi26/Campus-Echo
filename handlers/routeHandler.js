import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewExperience } from "../utils/addNewExperience.js";
import sanitizeHtml from "sanitize-html";
import { expEvent } from "../utils/experienceEvent.js";

export async function handleGet(req,res){
    const data=JSON.stringify(await getData())
    sendResponse(req,res,"application/json",200,data)

}

export async function handlePost(req,res) {
    try{
        const data= await getData();

        let body=''
        for await(const chunk of req){
            body+=chunk
        }

        const newData=JSON.parse(body);
        
        //sanitizing
        for(const key of Object.keys(newData)){
            console.log("...")
            if(typeof newData[key] === "string"){
                newData[key]=sanitizeHtml(newData[key],{allowedTags:['b'],allowedAttributes:[]})
            }
        }
        
        await addNewExperience(newData)
        console.log("New data added")

        expEvent.emit('experience-added',newData);

        sendResponse(req,res,'application/json',201,JSON.stringify(newData))
        console.log("Response sent")
    }
    catch(err){
        sendResponse(req,res,'application/json',400,JSON.stringify({error: "Something went wrong"}))
    }
}