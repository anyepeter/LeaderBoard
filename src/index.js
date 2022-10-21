import './style.css';
import addScore from './modules/addData.js';
import apicallLink from './modules/apiLink.js';
import display from './modules/renderData.js';

const form = document.getElementById('form');

const refreshBtn = document.querySelector('.button-refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});

const showAPI = async () => {
  const res = await fetch(`${apicallLink}`);
  const data = await res.json();
  display(data.result);
};

refreshBtn.addEventListener('click', showAPI);