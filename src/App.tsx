import React from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import { color } from './theme/color';
import { spacing } from './theme/spacing';
import { GlowTheme } from "./theme/Theme";
const App = () => {
  return (
    <GlowTheme>
      <Card />
    </GlowTheme>
  );
}

export default App;
