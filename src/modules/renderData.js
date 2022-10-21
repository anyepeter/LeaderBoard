const container = document.querySelector('.items-container');

const display = (item) => {
  let content = '';

  item.forEach((element, index) => {
    content += ` <li style="background-color: ${index % 2 && 'rgb(225, 223, 223)'}">
     <p>${element.user}:</p><span>${element.score}</span>
   </li>`;
  });
  container.innerHTML = content;
};

export default display;