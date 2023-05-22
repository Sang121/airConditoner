import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import DH from './DH.jpg';
import wind from './wind.png';
import soundFile from './windsound.mp3';

function App() {
  const [isWindVisible, setIsWindVisible] = useState(false);
  const [temp, setTemp] = useState(25);
  const [isSoundLoaded, setIsSoundLoaded] = useState(false);
  const soundRef = useRef(null);
  const [volume, setVolume] = useState(0.5); // Mức âm lượng ban đầu

  useEffect(() => {
    soundRef.current = new Audio(soundFile);
    soundRef.current.addEventListener('canplaythrough', () => {
      setIsSoundLoaded(true);
    });
  }, []);

  const handleTurnOn = () => {
    setIsWindVisible(!isWindVisible);

    if (isWindVisible) {
      soundRef.current.pause();
    } else {
      if (isSoundLoaded) {
        soundRef.current.currentTime = 0;
        soundRef.current.loop = true;
        soundRef.current.play();
      }
    }
  };

  const increase = () => {
    setTemp(temp + 1);
    if (volume < 1.0) {
      setVolume(volume -0.02); // giảm mức âm lượng khi ấn "+"
    }
  };

  const decrease = () => {
    setTemp(temp - 1);
    if (volume > 0.0&&volume <0.8) {
      setVolume(volume  +0.02); // tăng mức âm lượng khi ấn "-"
    }
    else{
      setVolume(1);
    }
    
  };

  useEffect(() => {
    soundRef.current.volume = volume; // Cập nhật mức âm lượng của âm thanh khi mức âm lượng thay đổi
    console.log(volume)
    console.log(temp)
  }, [volume]);

  return (
    <div className="App ">
      <body>
        <div className="container  ">
          <div className="img">
            <img className="dh" src={DH} />
            <p className="temp">{temp} </p>
            <img
              className={`wind ${isWindVisible ? 'fade-in' : 'fade-out'}`}
              src={wind}
            />
          </div>
          <div className="remote">
            <button onClick={handleTurnOn} ref={soundRef}>
              Bật/Tắt
            </button>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
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
