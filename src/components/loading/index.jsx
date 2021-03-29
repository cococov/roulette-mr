
import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './style';
import BukLoader from './buk-loader.svg';


const Loading = () => {
  return (
    <StyledLoading>
      <img src={BukLoader} alt="Buk Loader" />
    </StyledLoading>
  );
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};

Loading.defaultProps = {
};

export default Loading;