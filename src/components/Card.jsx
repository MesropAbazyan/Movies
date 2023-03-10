import {Link} from 'react-router-dom';
import './Card.css';

function Card({card}) {
  return (
    <li className='cardContainer'>
      <Link to={'/filmPage' + card.id} className='cardLink'>
        <img src={card.poster} alt="" />
        <p className='cardName'>{card.title}</p>
        <div className='cardRateAndDate'>
          <div>{card.rating}</div>
          <div>{card.date}</div>
        </div>
      </Link>
    </li>
  );
}

export default Card;