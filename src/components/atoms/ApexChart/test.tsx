import { render, waitFor } from '@testing-library/react';

import { ApexChart } from '.';
import { mockApexOptions } from './mock';

describe('<ApexChart />', () => {
  it('should render the apex chart correctly', async () => {
    await waitFor(() => {
      const { container } = render(
        <ApexChart
          series={[
            {
              name: 'Product One',
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
            {
              name: 'Product Two',
              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
          ]}
          type="area"
          width={100}
          height={100}
          options={mockApexOptions}
        />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
