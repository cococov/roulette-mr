import React, { createContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda'

/**
 * App Context.
 */
const AppContext = createContext();

const BASE_OPTIONS = ['Mera', 'Giovanni', 'JP', 'Juan K', 'Jesús', 'Edgar', 'LU', 'Paloma'];

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [running, setRunning] = useState(false);

  const [selected, setSelected] = useState(0);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(BASE_OPTIONS);

  const randomizeOptions = useCallback(() => {
    const optionsToUse = BASE_OPTIONS.filter((value, index) => selectedOptions[index]);
    setRandomOptions(R.sort(() => 0.5 - Math.random(), optionsToUse));
    setSelected(0);
  }, [selectedOptions]);

  useEffect(() => {
    randomizeOptions();
  }, [randomizeOptions]);

  useEffect(() => {
    randomizeOptions();
  }, [randomizeOptions, selectedOptions])

  useEffect(() => {
    if (running)
      randomizeOptions();
  }, [randomizeOptions, running])


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