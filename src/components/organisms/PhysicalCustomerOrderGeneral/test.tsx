import { render } from '@testing-library/react';

import { PhysicalCustomerOrderGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/PhysicalCustomerOrder/create', () => ({
  PhysicalCustomerOrderGeneral: jest.fn(),
}));

describe('<PhysicalCustomerOrderGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <PhysicalCustomerOrderGeneral
        data={{
          getPhysicalCustomerOrderModel: {
            id: '',
            order: '',
            pis_tax: 0,
            icms_tax: 0,
            expenses: [],
            cofins_tax: 0,
            carrier_id: '',
            created_by: '',
            updated_by: '',
            calculate_icms: 0,
            calculated_pis: 0,
            quote_table_id: '',
            calculate_cofins: 0,
            total_receivable: 0,
            total_tax_payable: 0,
            total_shipping_cost: 0,
            physicalCustomerId: '',
            __typename: 'PhysicalCustomerOrderModel',
            CarrierCompany: {
              id: '',
              rntrc: '',
              __typename: 'CarrierCompanyModel',
            },
            Quote: {
              id: '',
              codQuote: '',
              __typename: 'PhysicalCustomerQuoteTableModel',
            },
            PhysicalCustomer: {
              id: '',
              NaturalPerson: { cpf: '' },
              __typename: 'PhysicalCustomerModel',
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
