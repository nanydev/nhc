window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  
  showNavOnScrow()
  showBackToTopButton()

  activaMenuAtCurrentSection(home)
  activaMenuAtCurrentSection(services)
  activaMenuAtCurrentSection(about)
  activaMenuAtCurrentSection(contact)


}

function activaMenuAtCurrentSection(section) {
  
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeigth = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


  const sectionEndsAt = sectionTop + sectionHeigth
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  console.log(menuElement)
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    console.log(menuElement)
    menuElement.classList.add('active')
  }
}

function showNavOnScrow() {
  const navigation = document.querySelector('#navigation')
  if (scrollY > 0) {
    console.log(navigation)
    navigation.classList.add('scroll')
  } else {
    console.log(navigation)
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about content`)
