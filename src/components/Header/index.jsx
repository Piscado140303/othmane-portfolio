import { useEffect } from 'react'
import { gsap } from 'gsap/all';
import './header.scss'

const Header = () => {

  useEffect(() => {
    headerEffectScroll();
    gsapHeader();
  }, [])

  function gsapHeader() {
    const timelineHeader = gsap.timeline({ defaults: { duration: 2 }})
    timelineHeader
      .from('.h4-header', { x: '-200%', ease: 'power4.inOut' })
      .from('.btn-header', { y: '-200px', ease: 'power4.inOut' }, .5)
  }

  function headerEffectScroll() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 90) {
        document.querySelector('header').classList.add('header-active');
      } else {
        document.querySelector('header').classList.remove('header-active');
      }
    })
  }

  function handleOpenMenu() {
    let ulElement = document.getElementById("ul");
    ulElement.classList.toggle("menuActive");

    let icon = document.getElementById('btn-menu');
    icon.classList.toggle("icon-active");

    if(ulElement.classList.contains('menuActive')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    let liElement = document.querySelectorAll('#ul li a')
    liElement.forEach((value) => {
      value.addEventListener('click', () => {
        ulElement.classList.remove('menuActive');
        icon.classList.remove("icon-active");
        document.body.style.overflow = 'auto';
      })
    }) 
  }

  return (
    <header className='header'>
      <h4 className='h4-header'><span>Othmane Abderrahim</span><span className='dot'>.</span></h4>
      <button onClick={handleOpenMenu} id='btn-menu' className='btn-header'>Menu <span id='hamb-icon'></span></button>
      <ul id='ul' className='ul-header'>
        <li className='links-header'><a href="#home"><span>Home</span></a></li>
        <li className='links-header'><a href="#about"><span>About</span></a></li>
        <li className='links-header'><a href="#work"><span>Work</span></a></li>
      </ul>
    </header>
  )
}

export default Header;