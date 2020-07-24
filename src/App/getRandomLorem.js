import { lorem } from 'faker';

function getRandomLorem() {
  const MIN = 1;
  const MAX = 10;
  const randomInt = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  return lorem.sentences(randomInt);
}

export default getRandomLorem;
