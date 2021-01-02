import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProvider } from '../../stores';
import { Roulette, RobinRoulette, ControlBar, Options, RobinOptions } from '../../components';
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
                <RobinRoulette />
              </WheelsContainer>
            </RouletteContainer>
            <OptionsContainer>
              <Options />
              <RobinOptions />
            </OptionsContainer>
          </MainContainer>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
