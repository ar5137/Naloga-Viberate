import ReactDOM from "react-dom";
import React from 'react';


import PersonList from './components/PersonList.js';
import AllDetails from './components/ArtistDetails.js';


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


ReactDOM.render(<App />, document.getElementById("arti"));
ReactDOM.render(<Details />, document.getElementById("title"));

//key={item.id}