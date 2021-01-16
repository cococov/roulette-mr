import React, { createContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda'

/**
 * App Context.
 */
const AppContext = createContext();

const BASE_OPTIONS = ['Mera', 'Giovanni', 'JP', 'Juan K', 'Jesús'];
const BASE_ROBIN_OPTIONS = ['Edgar', 'Paloma', 'Benjamín', 'Guido', 'Vicente'];

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [running, setRunning] = useState(false);
  const [isRobinChecked, setRobinChecked] = useState(false);

  const [selected, setSelected] = useState(0);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(BASE_OPTIONS);

  const [selectedRobin, setSelectedRobin] = useState(0);
  const [randomRobinOptions, setRandomRobinOptions] = useState([]);
  const [selectedRobinOptions, setSelectedRobinOptions] = useState(BASE_ROBIN_OPTIONS);

  const randomizeOptions = useCallback(() => {
    const optionsToUse = BASE_OPTIONS.filter((value, index) => selectedOptions[index])
    setRandomOptions(R.sort(() => 0.5 - Math.random(), optionsToUse))
  }, [selectedOptions]);

  const randomizeRobinOptions = useCallback(() => {
    const optionsToUse = BASE_ROBIN_OPTIONS.filter((value, index) => selectedRobinOptions[index])
    setRandomRobinOptions(R.sort(() => 0.5 - Math.random(), optionsToUse))
  }, [selectedRobinOptions]);

  useEffect(() => {
    randomizeOptions();
  }, [randomizeOptions]);

  useEffect(() => {
    randomizeRobinOptions();
  }, [randomizeRobinOptions]);

  useEffect(() => {
    randomizeOptions();
  }, [randomizeOptions, selectedOptions])

  useEffect(() => {
    randomizeRobinOptions();
  }, [randomizeRobinOptions, selectedRobinOptions])

  useEffect(() => {
    if (running)
      randomizeOptions();
  }, [randomizeOptions, running])

  useEffect(() => {
    if (running)
    randomizeRobinOptions();
  }, [randomizeRobinOptions, running])

  return (
    <AppContext.Provider
      value={{
        BASE_OPTIONS,
        BASE_ROBIN_OPTIONS,
        selected,
        selectedRobin,
        running,
        randomOptions,
        randomRobinOptions,
        selectedOptions,
        selectedRobinOptions,
        isRobinChecked,
        setSelected,
        setSelectedRobin,
        setRunning,
        setSelectedOptions,
        setSelectedRobinOptions,
        setRobinChecked,
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