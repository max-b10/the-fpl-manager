import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/test button/i);
    expect(buttonElement).to.not.be.null;
  });
  it('calls onClick prop when clicked', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(clicked).toBe(true);
  });
});
