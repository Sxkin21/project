import * as React from 'react';

export default function ProgressBar() {
  var [percentage, updateLoader] = React.useState(0)

  setInterval(function(){
    percentage+20
    console.log(percentage)
  }, 500)


  return(
  <div className="ProgressBar bg-black h-16 w-[1000px] rounded-[100px]">
    <div className=" bg-blue-500  rounded-[100px] " style={{height: `64px`, width:`${percentage}%`}}>

    </div>
  </div>
  )
}