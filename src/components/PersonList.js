import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashRouter, NavLink } from 'react-router-dom';

export default function PersonList(){
    let [artistComponentState1, setArtistComponentState1] = useState({data: {}, loading:true});
    

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a').then((res) => {
            setArtistComponentState1({data: res.data.all_artists, loading:false});    
          })
        },[]);

         //console.log(artistComponentState1);

		 
        

    if(artistComponentState1.loading){
        return <>IT IS LAODING !!</>
    }

    return (
       
      <ul className="menu">
        {
          artistComponentState1.data.map(person =>
              <li key={person.artist_uuid}><NavLink to={'id/'+person.artist_uuid}>{person.artist_name}</NavLink></li>
            )
        }
      </ul>
      
    )

}

/*









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