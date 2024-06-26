import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_QUOTE_TABLE = gql`
  query GetPhysicalCustomerQuoteTable(
    $getPhysicalCustomerQuoteTableId: String
  ) {
    getPhysicalCustomerQuoteTable(id: $getPhysicalCustomerQuoteTableId) {
      Recipient {
        id
        LegalPerson {
          fantasy_name
          cnpj
        }
        NaturalPerson {
          name
          cpf
        }
      }
      Sender {
        id
        LegalPerson {
          fantasy_name
          cnpj
        }
        NaturalPerson {
          name
          cpf
        }
      }
      amount
      codQuote
      created_at
      created_by
      description
      digital_signature
      formPayment
      icms_id
      id
      kindService
      mass
      nf_number
      nf_serie
      nf_value
      recipientId
      senderId
      typeMerchandise
      updated_at
      updated_by
      volume
      who_pays
      adressDestiny {
        city
        street
        postalCod
        uf
        complement
        neighborhood
        address_number
      }
      adressOrigin {
        city
        street
        postalCod
        uf
        complement
        neighborhood
        address_number
      }
    }
  }
`;
