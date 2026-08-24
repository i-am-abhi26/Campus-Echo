import {EventEmitter} from 'node:events'

function createAlert(data){
    console.log(`New Experience added by ${data.studentName}`)
}

export const expEvent=new EventEmitter()
expEvent.on('experience-added',createAlert)