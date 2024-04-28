import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('<Input />', () => {
  it('should render the input correctly', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the input with error', () => {
    render(<Input errorMessage="Error" isInvalid />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
