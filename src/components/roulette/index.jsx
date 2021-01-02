import React, { useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../stores';
import { StyledContainer } from './style';
import Secondary from './secondary';
import Main from './main';

// Obtiene la siguiente posición de una array circularmente.
const getNext = (selected, length) => (selected + 1) === length ? 0 : (selected + 1);
// Obtiene la anterior posición de una array circularmente.
const getPrev = (selected, length) => (selected - 1) === -1 ? (length - 1) : (selected - 1);
// Genera un número aleatorio entero, en un rango definido.
const random = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

/**
 * Ruleta para seleccionar Batman.
 */
const Roulette = () => {
  const { selected, running, randomOptions, setSelected, setRunning } = useContext(AppContext);
  const runningRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && !runningRef.current) {
      runningRef.current = true;

      intervalRef.current = setInterval(() => {
        setSelected((prev) => getNext(prev, randomOptions.length));
      }, 200);

      setTimeout(() => { setRunning(false) }, random(3 * 1000, 6 * 1000));
    } else if (!running) {
      runningRef.current = false;
      clearInterval(intervalRef.current);
    }
  }, [running, setSelected, setRunning, randomOptions.length])

  const prev = (selected, length) => randomOptions[getPrev(selected, length)];
  const main = (selected) => randomOptions[selected];
  const next = (selected, length) => randomOptions[getNext(selected, length)];

  return (
    <StyledContainer>
      <Secondary value={prev(selected, randomOptions.length)} />
      <Main value={main(selected)} />
      <Secondary value={next(selected, randomOptions.length)} />
    </StyledContainer>
  );
};

/**
 * Ruleta para seleccionar Robin.
 */
export const RobinRoulette = () => {
  const { selectedRobin, running, randomRobinOptions, isRobinChecked, setSelectedRobin } = useContext(AppContext);
  const runningRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && !runningRef.current) {
      runningRef.current = true;

      intervalRef.current = setInterval(() => {
        setSelectedRobin((prev) => getNext(prev, randomRobinOptions.length));
      }, 200);

    } else if (!running) {
      runningRef.current = false;
      clearInterval(intervalRef.current);
    }
  }, [running, setSelectedRobin, randomRobinOptions.length])

  const prev = (selected, length) => randomRobinOptions[getPrev(selected, length)];
  const main = (selected) => randomRobinOptions[selected];
  const next = (selected, length) => randomRobinOptions[getNext(selected, length)];

  return (
    <>
      {isRobinChecked ? (
          <StyledContainer robin>
            <Secondary value={prev(selectedRobin, randomRobinOptions.length)} robin />
            <Main value={main(selectedRobin)} robin />
            <Secondary value={next(selectedRobin, randomRobinOptions.length)} robin />
          </StyledContainer>) : <></>
      }
    </>
  );
};

export default Roulette;