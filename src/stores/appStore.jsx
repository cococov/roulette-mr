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
  const [baseOptionsId, setBaseOptionsId] = useState([]);
  const [baseOptionsBurden, setBaseOptionsBurden] = useState([]);
  const [isFetchDone, setFetchDone] = useState(false);

  const [selected, setSelected] = useState(0);
  const [randomOptions, setRandomOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [batman, setBatman] = useState('');
  const [robin, setRobin] = useState('');

  /* Load resources */
  const getBurden = useCallback(async () => {
    const URL = 'https://gitlab.com/api/v4/projects/3310437/merge_requests?state=opened'
    const apiKey = process.env.REACT_APP_GITLAB_API_KEY
    let result = [];

    await Promise.all(baseOptionsId.map(async (option, index) => {
      let rawResponse = await fetch(
        `${URL}&assignee_id=${option}&not[author_username]=bukhr-tech`,
        { method: 'GET', headers: { 'Authorization': `Bearer ${apiKey}` } }
      );
      let response = await rawResponse.json();
      result[index] = response;
    }));

    setBaseOptionsBurden(result);
  }, [baseOptionsId]);

  useLayoutEffect(() => {
    let ref = firebase.database().ref(`baseOptions`);
    ref.on('value', snapshot => {
      const result = snapshot.val();
      result && setBaseOptions(result);
      result && setSelectedOptions(result);
      setHowManyAreDone(prev => prev + 1);
    });

    let ref2 = firebase.database().ref(`baseOptionsId`);
    ref2.on('value', snapshot => {
      const result = snapshot.val();
      result && setBaseOptionsId(result);
      setHowManyAreDone(prev => prev + 1);
    });

    let ref3 = firebase.database().ref(`batman`);
    ref3.on('value', snapshot => {
      const result = snapshot.val();
      setBatman(result);
      setHowManyAreDone(prev => prev + 1);
    });

    let ref4 = firebase.database().ref(`robin`);
    ref4.on('value', snapshot => {
      const result = snapshot.val();
      setRobin(result);
      setHowManyAreDone(prev => prev + 1);
    });
  }, []);

  useEffect(() => {
    const finishLoad = async () => {
      if (howManyAreDone === 4) {
        await getBurden();
        setFetchDone(true);
      }
    }
    finishLoad();
  }, [howManyAreDone, getBurden]);

  /* Randomize options */
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
    if (running) {
      randomizeOptions();
    } else {
      getBurden();
    }
  }, [randomizeOptions, getBurden, running])

  /* Handle Batman and Robin selection */
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
        baseOptionsBurden,
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