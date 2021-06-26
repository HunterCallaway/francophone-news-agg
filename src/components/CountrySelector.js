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
    <Navbar collapseOnSelect expand="lg" fixed="top" onSelect={handleSelect} className="navbar nav-background">
      <Navbar.Brand className="font-nav-brand pl-2">Actuali-toute</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center font-nav-link">
        <Nav>
          <Nav.Link className="px-5" eventKey={process.env.REACT_APP_FRENCH_URL}>Francophonie</Nav.Link>
          <Nav.Link className="px-5" eventKey={process.env.REACT_APP_BELGIUM_URL}>Belgique</Nav.Link>
          <Nav.Link className="px-5" eventKey={process.env.REACT_APP_FRANCE_URL}>France</Nav.Link>
          <Nav.Link className="px-5" eventKey={process.env.REACT_APP_MOROCCO_URL}>Maroc</Nav.Link>
          <Nav.Link className="px-5" eventKey={process.env.REACT_APP_SWITZERLAND_URL}>Suisse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CountrySelector;
