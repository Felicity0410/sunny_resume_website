const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('fade-up');
        observer.observe(entry.target);
      }
    });
  });
  
  const animatedElements = document.querySelectorAll('.animated-element');
  animatedElements.forEach(animatedElement => {
    observer.observe(animatedElement);
  });

  function scrollToContact () {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({behavior: "smooth"})
  }

const navButton = document.querySelector('#nav-sidebar-button')
const sideNav = document.querySelector('#side-nav')

function updateNavbar() {
  if (window.innerWidth <= 450) {
    navButton.removeAttribute('hidden')
      sideNav.removeAttribute('hidden')
  } else {
    navButton.setAttribute('hidden', 'true')
      sideNav.setAttribute('hidden', true)
  }
}

window.addEventListener('resize', updateNavbar)
updateNavbar()

function openNav() {
  sideNav.style.width = "150px";
  navButton.style.marginLeft = "150px";
}

function closeNav() {
  sideNav.style.width = "0";
  navButton.style.marginLeft= "0";
}