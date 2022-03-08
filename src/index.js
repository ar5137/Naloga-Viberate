import ReactDOM from "react-dom";
import useFetch from "./useFetch";
import axios from 'axios';

import PersonList from './components/PersonList.js';



const Home = () => {

  const data1 = useFetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a");
  
  //const obj = JSON.parse(data);

  return (
    <>
      <h1>{JSON.stringify(data1)}</h1>
      <h1>{typeof(data1)}</h1>

    </>
  );
};

function App() {
  return (
    <div className="App">
      <PersonList/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("arti"));

//key={item.id}