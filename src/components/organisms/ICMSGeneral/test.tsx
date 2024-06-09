import { render } from '@testing-library/react';

import { ICMSGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/ICMS/create', () => ({
  ICMSGeneral: jest.fn(),
}));

describe('<ICMSGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <ICMSGeneral
        data={{
          getICMS: {
            id: '',
            aliquot: 0,
            created_by: '',
            updated_by: '',
            state_origin: '',
            effective_date: '',
            recipient_state: '',
            __typename: 'IcmsModel',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
