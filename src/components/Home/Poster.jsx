import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['rgb(15, 61, 163)', 'rgb(214, 42, 25)', 'rgb(250, 112, 21)', 'rgb(250, 190, 72)', 'rgb(47, 200, 120)'],
      lastX: 0,
      lastY: 0,
      isDragging: false,
    };
    this.rainbowRef = React.createRef();
    this.textRef = React.createRef();
    this.stickersRef = React.createRef();
    this.logoRef = React.createRef();

    this.placeText = this.placeText.bind(this);
    this.onColorClick = this.onColorClick.bind(this);
    this.resetCanvas = this.resetCanvas.bind(this);
    this.toggleDragVisibility = this.toggleDragVisibility.bind(this);
    this.onCanvasRainbowDragOver = this.onCanvasRainbowDragOver.bind(this);
    this.onCanvasMouseEnter = this.onCanvasMouseEnter.bind(this);
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

  onCanvasMouseEnter(e) {
    const canvas = this.rainbowRef.current;
    const mousePosition = this.updateCursorPosition(canvas, e);
    this.setState({
      lastX: mousePosition[0],
      lastY: mousePosition[1],
    });
  }

  onCanvasRainbowDragOver(e) {
    const { lastX, lastY } = this.state;
    const canvas = this.rainbowRef.current;
    const context = canvas.getContext('2d');
    const mousePosition = this.updateCursorPosition(canvas, e);
    context.beginPath();
    const gradient = this.getGradient(context);
    context.strokeStyle = gradient;
    context.lineWidth = 200;
    context.lineJoin = 'bevel';
    context.lineCap = 'round';
    context.moveTo(lastX, lastY);
    context.lineTo(mousePosition[0], mousePosition[1]);
    context.stroke();
    context.closePath();
    this.setState({
      lastX: mousePosition[0],
      lastY: mousePosition[1],
    });
  }

  getGradient(context) {
    const { colors, lastX, lastY } = this.state;
    const gradient = context.createLinearGradient(
      lastX - 100, lastY - 100, lastX + 100, lastY + 100,
    );
    let j = 0;
    let coord = 0;
    for (let i = 0; i < 5; i += 1) {
      if (j > colors.length - 1) j = 0;
      gradient.addColorStop(coord, colors[j]);
      coord += 0.2;
      gradient.addColorStop(coord, colors[j]);
      j += 1;
    }
    return gradient;
  }

  toggleDragVisibility() {
    const { isDragging } = this.state;
    this.setState({
      isDragging: !isDragging,
    });
  }

  updateCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    return [x, y];
  }

  resetCanvas() {
    const stickersCanvas = this.stickersRef.current;
    const stickersCtx = stickersCanvas.getContext('2d');
    stickersCtx.clearRect(0, 0, stickersCanvas.width, stickersCanvas.height);

    const rainbowCanvas = this.rainbowRef.current;
    const rainbowCtx = rainbowCanvas.getContext('2d');
    rainbowCtx.clearRect(0, 0, rainbowCanvas.width, rainbowCanvas.height);
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
    const { isDragging } = this.state;
    const logoVisibility = isDragging ? 'hidden' : 'visible';
    const url = 'https://queertriptheworld.s3.amazonaws.com/';
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
          <div className="poster-logo-container">
            <div className="poster-drag" style={{ visibility: logoVisibility }}>Drag me</div>
            <img className="poster-path" src={`${url}path.png`} alt="" style={{ visibility: logoVisibility }} />
            <img className="poster-logo" src={`${url}logo.png`} alt="" draggable="true" onDragStart={this.toggleDragVisibility} onDragEnd={this.toggleDragVisibility} />
          </div>
          <div className="poster-controls-stickers">
            <div>Stickers</div>
          </div>
        </div>
        <div className="poster-wrapper">
          <div className="poster-container">
            <div className="poster-canvas-container">
              <canvas id="poster-canvas-rainbow" width="1080" height="1080" ref={this.rainbowRef} onDragOver={this.onCanvasRainbowDragOver} onDragEnter={this.onCanvasMouseEnter} />
              <canvas id="poster-canvas-text" width="1080" height="1080" ref={this.textRef} />
              <canvas id="poster-canvas-stickers" width="1080" height="1080" ref={this.stickersRef} />
              <canvas id="poster-canvas-logo" width="1080" height="1080" ref={this.logoRef} />
            </div>
          </div>
        </div>
        <div className="poster-controls-share-container">
          <button type="button" className="rounded-button" onClick={this.resetCanvas}>Reset</button>
          <button type="button" className="rounded-button">Share your pride</button>
        </div>
      </>
    );
  }
}

export default Poster;
