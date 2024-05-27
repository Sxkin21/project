import * as React from 'react';
import{idExistsInDB} from '../exportVariables/variableHolder.js'
export default function ProgressBar(){
  var [percentage, updateLoader] = React.useState(0)
  

React.useEffect(()=>{
   
   var interval=setInterval(() => {
    updateLoader(prev=>prev+20)
    console.log(percentage)
   }, 500);

   if (percentage===80){
    
      clearInterval(interval);
    
    
   
    

   }
   
  },[percentage])





  return(
  <div className="ProgressBar bg-black h-16 w-[1000px] rounded-[100px]" >
    
    <button className=" bg-blue-500  rounded-[100px] "  style={{height: `64px`, width:`${percentage}%`}}>
  
    </button>

    {percentage}
  </div>
  
  )
}


