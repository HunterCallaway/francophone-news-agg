import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CountryContext } from './CountryContext';

const CountrySelector = () => {
  // To update the `country` state variable,
  // we import the `handleSelect` function from CountryContext.
  const countryContext = useContext(CountryContext);
  const { handleSelect } = countryContext;

  return (
    <Navbar bg="light" expand="lg" fixed="top" onSelect={handleSelect}>
      <Navbar.Brand>Actuali-toute</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey="https://newsapi.org/v2/everything?q=francophonie&language=fr">La Francophonie</Nav.Link>
          <Nav.Link eventKey="https://newsapi.org/v2/top-headlines?country=be">Belgique</Nav.Link>
          <Nav.Link eventKey="https://newsapi.org/v2/top-headlines?country=fr">France</Nav.Link>
          <Nav.Link eventKey="https://newsapi.org/v2/top-headlines?country=ma">Maroc</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CountrySelector;
