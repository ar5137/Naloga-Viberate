import ReactDOM from "react-dom";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a");

  return (
    <>
      {data.map(name => <h2>{name}</h2>)} 
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("seznam"));