import canIterate from './canIterate';

const map = new Map();
const set = new Set();
const number = 10;
const string = 'Netology';
const nulle = null;

const list = [
  map,
  set,
  number,
  string,
  nulle,
];

list.forEach((item) => {
  const answer = canIterate(item);

  console.log(item);
  console.log(answer);
});
