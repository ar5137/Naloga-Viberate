import ReactDOM from "react-dom";
import React from 'react';


import PersonList from './components/PersonList.js';
import AllDetails from './components/ArtistDetails.js';
import { BrowserRouter } from "react-router-dom";


function App() {
  return ( 
    <PersonList/>  
  )
}
function Details(){
  return(
    <AllDetails/>
  )
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("arti"));
ReactDOM.render(<BrowserRouter><Details /></BrowserRouter>, document.getElementById("title"));

//key={item.id}