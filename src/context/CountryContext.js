import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  // We initialize the state to the `languages=fr` endpoint
  // and pull stories about 'la francophonie'.
  const [country, setCountry] = useState('/.netlify/functions/media-api');

  // This function is connected to the CountrySelector's DropdownButton `onSelect` property.
  // When the user selects a country from the Dropdown menu,
  // the `country` state variable is updated.
  const handleSelect = (e) => {
    setCountry(e);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CountryContext.Provider value={{
      country,
      handleSelect,
    }}
    >
      {children}
    </CountryContext.Provider>
  );
};

CountryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
