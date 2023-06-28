import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';



function App() {
  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Routes>
          <Route path="/Gallery" Component={Gallery} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Resume" Component={Resume} />
          <Route path="/" Component={AboutMe} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;