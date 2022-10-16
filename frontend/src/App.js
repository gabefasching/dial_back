import logo from './twitter.svg';
import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function App() {

  const [pictures, setPictures] = useState([])
  const [realPictures, setRealPictures] = useState([])
  const [hashtag, setHashtag] = useState('')
  
  useEffect(() => getPictures(), [hashtag])
  // useEffect(() => getPictures(), [hashtag])
  
  function getPictures() {
    axios
    .get('/api/pictures', {
      params: {
        hashtag,
      },
    })
    .then(response => {
          setPictures(response.data.statuses[12].retweeted_status.entities.media[0].media_url_https) //.media[0].media_url_https) //.pictures
    })
    .catch(error => console.log("wrong")) //error.message
  }
  
  function listPictures() {
    return (
      <img src={pictures}
      alt="new"
      />
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter" /> 
        <h3>Retro Twitter Hashtags</h3>
      </header>
      <div className="menu">
          <select name="hashtag" onChange={e => setHashtag(e.target.value)}>
              <option value="#retro">#retrogames</option>
              <option value="#vintage">#vintage</option>
              <option value="#retrogames">#retro</option>
              <option value="#arcadegames">#arcadegames</option>     
          </select>
      </div>
      <div className="content">{listPictures()}</div>
    </div>
  )
}



export default App


