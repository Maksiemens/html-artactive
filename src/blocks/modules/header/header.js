const headerContainer = document.querySelector('.js-headerContainer');
const sidenav = document.querySelector('.js-sidenav');

headerContainer.addEventListener('click', (event) => {
  if(event.target.classList.contains('js-hamburgerButton')) {
    headerContainer.classList.add('show-overlay');
    sidenav.classList.add('show-sidenav');
  }
  console.log('click', event.target);

  if(event.target.classList.contains('js-headerContainer')) {
    headerContainer.classList.remove('show-overlay');
    sidenav.classList.remove('show-sidenav');
  }

  if(event.target.classList.contains('js-sidenav')) {
    event.stopPropagation();
  }
});

