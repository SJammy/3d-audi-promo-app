import React from 'react'

function DesignSection() {
  const handleLearnMore = () => {
    const element = document.querySelector('.display-section')
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='design-section wrapper'>
      <div className='body'>
        <div className='design-section-content content'>
          <h2 className='title'>New Design System</h2>
          <p className='text'>Drive with ease</p>
          <span className='description'>From £xxxx</span>
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
        </div>
      </div>
    </div>
  )
}

export default DesignSection
