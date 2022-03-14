import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AllDetails from './ArtistDetails';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function PersonList(){
  let [artistComponentState1, setArtistComponentState1] = useState({data: {}, loading:true});
    

  useEffect(() => {
      axios.get('https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a').then((res) => {
          setArtistComponentState1({data: res.data.all_artists, loading:false});    
        })
      },['https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a']);

     
   
      

  if(artistComponentState1.loading){
      return <>IT IS LAODING !!</>
  }

    return (
      
      <Router>
        <div className='container'>
        <header className='header'>

        <div className='page'>
          
          <a href="#" className='logo'>
          <img src="./exercise-01_files/logo-v.svg" alt="Viberate" /> Viberate
          </a>

          <nav className='navigation-primary'>

            <ul className='menu-sys'>
              <li>
                <button className='btn btn-menu search'>Search</button>
              </li>
              <li>
                <button className='btn btn-menu more'>More</button>
              </li>
              
            </ul>
            
            <ul className='menu' >
            {
          artistComponentState1.data.map(person =>
            //<li key={person.artist_uuid}>{person.artist_name}</li>
              <li key={person.artist_uuid}><Link to={`${person.artist_uuid}`}>{person.artist_name}</Link></li>
            )
        }
            </ul>

          </nav>
        
        </div>


        </header>

        
        
        </div>
            <Routes>
                <Route path=":artistId" element={<AllDetails />}></Route>
            </Routes>
        

    </Router>
    );

}

/*<Routes>
          <Route path="" element={<AllDetails />} />
        </Routes>


</Router> 






export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a`)
        .then(res => {
          const persons = res.data.all_artists;
          //console.log (persons);
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        
        <ul className="menu">
          {
            this.state.persons
              .map(person =>
                <li key={person.artist_uuid}><a href="/">{person.artist_name}</a></li>
              )
          }
        </ul>
        
      )
    }

  }
  */