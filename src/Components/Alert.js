import React from "react";

function Alert(props) {
    const capitalize=(word)=>{
        let str=word.toLowerCase();
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
  return (
    // This syntax can be used to return null if nothing is passed, else return the jsx code.
    props.alertMsg && <div>
      <div className={`alert alert-${props.alertMsg.status} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertMsg.status)}</strong>: {props.alertMsg.msg}
      </div>
    </div>
  );
}

export default Alert;
