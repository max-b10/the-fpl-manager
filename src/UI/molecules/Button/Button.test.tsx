import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('passes additional props to the button', () => {
    render(<Button disabled>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeDisabled();
  });
});
