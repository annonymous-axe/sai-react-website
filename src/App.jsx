import { useTheme } from '@mui/material/styles';

import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';

function App() {

  const theme = useTheme();

  return (
    <>
      <Header/>
      <Home/>
      <Footer />
    </>
  )
}

export default App;

      // <div>
      //   <a href="https://vite.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      // </div>
