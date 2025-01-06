/* в этот файл добавляет скрипты*/
// BURGER
const burgerButton = document.querySelector('.button-toggle');
const burgerMenu = document.querySelector('.navigation__list');
burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('button-toggle--active');
  burgerMenu.classList.toggle('open');
  document.body.style = 'overflow-y: hidden';

  if (!burgerMenu.classList.contains('open')) {
    document.body.style = 'overflow-y: visible';
  }
});

const cardButtonShow = document.querySelector('.card__button-show');
cardButtonShow.addEventListener('click', () => {
  cardButtonShow.classList.toggle('card__button-show--active');
});
