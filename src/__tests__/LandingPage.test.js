import { LandingPage } from '../components/pages/Landing';

import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders landing page', () => {
  render(<LandingPage />);
  screen.debug();
});