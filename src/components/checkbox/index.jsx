import React from 'react';
import { Checkbox } from '@material-ui/core';
import { StyledContainer, StyledName, StyledBurden, StyledNameContainer } from './style';

const Options = ({
  name,
  index,
  selected,
  burden = 0,
  running,
  color,
  size = 2,
  isRobin = false,
  isBatman = false,
  handleCheck,
  handleChangeRobin,
  handleChangeBatman
}) => {
  return (
    <StyledContainer>
      <Checkbox
        checked={isRobin}
        disabled={running}
        color={'default'}
        onChange={() => { handleChangeRobin(name) }}
        checkedIcon={<img alt="Robin" src="/robin.png" width="24" />}
        icon={<img alt="" src="/empty.png" width="24" height="24" />}
      />
      <Checkbox
        checked={isBatman}
        disabled={running}
        color={'default'}
        onChange={() => { handleChangeBatman(name) }}
        checkedIcon={<img alt="Batman" src="/batman.png" width="24" />}
        icon={<img alt="" src="/empty.png" width="24" height="24" />}
      />
      <Checkbox
        checked={selected && !isBatman && !isRobin}
        disabled={running || isBatman || isRobin}
        color={(isBatman || isRobin) ? 'default' : color}
        onChange={() => { handleCheck(index) }}
      />
      <StyledNameContainer>
        <StyledName size={size} >{`${name}`}</StyledName>
        <StyledBurden size={size} >{`${burden ? burden.length : 0}`}</StyledBurden>
      </StyledNameContainer>
    </StyledContainer>
  );
};

export default Options;