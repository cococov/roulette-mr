import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * App Context.
 */
const AppContext = createContext();

const BASE_OPTIONS = ['Juan K', 'Mera', 'Ezequiel', 'Giovanni', 'JP'];

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const [running, setRunning] = useState(false);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(BASE_OPTIONS.map(() => true));

  useEffect(() => {
    setRandomOptions(BASE_OPTIONS.sort(() => 0.5 - Math.random()))
  }, []);

  useEffect(() => {
    const optionsToUse = BASE_OPTIONS.filter((value, index) => selectedOptions[index] )
    setRandomOptions(optionsToUse.sort(() => 0.5 - Math.random()))
  }, [selectedOptions])

  return (
    <AppContext.Provider
      value={{
        BASE_OPTIONS,
        selected,
        running,
        randomOptions,
        selectedOptions,
        setSelected,
        setRunning,
        setSelectedOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;