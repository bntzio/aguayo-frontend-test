import ZingTouch from 'zingtouch'

/* start menu animation */
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')
const link5 = document.getElementById('link5')

const navbar = document.getElementsByClassName('navbar')[0]
const zt = new ZingTouch.Region(navbar)

const menuIcon = document.getElementsByClassName('navbar__icon')[0]

zt.bind(menuIcon, 'tap', e => {
  link1.classList.toggle('tweenEnd')
  link2.classList.toggle('tweenEnd')
  link3.classList.toggle('tweenEnd')
  link4.classList.toggle('tweenEnd')
  link5.classList.toggle('tweenEnd')
}, false)
/* end menu animation */
