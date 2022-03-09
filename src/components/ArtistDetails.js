import React, { useEffect, useState, memo} from 'react';
import axios from 'axios';



export default function AllDetails() {
    
        const [artistData, setArtistData] = useState({});
            
        const id = '7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab'
        const url = 'https://run.mocky.io/v3/'+id;
   

      
        

        useEffect(() => {
            axios.get(url).then((res) => {
                setArtistData(res.data.data);
                
            })
        },[]);

        //console.log(artistData.name); 
        

     return(
        <>
            {artistData.name}
        </>
     )
 
};