import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DH from './DH.jpg';
import wind from './wind.png';
import winsound from './windsound.mp3'

function App() {


  const [isWindVisible, setIsWindVisible] = useState(false);
  const [temp, setTemp] = useState(25);
  const soundRef = useRef(null);
  useEffect(() => {
    soundRef.current = new Audio(winsound);
  }, []);
  const handleTurnOn = () => {
    setIsWindVisible(!isWindVisible);

  if (isWindVisible) {
    soundRef.current.pause(); // Dừng âm thanh nếu đã được phát
  } else {
    soundRef.current.play(); // Phát âm thanh
  }
  }
 
  const increase =() => {
    setTemp(temp+1)
  }
  const des = () => {
    setTemp(temp-1);
  }
  console.log(temp);

  return (
    <div className="App ">
      
      <body>
        <div className="container  ">
          <div className="img">
            <img className="dh" src={DH} />
            <p className='temp'>{temp} </p>
            <img
              className={`wind ${isWindVisible ? 'fade-in' : 'fade-out'}`}
              src={wind}
            />
          </div>
          <div className="remote">
            <button onClick={handleTurnOn} ref={soundRef} >Bật/Tắt</button>
            <button onClick={ increase }> + </button>
            <button onClick={des} > - </button>
          </div>
        </div>

      </body>
      <footer className="footer">
        <p className="src"> Điều hoà created by <a href="https:www.fb.com/libra245"> Sáng,giúp bạn mát trong lòng:))</a></p> <br/>
  
      </footer>
    </div>
  );
}

export default App;
