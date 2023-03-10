import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <Link to='/' className='navbarLinkHome'>
          <span className="logo">MessMovies</span>
        </Link>
      </div>

      <div className="navbarRight">
        <form className='searchForm' action="">
          <label htmlFor="search">
            <input 
              id='search' className='searchInput' type="search" 
              onChange={evt => setInputValue(evt.target.value)}
            />
            <button id='search' className='searchButton'>Search</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Navbar;