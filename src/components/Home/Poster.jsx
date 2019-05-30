import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.rainbowRef = React.createRef();
    this.textRef = React.createRef();
    this.stickersRef = React.createRef();
    this.logoRef = React.createRef();
    this.placeText = this.placeText.bind(this);
  }

  componentDidMount() {
    this.placeText();
  }

  placeText() {
    const canvas = this.textRef.current;
    const { width, height } = canvas;
    const textCtx = canvas.getContext("2d");
    textCtx.font = '20em Moderat-Light';
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('H', width / 20, height / 4);
    textCtx.save();
    textCtx.rotate(90 * Math.PI / 180);
    textCtx.font = '20em Moderat-Light';
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('a', width / 10, -height / 3);
    textCtx.restore();
  }
  // destination over for painting

  render() {
    return (
      <>
        <div className="poster-wrapper">
          <div className="poster-container">
            <div className="poster-canvas-container">
              <canvas id="poster-canvas-rainbow" width="1080" height="1080" ref={this.rainbowRef} />
              <canvas id="poster-canvas-text" width="1080" height="1080" ref={this.textRef} />
              <canvas id="poster-canvas-stickers" width="1080" height="1080" ref={this.stickersRef} />
              <canvas id="poster-canvas-logo" width="1080" height="1080" ref={this.logoRef} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Poster;
