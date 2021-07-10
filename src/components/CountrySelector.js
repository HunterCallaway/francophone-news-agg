import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CountryContext } from '../context/CountryContext';

const CountrySelector = () => {
  // To update the `country` state variable,
  // we import the `handleSelect` function from CountryContext.
  const countryContext = useContext(CountryContext);
  const { handleSelect } = countryContext;

  // NB: As of May 2021, there is an open GitHub issue regarding the
  // `findDOMNode is deprecated in StrictMode` console warning React-Bootstrap is causing.
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar nav-background" onSelect={handleSelect}>
      <Navbar.Brand className="font-nav-brand pl-2">Actuali-toute</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center font-nav-link">
        <Nav>
          <Nav.Link className="px-5" eventKey="/.netlify/functions/media-api">Francophonie</Nav.Link>
          <Nav.Link className="px-5" eventKey="/.netlify/functions/media-api?country=be">Belgique</Nav.Link>
          <Nav.Link className="px-5" eventKey="/.netlify/functions/media-api?country=fr">France</Nav.Link>
          <Nav.Link className="px-5" eventKey="/.netlify/functions/media-api?country=ma">Maroc</Nav.Link>
          <Nav.Link className="px-5" eventKey="/.netlify/functions/media-api?country=ch">Suisse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CountrySelector;
