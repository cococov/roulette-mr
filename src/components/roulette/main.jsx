import React from 'react';
import { StyledMainName } from './style';

const Main = ({ value, robin }) => <StyledMainName robin={robin} >{value}</StyledMainName>;

export default Main;