import styled from 'styled-components';

export const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: ${({ robin }) => robin ? '12.5rem' : '25rem' };
  align-items: center;
  justify-content: center;
  position: relative;
`

export const StyledSecondaryName = styled.span`
  font-size: ${({ robin }) => robin ? '1rem' : '2rem' };
  font-weight: 500;
  margin-top: 0;
  padding: 0;
  color: #AAAAAA;
`

export const StyledMainName = styled.span`
  font-size:  ${({ robin }) => robin ? '2.5rem' : '5rem' };
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
`