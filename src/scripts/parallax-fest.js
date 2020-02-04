const parallax = document.querySelector('.parallax-fest');
const layers = parallax.children;
const wTablets = 751;

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;
    layer.style.transform = `translateY(-${strafe}%)`;
  })
}

window.addEventListener('scroll', e => {
  const parallaxCoord = parallax.getBoundingClientRect();
  
  if (parallaxCoord.top <= parallax.clientHeight && parallaxCoord.bottom > 0 && parallaxCoord.right > wTablets) {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  }
})