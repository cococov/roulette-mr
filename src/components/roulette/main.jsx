import React from 'react';
import styled from 'styled-components';

const StyledName = styled.span`
  font-size:  ${({ robin }) => robin ? '2.5rem' : '5rem' };
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Main = ({ value, robin }) => <StyledName robin={robin} >{value}</StyledName>;

export default Main;