import React from 'react'
import data from '../../data/data.js'

//TODO how do you do media queries?
class Ballpark extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: '3rem',
          margin: '0 20px',
        }}
      >
        <div>
          <h3 style={{ marginBottom: '.75rem' }}>
            {this.props.name}
            <br />
            <span
              style={{
                fontWeight: 'normal',
                fontSize: '1.1rem',
              }}
            >
              {this.props.location}
            </span>
          </h3>

          <div>
            <p style={{ fontSize: '.8rem' }}>
              <b>Visit-</b>
              {this.props.year}
            </p>
          </div>
        </div>

        <div
          style={{
            width: '600px',
            marginLeft: '10px',
          }}
        >
          <img
            style={{ minWidth: '600px' }}
            src={this.props.image}
            alt={this.props.name}
          />
        </div>
      </div>
    )
  }
}

class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const parks = []
    data.ballparks.forEach(bp => {
      if (!bp.visited && !bp.retired) {
        return
      }

      const kebabed = bp.name.toLowerCase().split(' ').join('-')
      parks.push(
        <Ballpark
          id={kebabed}
          name={bp.name}
          image={bp.image}
          location={bp.location}
          year={bp.visited || bp.retired}
        />
      )
    })

    return (
      <div>
        <main>
          <div>
            {parks}
          </div>
        </main>
      </div>
    )
  }
}

export default IndexPage
