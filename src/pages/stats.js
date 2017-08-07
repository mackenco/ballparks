import React from 'react'
import styled from 'styled-components'
import data from '../../data/data.js'

const colors = {
  remaining: '#666666',
  retired: '#9c0000',
}

const Container = styled.div`padding: 0 10px;`

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  @media (max-width: 960px) {
    width: 100%;
  }
`

const FlexSvg = styled.svg`
  flex-basis: calc(100% / 15);
  @media (max-width: 960px) {
    flex-basis: calc(100% / 10);
  }
`

const Heading = styled.h4`
  color: ${props => props.color};
  margin-bottom: .75rem;
`

class Icon extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <FlexSvg viewBox="0 0 1100 1100" width="100%" height="100%">
        <path
          style={{ fill: this.props.color }}
          d="M219.5 580c.3-.3.4-.7.6-1l237-237c23.2-23.2 61-23.2 84.2 0l237 237c1 1 1.3 2.4 2.3 3.4l38.1 38.1 179.9-179.9c-53.8-148-171.3-266.2-320-319.3-55.8-20.6-116.2-31.9-179.3-31.9-62.4 0-122.8 10.6-178.6 30.5C171.3 174.5 53.7 291.3 0 440.7l179.2 179.6 40.3-40.3z"
        />
        <path
          style={{ fill: this.props.color }}
          d="M743.1 693.7l-29.6-29.6c-.8-.9-1-2-1.9-2.8l-180-180.1c-17.7-17.7-46.4-17.7-64.1 0l-66.3 66.3-.3-.3-145.4 145.7 31.7 31.7c.2.2.2.4.4.6l180.1 180.1c17.6 17.6 46.4 17.6 64.1 0l180-180.1c.1-.1.1-.2.2-.3l31.1-31.2z"
        />
      </FlexSvg>
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
      <Container>
        <h2 style={{ marginBottom: '3rem' }}>Stats</h2>

        <h1 style={{ fontSize: '6rem' }}>
          {stats.visited.length}
        </h1>

        <h2>Ballparks Visited</h2>
        <FlexDiv>
          {' '}{icons}{' '}
        </FlexDiv>
        <br />
        <p>
          {stats.visited.join(', ')}
        </p>
        <Heading color={colors.remaining}>
          {stats.remaining.length} Remaining
        </Heading>
        <p style={{ color: '#666666' }}>
          {stats.remaining.join(', ')}
        </p>
        <Heading color={colors.retired}>
          {stats.retired.length} Retired Parks Visited
        </Heading>
        <p style={{ color: '#9c0000' }}>
          {stats.retired.join(', ')}
        </p>
      </Container>
    )
  }
}

export default StatsPage
