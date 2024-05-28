import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders without crashing', () => {
    render(<Label />);
    const labelElement = screen.getByTestId('label');
    expect(labelElement).toBeInTheDocument();
  });
});
