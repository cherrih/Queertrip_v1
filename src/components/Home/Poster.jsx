import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['rgb(15, 61, 163)', 'rgb(214, 42, 25)', 'rgb(250, 112, 21)', 'rgb(250, 190, 72)', 'rgb(47, 200, 120)'],
    };
    this.rainbowRef = React.createRef();
    this.textRef = React.createRef();
    this.stickersRef = React.createRef();
    this.logoRef = React.createRef();
    this.placeText = this.placeText.bind(this);
    this.onColorClick = this.onColorClick.bind(this);
  }

  componentDidMount() {
    this.placeText();
  }

  onColorClick(e) {
    const { colors } = this.state;
    const color = e.target.id;
    let newColors = [];
    if (colors.length >= 5) {
      newColors = [...colors.slice(1), color];
    } else {
      newColors = colors.concat(color);
    }
    this.setState({
      colors: newColors,
    });
  }

  placeText() {
    const canvas = this.textRef.current;
    const { width, height } = canvas;
    const textCtx = canvas.getContext('2d');

    const textColor = 'rgb(210, 185, 144)';
    const textFont = '25em Moderat-Light';

    textCtx.font = textFont;
    textCtx.fillStyle = textColor;
    textCtx.fillText('H', width / 20, height / 2.9);

    this.placeRotatedText('a', 90, 7, -3);
    this.placeRotatedText('p', 25, 1.7, -12);
    this.placeRotatedText('p', 25, 1.53, 7);
    this.placeRotatedText('y', -20, 1.65, 1.4);
    this.placeRotatedText('p', 2, 12, 1.68);
    this.placeRotatedText('r', 35, 1.75, 2.8);
    this.placeRotatedText('i', 2, 5, 1.115);
    this.placeRotatedText('d', -30, -8, 0.98);
    this.placeRotatedText('e', -30, 9, 0.94);
  }

  // destination over for painting

  placeRotatedText(str, deg, w, h) {
    const canvas = this.textRef.current;
    const { width, height } = canvas;
    const textCtx = canvas.getContext('2d');

    textCtx.save();
    textCtx.rotate(deg * Math.PI / 180);
    textCtx.fillText(str, width / w, height / h);
    textCtx.restore();
  }

  render() {
    return (
      <>
        <div className="poster-controls-container">
          <div className="poster-controls-colors">
            <div>Colors</div>
            <div className="poster-color-wheels">
              <div id="#000" style={{ backgroundColor: '#000' }} onClick={this.onColorClick} />
              <div id="rgb(132, 54, 7)" style={{ backgroundColor: 'rgb(132, 54, 7)' }} onClick={this.onColorClick} />
              <div id="rgb(214, 42, 25)" style={{ backgroundColor: 'rgb(214, 42, 25)' }} onClick={this.onColorClick} />
              <div id="rgb(250, 112, 21)" style={{ backgroundColor: 'rgb(250, 112, 21)' }} onClick={this.onColorClick} />
              <div id="rgb(250, 190, 72)" style={{ backgroundColor: 'rgb(250, 190, 72)' }} onClick={this.onColorClick} />
              <div id="rgb(47, 200, 120)" style={{ backgroundColor: 'rgb(47, 200, 120)' }} onClick={this.onColorClick} />
              <div id="rgb(15, 61, 163)" style={{ backgroundColor: 'rgb(15, 61, 163)' }} onClick={this.onColorClick} />
              <div id="rgb(62, 61, 163)" style={{ backgroundColor: 'rgb(62, 61, 163)' }} onClick={this.onColorClick} />
              <div id="rgb(7, 177, 224)" style={{ backgroundColor: 'rgb(7, 177, 224)' }} onClick={this.onColorClick} />
              <div id="rgb(210, 67, 175)" style={{ backgroundColor: 'rgb(210, 67, 175)' }} onClick={this.onColorClick} />
              <div id="#fff" style={{ backgroundColor: '#fff' }} onClick={this.onColorClick} />
            </div>
          </div>
          <div>
            <img src="../../../public/images/logo.png" alt="Queertrip logo" />
          </div>
          <div className="poster-controls-stickers">
            <div>Stickers</div>
            <div />
          </div>
        </div>
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
        <div className="poster-controls-share-container">
          <button type="button" className="rounded-button">Reset</button>
          <button type="button" className="rounded-button">Share your pride</button>
        </div>
      </>
    );
  }
}

export default Poster;
