import React, { Component } from 'react'

var moment = require('moment-timezone')

class Clocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timezones: [{ zone: 'America/New_York'}, {zone: 'Europe/London'}, {zone: 'Asia/Singapore'}, {zone: 'Asia/Tokyo'}, {zone: 'Australia/Sydney'}]
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  tick() {
    fetch('/reactclock/times')
      .then(res => res.json())
      .then(timezones => this.setState({ timezones }))
  }

  render() {
    return (
      <div style={{display:'inline-flex', justifyContent: 'space-between'}}>
        {this.state.timezones.map(({ zone }, index) => (
          <div className="time" key={index}>
            <div className="value" >
              {zone.split('/')[1].replace('_', ' ')}
              <br />
              {moment()
                .tz(zone)
                .format('hh:mm:ssA')}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Clocks;