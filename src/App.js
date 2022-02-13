import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alertMsg, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style = "background-color: white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utils (Light)";
    } else {
      setMode("dark");
      document.body.style = "background-color: #36454F";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utils (Dark)";
    }
  };
  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      status: status,
    });
    // We are calling callback function setTimeout so that the alert message vanishes after certain period of time
    setTimeout(() => {
      setAlert(null);
      document.title = "Text Utils";
    }, 2000);
  };
  // This will change title after every certain interval
  // setInterval(() => {
  //   document.title='Text Utils'
  // }, 2000);
  // setInterval(() => {
  //   document.title='You are using TextUtils';
  // }, 1500);

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          tab1="Home"
          tab2="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alertMsg={alertMsg}></Alert>
        <div className="my-3 container">
          <Routes>
            <Route
              exact
              path="/textUtils/about"
              element={<About mode={mode} />}
            ></Route>
            <Route
              exact
              path="/textUtils"
              element={
                <TextArea
                  showAlert={showAlert}
                  title="Text Analyzer"
                  heading="Enter you text below"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
