import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: '#4c8cee',
  textDecoration: 'none',
}

const AboutPage = () =>
  <div>
    <h2>About</h2>
    <p>
      I&#39;ve been going to Major League Baseball games since I was young, and
      fascinated with the idea of seeing a game at every park not too long after
      that. My quest started in earnest during college in California, and has
      continued as I&#39;ve lived in Atlanta and New York City. I&#39;m now a
      software developer at MLB Advanced Media, so my work has only fueled the
      adventure.
    </p>

    <p>
      Unlike football or baseball, there are no set dimensions for a Major
      League Baseball stadium. To me, that means each feels distinct, with their
      own unique features--think Tal&#39;s Hill in Houston (RIP) or McCovey Cove
      in San Francisco. Add in regional foods and beers, mascot races, plus any
      other number of city-specific aspects of a ballpark, and each game feels
      like a shortcut to getting to know a city. With only 30 teams, visiting
      each ballpark feels like an ambitious yet attainable goal. My progress is
      available on the{' '}
      <Link style={linkStyle} to="/stats/">
        stats page
      </Link>. /* Each of my visits can be seen on the{' '}
      <Link style={linkStyle} to="/visits/">
        visits page
      </Link>.*/
    </p>

    <h3>Site</h3>

    <p>
      This project was inspired by a talk I saw{' '}
      <a href="http://jlord.us" target="_blank" style={linkStyle}>
        Jessica Lord
      </a>{' '}
      give at BrooklynJS in July 2017. Specifically, she spoke about using
      spreadsheets as a database for websites. The idea really clicked with me -
      spreadsheets have low setup out of the box, are easy to change, and are
      intuitive for non-developers to use. She demoed her site{' '}
      <a
        href="http://jlord.us/vermeer/index.html"
        target="_blank"
        style={linkStyle}
      >
        Vermeer Goals
      </a>; her Vermeer quest reminded me of my ballpark hunt, and the lightbulb
      went off to try and build my own. Consider this site a spiritual fork of
      hers.{' '}
    </p>
    <p>
      Apart from a spreadsheet backend, this project also explores two other
      technologies I had wanted to play around with: static site generation
      (using Gatsby), and React. This site is open source, and viewable{' '}
      <a href="" style={linkStyle}>
        here
      </a>.
    </p>

    <h3>Data</h3>
    <p>
      This site is powered by a &#39;backend&#39; that lives in Google Sheets,
      and is converted to JSON via Tabletop. The data lives{' '}
      <a href="" style={linkStyle}>
        here
      </a>.
    </p>

    <h3>Me</h3>
    <p>I&#39;m Colin MacKenzie, a software developer for MLB Advanced Media.</p>
    <p>
      <b>Personal site—</b>
      <a href="http://colinwmackenzie.com" target="_blank" style={linkStyle}>
        colinwmackenzie.com
      </a>
    </p>
    <p>
      <b>Twitter—</b>
      <a href="https://twitter.com/mackenco" target="_blank" style={linkStyle}>
        @mackenco
      </a>
    </p>
  </div>

export default AboutPage
