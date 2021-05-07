import styled from 'styled-components';

export const StyledContainer = styled.span`
  display: flex;
  flex-direction: row;
  max-width: max-content;
  min-width: 100%;
  align-items: center;
  justify-content: flex-start;
`
export const StyledName = styled.span`
  font-size: ${({ size }) => `${size}rem` };
`

export const StyledBurden = styled.span`
  font-size: ${({ size }) => `${size}rem` };
  opacity: 0.6;
`

export const StyledNameContainer = styled.span`
  display: flex;
  min-width: 60%;
  justify-content: space-between;
`