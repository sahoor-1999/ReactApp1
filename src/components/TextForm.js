import { useState } from "react";

export default function TextForm({ header = "Set the header" }) {
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

  return (
    <>
      <div className="container">
        <h1>{header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handelOnChange}
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handelUpClick}>
            Convert to Upper case
          </button>
          <button className="btn btn-primary mx-2" onClick={handelLoClick}>
            Convert to Lower case
          </button>
          <button className="btn btn-primary" onClick={handelClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handelEmailFatch}>
            Fetch Email
          </button>
        </div>
      </div>

      <div className="container">
        <h5>Text Details</h5>
        <p>
          {text.split(" ").filter((word) => word.length > 0).length} words,{" "}
          {text.length} characters, and{" "}
          {0.008 * text.split(" ").filter((word) => word.length > 0).length}{" "}
          minutes to read (125 WPM)
        </p>
        <h5>Text Preview</h5>
        <p>{text}</p>

        {emails.length > 0 && (
          <div>
            <h5>Extracted Emails</h5>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        )}
        {message && (
          <div>
            <h5>{message}</h5>
          </div>
        )}
      </div>
    </>
  );
}
