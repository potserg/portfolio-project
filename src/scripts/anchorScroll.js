export default function anchorScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const speed = 0.75;
  let sectionCoord;
  let windowY;
  let start;
  
  for (const link of links) {
    link.addEventListener('click', e => {
      e.preventDefault();

      const attr = link.getAttribute('href');
      const section = document.querySelector(attr);

      sectionCoord = section.getBoundingClientRect().top;
      windowY = window.pageYOffset;
      start = 0;

      requestAnimationFrame(countStep);
    });
  }

  function countStep(time) {
    if (start === 0) {
      start = time;
    }

    const progress = time - start;

    const coordY = 
      sectionCoord < 0
        ? Math.max((windowY - progress) / speed, windowY + sectionCoord)
        : Math.min((windowY + progress) / speed, windowY + sectionCoord);

    window.scrollTo(0, coordY);

    if (coordY !== windowY + sectionCoord) {
      requestAnimationFrame(countStep);
    }
  }

}