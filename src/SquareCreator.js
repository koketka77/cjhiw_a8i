import React, { useState } from "react";

const SquareCreator = () => {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)




const createBlock = (count)=>{
 if(count > 10){
    const dd =   Array.from({length:10},()=>
        <div style={{width:'100px',height:'100px',border:'1px solid black'}}></div>
    
    )    
    return dd
 }
 else{
    const dd =   Array.from({length:count},()=>
    <div style={{width:'100px',height:'100px',border:'1px solid black'}}></div>

) 
  return dd
 }
   

}



    return (
        <>
            <div className="main">
                <input type="text"  onChange={(e)=>setCount(e.target.value)} />
            <button onClick={()=>{setCount2(count)}}>create</button>
            </div>
            <div className="SquareContainer">
      
     {
       createBlock(count2)
     }
            </div>
        </>
    );
}

export default SquareCreator;




