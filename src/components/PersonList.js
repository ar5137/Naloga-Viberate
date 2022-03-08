import React, { useEffect, useState } from 'react';
import axios from 'axios';


/*

export default class PersonList extends React.Component {
  

  componentDidMount() {
    axios.get(`https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a`)
      .then(res => {
        const all_artists = res.data;
        this.setState( all_artists );
      })
  }

  render() {
      if(this.state.all_artists){
         return (
            <ul>
                
            </ul>    
        
        )   
        }
    
  }
}


{
         this.state.all_artists && this.state.all_artists.map(person =>
              <li key={person.artist_uuid}>{person.artist_name}</li>
            )
        }  

        */

        export default class PersonList extends React.Component {
            state = {
              persons: []
            }
          
            componentDidMount() {
              axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                  const persons = res.data;
                  this.setState({ persons });
                })
            }
          
            render() {
              return (
                <ul>
                  {
                    this.state.persons
                      .map(person =>
                        
                        <li key={person.id}>{person.name}</li>
                      )
                  }
                </ul>
              )
            }
          }