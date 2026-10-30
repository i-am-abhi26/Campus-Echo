import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewExperience } from "../utils/addNewExperience.js";
import sanitizeHtml from "sanitize-html";
import { expEvent } from "../utils/experienceEvent.js";

export async function handleGet(req,res){
    try{
        const data=JSON.stringify(await getData())
        sendResponse(req,res,"application/json",200,data)
    }
    catch(err){
        console.error("GET handler failed:", err);
        sendResponse(req,res,'application/json',500,JSON.stringify({error: "Something went wrong on our side"}))
    }
}

export async function handlePost(req,res) {
    try{

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

        if(newData!== null && typeof newData.title==='string' && typeof newData.studentName==='string' && typeof newData.experience==='string'){
            if(newData.title.trim()==="" || newData.studentName.trim()==="" || newData.experience.trim()==="") {
                sendResponse(req,res,'application/json',400,JSON.stringify({error: "Missing Necessary Fields"}))

                return
            }
        }
        else{
            sendResponse(req,res,'application/json',400,JSON.stringify({error: "Fields not a String"}))

            return
        }
        
        await addNewExperience(newData)
        console.log("New data added")

        expEvent.emit('experience-added',newData);

        sendResponse(req,res,'application/json',201,JSON.stringify(newData))
        console.log("Response sent")
    }
    catch(err){
        console.log("Headers sent:", res.headersSent);
        console.error("POST handler failed:", err);
        sendResponse(req,res,'application/json',500,JSON.stringify({error: "Something went wrong on our side"}))
    }
}