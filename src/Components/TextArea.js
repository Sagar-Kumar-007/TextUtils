import React, { useState } from "react";

export default function TextArea(props) {
  const cvrtUp = () => {
    // console.log("You have clicked on cvrtUp");
    let New = text;
    New = New.toUpperCase();
    setText(New);
    props.showAlert("Converted to uppercase!","success");
  };
  const cvrtLow = () => {
    let New = text;
    New = text.toLowerCase();
    setText(New);
    props.showAlert("Converted to lowercase!","success");
  };
  const onChng = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    // event.target.value ==> previous string + current character
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared!","success");
  };
  const copyText=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied!","success");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className=" container">
        <div className="mb-3">
          <h1 className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>{props.title}</h1>
          <textarea
            className={`form-control my-3 bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'light':'dark'}`}
            placeholder="Enter Text Here"
            value={text}
            onChange={onChng}
            id="textBox"
            rows="10"
          ></textarea>
          <div className="d-grid  d-md-flex justify-content-md-center gap-2">
            <button
              type="button"
              className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 col-lg-3`}
              onClick={cvrtUp}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 col-lg-3`}
              onClick={cvrtLow}
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 col-lg-3`}
              onClick={clearText}
            >
              Clear Text
            </button>
            <button
              type="button"
              className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 col-lg-3`}
              onClick={copyText}
            >
              Copy Text
            </button>
          </div>
        </div>
        <div className="container my-2">
          <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Summary:</h2>
          <p className={`text-${props.mode==='dark'?'light':'dark'}`}>
            Word Count: {text.length>0?text.split(" ").length:0}
            <br></br>
            Character Count: {text.length}
          </p>
          <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview:</h2>
          <p className={`text-${props.mode==='dark'?'light':'dark'}`} style={{fontStyle:'italic'}}>{text.length>0?text:"Enter your text in the above text box to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
