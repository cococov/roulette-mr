import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 25rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
export const StyledForm = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
`
export const StyledTextField = styled(TextField)`
  & {
    width: 22rem;
    margin: 0.5rem!important
  }
`;

export const ButtonContainer = styled.span`
  margin-bottom: 1rem;
`;