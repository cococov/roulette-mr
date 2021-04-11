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
  const [howManyAreDone, setHowManyAreDone] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [baseOptions, setBaseOptions] = useState([]);
  const [isFetchDone, setFetchDone] = useState(false);

  const [selected, setSelected] = useState(0);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [batman, setBatman] = useState('');
  const [robin, setRobin] = useState('');

  useLayoutEffect(() => {
    let ref = firebase.database().ref(`baseOptions`);
    ref.on('value', snapshot => {
      const result = snapshot.val();
      result && setBaseOptions(result);
      result && setSelectedOptions(result);
      setHowManyAreDone(prev => prev + 1);
    });

    let ref2 = firebase.database().ref(`batman`);
    ref2.on('value', snapshot => {
      const result = snapshot.val();
      setBatman(result);
      setHowManyAreDone(prev => prev + 1);
    });

    let ref3 = firebase.database().ref(`robin`);
    ref3.on('value', snapshot => {
      const result = snapshot.val();
      setRobin(result);
      setHowManyAreDone(prev => prev + 1);
    });
  }, []);

  useEffect(() => {
    if(howManyAreDone === 3) setFetchDone(true);
  }, [howManyAreDone]);

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

  useEffect(() => {
    setSelectedOptions((prev) => prev.map((value, i) => batman === baseOptions[i] ? false : value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batman])

  useEffect(() => {
    setSelectedOptions((prev) => prev.map((value, i) => robin === baseOptions[i] ? false : value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [robin])

  const handleChangeBatman = async newBatman => {
    if (newBatman === batman) return false;
    const batmanRef = firebase.database().ref(`batman`);
    batmanRef.set(newBatman);
  };

  const handleChangeRobin = async newRobin => {
    if (newRobin === robin) return false;
    const robinRef = firebase.database().ref(`robin`);
    robinRef.set(newRobin);
  };


  return (
    <AppContext.Provider
      value={{
        done,
        robin,
        batman,
        running,
        selected,
        baseOptions,
        randomOptions,
        selectedOptions,
        setDone,
        setRunning,
        setSelected,
        setSelectedOptions,
        handleChangeRobin,
        handleChangeBatman,
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