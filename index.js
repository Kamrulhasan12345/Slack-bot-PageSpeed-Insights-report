const psi = require('psi');

const options = {
  key: `${process.env.PSI_KEY}`,
}

(async () => {
  // Get the PageSpeed Insights report
  await psi.output('https://www.cburst.ml', { key: "AIzaSyASpq2q_p--iGDNtdYa1odhrvx7TGFMIY0"})
  const data2 = await psi('https://theverge.com', {
    nokey: 'true',
    strategy: 'desktop'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
})();