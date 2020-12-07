import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * App Context.
 */
const AppContext = createContext();

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const [running, setRunning] = useState(false);
  const [randomOptions, setRandomOptions] = useState([]);

  useEffect(() => {
    const options = ['Juan K', 'Mera', 'Ezequiel', 'Giovanni', 'JP'];
    setRandomOptions(options.sort(() => 0.5 - Math.random()))
  }, []);

  return (
    <AppContext.Provider
      value={{
        selected,
        running,
        randomOptions,
        setSelected,
        setRunning,
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