export default function anchorScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section');
  console.log(sections);
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

      for(let i = 0 ; i< links.length; i++) {
        links[i].classList.remove('active');
      }

      e.target.classList.add('active');

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].classList.contains('active')) {
          sections[i].classList.remove("active");
        } else {
          section.classList.add('active');
        }
      }

      start = 0;

      requestAnimationFrame(countStep);
    })
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
  };

};