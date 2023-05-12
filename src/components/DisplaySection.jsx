import React from 'react'

function DisplaySection({ triggerPreview }) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='display-section wrapper'>
      <h2 className='title'>New</h2>
      <p className='text'>Awesome.</p>
      <span className='description'>
      Move faster with style
      </span>

      <button className='button' onClick={triggerPreview}>
        Play!
      </button>
      <button className='back-button' onClick={handleScrollTop}>
        TOP
      </button>
    </div>
  )
}

export default DisplaySection
