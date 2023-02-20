const navbar = document.querySelector('nav')
const overlay = document.querySelector('.overlay')
const mobileNav = document.querySelector('.mobile-nav')
const openBtn = document.getElementById('open-menu')
const closeBtn = document.getElementById('close-menu')

openBtn.addEventListener('click', () => {
  overlay.classList.add('active')
  mobileNav.classList.add('active')
  openBtn.style.display = 'none'
  closeBtn.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active')
  mobileNav.classList.remove('active')
  openBtn.style.display = 'flex'
  closeBtn.style.display = 'none'
})
