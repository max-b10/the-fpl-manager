import { render, fireEvent, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Input } from './Input';

function nextTick() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
  it('calls onChange prop when text is entered', async () => {
    let value = '';
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      value = event.target.value;
    };
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    await nextTick();
    expect(value).toBe('test');
  });
});
