const popupOpen = document.querySelector('.header__ham-menu_btn');
const popupClose = document.querySelector('.popup-menu__close_btn');
const popupMenu = document.querySelector('.popup-menu');
const popupLinks = document.querySelectorAll('.popup.menu__link');
const step = 0.2;
let op = 0;
let intervalId;

let increaseOp = (e => {
  intervalId = setInterval(() => {
    op += step;
    popupMenu.style.opacity = op;

    if (op > 0.9) {
      clearInterval(intervalId);
    }

  }, 100);
})

popupOpen.addEventListener('click', e => {
  e.preventDefault();
  increaseOp();
  popupMenu.style.display = 'flex';
});

let decreaseOp = (e => {
  intervalId = setInterval(() => {
    op -= step;
    popupMenu.style.opacity = op;

    if (op < 0.2) {
      clearInterval(intervalId);
      popupMenu.style.display = '';
    }

  }, 100);
})

popupClose.addEventListener('click', e => {
  e.preventDefault();
  decreaseOp();
});

popupMenu.addEventListener('click', e => {
  if (e.target === popupMenu) {
    decreaseOp();
  }
});

for (let i = 0; i < popupLinks.length; i++) {

  popupLinks[i].addEventListener('click', e => {
    e.preventDefault();
    decreaseOp();
  });
};
