const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const footerCoord = footer.getBoundingClientRect();

  windowY = window.pageYOffset;

  if (windowY > header.clientHeight && footer.clientHeight < footerCoord.top) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});