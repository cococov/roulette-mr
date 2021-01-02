import React from 'react';
import { Checkbox } from '@material-ui/core';
import { StyledContainer, StyledName } from './style';

const Options = ({ name, index, selected, running, color, size = 2, handleCheck }) => {
  return (
    <StyledContainer>
      <Checkbox
        checked={selected}
        disabled={running}
        color={color}
        onChange={() => { handleCheck(index) }}
      />
      <StyledName size={size} >{name}</StyledName>
    </StyledContainer>
  );
};

export default Options;