export default function getSanFranciscoDescription() {
  const year = 2017; // eslint-disable-line no-unused-vars
  const budget = { // eslint-disable-line no-unused-vars
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ${year}, it was the seventh-highest income county in the United States' // eslint-disable-line no-template-curly-in-string
         / ', with a per capita personal income of ${budget.income}. As of 2015, San Francisco' // eslint-disable-line no-template-curly-in-string
          / ' proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.'; // eslint-disable-line no-template-curly-in-string
}
