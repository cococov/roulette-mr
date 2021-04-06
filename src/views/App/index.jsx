import React from 'react';
import firebase from '@firebase/app';
import '@firebase/database';
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

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <AppProvider>
          <MainContainer id="screenshot-ref">
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
        </AppProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
