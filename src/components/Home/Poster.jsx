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
    const textFont = '20em Moderat-Light';
    const textCtx = canvas.getContext("2d");
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('H', width / 20, height / 4);
    textCtx.save();
    textCtx.rotate(90 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('a', width / 10, -height / 3.5);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(25 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('p', width / 2, -height / 12);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(25 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('p', width / 1.8, height / 8);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(-20 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('y', width / 1.9, height / 1.62);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(2 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('p', width / 12, height / 2.25);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(35 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('r', width / 2.2, height / 3.8);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(2 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('i', width / 6, height / 1.4);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(-30 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('d', -width / 10, height / 1.25);
    textCtx.restore();
    textCtx.save();
    textCtx.rotate(-30 * Math.PI / 180);
    textCtx.font = textFont;
    textCtx.fillStyle = 'rgb(210, 185, 144)';
    textCtx.fillText('e', width / 10, height / 1.2);
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
