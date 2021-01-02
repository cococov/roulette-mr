import styled from 'styled-components';

export const StyledContainer = styled.span`
  display: flex;
  flex-direction: row;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
`
export const StyledName = styled.span`
  font-size: ${({ size }) => `${size}rem` };
`