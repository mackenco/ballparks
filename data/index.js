const fs = require('fs');
const csv = require('csv-parser');
const results = [];

fs.createReadStream('data/ballparks.csv')
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    const formatted = JSON.stringify(results, null, ' ')
      .replace(new RegExp('""', 'ig'), null);
    fs.writeFileSync('data/data.js', `export default ${formatted}`);
  })
