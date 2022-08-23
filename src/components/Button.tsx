import styled from 'styled-components';
import { color } from '../theme/color';
import { spacing } from '../theme/spacing';

export const Button = styled.button`
  color: ${color('primary.900')};
  text-transform: uppercase;
  background-color: transparent;
  height: ${spacing(8)};
  border: ${color('primary.900')} solid ${spacing(0.5)};
  border-radius: ${spacing(1)};
`