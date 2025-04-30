document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-section');
      }
    });
  }, {
    threshold: 0.2
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  const typed = new Typed('.typed-text', {
    strings: ["Software Engineer", "Data Analyst", "Web Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });