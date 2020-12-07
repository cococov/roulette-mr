import React from 'react';
import styled from 'styled-components';

const StyledName = styled.span`
  font-size: 5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Main = ({ value }) => <StyledName>{value}</StyledName>;

export default Main;