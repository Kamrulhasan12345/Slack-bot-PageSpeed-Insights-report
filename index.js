const psi = require('psi');

const options = {
  key: `${process.env.PSI_KEY}`,
  strategy: `mobile`,
  locale: `en_US`
}

const psigen = async (urlArray) => {
  // Get the PageSpeed Insights report
  const report = await psi.output('https://www.cburst.ml', options);
  return report
  
};

psigen(5)