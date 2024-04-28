import { render } from '@testing-library/react';

import { Glow } from '.';

describe('<Glow />', () => {
  it('should render the glow correctly', () => {
    const { container } = render(<Glow>Test</Glow>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
