const navbar = document.getElementById('navbar')
const section = document.getElementById('hero')

const sectionOptions = {
  rootMargin: '-50px 0px 0px 0px'
}

const sectionObserver = new IntersectionObserver(
  function (entries, sectionObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add('nav-white')
      } else {
        navbar.classList.remove('nav-white')
      }
    })
  }, sectionOptions
)

sectionObserver.observe(section)