import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import banana from './logo.svg';



function App() {
  return (
    <BrowserRouter>
      <div className='parent-container'>
        <Header />
        <div id='page-content'>
          <img src={banana} alt="" />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>

        </div>
        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
