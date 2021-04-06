
import React from 'react';
import { StyledLoading } from './style';
import BukLoader from './buk-loader.svg';


const Loading = () => {
  return (
    <StyledLoading>
      <img src={BukLoader} alt="Buk Loader" />
    </StyledLoading>
  );
};

export default Loading;