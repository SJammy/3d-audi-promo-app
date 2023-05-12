import React from 'react'
import Iphone from '../assets/images/logo-audi.png'
import DancingGold from '../assets/images/dancing-gold.png'

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector('.design-section')
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='jumbotron-section wrapper'>
      <h2 className='title'>New Design System</h2>
      <img src={Iphone} alt='X-Z1 Future Shoes' className='logo' />
      <p className='text'>Sleek & Sophisticated</p>
      <span className='description'>From £xxxx + VAT</span>

      <ul className='links'>
        <li>
          <button className='button'>Buy</button>
        </li>
        <li>
          <a className='link' onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>

      <img src={DancingGold} alt='Dancing Person' className='iphone-img' />
    </div>
  )
}

export default Jumbotron
