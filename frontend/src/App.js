import logo from './twitter.svg';
import './App.css';
import React from 'react'
// import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function App() {

  const [pictures, setPictures] = useState([])
  const [realPictures, setRealPictures] = useState([])
  // const [hashtag, setHashtag] = useState('#retro')
  const [hashtag, setHashtag] = useState('')
  
  useEffect(() => getPictures(), [hashtag])
  // useEffect(() => getPictures(), [hashtag])
  
  function getPictures() {
    axios
    .get('/api/pictures', {
      params: {
        hashtag,
        // hashtag,
      },
    })
    .then(response => {
      // console.log(response.data.statuses[0].retweeted_status.entities.media[0].media_url_https) //.media[0].media_url_https
      
      // .entities['urls'][0]
      // console.log(response.data.statuses[1].retweeted_status.entities.media[0].media_url_https) //.media[0].media_url_https) //.pictures
      setPictures(response.data.statuses[1].retweeted_status.entities.media[0].media_url_https) //.media[0].media_url_https) //.pictures
    })
    .catch(error => console.log("wrong")) //error.message
  }
  // statuses[0].retweeted_status.entities.media[0].media_url_https
  
  // function getRealPictures

  function listPictures() {
    // console.log(pictures)
    return (
      // <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      //   {pictures.map((picture) => (
      //     <ImageListItem key={picture.retweeted_status.entities.media[0].media_url_https}>
      //       {/* [1].retweeted_status.entities.media[0].media_url_https */}
      //       <img
      //         src={`${picture.retweeted_status.entities.media[0].media_url_https}?w=164&h=164&fit=crop&auto=format`}
      //         srcSet={`${picture.retweeted_status.entities.media[0].media_url_https}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      //         alt={"none"} //item.title
      //         loading="lazy"
      //       />
      //     </ImageListItem>
      //   ))}
      // </ImageList>
      // <ul>
      // console.log({pictures}),
      <img src={pictures}
      alt="new"
      />
        // <li><var>url</var></li>
      //   {
      //     // pictures
      //   /* {pictures.map((picture, index) => {
      //     return (<li key = {index}>
      //       <a href={picture.url}>{picture.url}</a>

      //     </li>
      //     )
      //   })} */}
      // </ul>
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
              <option value="#retro">#retro</option>
              <option value="#vintage">#vintage</option>
              <option value="#retrogames">#retrogames</option>
              <option value="#arcadegames">#arcadegames</option>     
          </select>
      </div>
      <div className="content">{listPictures()}</div>
    </div>
  )
}



export default App


