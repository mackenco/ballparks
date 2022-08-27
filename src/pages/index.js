import React from 'react';
import Ballpark from '../components/Ballpark.js';
import data from '../../data/data.js';

class IndexPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        {data
          .filter(bp => bp.visited || bp.retired)
          .map(bp => (
            <Ballpark
              key={bp.name}
              name={bp.name}
              image={bp.image}
              location={bp.location}
              retired={!!bp.retired}
              year={bp.visited || bp.retired}
            />
          ))}
      </main>
    );
  }
}

export default IndexPage;
