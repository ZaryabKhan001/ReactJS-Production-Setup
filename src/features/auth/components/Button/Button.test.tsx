import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies correct primary variant', () => {
    render(<Button variant="primary">Test</Button>);
    const btn = screen.getByText('Test');
    expect(btn.className).toContain('bg-blue-600');
  });

  it('applies correct size', () => {
    render(<Button size="lg">Big Button</Button>);
    const btn = screen.getByText('Big Button');
    expect(btn.className).toContain('text-lg');
  });

  it('shows loading text when loading=true', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables button when loading', () => {
    render(<Button loading>Submit</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  it('fires click event when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Press</Button>);
    fireEvent.click(screen.getByText('Press'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire click when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button
        disabled
        onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
