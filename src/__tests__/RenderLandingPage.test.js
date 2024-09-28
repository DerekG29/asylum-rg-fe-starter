import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';

import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders landing page', () => {
  render(<RenderLandingPage />);
  screen.debug();
});