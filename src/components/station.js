import React from "react"
import "./index.css"

class Station extends React.Component {
  render() {
    return (
      <div className="wrapper" style={{ backgroundColor: `#${this.props.channelsColor}` }}>
        <div className="inner-wrapper">
          <div className="left">
            <img src={this.props.channelsImg} alt="channels" />
          </div>
          <div className="right">
            <h2>{this.props.channelsName}</h2>
            <audio controls>
              <source src={this.props.channelsLiveAudioUrl} type="audio/mp3" />
              <track kind="captions" />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}

export default Station
