import React from 'react'
import data from '../../data/data.js'
console.log(data)

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
    const stats = data.stats

    for (let i = 0; i < stats.visited.length; i++) {
      icons.push(<Icon key={icons.length} color="#000088" />)
    }

    for (let i = 0; i < stats.remaining.length; ++i) {
      icons.push(<Icon key={icons.length} color="#d2d2d2" />)
    }

    for (let i = 0; i < stats.retired.length; i++) {
      icons.push(<Icon key={icons.length} color="#cc0000" />)
    }

    return (
      <div>
        <h2 style={{ marginBottom: '3rem' }}>Stats</h2>

        <h1 style={{ fontSize: '6rem' }}>
          {stats.visited.length}
        </h1>

        <h2>Ballparks Visited</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          {icons}
        </div>
        <br />
        <p>
          {stats.visited.join(', ')}
        </p>
        <h4>
          {stats.remaining.length} Remaining
        </h4>
        <p>
          {stats.remaining.join(', ')}
        </p>
        <h4>
          {stats.retired.length} Retired Parks Visited
        </h4>
        <p>
          {stats.retired.join(', ')}
        </p>
      </div>
    )
  }
}

export default StatsPage
