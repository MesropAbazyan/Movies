import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import FilmPage1 from './pages/FilmPage1';
import FilmPage2 from './pages/FilmPage2';
import FilmPage3 from './pages/FilmPage3';
import FilmPage4 from './pages/FilmPage4';
import FilmPage5 from './pages/FilmPage5';
import FilmPage6 from './pages/FilmPage6';
import FilmPage7 from './pages/FilmPage7';
import FilmPage8 from './pages/FilmPage8';
import FilmPage9 from './pages/FilmPage9';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmPage1" element={<FilmPage1 />} />
        <Route path="/filmPage2" element={<FilmPage2 />} />
        <Route path="/filmPage3" element={<FilmPage3 />} />
        <Route path="/filmPage4" element={<FilmPage4 />} />
        <Route path="/filmPage5" element={<FilmPage5 />} />
        <Route path="/filmPage6" element={<FilmPage6 />} />
        <Route path="/filmPage7" element={<FilmPage7 />} />
        <Route path="/filmPage8" element={<FilmPage8 />} />
        <Route path="/filmPage9" element={<FilmPage9 />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
