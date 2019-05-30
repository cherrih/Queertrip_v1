import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.canvasRef = React.createRef();
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
              <canvas width="1080" height="1080" ref={this.canvasRef} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Poster;
