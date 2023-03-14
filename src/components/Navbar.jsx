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
        <form className='searchForm' onSubmit={evt => {
          evt.preventDefault();
        }}>
          <input 
            className='searchInput' type="text" 
            value={inputValue}
            onChange={evt => setInputValue(evt.target.value)}
          />
          <button className='searchButton'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
