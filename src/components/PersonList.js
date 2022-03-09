import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                <li key={person.artist_uuid}><a href="">{person.artist_name}</a></li>
              )
          }
        </ul>
        
      )
    }
  }