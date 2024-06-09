import { render } from '@testing-library/react';

import { LegalClientOrderGeneral } from '.';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

jest.mock('actions/LegalClientOrder/create', () => ({
  LegalClientOrderGeneral: jest.fn(),
}));

describe('<LegalClientOrderGeneral />', () => {
  it('should render the create collaborator correctly', () => {
    const { container } = render(
      <LegalClientOrderGeneral
        data={{
          getLegalClientOrderModel: {
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
            legal_contract_id: '',
            total_shipping_cost: 0,
            __typename: 'LegalClientOrderModel',
            CarrierCompany: {
              LegalPerson: { cnpj: '' },
              __typename: 'CarrierCompanyModel',
            },
            Quote: {
              id: '',
              codQuote: '',
              __typename: 'LegalClientQuoteTableModel',
            },
            LegalContract: {
              id: '',
              contract_number: '',
              __typename: 'LegalContractModel',
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
