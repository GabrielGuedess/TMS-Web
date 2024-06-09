import { render } from '@testing-library/react';

import { RecipientGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Recipient/create', () => ({
  RecipientGeneral: jest.fn(),
}));

describe('<RecipientGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <RecipientGeneral
        data={{
          getRecipient: {
            id: '',
            created_by: '',
            updated_by: '',
            legal_person_id: '',
            natural_person_id: '',
            __typename: 'RecipientModel',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
