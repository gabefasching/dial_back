import logo from './twitter.svg';
import './App.css';
import React from 'react'
// import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [pictures, setPictures] = useState([])
  const [hashtag, setHashtag] = useState('')

  useEffect(() => getPictures(), [hashtag])

  function getPictures() {
    axios
      .get('/api/pictures/', {
        params: {
          hashtag,
        },
      })
      .then(response => {
        console.log(response.data)
        setPictures(response.data[0].pictures)
      })
      .catch(error => console.log(error.message))
  }

  function handleLocation() {
    alert('handle location')
  }

  function listPictures() {
    return <h2>Pictures</h2>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter" /> 
        <h3>Retro Twitter Hashtags</h3>
      </header>
      <div className="menu">
          <select name="hashtags" onChange={e => setHashtag(e.target.value)}>
              <option value="retro">#retro</option>
              <option value="vintage">#vintage</option>
              <option value="retrogames">#retrogames</option>
              <option value="arcadegames">#arcadegames</option>     
          </select>
      </div>
      <div className="content">{listPictures()}</div>
    </div>
  );
}

export default App;


