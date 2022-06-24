import React from 'react';
import './App.css';
import {useEffect, useState} from 'react'
function App (){
  const [num,setNum]=useState(0);
  console.log(10);
  useEffect(()=>{
    console.log(111);
  },[num]);
  function color(props, bColor, Csize , Ctext, Bradius) {
    setNum(Csize);
    props.target.style["background-color"]= bColor;
    props.target.style["width"]=Csize;
    props.target.style["height"]=Csize;
    props.target.style["border-radius"]=Bradius;
    props.target.innerText = Ctext;
  }
  return(
    <div className='container'>
      <div className='header'>
        <h1>EventListener</h1>
      </div>
      <div className='subContainer'>
        <h2>Magic Circle</h2>
        <div className='magic-circle' 
        onClick={(e, bColor, Csize)=>color(e, "#f30430", "100px","Circle Clicked","25%")} 
        onDoubleClick={(e, bColor, Csize)=>color(e, "#05fb0d", "600px", "Circle DoubleClick", "12.5%")} 
        onMouseEnter={(e, bColor, Csize)=>color(e, "#f3f703","500px", "Circle touched","0%")}
        onMouseLeave={(e, bColor, Csize)=>color(e, "#6e6b6b","400px","Circle", "50%")}>
        Circle
        </div>
      </div>
    </div>
  );

}

export default App;
