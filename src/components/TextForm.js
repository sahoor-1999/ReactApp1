import React from "react";
import { useState } from "react";
export default function TextForm({header="Set the header"}) {
    const[text, setText] = useState('Enter your text')
    const handelOnChange = (event)=> {
        console.log("Changes loaded");
        setText(event.target.value);
    }

    const handelUpClick = ()=>{
        console.log("Update changes");
        setText(text.toUpperCase());
    }

    const handelLoClick = () => {
      console.log("converted lower case")
        setText(text.toLowerCase())
    }
    
  return (
    <>
        <h1>{header}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handelOnChange}></textarea>
        <button className="btn btn-primary my-2" onClick={handelUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handelLoClick}>Convert to Lower case</button>
      </div>
    </>
  );
}
