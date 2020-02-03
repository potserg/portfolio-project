const popupOpen = document.querySelector('.header__ham-menu_btn');
const popupClose = document.querySelector('.popup-menu__close_btn');
const popupMenu = document.querySelector('.popup-menu');
const step = 0.2;
let op = 0;
let intervalId;

popupOpen.addEventListener('click', e => {
  e.preventDefault();
  
  intervalId = setInterval(() => {
    op += step;
    popupMenu.style.opacity = op;

    if (op > 0.9) {
      clearInterval(intervalId);
    }

  }, 200);

  popupMenu.style.display = 'flex';

});

popupClose.addEventListener('click', e => {
  e.preventDefault();

  intervalId = setInterval(() => {
    op -= step;
    popupMenu.style.opacity = op;

    if (op < 0.2) {
      clearInterval(intervalId);
      popupMenu.style.display = '';
    }

  }, 200);

});
