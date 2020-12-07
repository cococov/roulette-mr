import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProvider } from '../../stores';
import { Roulette, ControlBar } from '../../components';
import { theme } from '../../styles';

const RouletteContainer = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
`

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <RouletteContainer>
            <ControlBar />
            <Roulette />
          </RouletteContainer>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
