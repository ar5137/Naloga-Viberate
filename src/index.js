import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Router, Routes, Switch } from "react-router-dom";


import PersonList from './components/PersonList.js';
import AllDetails from './components/ArtistDetails.js';

function Details(){
  return(
    <AllDetails/>
  )
}


ReactDOM.render(<PersonList/>, document.getElementById("title"));
//ReactDOM.render(<Details />, document.getElementById("title"));

//key={item.id}