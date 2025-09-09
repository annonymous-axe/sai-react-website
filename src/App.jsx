import { useTheme } from '@mui/material/styles';

import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/project/project';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {

  const theme = useTheme();

  return (
    <>
        <Router>
          <Header/>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          <Footer />
        </Router>
      
    </>
  )
}

export default App;

      // <div>
      //   <a href="https://vite.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      // </div>
