import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import NewsSearch from './NewsSearch';
import { CountryProvider } from './CountryContext';
import CountrySelector from './CountrySelector';

function App() {
  return (
    <div className="App">
      <Container>
        <CountryProvider>
          <CountrySelector />
          <NewsSearch />
        </CountryProvider>
      </Container>
    </div>
  );
}

export default App;
