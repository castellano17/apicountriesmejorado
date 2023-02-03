import React from 'react'
import './styles/Navbar.css'

const Navbar = ({chageTheme, theme}) => {
  return (
    <nav>
        <h1>Where in the World?</h1>
        <div>
        <i onClick={chageTheme} className={`bx bxs-${theme === 'light' ? 'moon' : 'sun'}`} ></i> 

            {/* {
                theme === 'dark' ? <i onClick={chageTheme} className='bx bxs-moon' ></i> : <i onClick={chageTheme} className='bx bxs-sun' ></i>
            }
         */}
            <h4>Dark Mode</h4>
        </div>
    </nav>
  )
}

export default Navbar