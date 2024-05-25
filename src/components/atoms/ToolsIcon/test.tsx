import { render, screen } from '@testing-library/react';

import { ToolsIcon } from '.';

describe('<ToolsIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<ToolsIcon />);

    expect(
      screen.getByRole('heading', { name: /toolsicon/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
