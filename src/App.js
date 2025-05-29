import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bgImg, setBgImg] = useState('');
  const [imgAuthor, setImgAuthor] = useState('');

  useEffect(() => {
    axios.get("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
      .then(res => {
        setBgImg(res.data.urls.full)
        setImgAuthor(res.data.user.name)
      })
      .catch(err => {
        console.log(err)
      })
  },[])



  return (
    <>
    <div style={{backgroundImage: `url(${bgImg})`,}}
         className="background-img">
      <p className='author'><i class="fa-solid fa-camera"></i> {imgAuthor}</p>
    </div>
    </>
  )
}

export default App;
