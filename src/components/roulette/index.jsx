import React, { useEffect, useRef, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../stores';
import Top from './top';
import Main from './main';
import Bottom from './bottom';

const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
`

const Roulette = () => {
  const { selected, running, randomOptions, setSelected, setRunning } = useContext(AppContext);
  const runningRef = useRef(false);
  const intervalRef = useRef(null);

  const getNext = useCallback(
    (selected, length) => (selected + 1) === length ? 0 : (selected + 1),
    []
  );

  const getPrev = useCallback(
    (selected, length) => (selected - 1) === -1 ? (length - 1) : (selected - 1),
    []
  );

  const random = (min, max) => Math.floor((Math.random() * max) + min);

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
  }, [running, getNext, setSelected, setRunning, randomOptions.length])

  const prev = (selected, length) => randomOptions[getPrev(selected, length)];
  const main = (selected) => randomOptions[selected];
  const next = (selected, length) => randomOptions[getNext(selected, length)];

  return (
    <StyledContainer>
      <Top value={prev(selected, randomOptions.length)} />
      <Main value={main(selected)} />
      <Bottom value={next(selected, randomOptions.length)} />
    </StyledContainer>
  );
};

export default Roulette;