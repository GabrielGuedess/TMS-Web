import { render } from '@testing-library/react';
import * as Select from '@radix-ui/react-select';

import { SelectItem } from '.';

describe('<SelectItem />', () => {
  it('should render the select item correctly', () => {
    const { container } = render(
      <Select.Root open>
        <Select.Content>
          <SelectItem value="value">value</SelectItem>
        </Select.Content>
      </Select.Root>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
