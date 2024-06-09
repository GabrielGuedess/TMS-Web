import { render } from '@testing-library/react';

import { IncidentGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/Incident/create', () => ({
  IncidentGeneral: jest.fn(),
}));

describe('<IncidentGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <IncidentGeneral
        data={{
          getIncident: {
            id: '',
            created_by: '',
            updated_by: '',
            description: '',
            date_incident: '',
            date_resolved: '',
            order_process_id: '',
            __typename: 'IncidentModel',
            OrderProcessing: {
              id: '',
              order_processing_number: '',
              __typename: 'OrderProcessingModel',
            },
            updated_at: '',
            created_at: '',
          },
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
