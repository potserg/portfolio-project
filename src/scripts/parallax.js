export default function parallax(selector, direction, speed) {
  const parallax = document.querySelector(selector);
  const layers = parallax.children;
  const widthTablets = 768;
  
  function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / speed;
      
      if (direction === 'down') {
        layer.style.transform = `translateY(${strafe}%)`;
      } 
      else if (direction === 'up') {
        layer.style.transform = `translateY(-${strafe}%)`;
      }
    });
  }
  
  window.addEventListener('scroll', () => {
    const parallaxCoord = parallax.getBoundingClientRect();
    console.log(window.innerWidth);

    if (parallaxCoord.top <= parallax.clientHeight && parallaxCoord.bottom > 0 && window.innerWidth > widthTablets) {
      const wScroll = window.pageYOffset;

      moveLayersDependsOnScroll(wScroll);
    }
  });

};
