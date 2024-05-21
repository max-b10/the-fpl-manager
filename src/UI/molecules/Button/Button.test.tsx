import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/test button/i);
    expect(buttonElement).to.not.be.null;
  });
});
