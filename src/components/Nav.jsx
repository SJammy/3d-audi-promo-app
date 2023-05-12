import React from 'react'
import Logo from '../assets/images/logo-audi.png'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

function Nav() {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <ul className='list-styled'>
          <li>
            <img className='img-logo' src={Logo} alt='Audi' />
          </li>
          <li>
            <a className='link-styled'>3D Audi A7 Promo</a>
            {/* <img src={Search} alt='Search' /> */}
          </li>
          <li>
            <img src={Store} alt='Store' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
