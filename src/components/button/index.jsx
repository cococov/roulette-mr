
import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ children, variant, color, type, onClick }) => {
  return (
    <StyledButton variant={variant} color={color} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  type: 'button',
  onClick: () => {},
};

export default Button;