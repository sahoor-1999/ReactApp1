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
    console.log("Update changes");
    setText(text.toUpperCase());
  };

  const handelLoClick = () => {
    console.log("Converted to lower case");
    setText(text.toLowerCase());
  };

  const handelClearClick = () => {
    setText("");
    setText('');
    setEmails([]);
    setMessage('');
    console.log("Clear done");
  };

  const handelEmailFatch = () => {
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
      console.log("Emails fetched:", emailList);
    } else {
      setMessage('Email not found from the text');
      console.log("No emails found");
    }
  };

    const handelCopyText = ()=> {
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    const handelExtraSpace = () => {
      var rm_text = text.split(/ +/);
      setText(rm_text.join(" "));
      console.log("extra space remove")
    }
  return (
    <>
      <div className="container">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            style={{backgroundColor:props.mode==='dark'?'black':'light', color:props.mode==='dark'?'white':'black'}}
            onChange={handelOnChange}
          ></textarea>
          <button className="btn btn-primary btn-sm my-2" onClick={handelUpClick}>
            Convert to Upper case
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={handelLoClick}>
            Convert to Lower case
          </button>
          <button className="btn btn-primary btn-sm " onClick={handelExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary btn-sm mx-1 " onClick={handelClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary btn-sm" onClick={handelEmailFatch}>
            Fetch Email
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={handelCopyText}>
            Copy All
          </button>
          
        </div>
      </div>

      <div className="container">
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Text Details</h5>
        <p style={{color:props.mode==='dark'?'yellow':'black'}}>
          {text.split(" ").filter((word) => word.length > 0).length} words,{" "}
          {text.length} characters, and{" "}
          {0.008 * text.split(" ").filter((word) => word.length > 0).length}{" "}
          minutes to read (125 WPM)
        </p>
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Text Preview</h5>
        <p style={{color:props.mode==='dark'?'yellow':'black'}}>{text.length>0?text:"Enter text on the above to preview"}</p>

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
