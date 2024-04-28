import { render } from '@testing-library/react';

import { DatePicker } from '.';

const setDate = jest.fn();

describe('<DatePicker />', () => {
  it('should render the date picker correctly', () => {
    const { container } = render(
      <DatePicker label="Date" setDate={setDate} date={new Date()} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
