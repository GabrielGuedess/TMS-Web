import { render } from '@testing-library/react';

import { AbsenteeismIcon } from '.';

describe('<AbsenteeismIcon />', () => {
  it('should render the absenteeism icon correctly', () => {
    const { container } = render(<AbsenteeismIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
