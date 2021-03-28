import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProvider } from '../../stores';
import { Roulette, ControlBar, Options } from '../../components';
import { theme } from '../../styles';
import {
  MainContainer,
  WheelsContainer,
  RouletteContainer,
  OptionsContainer
} from './style';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <MainContainer>
            <RouletteContainer>
              <ControlBar />
              <WheelsContainer>
                <Roulette />
              </WheelsContainer>
            </RouletteContainer>
            <OptionsContainer>
              <Options />
            </OptionsContainer>
          </MainContainer>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
