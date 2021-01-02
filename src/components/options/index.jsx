import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Option from './option';
import { StyledContainerColumn } from './style';

const Options = () => {
  const { running, BASE_OPTIONS, selectedOptions, setSelectedOptions } = useContext(AppContext);

  const handleCheck = index => {
    setSelectedOptions((prev) => (
      prev.map((value, i) => i === index ? !value : value)
    ));
  };

  return (
    <StyledContainerColumn>
      {BASE_OPTIONS.map(
        (option, index) => (
          <Option
            name={option}
            index={index}
            running={running}
            color="primary"
            selected={selectedOptions[index]}
            handleCheck={handleCheck}
          >
            {option}
          </Option>
        ))}
    </StyledContainerColumn>
  );
};

export const RobinOptions = () => {
  const { running, BASE_ROBIN_OPTIONS, selectedRobinOptions, setSelectedRobinOptions } = useContext(AppContext);

  const handleCheck = index => {
    setSelectedRobinOptions((prev) => (
      prev.map((value, i) => i === index ? !value : value)
    ));
  };

  return (
    <StyledContainerColumn>
      {BASE_ROBIN_OPTIONS.map(
        (option, index) => (
          <Option
            name={option}
            index={index}
            running={running}
            color="secondary"
            selected={selectedRobinOptions[index]}
            handleCheck={handleCheck}
          >
            {option}
          </Option>
        ))}
    </StyledContainerColumn>
  );
};

export default Options;