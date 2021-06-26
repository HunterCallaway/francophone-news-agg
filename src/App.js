import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-up';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import NewsSearch from './components/NewsSearch';
import { CountryProvider } from './context/CountryContext';
import CountrySelector from './components/CountrySelector';

function App() {
  return (
    <div className="App">
      <Container>
        <CountryProvider>
          <CountrySelector />
          <NewsSearch />
          <div className="scroll-to-top">
            <ScrollToTop showUnder={300} style={{ right: '15px', bottom: '25px' }} duration={750}>
              <IconContext.Provider value={{ color: '#f3d2c1', size: '3em' }}>
                <FaArrowAltCircleUp />
              </IconContext.Provider>
            </ScrollToTop>
          </div>
        </CountryProvider>
      </Container>
    </div>
  );
}

export default App;
