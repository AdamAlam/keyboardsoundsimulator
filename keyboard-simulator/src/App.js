import React from 'react';
// import audioSources from "./components/audio";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
function App() {
  document.addEventListener('keydown', function (e) {
    if (
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      e.keyCode === 8 ||
      e.keyCode === 32 ||
      e.keyCode === 13
    ) {
      let sound = document.getElementById(e.keyCode);
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    }
  });
  return (
    <div className="main-app">
      {/* <audioSources /> */}
      {letters.map((letter) => (
        <audio id={letters.indexOf(letter) + 65}>
          <source
            src={process.env.PUBLIC_URL + `/NKCreamSounds/${letter}.mp3`}
            type="audio/mpeg"
          ></source>
          Your browser does not support the audio element.
        </audio>
      ))}
      <audio id={32}>
        <source
          src={process.env.PUBLIC_URL + `/NKCreamSounds/SPACE.mp3`}
          type="audio/mpeg"
        ></source>
        Your browser does not support the audio element.
      </audio>
      <audio id={8}>
        <source
          src={process.env.PUBLIC_URL + `/NKCreamSounds/BACKSPACE.mp3`}
          type="audio/mpeg"
        ></source>
        Your browser does not support the audio element.
      </audio>
      <audio id={13}>
        <source
          src={process.env.PUBLIC_URL + `/NKCreamSounds/ENTER.mp3`}
          type="audio/mpeg"
        ></source>
        Your browser does not support the audio element.
      </audio>
      <p>
        <h1 className="start">Start Typing To Hear Your New Keyboard</h1>
      </p>
      <p>
        <h4 className="noise">Noise-Canceling Headphones are Recommended</h4>
      </p>
      <p>
        <input type="text" placeholder="Start Typing Here"></input>
      </p>
      <p className="footer">
        Inspired by{' '}
        <a href="https://www.youtube.com/watch?v=P_9vXJZVT54" target="_blank">
          this video
        </a>{' '}
        by Glarses
      </p>
    </div>
  );
}

export default App;
