import { render } from '@testing-library/react';

import { SenderGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Sender/create', () => ({
  SenderGeneral: jest.fn(),
}));

describe('<SenderGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <SenderGeneral
        data={{
          getSender: {
            id: '',
            created_by: '',
            updated_by: '',
            legal_person_id: '',
            natural_person_id: '',
            __typename: 'SenderModel',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
