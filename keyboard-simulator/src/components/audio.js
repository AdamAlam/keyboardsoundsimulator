import React, { Component } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
class audioSources extends Component {
  render() {
    return (
      <div>
        {letters.map((letter) => (
          <audio controls id={letters.indexOf(letter)}>
            <source
              src={process.env.PUBLIC_URL + `/NKCreamSounds/${letter}.mp3`}
              type="audio/mpeg"
            ></source>
            Your browser does not support the audio element.
          </audio>
        ))}
      </div>
    );
  }
}

export default audioSources;
