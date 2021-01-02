import React from 'react';
import styled from 'styled-components';

const StyledName = styled.span`
  font-size: ${({ robin }) => robin ? '1rem' : '2rem' };
  font-weight: 500;
  margin-top: 0;
  padding: 0;
  color: #AAAAAA;
`

const Bottom = ({ value, robin }) => <StyledName robin={robin} >{value}</StyledName>;

export default Bottom;