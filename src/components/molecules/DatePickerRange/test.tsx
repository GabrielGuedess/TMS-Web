import dayjs from 'dayjs';
import { render } from '@testing-library/react';

import { DatePickerRange } from '.';

const setDate = jest.fn();

describe('<DatePickerRange />', () => {
  it('should render the date picker range correctly', () => {
    const { container } = render(
      <DatePickerRange
        date={{
          from: dayjs().toDate(),
          to: dayjs().add(1, 'day').toDate(),
        }}
        label="Test"
        setDate={setDate}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
