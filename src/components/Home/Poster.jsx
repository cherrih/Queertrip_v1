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

  }

  componentDidMount() {

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
