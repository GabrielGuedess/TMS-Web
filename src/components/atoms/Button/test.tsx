import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the button correctly', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button is loading', () => {
    render(<Button isLoading />);

    const loading = screen.getByLabelText('Loading');

    expect(loading).toBeInTheDocument();
  });

  it('should render the button with children', () => {
    render(<Button>Button</Button>);

    const button = screen.getByText('Button');

    expect(button).toBeInTheDocument();
  });

  it('should render the button with color dark', () => {
    render(
      <Button color="dark" variant="solid">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-shark-950');
  });

  it('should render the button with color info', () => {
    render(
      <Button color="info" variant="solid">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-cobalt-700');
  });

  it('should render the button with color danger', () => {
    render(
      <Button color="danger" variant="solid">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-danger-500');
  });

  it('should render the button with color success', () => {
    render(
      <Button color="success" variant="solid">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-success-500');
  });

  it('should render the button with color warning', () => {
    render(
      <Button color="warning" variant="solid">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-warning-500');
  });

  it('should render the button with color secondary', () => {
    render(
      <Button variant="solid" color="secondary">
        Button
      </Button>,
    );

    const button = screen.getByLabelText('Button Background');

    expect(button).toHaveClass('bg-dark-200');
  });
});
