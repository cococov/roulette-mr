import React from 'react';
import { StyledSecondaryName } from './style';

const Secondary = ({ value, robin }) => <StyledSecondaryName robin={robin} >{value}</StyledSecondaryName>;

export default Secondary;