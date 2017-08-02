const fs = require('fs');
const Tabletop = require('tabletop');

Tabletop.init({
  key: '1NlTwXBpw8vh6g--FlK_NjqQbtH43I6DNP8v52ptX3jo',
  callback: saveData,
  simpleSheet: true
});

function saveData(data, tabletop) {
  const stats = { visited: 0, remaining: 0, retired: 0 };
  data.forEach((bp) => {
    if (bp.visited) { stats.visited += 1; }
    if (bp.retired) { stats.retired += 1; }
    if (!bp.visited && !bp.retired) { stats.remaining += 1; }
  });

  const out = Object.assign({ ballparks: data }, { stats });
  const formatted = JSON.stringify(out, null, ' ')
    .replace(new RegExp('"true"', 'ig'), true)
    .replace(new RegExp('"false"', 'ig'), false);
  fs.writeFileSync('data/data.json', formatted);
};
