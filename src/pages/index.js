import React from 'react'
import Ballpark from '../components/Ballpark.js'
import data from '../../data/data.js'

class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const parks = data.ballparks.reduce((out, bp) => {
      if (bp.visited || bp.retired) {
        const kebabed = bp.name
          .toLowerCase()
          .split(' ')
          .join('-')
        out.push(
          <Ballpark
            key={kebabed}
            name={bp.name}
            image={bp.image}
            location={bp.location}
            year={bp.visited || bp.retired}
          />
        )
      }
      return out
    }, [])

    return <main>{parks}</main>
  }
}

export default IndexPage
