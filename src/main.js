import './sub';
import './style.scss';
// import 'regenerator-runtime';
// import 'core-js';

const init = async () => {
  await asyncFn();
  console.log('Helle, world.');
}

async function asyncFn() {
  console.log('I\'m a async function.');
}

init();