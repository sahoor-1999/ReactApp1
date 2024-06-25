import { useState } from "react";
export default function TextForm({header="Set the header"}) {
    const[text, setText] = useState('')
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
    <div className="container">
        <h1>{header}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text}  onChange={handelOnChange}></textarea>
        <button className="btn btn-primary my-2" onClick={handelUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handelLoClick}>Convert to Lower case</button>
      </div>
      </div>

      <div className="container">
      <h5>Text details</h5>
      <p>{text.split(" ").length} words, {text.length} characters and {0.008*text.split(" ").length} minute to read(125 WPM)</p>
      <h5>Text Preview</h5>
      <p>{text}</p>
      </div>
    </>
  );
}
