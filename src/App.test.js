import { render, screen } from '@testing-library/react';
import App from './App';

test('renders choose category text', () => {
  render(<App />);
  const linkElement = screen.getByText(/choose category/i);
  expect(linkElement).toBeInTheDocument();
});
