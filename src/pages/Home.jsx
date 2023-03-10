import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Filters />
      <Posts />
      <Footer />
    </>
  );
}

export default Home;