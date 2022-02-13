import React from "react";

export default function About(props) {
  // const [myStyle, setStyle] = useState({backgroundColor:'white',color:'#212529',padding:'1%',borderRadius:'1%'});
  // const [Btn,setBtn]=useState("Convert Dark Mode");
  // const changeStyle=()=>{
  //   if(myStyle.color==='black'){
  //     setStyle({backgroundColor:'#212529',color:'white',padding:'1%',borderRadius:'1%'});
  //     setBtn("Convert Light Mode");
  //   }
  //   else{
  //     setStyle({backgroundColor:'white',color:'black',padding:'1%',borderRadius:'1%'});
  //     setBtn("Convert Dark Mode");
  //   }
  // }
  var myStyle={backgroundColor:props.mode==='dark'?"#6c757d":"white",color: props.mode==='dark'?'white':'black',padding:'1%',borderRadius:'1%', border: "1px solid white"}

  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="container">About Us</h1>
        <div
          className="accordion container my-3"
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>TextUtils</strong>
              </button>
            </h2>
            <div
              style={myStyle}
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              It is used to analyze your text
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              We don't charge you!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              Use it using any device, and you are good to go!
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
        <button type="button" className="btn btn-primary" onClick={changeStyle}>
          {Btn}
        </button>
      </div> */}
      </div>
    </>
  );
}
