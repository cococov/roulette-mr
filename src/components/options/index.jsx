import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Option from '../checkbox';
import { StyledContainer } from './style';

const Options = () => {
  const { running, baseOptions, selectedOptions, setSelectedOptions } = useContext(AppContext);

  const handleCheck = index => {
    setSelectedOptions((prev) => (
      prev.map((value, i) => i === index ? !value : value)
    ));
  };

  return (
    <StyledContainer>
      {baseOptions.length > 0 ?
        baseOptions.map(
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
          )) : (
          <h1>No Data</h1>
        )}
    </StyledContainer>
  );
};

export default Options;