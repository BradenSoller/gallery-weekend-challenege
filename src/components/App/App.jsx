import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList';
import LikeCounter from './LikeCounter';


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
        })
        .catch((error) => {
            console.error(error)
        })
    }
  
 
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <div className='img'>
        <img src="images/goat_small.jpg" />
          <img height={150} width={140} src="images/ozzy.JPG" />
          <LikeCounter/>
        <img height={150} src="images/Matt.jpg" />
        <img height={150} width={140} src="images/kevo.JPG" />
        <img height={150} width={140} src="images/timberwolves.jpg" />
        <img height={150} width={140} src="images/more-friends.PNG" />
          <img height={150} width={140} src="images/friends.PNG" />
          <GalleryList listItems={listItems} />
        </div>

      </div>
    );
}

export default App;
