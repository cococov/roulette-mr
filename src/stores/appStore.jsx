import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda'

/**
 * App Context.
 */
const AppContext = createContext();

const BASE_OPTIONS = ['Mera', 'Ezequiel', 'Giovanni', 'JP', 'Juan K',  'Jesús', 'Edgar', 'Paloma', 'Benjamín'];

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const [running, setRunning] = useState(false);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(BASE_OPTIONS.map((value, index) => index < 4));

  useEffect(() => {
    setRandomOptions(R.sort(() => 0.5 - Math.random(), BASE_OPTIONS))
  }, []);

  useEffect(() => {
    const optionsToUse = BASE_OPTIONS.filter((value, index) => selectedOptions[index])
    setRandomOptions(R.sort(() => 0.5 - Math.random(), optionsToUse))
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