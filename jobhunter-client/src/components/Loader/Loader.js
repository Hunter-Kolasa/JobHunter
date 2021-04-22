import React, { Component } from "react";
import './Loader.css';

export class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="lds-hourglass"></div>
      </div>
    );
  }
}

export default Loader;
