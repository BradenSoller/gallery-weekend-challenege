import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import GalleryList from '../GalleryList';
import '../App.css'
import GalleryList from '../GalleryList';



function App() {
 
  let [listItems, setlistItems] = useState([]);


    
  useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        axios({
            method: 'GET',
            url: '/gallery'
        })
        .then((response) => {
          setlistItems(response.data)
          console.log(response.data);
        })
        .catch((error) => {
            console.error(error)
        })
    }
  
 
    return (
      <div data-testid="app" className='header'>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
   

      
          <GalleryList listItems={listItems} getItems={getItems} />
        </div>

    
    );
}

export default App;
