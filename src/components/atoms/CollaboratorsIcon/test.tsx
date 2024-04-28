import { render } from '@testing-library/react';

import { CollaboratorsIcon } from '.';

describe('<CollaboratorsIcon />', () => {
  it('should render the collaborators icon correctly', () => {
    const { container } = render(<CollaboratorsIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
