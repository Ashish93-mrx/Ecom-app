import { useState } from "react";
import React from 'react'
import "./slider.css"
import {data} from "./Constants"

const Imageslider = () => {
    const [curr,setCurr] = useState(0);

    const handlePrev=()=>{
        setCurr(
            !curr ? data.length-1 : curr-1
        );
    };

    const handleNext=()=>{
        setCurr((curr+1)%data.length);
    }

  return (
    <div>
      <button onClick={handlePrev}>Left</button>
      {data.map((url,i)=>(
            <img src={url} className={curr === i ? "image.block" : "image"}
             alt="Wallpaper"
            />
       ))}
      <button onClick={handleNext}>Right</button>
    </div>
  )
}

export default Imageslider



