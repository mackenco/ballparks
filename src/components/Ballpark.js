import React from 'react';
import styled from 'styled-components';

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
`;

const Name = styled.h3`
  margin-bottom: 0.75rem;
`;

const Location = styled.span`
  font-weight: normal;
  font-size: 1.1rem;
`;

const Visit = styled.p`
  font-size: 0.8rem;
`;

const ImageContainer = styled.div`
  width: 600px;
  margin-left: 10px;
  @media (max-width: 960px) {
    width: 99%;
    margin: 0;
  }
`;

const Image = styled.img`
  min-width: 600px;
  @media (max-width: 960px) {
    min-width: 100%;
  }
`;

class Ballpark extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name, location, year, image, retired } = this.props;
    return (
      <FlexContainer>
        <div>
          <Name>
            {name} {retired && '(retired)'}
            <br />
            <Location>{location}</Location>
          </Name>

          <Visit>
            <b>Visit-</b>
            {year}
          </Visit>
        </div>

        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
      </FlexContainer>
    );
  }
}

export default Ballpark;
