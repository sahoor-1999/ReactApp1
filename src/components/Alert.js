import React from "react";

export default function Alert(props) {
  const convertUpper = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          style={{ textAlign:"center", marginLeft:"30rem", marginRight:"30rem"}}
          role="alert"
        >
          <strong>{convertUpper(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </>
  );
}
