
import express from 'express';
import cors from 'cors';

import { Client, Account} from "appwrite";
import cookieParser from "cookie-parser"


import{setIdExistsInDB} from './src/exportVariables/variableHolder.js'

const app= express()
app.use(cors())

app.use(cookieParser())

import axios from 'axios';

const port=3000



const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('663523fd001d4a3fa9cc');                 // Your project ID

const account = new Account(client);




app.listen(port, function(){
    console.log('CORS-enabled web server listening on port 3000')
})

var ClassDataArray=[]
var cookieClasses=[]

var previousElement=null
var lastElement=null


app.post('/classes', async (req, res) => {
    res.send(req.body)
   
    

})



app.use(express.text())



app.post('/idVariableSaver', (req, res, ) => {
    
   
    var classData=req.body.toString()
    

    
        
        
        ClassDataArray.push(classData)
        

        
        
            if (ClassDataArray.length>1){
                
                var indexOfClassData=ClassDataArray.indexOf(classData)
            
               
                var previous = indexOfClassData === 0 ? ClassDataArray.length - 1 : indexOfClassData - 1;
                previousElement=ClassDataArray[previous]
                console.log("this happened at line 58"+previousElement)
                cookieClasses.push(previousElement)
                    var lastElement=null
                    lastElement=indexOfClassData


		            var Access_Token=req.headers.cookie.split(';')[2].replace(" access_token=", "")
                    const classroomAPI="https://classroom.googleapis.com/v1/courses?access_token=".concat(Access_Token)
                    

                   fetch(classroomAPI)
                        .then((response) => {
                    
                            return response.json()
                        })

                        .then((data)=>{
                            
                                if(lastElement===data.courses.length-1){
                                    cookieClasses.push(ClassDataArray[lastElement])
                                    var stringCookies=JSON.stringify(cookieClasses)
                                    
                                    res.cookie("Classes", stringCookies)
                                    setIdExistsInDB("SavedCookies")
                                    res.send("")
                                }
                        })
                    
                    
                }
        }

    

        
            
        
       
    
    
   
)