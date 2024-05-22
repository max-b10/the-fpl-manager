import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
  });
});
