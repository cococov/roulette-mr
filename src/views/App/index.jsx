import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProvider } from '../../stores';
import { Roulette, ControlBar, Options } from '../../components';
import { theme } from '../../styles';

const MainContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-width: 100%;
  `

const RouletteContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 540px) {
    margin-top: 3rem;
  }
  `

const OptionsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 540px) {
    margin-top: 5rem;
  }
`

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <MainContainer>
            <RouletteContainer>
              <ControlBar />
              <Roulette />
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
