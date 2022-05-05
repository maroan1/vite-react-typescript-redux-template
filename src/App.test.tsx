import { describe, expect, it } from 'vitest';
import App from './App';
import { store } from './store';
import { render, screen, userEvent } from './utils/test-utils';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />, store);
    expect(screen.getByText(/hello vite \+ react!/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />, store);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });
});
