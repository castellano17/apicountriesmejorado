import React from 'react'
import './styles/Navbar.css'

const Navbar = ({ chageTheme, theme }) => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__title'>Where in the World?</h1>
      <div onClick={chageTheme} className='navbar__btn'>
        <i className={`navbar__icon bx bxs-${theme === 'light' ? 'moon' : 'sun'}`} ></i>

        {/* {
                theme === 'dark' ? <i onClick={chageTheme} className='bx bxs-moon' ></i> : <i onClick={chageTheme} className='bx bxs-sun' ></i>
            }
         */}
        <h4 className='navbar__textTheme'>Dark Mode</h4>
      </div>
    </nav>
  )
}

export default Navbar