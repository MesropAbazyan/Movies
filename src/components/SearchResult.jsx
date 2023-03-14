import Card from './Card';
import {MoviesInfo} from '../data';
import './SearchResult.css';

function SearchResult() {
  const filteredMoviesInfo = 
  MoviesInfo.filter(mov => mov.title.includes('Pri'));

  return (
    <div className="searchResultContainer">
      <ul className='searchResult'>
        {filteredMoviesInfo.map(c => (
          <Card key={filteredMoviesInfo.id} card={c} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;