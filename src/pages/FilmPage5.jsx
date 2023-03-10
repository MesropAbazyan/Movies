import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilmInfo from '../components/FilmInfo';
import {MoviesInfo} from '../data';

function FilmPage5() {
  return (
    <>
      <Navbar />
      <FilmInfo key={MoviesInfo.id} movie={MoviesInfo.filter(mov => mov.id === 5)[0]} />
      <Footer />
    </>
  );
}

export default FilmPage5;