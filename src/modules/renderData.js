const container = document.querySelector('.items-container');

const display = (item) => {
  let content = '';

  item.forEach((element) => {
    content += ` <li>
     <p>${element.user}:</p><span>${element.score}</span>
   </li>`;
  });
  container.innerHTML = content;
};

export default display;