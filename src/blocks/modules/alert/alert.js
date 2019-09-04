const alert = document.querySelector('.js-alert');

const alertButton = document.querySelector('.js-alertButton');
alertButton.addEventListener('click', (event) => {
  alert.classList.toggle('show-alert');
});

// setTimeout(() => {
//   alert.classList.toggle('show-alert');
// }, 2000);


