import './style.css';
import addScore from './modules/addData.js';
import apicallLink from './modules/apiLink.js';
import display from './modules/renderData.js';

const form = document.getElementById('form');
const refreshBtn = document.querySelector('.button-refresh');
const loader = document.querySelector('.loader');
const main = document.querySelector('#main');
const mainSecond = document.querySelector('.main');

const init = () => {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'flex';
    mainSecond.style.display = 'flex';
    setTimeout(() => {
      main.style.opacity = 1;
      mainSecond.style.opacity = 1;
    }, 50);
  }, 2000);
};
init();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});

const showData = async () => {
  const res = await fetch(`${apicallLink}`);
  const data = await res.json();
  display(data.result);
};

refreshBtn.addEventListener('click', showData);