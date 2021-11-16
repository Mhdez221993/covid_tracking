import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to the covind 19 trakin app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the covind 19 trakin app/i);
  expect(linkElement).toBeInTheDocument();
});
