import { render } from '@testing-library/react';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the container correctly', () => {
    const { container } = render(
      <Container>
        <h1>Test</h1>
      </Container>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
