import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  && {
    & span {
      padding-left: 1rem;
      padding-right: 1rem;
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
    ${({ theme, color }) =>
      color === 'primary' && { backgroundColor: theme.palette.primary.main }}
  }
`;