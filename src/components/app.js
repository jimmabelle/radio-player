import React from "react"
import Station from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        channels: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.channels.map(item => (
          <Station
            key={item.id}
            channelsImg={item.image}
            channelsTemplate={item.imagetemplate}
            channelsColor={item.color}
            channelsTagline={item.tagline}
            channelsUrl={item.siteurl}
            channelsLiveAudio={item.liveaudio}
            channelsLiveAudioId={item.liveaudio.id}
            channelsLiveAudioUrl={item.liveaudio.url}
            channelsLiveAudioStatkey={item.liveaudio.statkey}
            channelsScheduleUrl={item.scheduleurl}
            channelType={item.type}
            channelXml={item.xmltvid}
            channelsId={item.id}
            channelsName={item.name} />
        ))}
      </div>
    )
  }
}

export default App
