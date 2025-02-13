import { useEffect } from 'react'
import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'

const App = () => {

  useEffect(() => {
    animation();
  }, [])

  function animation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  return (
    <div className='container'>
      <Header />
      <Home />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App;