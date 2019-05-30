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
    // this.placeRotatedText = this.placeRotatedText.bind(this);
  }

  componentDidMount() {
    this.placeText();
  }

  placeRotatedText(str, deg, w, h) {
    const canvas = this.textRef.current;
    const { width, height } = canvas;
    const textCtx = canvas.getContext('2d');

    textCtx.save();
    textCtx.rotate(deg * Math.PI / 180);
    textCtx.fillText(str, width / w, height / h);
    textCtx.restore();
  }

  placeText() {
    const canvas = this.textRef.current;
    const { width, height } = canvas;
    const textCtx = canvas.getContext('2d');

    const textColor = 'rgb(210, 185, 144)';
    const textFont = '20em Moderat-Light';

    textCtx.font = textFont;
    textCtx.fillStyle = textColor;
    textCtx.fillText('H', width / 20, height / 4);

    this.placeRotatedText('a', 90, 10, -3.5);
    this.placeRotatedText('p', 25, 2, -12);
    this.placeRotatedText('p', 25, 1.8, 8);
    this.placeRotatedText('y', -20, 1.9, 1.62);
    this.placeRotatedText('p', 2, 12, 2.25);
    this.placeRotatedText('r', 35, 2.2, 3.8);
    this.placeRotatedText('i', 2, 6, 1.4);
    this.placeRotatedText('d', -30, -10, 1.25);
    this.placeRotatedText('e', -30, 10, 1.2);
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
