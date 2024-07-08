import { useState } from "react";

export default function TextForm(props,{ header = "Set the header" }) {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState('');

  const handelOnChange = (event) => {
    console.log("Changes loaded");
    setText(event.target.value);
  };

  const handelUpClick = () => {
    if(text===""){
      props.showAlert("Text not found!", "danger");
    }else{
    console.log("Update changes");
    setText(text.toUpperCase());
    props.showAlert("Converted into upper case.", "success");
    }
  };

  const handelLoClick = () => {
    if(text===""){
      props.showAlert("Text not found!", "danger");
    }else{
    console.log("Converted to lower case");
    setText(text.toLowerCase());
    props.showAlert("Converted into lower case.", "success");
    }
  };

  const handelClearClick = () => {
    if(text===""){
      props.showAlert("Text not found!", "danger");
    }else{
    setText("");
    setText('');
    setEmails([]);
    setMessage('');
    props.showAlert("Clear text.", "success");
    console.log("Clear done");
    }
  };

  const handelEmailFatch = () => {
    if(text===""){
      props.showAlert("Text not found!", "danger");
    }else{
    const words = text.split(" ");
    const emailList = [];
    for (const word of words) {
      if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(word)) {
        emailList.push(word);
      }
    }
    setEmails(emailList);
    if (emailList.length > 0) {
      setMessage('');
      props.showAlert("Email fatched from the text.", "success");
      console.log("Emails fetched:", emailList);
    } else {
      props.showAlert("Email not found from the text.", "danger");
      console.log("No emails found");
    }
  }
  };

    const handelCopyText = ()=> {
      var text = document.getElementById("myBox")
      if(text.value.length===0){
        props.showAlert("Text not found!", "danger");
      }else{
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Cliped to clipboard!", "success");
      }
    }

    const handelExtraSpace = () => {
      if(text===""){
        props.showAlert("Text not found!", "danger");
      }else{
      // Count the spaces
    const spaceCount = (text.match(/ /g) || []).length;
      // Remove extra spaces
      if(spaceCount > 1 ){
        var rm_text = text.split(/ +/);
        setText(rm_text.join(" "));
        props.showAlert("Remove extra space.","success")
        console.log("extra space remove")
      }else{
        setText(text);
        props.showAlert("No extra space found.","info")
      }
    }
    }

    
  return (
    <>
      <div className="container" >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}
            onChange={handelOnChange}
          ></textarea>
          <div className="container my-2"  >
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelUpClick}>
            Convert to Upper case
          </button>
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelLoClick}>
            Convert to Lower case
          </button>
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelExtraSpace}>
            Remove Extra Space
          </button>
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelClearClick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelEmailFatch}>
            Fetch Email
          </button>
          <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-2" onClick={handelCopyText}>
            Copy All
          </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Text Details</h5>
        <p style={{color:props.mode==='dark'?'yellow':'black'}}>
          {text.split(" ").filter((word) => {return word.length !==0}).length} word {" "}
          {text.length} characters, and{" "}
          {0.008 * text.split(" ").filter((word) => word.length > 0).length}{" "}
          minutes to read (125 WPM)
        </p>
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Text Preview</h5>
        <p style={{color:props.mode==='dark'?'yellow':'black'}}>{text.length>0?text:"Nothing to preview..."}</p>

        {emails.length > 0 && (
          <div>
            <h5 style={{color:props.mode==='dark'?'white':'black'}}>Extracted Emails</h5>
            <ul style={{color:props.mode==='dark'?'yellow':'black'}}>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        )}
        {message && (
          <div>
            <h5 style={{color:props.mode==='dark'?'white':'black'}}>{message}</h5>
          </div>
        )}
      </div>
    </>
  );
}
