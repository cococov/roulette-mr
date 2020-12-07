import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { AppContext } from '../../stores';
import Button from '../button';

const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
const StyledForm = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
`
const StyledTextField = styled(TextField)`
  & {
    width: 22rem;
    margin: 0.5rem!important
  }
`;

const ButtonContainer = styled.span`
  margin-bottom: 1rem;
`;

const Roulette = () => {
  const { setRunning } = useContext(AppContext);

  return (
    <StyledContainer>
      <ButtonContainer>
        <Button onClick={() => { setRunning(true) }}>START</Button>
      </ButtonContainer>
      <StyledForm>
        <StyledTextField label="Name" variant="outlined" />
        <StyledTextField label="MR Label" variant="outlined" />
        <StyledTextField label="MR Link" variant="outlined" />
      </StyledForm>
    </StyledContainer>
  );
};

export default Roulette;