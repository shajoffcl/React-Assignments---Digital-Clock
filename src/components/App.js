import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    var timeString = new Date().toTimeString().split(" ")[0];
    var hourEnd = timeString.indexOf(":");
    var H = +timeString.substr(0, hourEnd);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(hourEnd, 6) + " " + ampm;
    this.state = {
      currentTime: timeString,
      intervalId: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      var timeString = new Date().toTimeString().split(" ")[0];
      var hourEnd = timeString.indexOf(":");
      var H = +timeString.substr(0, hourEnd);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? "AM" : "PM";
      timeString = h + timeString.substr(hourEnd, 6) + " " + ampm;
      this.setState({ currentTime: timeString });
    }, 1000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{this.state.currentTime}</h3>
        </div>
      </>
    );
  }
}

export default App;
