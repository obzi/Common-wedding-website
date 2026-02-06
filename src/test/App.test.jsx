import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import App from '../App';

const renderApp = () => {
  return render(
    <HashRouter>
      <App />
    </HashRouter>
  );
};

describe('Wedding Website Template', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('Authorization Gate', () => {
    it('renders login form when not authorized', () => {
      renderApp();
      expect(screen.getByTestId('auth-card')).toBeInTheDocument();
      expect(screen.getByTestId('password-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    it('shows welcome message', () => {
      renderApp();
      expect(screen.getByText('Welcome')).toBeInTheDocument();
      expect(screen.getByText(/enter the password/i)).toBeInTheDocument();
    });

    it('allows access with correct password', async () => {
      const user = userEvent.setup();
      renderApp();
      
      await user.type(screen.getByTestId('password-input'), 'wedding25');
      await user.click(screen.getByTestId('submit-btn'));
      
      await waitFor(() => {
        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
      });
    });

    it('shows error for wrong password', async () => {
      const user = userEvent.setup();
      renderApp();
      
      await user.type(screen.getByTestId('password-input'), 'wrongpassword');
      await user.click(screen.getByTestId('submit-btn'));
      
      await waitFor(() => {
        expect(screen.getByText(/incorrect password/i)).toBeInTheDocument();
      });
    });

    it('stores password in localStorage on success', async () => {
      const user = userEvent.setup();
      renderApp();
      
      await user.type(screen.getByTestId('password-input'), 'wedding25');
      await user.click(screen.getByTestId('submit-btn'));
      
      await waitFor(() => {
        expect(localStorage.getItem('wedding_auth')).toBe('wedding25');
      });
    });

    it('auto-authorizes from localStorage', () => {
      localStorage.setItem('wedding_auth', 'wedding25');
      renderApp();
      
      expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    });
  });

  describe('Main Content (after authorization)', () => {
    beforeEach(() => {
      localStorage.setItem('wedding_auth', 'wedding25');
    });

    it('renders navigation', () => {
      renderApp();
      expect(screen.getByTestId('navigation')).toBeInTheDocument();
      expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('renders hero section with names', () => {
      renderApp();
      expect(screen.getByTestId('hero-section')).toBeInTheDocument();
      expect(screen.getAllByText('Jane & John').length).toBeGreaterThan(0);
      expect(screen.getByText(/December 31, 2025/i)).toBeInTheDocument();
    });

    it('renders all main sections', () => {
      renderApp();
      
      expect(screen.getAllByText('Our Story').length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Venue/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Accommodation/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText('RSVP').length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Dress Code/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText('Schedule').length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Parking/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Share Your Photos/i)).toBeInTheDocument();
      expect(screen.getAllByText('Gifts').length).toBeGreaterThan(0);
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('renders color palette in dresscode section', () => {
      renderApp();
      
      for (let i = 0; i < 6; i++) {
        expect(screen.getByTestId(`color-${i}`)).toBeInTheDocument();
      }
    });

    it('renders schedule items', () => {
      renderApp();
      
      for (let i = 0; i < 8; i++) {
        expect(screen.getByTestId(`schedule-item-${i}`)).toBeInTheDocument();
      }
    });

    it('renders contact information', () => {
      renderApp();
      expect(screen.getByTestId('contact-jane')).toBeInTheDocument();
      expect(screen.getByTestId('contact-john')).toBeInTheDocument();
    });

    it('renders footer', () => {
      renderApp();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders inspiration link', () => {
      renderApp();
      expect(screen.getByTestId('inspiration-link')).toBeInTheDocument();
    });

    it('has external links with correct attributes', () => {
      renderApp();
      
      const rsvpLink = screen.getByTestId('rsvp-link');
      expect(rsvpLink).toHaveAttribute('target', '_blank');
      expect(rsvpLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      localStorage.setItem('wedding_auth', 'wedding25');
    });

    it('renders desktop navigation links', () => {
      renderApp();
      
      expect(screen.getByTestId('nav-about')).toBeInTheDocument();
      expect(screen.getByTestId('nav-place')).toBeInTheDocument();
      expect(screen.getByTestId('nav-accommodation')).toBeInTheDocument();
      expect(screen.getByTestId('nav-rsvp')).toBeInTheDocument();
      expect(screen.getByTestId('nav-dresscode')).toBeInTheDocument();
      expect(screen.getByTestId('nav-program')).toBeInTheDocument();
    });

    it('renders mobile menu button', () => {
      renderApp();
      expect(screen.getByTestId('mobile-menu-btn')).toBeInTheDocument();
    });

    it('toggles mobile menu on click', async () => {
      const user = userEvent.setup();
      renderApp();
      
      await user.click(screen.getByTestId('mobile-menu-btn'));
      
      await waitFor(() => {
        expect(screen.getByTestId('mobile-nav-about')).toBeInTheDocument();
      });
    });
  });

  describe('Images', () => {
    beforeEach(() => {
      localStorage.setItem('wedding_auth', 'wedding25');
    });

    it('renders couple image', () => {
      renderApp();
      expect(screen.getByTestId('couple-image')).toBeInTheDocument();
    });

    it('renders venue image', () => {
      renderApp();
      expect(screen.getByTestId('venue-image')).toBeInTheDocument();
    });

    it('renders accommodation image', () => {
      renderApp();
      expect(screen.getByTestId('accommodation-image')).toBeInTheDocument();
    });

    it('renders parking image', () => {
      renderApp();
      expect(screen.getByTestId('parking-image')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      localStorage.setItem('wedding_auth', 'wedding25');
    });

    it('has scroll down button with aria-label', () => {
      renderApp();
      expect(screen.getByLabelText('Scroll down')).toBeInTheDocument();
    });

    it('has toggle menu button with aria-label', () => {
      renderApp();
      expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
    });
  });
});
