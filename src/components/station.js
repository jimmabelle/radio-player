import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div className="wrapper" style={{ backgroundColor: `#${this.props.channelsColor}` }}>
        <div className="container-left">
          <img src={this.props.channelsImg} alt="channels" />
        </div>
        <div className="container-right">
          <h1>{this.props.channelsName}</h1>
          <audio controls>
            <source src={this.props.channelsLiveAudioUrl} type="audio/mp3" />
            <track kind="captions" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
