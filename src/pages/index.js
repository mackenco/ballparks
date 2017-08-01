import React from 'react'

//TODO real data, how do you do media queries?, format on precommit
const Ballpark = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: '3rem',
    }}
  >
    <div>
      <h3 style={{ marginBottom: '.75rem' }}>
        Angel Stadium
        <br />
        <span
          style={{
            fontWeight: 'normal',
            fontSize: '1.1rem',
          }}
        >
          Anaheim, California
        </span>
      </h3>

      <div>
        <p style={{ fontSize: '.8rem' }}>
          <b>Visit-</b>2008
        </p>
      </div>
    </div>

    <div
      style={{
        height: '400px',
        width: '600px',
        border: '1px solid black',
      }}
    >
      <img />
    </div>
  </div>

class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const parks = []
    for (let i = 0; i < 10; i++) {
      parks.push(<Ballpark />)
    }

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
