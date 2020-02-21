export default function anchorScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header-wrapper');
  const speed = 0.75;
  let sectionCoord;
  let scroolCoord;
  let windowY;
  let scrollY;
  let start;
  
  for (const link of links) {
    link.addEventListener('click', e => {
      e.preventDefault();
      windowY = scrollY;

      const attr = link.getAttribute('href');
      const section = document.querySelector(attr);

      sectionCoord = section.getBoundingClientRect().top - header.clientHeight;
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
    });
  }
   
  sections.forEach((section) => {
    window.addEventListener('scroll', () => {
      scrollY = windowY;
      scrollY = window.pageYOffset;
      scroolCoord = section.getBoundingClientRect().top - header.clientHeight;
      section.classList.remove('active');

      if (section.getBoundingClientRect().bottom > 0 && scroolCoord <= 0) {
        const href = section.id;
        const activeLink = document.querySelector(`a[href="#${href}"]`);
        section.classList.add('active');

        links.forEach((link) => {
          link.classList.remove('active');
        });

        activeLink.classList.add('active');
      }
    });

  });

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