import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';

const linkStyle = {
  color: '#3498db',
  textDecoration: 'none',
  margin: '0 .25rem',
};

const HeaderContainer = styled.div`
  margin: 0 auto 2rem auto;
  width: 90%;
  max-width: 960px;
  padding: 1rem 0;
  border-bottom: 2px solid #3498db;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 0 10px 2rem 10px;
  }
`;

const NavLinks = styled.nav`
  line-height: 3rem;
  height: 1rem;
`;

const Header = () => (
  <HeaderContainer>
    <h1 style={{ margin: 0 }}>
      <Link to="/" style={linkStyle}>
        Ballpark Visits
      </Link>
    </h1>

    <NavLinks>
      <Link style={linkStyle} to="/about/">
        {' '}
        About{' '}
      </Link>
      <Link style={linkStyle} to="/stats/">
        {' '}
        Stats{' '}
      </Link>
    </NavLinks>
  </HeaderContainer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ballpark Visits"
      meta={[{ name: 'description', content: 'Visiting every MLB ballpark' }]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 0px 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
