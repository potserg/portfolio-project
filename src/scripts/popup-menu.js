const popupOpen = document.querySelector('.header__ham-menu_btn');
const popupClose = document.querySelector('.popup-menu__close_btn');
const popupMenu = document.querySelector('.popup-menu');
const popupLinks = document.querySelectorAll('.popup.menu__link');
const step = 0.2;
let intervalId;
let op = 0;

let increaseOp = (() => {
  intervalId = setInterval(() => {
    op += step;
    popupMenu.style.opacity = op;
    console.log(op);
    
    if (op >= 0.9) {
      clearInterval(intervalId);
    }
    
    popupMenu.style.display = 'flex';
  }, 1000);
})

popupOpen.addEventListener('click', e => {
  e.preventDefault();
  
  increaseOp();
});

let decreaseOp = (() => {
  intervalId = setInterval(() => {
    op -= step;
    popupMenu.style.opacity = op;
    console.log(op);
    if (op <= 0.2) {
      clearInterval(intervalId);
      popupMenu.style.display = '';
    }
    
  }, 1000);
});

// popupClose.addEventListener('click', e => {
//   e.preventDefault();
  
//   decreaseOp();
// });

popupMenu.addEventListener('click', e => {
  if (e.target === popupMenu) {
    decreaseOp();
  }
});

window.addEventListener('scroll', () => {
  const wScroll = window.pageYOffset;

  if (op > 0.9) {
    decreaseOp();
  }
});

for (let i = 0; i < popupLinks.length; i++) {
  popupLinks[i].addEventListener('click', e => {
    e.preventDefault();

    decreaseOp();
  });
};
