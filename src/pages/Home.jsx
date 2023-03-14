import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import SearchResult from '../components/SearchResult';

function Home() {
  return (
    <>
      <Navbar />
      <Filters />
      <SearchResult />
      <Posts />
      <Footer />
    </>
  );
}

export default Home;
