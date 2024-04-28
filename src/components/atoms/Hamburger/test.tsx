import { type ReactNode } from 'react';

import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import { Hamburger } from '.';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    onClick,
    children,
  }: {
    children: ReactNode;
    onClick: () => void;
  }) => (
    <button type="button" onClick={onClick} data-testid="Mock Link">
      {children}
    </button>
  ),
}));

describe('<Hamburger />', () => {
  it('should render the hamburger correctly', () => {
    const { container } = render(<Hamburger />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able change open/close the hamburger when clicked', async () => {
    render(<Hamburger />);

    const hamburger = screen.getByLabelText('Hamburger');

    await userEvent.click(hamburger);

    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });

  it('should be able change close the hamburger when clicked "dashboard" option', async () => {
    render(<Hamburger />);

    const hamburger = screen.getByLabelText('Hamburger');

    await userEvent.click(hamburger);

    const item = screen.getAllByTestId('Mock Link')[0];

    expect(hamburger.getAttribute('aria-expanded')).toBe('true');

    await userEvent.click(item);

    await waitFor(() => {
      expect(hamburger.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
