import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { Alert, AlertDescription, AlertTitle } from './Alert';

describe('Alert', () => {
  it('renders without crashing', () => {
    render(<Alert />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
  });
  it('renders AlertTitle with correct text', () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const alertTitleElement = screen.getByText(/test title/i);
    expect(alertTitleElement).toBeInTheDocument();
  });
  it('renders AlertDescription with correct text', () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const alertDescriptionElement = screen.getByText(/test description/i);
    expect(alertDescriptionElement).toBeInTheDocument();
  });
});
