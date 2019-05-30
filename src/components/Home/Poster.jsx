import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <>
        <canvas width="500" height="500" ref={this.canvasRef} />
      </>
    );
  }
}

export default Poster;
