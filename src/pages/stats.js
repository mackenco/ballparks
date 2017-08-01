import React from 'react'

class Icon extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div
        style={{
          height: '40px',
          width: '35px',
          margin: '2px',
          backgroundColor: this.props.color,
        }}
      />
    )
  }
}

class StatsPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const icons = []
    for (let i = 0; i < 16; i++) {
      icons.push(<Icon key={i} color="#000088" />)
    }

    for (let i = 0; i < 14; i++) {
      icons.push(<Icon key={icons.length + i} color="#d2d2d2" />)
    }

    for (let i = 0; i < 3; i++) {
      icons.push(<Icon key={icons.length + i + 1} color="#cc0000" />)
    }

    return (
      <div>
        <h2 style={{ marginBottom: '3rem' }}>Stats</h2>

        <h1 style={{ fontSize: '6rem' }}>14</h1>

        <h2>Ballparks Visited</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          {icons}
        </div>
        <br />
        <p>Angels Stadium</p>
        <h4>16 Remaining</h4>
        <p>PNC Park</p>
        <h4>3 Retired Parks Visited</h4>
        <p>The Astrodome</p>
      </div>
    )
  }
}

export default StatsPage
