import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../stores';
import Option from './option';

const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: flex-start;
  justify-content: center;
`

const Options = () => {
  const { running, BASE_OPTIONS, selectedOptions, setSelectedOptions } = useContext(AppContext);

  const handleCheck = index => {
    setSelectedOptions((prev) => (
      prev.map((value, i) => i === index ? !value : value)
    ));
  };

  return (
    <StyledContainer>
      {BASE_OPTIONS.map(
        (option, index) => (
          <Option
            name={option}
            index={index}
            running={running}
            selected={selectedOptions[index]}
            handleCheck={handleCheck}
          >
            {option}
          </Option>
        ))}
    </StyledContainer>
  );
};

export default Options;