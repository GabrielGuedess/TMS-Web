import { render } from '@testing-library/react';

import { ButtonLinkMobile } from '.';

describe('<ButtonLinkMobile />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonLinkMobile href="/" title="gg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
