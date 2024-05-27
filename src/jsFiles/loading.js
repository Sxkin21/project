         

        import { Client, Account} from "appwrite";
        import axios from 'axios';
        
        import moment from 'moment';
        import{idExistsInDB} from '../exportVariables/variableHolder.js'
       
          
          const client = new Client()
              .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
              .setProject('663523fd001d4a3fa9cc');                 // Your project ID
  
          const account = new Account(client);
      
          
      const searchParams = new URLSearchParams(window.location.search);
      const getSessions=await account.getSession('current')
    


      if (getSessions.current===true && window.location.href.includes("loading")){
       // Progress Bar

        

       const access_token=getSessions.providerAccessToken
       console.log(access_token)
       var expiryDateForProvider=moment.utc(getSessions.providerAccessTokenExpiry).format('ddd, DD MMM yyyy HH[:]mm[:]ss[ UTC]')
       document.cookie="access_token="+access_token+"; expires="+expiryDateForProvider
    
       const url="https://classroom.googleapis.com/v1/courses?access_token=".concat(access_token)
       
       fetch(url)
            
            .then((response) => {
                
                return response.json()
    })
            .then((data) => {
                for (let x in data.courses){
                    
                    var classData=JSON.stringify({classDetails:{id:data.courses[x].id, className:data.courses[x].name}})
                    
                    var idExistsInDB="false"
                    
                    
                    
                    
                    if (idExistsInDB==="false"){
                        

                        axios.post("http://localhost:3000/classes", classData, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                                
                            }
                        })
                        
                        .then((response) => {
                           
                            const IDs="classDetails=".concat(response.config.data);

                                
                            axios.defaults.withCredentials = true;
                                    axios.post("http://localhost:3000/idVariableSaver", IDs,{
                                        
                                        headers:{
                                            'Content-Type': 'text/plain',
                                            'Accept': 'text/plain'
                                        }
                                    })

                                .then(response=>console.log(response) )
                                
                                 
                        })
                    }
                   
                }
                
            })
    

}
