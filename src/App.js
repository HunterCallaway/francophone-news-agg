import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import NewsSearch from './components/NewsSearch';
import { CountryProvider } from './context/CountryContext';
import CountrySelector from './components/CountrySelector';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <Container>
        <CountryProvider>
          <CountrySelector />
          <NewsSearch />
        </CountryProvider>
        <ScrollButton />
      </Container>
    </div>
  );
}

export default App;
