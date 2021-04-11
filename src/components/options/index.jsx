import React, { useContext } from 'react';
import { AppContext } from '../../stores';
import Option from '../checkbox';
import { StyledContainer } from './style';

const Options = () => {
  const {
    running,
    baseOptions,
    batman,
    robin,
    selectedOptions,
    setSelectedOptions,
    handleChangeRobin,
    handleChangeBatman
  } = useContext(AppContext);

  const handleCheck = index => {
    setSelectedOptions((prev) => (
      prev.map((value, i) => {
        if (batman === baseOptions[i] || robin === baseOptions[i])
          return false;
        return (i === index) ? !value : value;
      })
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
              isRobin={robin === option}
              isBatman={batman === option}
              handleCheck={handleCheck}
              handleChangeRobin={handleChangeRobin}
              handleChangeBatman={handleChangeBatman}
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