import React from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3rem;
  margin: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding-bottom: 1rem;
  }
`

const Name = styled.h3`margin-bottom: .75rem;`

const Location = styled.span`
  font-weight: normal;
  font-size: 1.1rem;
`

const Visit = styled.p`font-size: .8rem;`

const ImageContainer = styled.div`
  width: 600px;
  margin-left: 10px;
  @media (max-width: 960px) {
    width: 99%;
    margin: 0;
  }
`

const Image = styled.img`
  min-width: 600px;
  @media (max-width: 960px) {
    min-width: 100%;
  }
`

class Ballpark extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <FlexContainer>
        <div>
          <Name>
            {this.props.name}
            <br />
            <Location>
              {this.props.location}
            </Location>
          </Name>

          <Visit>
            <b>Visit-</b>
            {this.props.year}
          </Visit>
        </div>

        <ImageContainer>
          <Image src={this.props.image} alt={this.props.name} />
        </ImageContainer>
      </FlexContainer>
    )
  }
}

export default Ballpark
