import React, { useContext } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { CountryContext } from './CountryContext';

const CountrySelector = () => {
  // To update the `country` state variable,
  // we import the `handleSelect` function from CountryContext.
  const countryContext = useContext(CountryContext);
  const { handleSelect } = countryContext;

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Choisissez Votre Pays"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="https://newsapi.org/v2/everything?q=francophonie&language=fr" value="Toute La Francophonie">Toute la Francophonie</Dropdown.Item>
      <Dropdown.Item eventKey="https://newsapi.org/v2/top-headlines?country=be" value="Belgique">Belgique</Dropdown.Item>
      <Dropdown.Item eventKey="https://newsapi.org/v2/top-headlines?country=fr" value="France">France</Dropdown.Item>
      <Dropdown.Item eventKey="https://newsapi.org/v2/top-headlines?country=ma" value="Maroc">Maroc</Dropdown.Item>
    </DropdownButton>
  );
};

export default CountrySelector;
