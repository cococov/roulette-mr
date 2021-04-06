import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Button from '../button';
import ClipBoardButton from '../clipboardButton';
import { useMediaQuery } from '@material-ui/core';
import { StyledContainer, ButtonContainer, ClipBoardButtonWrapper, ButtonWrapper } from './style';

const Roulette = () => {
  const { setRunning, running, done, setDone } = useContext(AppContext);
  const small = useMediaQuery('(max-width:567px)');

  return (
    <StyledContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={() => { setRunning(true); setDone(false); }}>START</Button>
        </ButtonWrapper>
        <ClipBoardButtonWrapper style={{ visibility: (done && !small) ? '' : 'hidden' }}>
          <ClipBoardButton disabled={running} />
        </ClipBoardButtonWrapper>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default Roulette;