import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

const StyledContainer = styled.span`
  display: flex;
  flex-direction: row;
  max-width: fit-content;
  align-items: flex-start;
  justify-content: center;
`
const StyledName = styled.span`
  font-size: 2rem;
`

const Options = ({ name, index, selected, running, color, handleCheck }) => {
  return (
    <StyledContainer>
      <Checkbox
        checked={selected}
        disabled={running}
        color={color}
        onChange={() => { handleCheck(index) }}
      />
      <StyledName>{name}</StyledName>
    </StyledContainer>
  );
};

export default Options;