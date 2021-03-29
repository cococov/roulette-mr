import React, { createContext, useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Loading } from '../components';
import PropTypes from 'prop-types';
import firebase from '@firebase/app';
import '@firebase/database';
import * as R from 'ramda'

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
  const [running, setRunning] = useState(false);
  const [baseOptions, setBaseOptions] = useState([]);
  const [isFetchDone, setFetchDone] = useState(false);

  const [selected, setSelected] = useState(0);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useLayoutEffect(() => {
    let ref = firebase.database().ref(`baseOptions`);
    ref.on('value', snapshot => {
      const result = snapshot.val();
      result && setBaseOptions(result);
      result && setSelectedOptions(result);
      setFetchDone(true);
    });
  }, []);

  const randomizeOptions = useCallback(() => {
    const optionsToUse = baseOptions.filter((value, index) => selectedOptions[index]);
    setRandomOptions(R.sort(() => 0.5 - Math.random(), optionsToUse));
    setSelected(0);
  }, [selectedOptions, baseOptions]);

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
        baseOptions,
        selected,
        running,
        randomOptions,
        selectedOptions,
        setSelected,
        setRunning,
        setSelectedOptions,
      }}
    >
      {isFetchDone ? children : (<Loading />)}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;