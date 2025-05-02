/* eslint-disable no-undef */


import React from 'react';
import { render } from '@testing-library/react';
import ToggleButtonComponent from './ToggleButton';

test('muestra "Dark Mode" cuando el tema es claro', () => {
  const mockToggle = jest.fn();
  const theme = { darkMode: false };

  const { getByText } = render(
    <ToggleButtonComponent toggleTheme={mockToggle} theme={theme} />
  );

  expect(getByText('Dark Mode')).toBeInTheDocument();
});
