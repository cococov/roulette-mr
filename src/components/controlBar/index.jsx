import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Button from '../button';
import { StyledContainer, ButtonContainer } from './style';

const Roulette = () => {
  const { setRunning } = useContext(AppContext);

  return (
    <StyledContainer>
      <ButtonContainer>
        <Button onClick={() => { setRunning(true) }}>START</Button>
      </ButtonContainer>
      {/*<StyledForm>
        <StyledTextField label="Name" variant="outlined" />
        <StyledTextField label="MR Label" variant="outlined" />
        <StyledTextField label="MR Link" variant="outlined" />
      </StyledForm>*/}
    </StyledContainer>
  );
};

export default Roulette;