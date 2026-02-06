import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';

describe('UI Components', () => {
  describe('Button', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies primary variant by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByText('Primary');
      expect(button).toHaveClass('bg-theme-600');
    });

    it('applies secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByText('Secondary');
      expect(button).toHaveClass('bg-theme-100');
    });

    it('applies outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByText('Outline');
      expect(button).toHaveClass('border-theme-400');
    });

    it('applies different sizes', () => {
      const { rerender } = render(<Button size="sm">Small</Button>);
      expect(screen.getByText('Small')).toHaveClass('px-4 py-2');
      
      rerender(<Button size="lg">Large</Button>);
      expect(screen.getByText('Large')).toHaveClass('px-8 py-3');
    });

    it('handles click events', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(<Button onClick={handleClick}>Click</Button>);
      await user.click(screen.getByText('Click'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be disabled', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByText('Disabled')).toBeDisabled();
    });
  });

  describe('Card', () => {
    it('renders with children', () => {
      render(<Card><span>Card content</span></Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Card className="custom-class"><span>Content</span></Card>);
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('custom-class');
    });

    it('has proper styling', () => {
      render(<Card data-testid="card"><span>Content</span></Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('rounded-2xl');
      expect(card).toHaveClass('shadow-lg');
    });
  });

  describe('CardContent', () => {
    it('renders with children', () => {
      render(<CardContent><span>Content</span></CardContent>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('has padding', () => {
      render(<CardContent data-testid="card-content"><span>Content</span></CardContent>);
      expect(screen.getByTestId('card-content')).toHaveClass('p-6');
    });
  });

  describe('Input', () => {
    it('renders input element', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('handles value changes', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      
      render(<Input onChange={handleChange} />);
      await user.type(screen.getByRole('textbox'), 'test');
      
      expect(handleChange).toHaveBeenCalled();
    });

    it('applies custom className', () => {
      render(<Input className="custom-class" data-testid="input" />);
      expect(screen.getByTestId('input')).toHaveClass('custom-class');
    });

    it('supports password type', () => {
      render(<Input type="password" data-testid="password-input" />);
      expect(screen.getByTestId('password-input')).toHaveAttribute('type', 'password');
    });

    it('can be focused', () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId('input');
      input.focus();
      expect(input).toHaveFocus();
    });
  });
});
