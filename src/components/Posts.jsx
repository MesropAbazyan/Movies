import {MoviesInfo} from '../data';
import Card from './Card';
import './Posts.css';

function Posts() {
  return (
    <div className="postsContainer">
      <ul className='posts'>
        {MoviesInfo.map(c => (
          <Card key={MoviesInfo.id} card={c} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;