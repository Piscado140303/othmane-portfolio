// import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <h2><span className='light-weight'>Get</span> <span>in Touch</span><span className='dot'>.</span></h2>
      <p>So that we can talk more about...</p>
      <div>
        <a target='blank' href="https://github.com/Piscado140303"><i className="fa-brands fa-github fa-2x"></i></a>
        <a target='blank' href="https://www.linkedin.com/in/fiche-othmane-abderrahim-aa05002b1/"><i className="fa-brands fa-linkedin-in fa-2x"></i></a>
      </div>
      <small>Made with ❣️ by <span><a className='white-a'>Othmane Abderrahim</a></span></small>
    </footer>
  )
}

export default Footer;