/* в этот файл добавляет скрипты*/
// BURGER
const burgerButton = document.querySelector('.navigation__toggle');
burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('navigation__toggle--active');
});
