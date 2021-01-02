import React from 'react';
import { Checkbox } from '@material-ui/core';
import { StyledContainerRow, StyledName } from './style';

const Options = ({ name, index, selected, running, color, handleCheck }) => {
  return (
    <StyledContainerRow>
      <Checkbox
        checked={selected}
        disabled={running}
        color={color}
        onChange={() => { handleCheck(index) }}
      />
      <StyledName>{name}</StyledName>
    </StyledContainerRow>
  );
};

export default Options;