import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all';
import "./about.scss";

const About = () => {

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    aboutAnimation();
  }, [])

  function aboutAnimation() {
    gsap.from('.about-text h3', {
      scrollTrigger: {
        trigger: '.about-text h3',
        start: 'bottom 95%',
        end: 'bottom 40%',
        scrub: true,
      },
      x: 80,
    })
  }

  return (
    <div className='about-div' id='about'>
      <div className='about-text'>
        <h3>A bit about me</h3>
        <p>
          I am a Frontend developer,mobile developer,AI engineer who is passionate about developing <span>beautiful
          and joyful digital experiences. </span><span className='dot'>.</span> 
        </p>
      </div>
      <div className='about-image'>
        <div>
          {/* <img className='hidden' src="./assets/img3.png" alt="image 1" /> */}
        </div>
        <div className='div-two-image'>
          {/* <img className='hidden' src="./assets/img1.jpg" alt="image 2" /> */}
          {/* <img className='hidden' src="./assets/img2.png" alt="image 3" /> */}
        </div>
      </div>
      
      <div className='photo-carousel-mobile'>
        {/* <img src="./assets/img3.png" alt="image 1" /> */}
        {/* <img src="./assets/img1.png" alt="image 2" /> */}
        {/* <img src="./assets/img2.png" alt="image 3" /> */}
      </div>
    </div>
  )
}

export default About;