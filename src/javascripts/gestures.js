import ZingTouch from 'zingtouch'

/* start menu toggling */
const navbar = document.getElementsByClassName('navbar')[0]
const zt = new ZingTouch.Region(navbar)

const overlay = document.getElementById('overlay')
const menuIcon = document.getElementsByClassName('navbar__icon')[0]

zt.bind(menuIcon, 'tap', e => {
  const { target } = e
  target.classList.toggle('xIcon')
  overlay.classList.toggle('openMenu')
}, false)
/* end menu toggling */
