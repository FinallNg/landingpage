import React from 'react'
import './Navbar.css'
import logo from '../../assets/finall.svg'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
      <header>
          <div className='logodiv'>
              <img src={logo} alt='logo' />
          </div>
  
          <div className='nav1' >
              <ul>
                <li><NavLink exact activeClassName="active" to ='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/about'>About</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/pricing'>Pricing</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/contact'>Contact Us</NavLink></li> 
              </ul>
  
          </div>
  
          <div className='nav2'>
              <Link className='cta' to='/login'> Login</Link>

              <button className='cta'><Link to='/signup'>Get Started</Link></button>
          </div>
          <div className='mobile-nav'>
          </div>
      </header>
    )
  }
  
  export default Navbar
