import styled from 'styled-components';

export const MainContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-width: 100%;
  `

export const WheelsContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  `

export const RouletteContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 540px) {
    margin-top: 3rem;
  }
  `

export const OptionsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  @media (max-width: 540px) {
    margin-top: 5rem;
  }
`
