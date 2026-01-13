import React from 'react'
import { navLinks } from '../constans'


function Navbar() {
  return (
   <header>
    <nav>
        <img src="/logo.svg" alt="Apple-logo" />

        <ul>
            {navLinks.map(({label})=>(
                <li key={label}>
                    <a href={label}>{label}</a>
                </li>
            ))}
        </ul>
    </nav>

    <div className='flex-center gap-3'>
        <button>
            <img src="/search.svg" alt="Search" />
        </button>
        <button>
            <img src="/cart.svg" alt="Cart" />
        </button>
    </div>
   </header>
  )
}

export default Navbar