import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Inspiration from '../Inspiration';

const renderInspiration = () => {
  return render(
    <MemoryRouter initialEntries={['/inspiration']}>
      <Routes>
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Inspiration Page', () => {
  it('renders inspiration page', () => {
    renderInspiration();
    expect(screen.getByTestId('inspiration-page')).toBeInTheDocument();
  });

  it('displays page title', () => {
    renderInspiration();
    expect(screen.getByText('Outfit Inspiration')).toBeInTheDocument();
  });

  it('displays description text', () => {
    renderInspiration();
    expect(screen.getByText(/Get inspired for our special day/i)).toBeInTheDocument();
  });

  it('renders back to wedding link in header', () => {
    renderInspiration();
    expect(screen.getByTestId('back-link')).toBeInTheDocument();
    expect(screen.getByText('Back to Wedding')).toBeInTheDocument();
  });

  it('renders all outfit images', () => {
    renderInspiration();
    
    for (let i = 0; i < 6; i++) {
      expect(screen.getByTestId(`outfit-image-${i}`)).toBeInTheDocument();
    }
  });

  it('displays ladies and gentlemen labels', () => {
    renderInspiration();
    
    expect(screen.getAllByText('Ladies').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Gentlemen').length).toBeGreaterThan(0);
  });

  it('renders color palette', () => {
    renderInspiration();
    
    expect(screen.getByText('Suggested Colors')).toBeInTheDocument();
    expect(screen.getByText('Light Sage')).toBeInTheDocument();
    expect(screen.getByText('Sage')).toBeInTheDocument();
    expect(screen.getByText('Deep Sage')).toBeInTheDocument();
    expect(screen.getByText('Cream')).toBeInTheDocument();
    expect(screen.getByText('Warm Beige')).toBeInTheDocument();
  });

  it('renders tips section', () => {
    renderInspiration();
    
    expect(screen.getByText('Helpful Tips')).toBeInTheDocument();
    expect(screen.getByText(/Avoid bright white or black/i)).toBeInTheDocument();
    expect(screen.getByText(/Comfortable shoes/i)).toBeInTheDocument();
  });

  it('renders back to wedding button', () => {
    renderInspiration();
    expect(screen.getByTestId('back-to-wedding-btn')).toBeInTheDocument();
  });

  it('renders footer with date', () => {
    renderInspiration();
    expect(screen.getByText(/December 31, 2025/i)).toBeInTheDocument();
  });
});
