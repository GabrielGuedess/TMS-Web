import { render } from '@testing-library/react';

import { CurrentAvatar } from '.';

jest.mock('apollo/client', () => ({
  apollo: () => ({
    query: () => ({
      data: {
        me: {
          personal: { avatar_url: 'http://photo.jpg' },
        },
      },
    }),
  }),
}));

describe('<CurrentAvatar />', () => {
  it('should render the current avatar correctly', async () => {
    const { container } = render(await CurrentAvatar({ title: 'avatar' }));

    expect(container.firstChild).toMatchSnapshot();
  });
});
