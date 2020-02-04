const header = document.querySelector('.header');
const promo = document.querySelector('.promo-wrapper');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const promoCoord = promo.getBoundingClientRect();
  const footerCoord = footer.getBoundingClientRect();
  windowY = window.pageYOffset;

  if (windowY > promoCoord.bottom && footer.clientHeight < footerCoord.top) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});