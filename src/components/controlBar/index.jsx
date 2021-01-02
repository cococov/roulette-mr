import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Button from '../button';
import RobinCheck from '../checkbox';
import { StyledContainer, ButtonContainer, RobinCheckContainer } from './style';

const Roulette = () => {
  const { running, isRobinChecked, setRobinChecked, setRunning } = useContext(AppContext);

  const handleChangeRobinChecked = () => {
    setRobinChecked(!isRobinChecked);
  };

  return (
    <StyledContainer>
      <ButtonContainer>
        <Button onClick={() => { setRunning(true) }}>START</Button>
        <RobinCheckContainer>
          <RobinCheck
            name="Robin"
            index="Robin-Check"
            running={running}
            color="default"
            size={1}
            selected={isRobinChecked}
            handleCheck={handleChangeRobinChecked}
          >
            Robin
          </RobinCheck>
        </RobinCheckContainer>
      </ButtonContainer>
      {/*<StyledForm>
        <StyledTextField label="Name" variant="outlined" />
        <StyledTextField label="MR Label" variant="outlined" />
        <StyledTextField label="MR Link" variant="outlined" />
      </StyledForm>*/}
    </StyledContainer>
  );
};

export default Roulette;