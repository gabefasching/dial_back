import logo from './twitter.svg';
import './App.css';
import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'

function App() {

  const [pictures, setPictures] = useState([])
  const [woeid, setWoeid] = useState('1')

  function listPictures() {
    return <h2>Pictures</h2>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter" /> 
        <h3>Twitter Trends</h3>
      </header>
      <div className="menu">
          <select name="trending-pictures" onChange={e => alert(e.target.value)}>
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


