import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Option from '../checkbox';
import { StyledContainer } from './style';

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
            key={option}
            name={option}
            index={index}
            running={running}
            color={running ? 'default' : 'primary'}
            size={2}
            selected={!!selectedOptions[index]}
            handleCheck={handleCheck}
          >
            {option}
          </Option>
        ))}
    </StyledContainer>
  );
};

export default Options;