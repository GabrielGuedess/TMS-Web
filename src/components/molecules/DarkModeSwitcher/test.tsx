import { ThemeProvider } from 'next-themes';

import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import { render } from 'utils/tests/helpers';

import { DarkModeSwitcher } from '.';

describe('<DarkModeSwitcher />', () => {
  it('should render the dark mode switcher correctly', async () => {
    const { container } = render(
      <ThemeProvider>
        <DarkModeSwitcher />
      </ThemeProvider>,
      { theme: 'system' },
    );

    const button = screen.getByLabelText('switch');

    expect(button.getAttribute('aria-checked')).toBe('false');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the dark mode switcher light', async () => {
    const { container } = render(
      <ThemeProvider>
        <DarkModeSwitcher />
      </ThemeProvider>,
      { theme: 'light' },
    );

    const button = screen.getByLabelText('switch');

    expect(button.getAttribute('aria-checked')).toBe('false');

    await userEvent.click(button);

    await waitFor(() => {
      expect(button.getAttribute('aria-checked')).toBe('true');
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the dark mode switcher dark', async () => {
    render(
      <ThemeProvider>
        <DarkModeSwitcher />
      </ThemeProvider>,
      { theme: 'dark' },
    );

    const button = screen.getByLabelText('switch');

    expect(button.getAttribute('aria-checked')).toBe('true');

    await userEvent.click(button);

    await waitFor(() => {
      expect(button.getAttribute('aria-checked')).toBe('false');
    });
  });
});
