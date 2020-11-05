import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  const style = {
    color:'white'
  }

  return (
    <div>
      <nav>
        <h3>Nav</h3>
        <ul className='nav-links'>
          <Link style={style} to="/about">
            <li>About</li>
          </Link>
          <Link style={style} to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
