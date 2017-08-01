import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const linkStyle = {
  color: '#3498db',
  textDecoration: 'none',
  margin: '0 .25rem',
}

const Header = () =>
  <div>
    <div
      style={{
        margin: '0 auto 2rem auto',
        maxWidth: 960,
        padding: '1rem 0',
        borderBottom: '2px solid #3498db',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkStyle}>
          Ballpark Visits
        </Link>
      </h1>

      <nav
        style={{
          lineHeight: '3rem',
          height: '1rem',
        }}
      >
        <Link style={linkStyle} to="/about/">
          About
        </Link>
        <Link style={linkStyle} to="/stats/">
          Stats
        </Link>
      </nav>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
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

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
