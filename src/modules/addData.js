const apicallLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Fa4wbNJq50dOGS2twSBt/scores/';

const names = document.getElementById('name');
const number = document.getElementById('score');
const form = document.getElementById('form');

const errorMsg = document.getElementById('error');

const addScore = async () => {
  const user = names.value;
  const score = number.value;

  // check if the score and name are empty.
  if (!user || !score) {
    errorMsg.innerHTML = 'enter your name and score';
    return;
  }

  try {
    const res = await fetch(apicallLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });

    const items = await res.json();

    if (!res.ok) {
      errorMsg.innerHTML = 'Not Successful';
    }
    errorMsg.innerHTML = items.result;
    form.reset();
  } catch (err) {
    errorMsg.innerHTML = 'Not Successful';
  }
  setTimeout(() => {
    errorMsg.innerHTML = '';
  }, 1000);
};

export default addScore;