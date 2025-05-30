import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bgImg, setBgImg] = useState('');
  const [imgAuthor, setImgAuthor] = useState('');
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios.get("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
      .then(res => {
        setBgImg(res.data.urls.full)
        setImgAuthor(res.data.user.name)
      })
      .catch(err => {
        console.log(err)
      })

      axios.get("https://api.coingecko.com/api/v3/coins/dogecoin")
      .then(res => {
        setCoinData(res.data)
        console.log(res.data)
      })
  },[])



  return (
    <>
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="background container-fluid position-relative min-vh-100 d-flex flex-column justify-content-between py-3"
    >

      <div className="row justify-content-between px-3">
        <div className='content-color col-auto'>
          <div className='d-flex justify-content-center align-items-center '>
            <div style={{backgroundImage: `url(https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png?1696501409)`,
                                              backgroundSize: 'contain',
                                              backgroundPosition: 'center',
                                              backgroundRepeat: 'no-repeat',
                                              height: "3rem",
                                              width: "3rem",
            }}></div>
            <div className='m-2 h4'>{coinData.name}</div>
          </div>

          <div className='h6 mx-2'>Price: ${coinData.market_data.current_price.usd}</div>
          <div className='h6 mx-2'>24Hour low: ${coinData.market_data.low_24h.usd}</div>
          <div className='h6 mx-2'>24Hour high: ${coinData.market_data.high_24h.usd}</div>
        </div>

        <div className="col-auto content-color">Weather here</div>
      </div>

      <div className="text-center d-flex justify-content-center">
        <div className='content-color time'>
        Time here
        </div>
      </div>

      <div className="row px-3">
        <div className="col-auto content-color">
          <p className='h-100 d-flex align-items-center'><i className="fa-solid fa-camera"></i> {imgAuthor}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
