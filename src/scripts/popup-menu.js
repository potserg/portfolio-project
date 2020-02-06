const popupBtn = document.querySelector('.header__ham-menu');
const popupMenu = document.querySelector('.popup-menu');
const popupLinks = document.querySelectorAll('.popup.menu__link');
const socials = document.querySelector('.socials--header');
const wrapper = document.querySelector('.wrapper');


const toggleMenu = function() {
  popupMenu.classList.toggle('fixed');
  popupBtn.classList.toggle('open');
  socials.classList.toggle('closed');
  wrapper.classList.toggle('hidden');
}

popupBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

for (let i = 0; i < popupLinks.length; i++) {
  popupLinks[i].addEventListener('click', e => {
    toggleMenu();
  });
}

document.addEventListener('click', e => {
  console.log(e);
  if (e.target === popupMenu) {
    toggleMenu();
  }
});