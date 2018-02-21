const fs = require('fs');
const Tabletop = require('tabletop');

Tabletop.init({
  key: '1NlTwXBpw8vh6g--FlK_NjqQbtH43I6DNP8v52ptX3jo',
  callback: saveData,
  simpleSheet: true
});

function saveData(data, tabletop) {
  const stats = { visited: [], remaining: [], retired: [] };
  data.forEach((bp) => {
    if (bp.visited) { stats.visited.push(bp); }
    if (bp.retired) { stats.retired.push(bp); }
    if (!bp.visited && !bp.retired) { stats.remaining.push(bp); }
  });

  const out = Object.assign({ ballparks: data }, { stats });
  const formatted = JSON.stringify(out, null, ' ')
    .replace(new RegExp('""', 'ig'), null);
  fs.writeFileSync('data/data.js', `export default ${formatted}`);
};
