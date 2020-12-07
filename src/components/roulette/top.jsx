import React from 'react';
import styled from 'styled-components';

const StyledName = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0;
  padding: 0;
  color: #AAAAAA;
`

const Top = ({ value }) => <StyledName>{value}</StyledName>;

export default Top;