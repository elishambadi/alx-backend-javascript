import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  const build = new TestBuilding(200, 'The buidling is in danger');// eslint-disable-line no-new
  build.evacuationWarningMessage('The buidling is in danger');
} catch (err) {
  console.log(err);
}
