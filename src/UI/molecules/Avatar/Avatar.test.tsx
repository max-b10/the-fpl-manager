import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Avatar, AvatarImage } from './Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).not.toBe(null);
  });
  it('renders AvatarImage with correct src and alt', () => {
    render(<AvatarImage src="test.jpg" alt="Test Image" />);
    const avatarImageElement = screen.getByRole('img', { name: 'Test Image' });
    expect(avatarImageElement).toBeInTheDocument();
    expect(avatarImageElement).toHaveAttribute('src', 'test.jpg');
  });
});
