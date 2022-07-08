import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main"><Para/></div>
  )
}
function Para(){
  return (<p>I am learning React. My life is getting better.</p>);
}

export default App;
