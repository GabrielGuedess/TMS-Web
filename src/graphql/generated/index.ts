import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = {
  [_ in K]?: never;
};

export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends '__typename' | ' $fragmentName' ? T[P] : never;
    };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Upload: { input: any; output: any };
  ID: { input: string; output: string };
  Int: { input: number; output: number };
  Timestamp: { input: any; output: any };
  Float: { input: number; output: number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthModel = {
  id: Scalars['String']['output'];
  __typename?: 'AuthModel';
  name: Scalars['String']['output'];
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type BoolFilter = {
  not?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarrierCompanyInput = {
  rntrc: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type CarrierCompanyListRelationFilter = {
  none?: InputMaybe<CarrierCompanyWhereInput>;
  some?: InputMaybe<CarrierCompanyWhereInput>;
  every?: InputMaybe<CarrierCompanyWhereInput>;
};

export type CarrierCompanyModel = {
  id: Scalars['String']['output'];
  LegalPerson: LegalPersonModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'CarrierCompanyModel';
  rntrc: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  legalPersonId: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type CarrierCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CarrierCompanyOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  rntrc?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  LegalContract?: InputMaybe<LegalContractOrderByRelationAggregateInput>;
  CompanyVehicle?: InputMaybe<CompanyVehicleOrderByRelationAggregateInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CarrierCompanyUpdateInput = {
  rntrc?: InputMaybe<Scalars['String']['input']>;
  LegalPerson?: InputMaybe<LegalPersonUpdateInput>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type CarrierCompanyUpdateManyInput = {
  id: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  rntrc?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type CarrierCompanyWhereInput = {
  id?: InputMaybe<StringFilter>;
  rntrc?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  legal_person_id?: InputMaybe<StringFilter>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  OR?: InputMaybe<Array<CarrierCompanyWhereInput>>;
  AND?: InputMaybe<Array<CarrierCompanyWhereInput>>;
  NOT?: InputMaybe<Array<CarrierCompanyWhereInput>>;
  LegalContract?: InputMaybe<LegalContractListRelationFilter>;
  CompanyVehicle?: InputMaybe<CompanyVehicleListRelationFilter>;
  LegalClientOrder?: InputMaybe<LegalClientOrderListRelationFilter>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CiotForLegalClientInput = {
  ciot: Scalars['String']['input'];
  emission_date: Scalars['Timestamp']['input'];
  legal_contract_id: Scalars['String']['input'];
};

export type CiotForLegalClientListRelationFilter = {
  none?: InputMaybe<CiotForLegalClientWhereInput>;
  some?: InputMaybe<CiotForLegalClientWhereInput>;
  every?: InputMaybe<CiotForLegalClientWhereInput>;
};

export type CiotForLegalClientModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  ciot: Scalars['String']['output'];
  __typename?: 'CiotForLegalClientModel';
  LegalClientContract: LegalContractModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  emission_date: Scalars['Timestamp']['output'];
  legal_contract_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type CiotForLegalClientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CiotForLegalClientOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  ciot?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  emission_date?: InputMaybe<SortOrder>;
  legal_contract_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  PhysycalContract?: InputMaybe<LegalContractOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CiotForLegalClientUpdateInput = {
  ciot?: InputMaybe<Scalars['String']['input']>;
  emission_date?: InputMaybe<Scalars['Timestamp']['input']>;
  legal_contract_id?: InputMaybe<Scalars['String']['input']>;
};

export type CiotForLegalClientWhereInput = {
  id?: InputMaybe<StringFilter>;
  ciot?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  emission_date?: InputMaybe<DateTimeFilter>;
  legal_contract_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<CiotForLegalClientWhereInput>>;
  AND?: InputMaybe<Array<CiotForLegalClientWhereInput>>;
  NOT?: InputMaybe<Array<CiotForLegalClientWhereInput>>;
  PhysycalContract?: InputMaybe<LegalContractWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CompanyVehicleIModel = {
  id: Scalars['String']['output'];
  Vehicle: VehicleCarModel;
  __typename?: 'CompanyVehicleIModel';
  CarrierCompany: CarrierCompanyModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  vehicle_id: Scalars['String']['output'];
  carrier_company_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type CompanyVehicleInput = {
  Vehicle?: InputMaybe<VehicleInput>;
  carrier_company_id: Scalars['String']['input'];
  vehicle_id?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyVehicleListRelationFilter = {
  none?: InputMaybe<CompanyVehicleWhereInput>;
  some?: InputMaybe<CompanyVehicleWhereInput>;
  every?: InputMaybe<CompanyVehicleWhereInput>;
};

export type CompanyVehicleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyVehicleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  company_id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  orderProcessingLegalClientId?: InputMaybe<SortOrder>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CompanyVehicleUpdateInput = {
  Vehicle: VehicleUpdateInput;
  vehicle_id?: InputMaybe<Scalars['String']['input']>;
  carrier_company_id?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyVehicleWhereInput = {
  id?: InputMaybe<StringFilter>;
  company_id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  OR?: InputMaybe<Array<CompanyVehicleWhereInput>>;
  AND?: InputMaybe<Array<CompanyVehicleWhereInput>>;
  NOT?: InputMaybe<Array<CompanyVehicleWhereInput>>;
  CarrierCompany?: InputMaybe<CarrierCompanyWhereInput>;
  orderProcessingLegalClientId?: InputMaybe<StringNullableFilter>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CompletedOrdersInput = {
  vehicle_id: Scalars['String']['input'];
  start_at: Scalars['Timestamp']['input'];
  total_distance: Scalars['Float']['input'];
  total_spend_liters: Scalars['Float']['input'];
  total_spending_money: Scalars['Float']['input'];
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  legal_customer_order_id?: InputMaybe<Scalars['String']['input']>;
  physical_customer_order_id?: InputMaybe<Scalars['String']['input']>;
};

export type CompletedOrdersModel = {
  id: Scalars['String']['output'];
  Vehicle: VehicleCarModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'CompletedOrdersModel';
  end_at: Scalars['Timestamp']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  vehicle_id: Scalars['String']['output'];
  start_at: Scalars['Timestamp']['output'];
  total_distance: Scalars['Float']['output'];
  order_processing: Scalars['String']['output'];
  total_spend_liters: Scalars['Float']['output'];
  LegalClientOrders: Array<LegalClientOrderModel>;
  total_spending_money: Scalars['Float']['output'];
  order_processing_number: Scalars['String']['output'];
  PhysicalCustomerOrders: Array<PhysicalCustomerOrderModel>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type CompletedOrdersOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  end_at?: InputMaybe<SortOrder>;
  start_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  total_distance?: InputMaybe<SortOrder>;
  total_spend_liters?: InputMaybe<SortOrder>;
  total_spending_money?: InputMaybe<SortOrder>;
  order_processing_number?: InputMaybe<SortOrder>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CompletedOrdersUpdateInput = {
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  vehicle_id?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Timestamp']['input']>;
  total_distance?: InputMaybe<Scalars['Float']['input']>;
  total_spend_liters?: InputMaybe<Scalars['Float']['input']>;
  total_spending_money?: InputMaybe<Scalars['Float']['input']>;
  legal_customer_order_id?: InputMaybe<Scalars['String']['input']>;
  physical_customer_order_id?: InputMaybe<Scalars['String']['input']>;
  disconnect_legal_client_order?: InputMaybe<Scalars['String']['input']>;
  disconnect_physical_customer_order?: InputMaybe<Scalars['String']['input']>;
};

export type CompletedOrdersWhereInput = {
  id?: InputMaybe<StringFilter>;
  end_at?: InputMaybe<DateTimeFilter>;
  created_by?: InputMaybe<StringFilter>;
  start_at?: InputMaybe<DateTimeFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  total_distance?: InputMaybe<FloatFilter>;
  total_spend_liters?: InputMaybe<FloatFilter>;
  total_spending_money?: InputMaybe<FloatFilter>;
  OR?: InputMaybe<Array<CompletedOrdersWhereInput>>;
  AND?: InputMaybe<Array<CompletedOrdersWhereInput>>;
  NOT?: InputMaybe<Array<CompletedOrdersWhereInput>>;
  order_processing_number?: InputMaybe<StringFilter>;
  LegalClientOrder?: InputMaybe<LegalClientOrderListRelationFilter>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type ContractOutsoucedDriverUpdateInput = {
  cpf?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  situation?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Timestamp']['input']>;
  outsourced_driver_id?: InputMaybe<Scalars['String']['input']>;
};

export type ContractOutsoucedDriverUpdateManyInput = {
  id: Scalars['String']['input'];
  cpf?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  situation?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Timestamp']['input']>;
  outsourced_driver_id?: InputMaybe<Scalars['String']['input']>;
};

export type ContractOutsourcedDriverInput = {
  cpf: Scalars['String']['input'];
  type: Scalars['String']['input'];
  end_at: Scalars['Timestamp']['input'];
  situation: Scalars['String']['input'];
  start_at: Scalars['Timestamp']['input'];
  outsourced_driver_id: Scalars['String']['input'];
};

export type ContractOutsourcedDriverListRelationFilter = {
  none?: InputMaybe<ContractOutsourcedDriverWhereInput>;
  some?: InputMaybe<ContractOutsourcedDriverWhereInput>;
  every?: InputMaybe<ContractOutsourcedDriverWhereInput>;
};

export type ContractOutsourcedDriverModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  cpf: Scalars['String']['output'];
  type: Scalars['String']['output'];
  end_at: Scalars['Timestamp']['output'];
  situation: Scalars['String']['output'];
  OutsourcedDriver: OutsourcedDriverModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  start_at: Scalars['Timestamp']['output'];
  __typename?: 'ContractOutsourcedDriverModel';
  contract_number: Scalars['String']['output'];
  outsourced_driver_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type ContractOutsourcedDriverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ContractOutsourcedDriverOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  end_at?: InputMaybe<SortOrder>;
  start_at?: InputMaybe<SortOrder>;
  situation?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  contract_number?: InputMaybe<SortOrder>;
  outsourced_driver_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type ContractOutsourcedDriverReferecesInput = {
  cpf: Scalars['String']['input'];
  type: Scalars['String']['input'];
  end_at: Scalars['Timestamp']['input'];
  situation: Scalars['String']['input'];
  start_at: Scalars['Timestamp']['input'];
};

export type ContractOutsourcedDriverWhereInput = {
  id?: InputMaybe<StringFilter>;
  cpf?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  situation?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  start_at?: InputMaybe<DateTimeFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  contract_number?: InputMaybe<StringFilter>;
  end_at?: InputMaybe<DateTimeNullableFilter>;
  outsourced_driver_id?: InputMaybe<StringFilter>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverWhereInput>;
  OR?: InputMaybe<Array<ContractOutsourcedDriverWhereInput>>;
  AND?: InputMaybe<Array<ContractOutsourcedDriverWhereInput>>;
  NOT?: InputMaybe<Array<ContractOutsourcedDriverWhereInput>>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CtePDfModel = {
  __typename?: 'CtePDfModel';
  cteUrl: Scalars['String']['output'];
};

export type CtePdfLegalClientInput = {
  legalClientOrderId: Scalars['String']['input'];
};

export type CtePdfPhysicalCustomerInput = {
  physicalCustomerOrderId: Scalars['String']['input'];
};

export type DateTimeFilter = {
  not?: InputMaybe<NestedDateTimeFilter>;
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type DateTimeNullableFilter = {
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type DeletFreightExpenseInput = {
  id: Scalars['String']['input'];
};

export type FloatFilter = {
  not?: InputMaybe<NestedFloatFilter>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FreightExpenseInput = {
  value: Scalars['Float']['input'];
  expenseName: Scalars['String']['input'];
  legalClientOrderId?: InputMaybe<Scalars['String']['input']>;
  physicalCustomerOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type FreightExpenseModel = {
  id: Scalars['String']['output'];
  value: Scalars['Float']['output'];
  __typename?: 'FreightExpenseModel';
  expenseName: Scalars['String']['output'];
  legalClientOrderId?: Maybe<Scalars['String']['output']>;
  physicalCustomerOrderId?: Maybe<Scalars['String']['output']>;
};

export type FreightExpenseUpdateInput = {
  value?: InputMaybe<Scalars['Float']['input']>;
  expenseName?: InputMaybe<Scalars['String']['input']>;
  legalClientOrderId?: InputMaybe<Scalars['String']['input']>;
  physicalCustomerOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type FreightExpenseUpdateManyInput = {
  id: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
  expenseName?: InputMaybe<Scalars['String']['input']>;
  legalClientOrderId?: InputMaybe<Scalars['String']['input']>;
  physicalCustomerOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type FreightExpensesListRelationFilter = {
  none?: InputMaybe<FreightExpensesWhereInput>;
  some?: InputMaybe<FreightExpensesWhereInput>;
  every?: InputMaybe<FreightExpensesWhereInput>;
};

export type FreightExpensesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FreightExpensesOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  expense_name?: InputMaybe<SortOrder>;
  physical_customer_id?: InputMaybe<SortOrder>;
  legal_client_order_id?: InputMaybe<SortOrder>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByWithRelationInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByWithRelationInput>;
};

export type FreightExpensesWhereInput = {
  id?: InputMaybe<StringFilter>;
  value?: InputMaybe<FloatFilter>;
  expense_name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<FreightExpensesWhereInput>>;
  AND?: InputMaybe<Array<FreightExpensesWhereInput>>;
  NOT?: InputMaybe<Array<FreightExpensesWhereInput>>;
  physical_customer_id?: InputMaybe<StringNullableFilter>;
  legal_client_order_id?: InputMaybe<StringNullableFilter>;
  LegalClientOrder?: InputMaybe<LegalClientOrderWhereInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderWhereInput>;
};

export type GetLegalPersonInput = {
  cnpj?: InputMaybe<Scalars['String']['input']>;
  fantasyName?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type GetNaturalPersonInput = {
  rg?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  naturalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type GetVehicleTypeArgs = {
  plate?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
};

export type IcmsInput = {
  aliquot: Scalars['Float']['input'];
  state_origin: Scalars['String']['input'];
  recipient_state: Scalars['String']['input'];
  effective_date: Scalars['Timestamp']['input'];
};

export type IcmsListRelationFilter = {
  none?: InputMaybe<IcmsWhereInput>;
  some?: InputMaybe<IcmsWhereInput>;
  every?: InputMaybe<IcmsWhereInput>;
};

export type IcmsModel = {
  id: Scalars['String']['output'];
  __typename?: 'IcmsModel';
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  aliquot: Scalars['Float']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  state_origin: Scalars['String']['output'];
  recipient_state: Scalars['String']['output'];
  effective_date: Scalars['Timestamp']['output'];
};

export type IcmsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IcmsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  aliquot?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  state_orgin?: InputMaybe<SortOrder>;
  effective_date?: InputMaybe<SortOrder>;
  recipient_state?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type IcmsUpdateInput = {
  aliquot?: InputMaybe<Scalars['Float']['input']>;
  state_origin?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  effective_date?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type IcmsUpdateManyInput = {
  id: Scalars['String']['input'];
  aliquot?: InputMaybe<Scalars['Float']['input']>;
  state_origin?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  effective_date?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type IcmsWhereInput = {
  id?: InputMaybe<StringFilter>;
  aliquot?: InputMaybe<FloatFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<IcmsWhereInput>>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  state_orgin?: InputMaybe<StringFilter>;
  AND?: InputMaybe<Array<IcmsWhereInput>>;
  NOT?: InputMaybe<Array<IcmsWhereInput>>;
  recipient_state?: InputMaybe<StringFilter>;
  effective_date?: InputMaybe<DateTimeFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type IncidentInput = {
  description: Scalars['String']['input'];
  date_incident: Scalars['Timestamp']['input'];
  order_process_id: Scalars['String']['input'];
  date_resolved?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type IncidentListRelationFilter = {
  none?: InputMaybe<IncidentWhereInput>;
  some?: InputMaybe<IncidentWhereInput>;
  every?: InputMaybe<IncidentWhereInput>;
};

export type IncidentModel = {
  id: Scalars['String']['output'];
  __typename?: 'IncidentModel';
  OrderProcessing: OrderProcessingModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  date_incident: Scalars['Timestamp']['output'];
  order_process_id: Scalars['String']['output'];
  date_resolved?: Maybe<Scalars['Timestamp']['output']>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type IncidentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IncidentOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  date_incident?: InputMaybe<SortOrder>;
  date_resolved?: InputMaybe<SortOrder>;
  order_process_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  OrderProcess?: InputMaybe<OrderProcessingOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type IncidentUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  date_incident?: InputMaybe<Scalars['Timestamp']['input']>;
  date_resolved?: InputMaybe<Scalars['Timestamp']['input']>;
  order_process_id?: InputMaybe<Scalars['String']['input']>;
};

export type IncidentUpdateManyInput = {
  id: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  date_incident?: InputMaybe<Scalars['Timestamp']['input']>;
  date_resolved?: InputMaybe<Scalars['Timestamp']['input']>;
  order_process_id?: InputMaybe<Scalars['String']['input']>;
};

export type IncidentWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<IncidentWhereInput>>;
  date_incident?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<IncidentWhereInput>>;
  NOT?: InputMaybe<Array<IncidentWhereInput>>;
  order_process_id?: InputMaybe<StringFilter>;
  date_resolved?: InputMaybe<DateTimeNullableFilter>;
  OrderProcess?: InputMaybe<OrderProcessingWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type IntFilter = {
  not?: InputMaybe<NestedIntFilter>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LegalClientCteInput = {
  cteType: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientCteModel = {
  id: Scalars['String']['output'];
  __typename?: 'LegalClientCteModel';
  cteType: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  acessKey: Scalars['String']['output'];
  cteNumber: Scalars['String']['output'];
  observations?: Maybe<Scalars['String']['output']>;
};

export type LegalClientCteOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  order_id?: InputMaybe<SortOrder>;
  type_cte?: InputMaybe<SortOrder>;
  access_key?: InputMaybe<SortOrder>;
  cte_number?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByWithRelationInput>;
};

export type LegalClientCteUpdateInput = {
  cteType?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientCteWhereInput = {
  id?: InputMaybe<StringFilter>;
  order_id?: InputMaybe<StringFilter>;
  type_cte?: InputMaybe<StringFilter>;
  access_key?: InputMaybe<StringFilter>;
  cte_number?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<LegalClientCteWhereInput>>;
  AND?: InputMaybe<Array<LegalClientCteWhereInput>>;
  NOT?: InputMaybe<Array<LegalClientCteWhereInput>>;
  LegalClientOrder?: InputMaybe<LegalClientOrderWhereInput>;
};

export type LegalClientInput = {
  branch: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientListRelationFilter = {
  none?: InputMaybe<LegalClientWhereInput>;
  some?: InputMaybe<LegalClientWhereInput>;
  every?: InputMaybe<LegalClientWhereInput>;
};

export type LegalClientModel = {
  id: Scalars['String']['output'];
  LegalPerson: LegalPersonModel;
  __typename?: 'LegalClientModel';
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  branch: Scalars['String']['output'];
  Orders: Array<LegalClientOrderModel>;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  legal_person_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type LegalClientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LegalClientOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  branch?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  LegalContract?: InputMaybe<LegalContractOrderByRelationAggregateInput>;
};

export type LegalClientOrderInput = {
  carrier_id: Scalars['String']['input'];
  quote_table_id: Scalars['String']['input'];
  legal_contract_id: Scalars['String']['input'];
};

export type LegalClientOrderListRelationFilter = {
  none?: InputMaybe<LegalClientOrderWhereInput>;
  some?: InputMaybe<LegalClientOrderWhereInput>;
  every?: InputMaybe<LegalClientOrderWhereInput>;
};

export type LegalClientOrderModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  LegalContract: LegalContractModel;
  Quote: LegalClientQuoteTableModel;
  order: Scalars['String']['output'];
  CarrierCompany: CarrierCompanyModel;
  __typename?: 'LegalClientOrderModel';
  carrier_id: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  FreightExpenses: Array<FreightExpenseModel>;
  quote_table_id: Scalars['String']['output'];
  legal_contract_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type LegalClientOrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LegalClientOrderOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  carrier_id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  quote_table_id?: InputMaybe<SortOrder>;
  legal_contract_id?: InputMaybe<SortOrder>;
  completed_orders_id?: InputMaybe<SortOrder>;
  order_processing_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalContract?: InputMaybe<LegalContractOrderByWithRelationInput>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
  LegalClientCte?: InputMaybe<LegalClientCteOrderByWithRelationInput>;
  CompletedOrders?: InputMaybe<CompletedOrdersOrderByWithRelationInput>;
  OrderProcessing?: InputMaybe<OrderProcessingOrderByWithRelationInput>;
  QuoteTable?: InputMaybe<LegalClientQuoteTableOrderByWithRelationInput>;
  FreightExpenses?: InputMaybe<FreightExpensesOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type LegalClientOrderUpdateInput = {
  carrier_id?: InputMaybe<Scalars['String']['input']>;
  quote_table_id?: InputMaybe<Scalars['String']['input']>;
  legal_contract_id?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientOrderWhereInput = {
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<StringFilter>;
  carrier_id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  quote_table_id?: InputMaybe<StringFilter>;
  legal_contract_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<LegalClientOrderWhereInput>>;
  AND?: InputMaybe<Array<LegalClientOrderWhereInput>>;
  LegalContract?: InputMaybe<LegalContractWhereInput>;
  NOT?: InputMaybe<Array<LegalClientOrderWhereInput>>;
  CarrierCompany?: InputMaybe<CarrierCompanyWhereInput>;
  LegalClientCte?: InputMaybe<LegalClientCteWhereInput>;
  completed_orders_id?: InputMaybe<StringNullableFilter>;
  order_processing_id?: InputMaybe<StringNullableFilter>;
  CompletedOrders?: InputMaybe<CompletedOrdersWhereInput>;
  OrderProcessing?: InputMaybe<OrderProcessingWhereInput>;
  QuoteTable?: InputMaybe<LegalClientQuoteTableWhereInput>;
  FreightExpenses?: InputMaybe<FreightExpensesListRelationFilter>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type LegalClientQuoteTableInput = {
  amount: Scalars['Int']['input'];
  mass: Scalars['Float']['input'];
  volume: Scalars['Float']['input'];
  nf_value: Scalars['Float']['input'];
  senderId: Scalars['String']['input'];
  who_pays: Scalars['String']['input'];
  description: Scalars['String']['input'];
  recipientId: Scalars['String']['input'];
  postalCodOrigin: Scalars['String']['input'];
  typeMerchandise: Scalars['String']['input'];
  postalCodDestiny: Scalars['String']['input'];
};

export type LegalClientQuoteTableListRelationFilter = {
  none?: InputMaybe<LegalClientQuoteTableWhereInput>;
  some?: InputMaybe<LegalClientQuoteTableWhereInput>;
  every?: InputMaybe<LegalClientQuoteTableWhereInput>;
};

export type LegalClientQuoteTableModel = {
  id: Scalars['String']['output'];
  Sender: SenderModel;
  Recipient: RecipientModel;
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  amount: Scalars['Int']['output'];
  mass: Scalars['Float']['output'];
  volume: Scalars['Float']['output'];
  nf_value: Scalars['Float']['output'];
  codQuote: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  who_pays: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  recipientId: Scalars['String']['output'];
  __typename?: 'LegalClientQuoteTableModel';
  postalCodOrigin: Scalars['String']['output'];
  typeMerchandise: Scalars['String']['output'];
  postalCodDestiny: Scalars['String']['output'];
};

export type LegalClientQuoteTableOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LegalClientQuoteTableOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  mass?: InputMaybe<SortOrder>;
  amount?: InputMaybe<SortOrder>;
  volume?: InputMaybe<SortOrder>;
  nf_value?: InputMaybe<SortOrder>;
  who_pays?: InputMaybe<SortOrder>;
  cod_quote?: InputMaybe<SortOrder>;
  sender_id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  recipient_id?: InputMaybe<SortOrder>;
  type_merchandise?: InputMaybe<SortOrder>;
  postal_cod_origin?: InputMaybe<SortOrder>;
  postal_cod_destiny?: InputMaybe<SortOrder>;
  Sender?: InputMaybe<SenderOrderByWithRelationInput>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Recipient?: InputMaybe<RecipientOrderByWithRelationInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type LegalClientQuoteTableUpdate = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  mass?: InputMaybe<Scalars['Float']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
  nf_value?: InputMaybe<Scalars['Float']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  who_pays?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  recipientId?: InputMaybe<Scalars['String']['input']>;
  postalCodOrigin?: InputMaybe<Scalars['String']['input']>;
  typeMerchandise?: InputMaybe<Scalars['String']['input']>;
  postalCodDestiny?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientQuoteTableUpdateManyInput = {
  id: Scalars['String']['input'];
  amount?: InputMaybe<Scalars['Int']['input']>;
  mass?: InputMaybe<Scalars['Float']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
  nf_value?: InputMaybe<Scalars['Float']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  who_pays?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  recipientId?: InputMaybe<Scalars['String']['input']>;
  postalCodOrigin?: InputMaybe<Scalars['String']['input']>;
  typeMerchandise?: InputMaybe<Scalars['String']['input']>;
  postalCodDestiny?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientQuoteTableWhereInput = {
  id?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  mass?: InputMaybe<FloatFilter>;
  volume?: InputMaybe<FloatFilter>;
  nf_value?: InputMaybe<FloatFilter>;
  who_pays?: InputMaybe<StringFilter>;
  cod_quote?: InputMaybe<StringFilter>;
  sender_id?: InputMaybe<StringFilter>;
  Sender?: InputMaybe<SenderWhereInput>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  recipient_id?: InputMaybe<StringFilter>;
  Recipient?: InputMaybe<RecipientWhereInput>;
  type_merchandise?: InputMaybe<StringFilter>;
  postal_cod_origin?: InputMaybe<StringFilter>;
  postal_cod_destiny?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<LegalClientQuoteTableWhereInput>>;
  AND?: InputMaybe<Array<LegalClientQuoteTableWhereInput>>;
  NOT?: InputMaybe<Array<LegalClientQuoteTableWhereInput>>;
  LegalClientOrder?: InputMaybe<LegalClientOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type LegalClientUpdateInput = {
  LegalPerson: LegalPersonUpdateInput;
  branch?: InputMaybe<Scalars['String']['input']>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientUpdateManyInput = {
  id: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  branch?: InputMaybe<Scalars['String']['input']>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type LegalClientWhereInput = {
  id?: InputMaybe<StringFilter>;
  branch?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  legal_person_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<LegalClientWhereInput>>;
  AND?: InputMaybe<Array<LegalClientWhereInput>>;
  NOT?: InputMaybe<Array<LegalClientWhereInput>>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  LegalContract?: InputMaybe<LegalContractListRelationFilter>;
};

export type LegalContractInput = {
  legal_client_id: Scalars['String']['input'];
  effective_date: Scalars['Timestamp']['input'];
  carrier_company_id: Scalars['String']['input'];
  delivery_conditions: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type LegalContractListRelationFilter = {
  none?: InputMaybe<LegalContractWhereInput>;
  some?: InputMaybe<LegalContractWhereInput>;
  every?: InputMaybe<LegalContractWhereInput>;
};

export type LegalContractModel = {
  id: Scalars['String']['output'];
  LegalClient: LegalClientModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'LegalContractModel';
  CarrierCompany: CarrierCompanyModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  observations: Scalars['String']['output'];
  contract_number: Scalars['String']['output'];
  legal_client_id: Scalars['String']['output'];
  effective_date: Scalars['Timestamp']['output'];
  carrier_company_id: Scalars['String']['output'];
  delivery_conditions: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type LegalContractOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LegalContractOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  effective_date?: InputMaybe<SortOrder>;
  contract_number?: InputMaybe<SortOrder>;
  legal_client_id?: InputMaybe<SortOrder>;
  carrier_company_id?: InputMaybe<SortOrder>;
  delivery_conditions?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalClient?: InputMaybe<LegalClientOrderByWithRelationInput>;
  Ciot?: InputMaybe<CiotForLegalClientOrderByRelationAggregateInput>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type LegalContractUpdateInput = {
  observations?: InputMaybe<Scalars['String']['input']>;
  legal_client_id?: InputMaybe<Scalars['String']['input']>;
  effective_date?: InputMaybe<Scalars['Timestamp']['input']>;
  carrier_company_id?: InputMaybe<Scalars['String']['input']>;
  delivery_conditions?: InputMaybe<Scalars['String']['input']>;
};

export type LegalContractWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  contract_number?: InputMaybe<StringFilter>;
  legal_client_id?: InputMaybe<StringFilter>;
  effective_date?: InputMaybe<DateTimeFilter>;
  carrier_company_id?: InputMaybe<StringFilter>;
  delivery_conditions?: InputMaybe<StringFilter>;
  LegalClient?: InputMaybe<LegalClientWhereInput>;
  OR?: InputMaybe<Array<LegalContractWhereInput>>;
  observations?: InputMaybe<StringNullableFilter>;
  AND?: InputMaybe<Array<LegalContractWhereInput>>;
  NOT?: InputMaybe<Array<LegalContractWhereInput>>;
  CarrierCompany?: InputMaybe<CarrierCompanyWhereInput>;
  Ciot?: InputMaybe<CiotForLegalClientListRelationFilter>;
  LegalClientOrder?: InputMaybe<LegalClientOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type LegalPersonInput = {
  uf: Scalars['String']['input'];
  city: Scalars['String']['input'];
  cnpj: Scalars['String']['input'];
  email: Scalars['String']['input'];
  first_phone: Scalars['String']['input'];
  fantasy_name: Scalars['String']['input'];
  neighborhood: Scalars['String']['input'];
  public_place: Scalars['String']['input'];
  address_number: Scalars['String']['input'];
  corporate_name: Scalars['String']['input'];
  state_registration: Scalars['String']['input'];
  complement?: InputMaybe<Scalars['String']['input']>;
  third_phone?: InputMaybe<Scalars['String']['input']>;
  second_phone?: InputMaybe<Scalars['String']['input']>;
};

export type LegalPersonModel = {
  id: Scalars['String']['output'];
  __typename?: 'LegalPersonModel';
  uf: Scalars['String']['output'];
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  first_phone: Scalars['String']['output'];
  fantasy_name: Scalars['String']['output'];
  neighborhood: Scalars['String']['output'];
  public_place: Scalars['String']['output'];
  address_number: Scalars['String']['output'];
  corporate_name: Scalars['String']['output'];
  complement?: Maybe<Scalars['String']['output']>;
  state_registration: Scalars['String']['output'];
  third_phone?: Maybe<Scalars['String']['output']>;
  second_phone?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type LegalPersonOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  uf?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  complement?: InputMaybe<SortOrder>;
  first_phone?: InputMaybe<SortOrder>;
  third_phone?: InputMaybe<SortOrder>;
  fantasy_name?: InputMaybe<SortOrder>;
  neighborhood?: InputMaybe<SortOrder>;
  public_place?: InputMaybe<SortOrder>;
  second_phone?: InputMaybe<SortOrder>;
  address_number?: InputMaybe<SortOrder>;
  corporate_name?: InputMaybe<SortOrder>;
  state_registration?: InputMaybe<SortOrder>;
  Sender?: InputMaybe<SenderOrderByWithRelationInput>;
  Recipient?: InputMaybe<RecipientOrderByWithRelationInput>;
  CorporateClient?: InputMaybe<LegalClientOrderByRelationAggregateInput>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByRelationAggregateInput>;
  MaintenanceCompany?: InputMaybe<MaintenanceCompanyOrderByWithRelationInput>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type LegalPersonUpdateInput = {
  uf?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  complement?: InputMaybe<Scalars['String']['input']>;
  first_phone?: InputMaybe<Scalars['String']['input']>;
  third_phone?: InputMaybe<Scalars['String']['input']>;
  fantasy_name?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  public_place?: InputMaybe<Scalars['String']['input']>;
  second_phone?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  corporate_name?: InputMaybe<Scalars['String']['input']>;
  state_registration?: InputMaybe<Scalars['String']['input']>;
};

export type LegalPersonWhereInput = {
  id?: InputMaybe<StringFilter>;
  uf?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  cnpj?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  Sender?: InputMaybe<SenderWhereInput>;
  first_phone?: InputMaybe<StringFilter>;
  fantasy_name?: InputMaybe<StringFilter>;
  neighborhood?: InputMaybe<StringFilter>;
  public_place?: InputMaybe<StringFilter>;
  address_number?: InputMaybe<StringFilter>;
  corporate_name?: InputMaybe<StringFilter>;
  Recipient?: InputMaybe<RecipientWhereInput>;
  OR?: InputMaybe<Array<LegalPersonWhereInput>>;
  complement?: InputMaybe<StringNullableFilter>;
  state_registration?: InputMaybe<StringFilter>;
  AND?: InputMaybe<Array<LegalPersonWhereInput>>;
  NOT?: InputMaybe<Array<LegalPersonWhereInput>>;
  third_phone?: InputMaybe<StringNullableFilter>;
  second_phone?: InputMaybe<StringNullableFilter>;
  CorporateClient?: InputMaybe<LegalClientListRelationFilter>;
  CarrierCompany?: InputMaybe<CarrierCompanyListRelationFilter>;
  MaintenanceCompany?: InputMaybe<MaintenanceCompanyWhereInput>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceCompanyInput = {
  LegalPerson?: InputMaybe<LegalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
  specialty_maintenance?: InputMaybe<Scalars['String']['input']>;
};

export type MaintenanceCompanyListRelationFilter = {
  none?: InputMaybe<MaintenanceCompanyWhereInput>;
  some?: InputMaybe<MaintenanceCompanyWhereInput>;
  every?: InputMaybe<MaintenanceCompanyWhereInput>;
};

export type MaintenanceCompanyModel = {
  id: Scalars['String']['output'];
  LegalPerson: LegalPersonModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'MaintenanceCompanyModel';
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  legal_person_id: Scalars['String']['output'];
  specialty_maintenance?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type MaintenanceCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MaintenanceCompanyOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  specialty_maintenance?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  Maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type MaintenanceCompanyUpdateInput = {
  LegalPerson: LegalPersonUpdateInput;
  specialty_maintenance?: InputMaybe<Scalars['String']['input']>;
};

export type MaintenanceCompanyWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  legal_person_id?: InputMaybe<StringFilter>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  OR?: InputMaybe<Array<MaintenanceCompanyWhereInput>>;
  AND?: InputMaybe<Array<MaintenanceCompanyWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceCompanyWhereInput>>;
  Maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  specialty_maintenance?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceInput = {
  vehicle_id: Scalars['String']['input'];
  maintenance_company_id: Scalars['String']['input'];
  type_of_maintenance_id: Scalars['String']['input'];
};

export type MaintenanceListRelationFilter = {
  none?: InputMaybe<MaintenanceWhereInput>;
  some?: InputMaybe<MaintenanceWhereInput>;
  every?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceModel = {
  id: Scalars['String']['output'];
  Vehicle: VehicleCarModel;
  __typename?: 'MaintenanceModel';
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  vehicle_id: Scalars['String']['output'];
  TypeOfMaintenance: TypeOfMaintenanceModel;
  MaintenanceCompany: MaintenanceCompanyModel;
  finished_at?: Maybe<Scalars['Timestamp']['output']>;
  maintenance_company_id: Scalars['String']['output'];
  type_of_maintenance_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type MaintenanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MaintenanceOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  finished_at?: InputMaybe<SortOrder>;
  maintenance_company_id?: InputMaybe<SortOrder>;
  type_of_maintenance_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  TypeOfMaintenance?: InputMaybe<TypeOfMaintenanceOrderByWithRelationInput>;
  MaintenanceCompany?: InputMaybe<MaintenanceCompanyOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type MaintenanceUpdateInput = {
  finished_at: Scalars['Timestamp']['input'];
  maintenance_company_id?: InputMaybe<Scalars['String']['input']>;
  type_of_maintenance_id?: InputMaybe<Scalars['String']['input']>;
};

export type MaintenanceWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  OR?: InputMaybe<Array<MaintenanceWhereInput>>;
  AND?: InputMaybe<Array<MaintenanceWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceWhereInput>>;
  finished_at?: InputMaybe<DateTimeNullableFilter>;
  maintenance_company_id?: InputMaybe<StringFilter>;
  type_of_maintenance_id?: InputMaybe<StringFilter>;
  TypeOfMaintenance?: InputMaybe<TypeOfMaintenanceWhereInput>;
  MaintenanceCompany?: InputMaybe<MaintenanceCompanyWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  login: AuthModel;
  createIcms: IcmsModel;
  createUser: UserModel;
  deleteIcms: IcmsModel;
  deleteUser: UserModel;
  updateIcms: IcmsModel;
  updateUser: UserModel;
  __typename?: 'Mutation';
  createSender: SenderModel;
  deleteSender: SenderModel;
  updateSender: SenderModel;
  createIncident: IncidentModel;
  deleteIncident: IncidentModel;
  updateIncident: IncidentModel;
  createOwnDriver: OwnDriverModel;
  createRecipient: RecipientModel;
  deleteOwnDriver: OwnDriverModel;
  deleteRecipient: RecipientModel;
  updateOwnDriver: OwnDriverModel;
  updateRecipient: RecipientModel;
  deleteManyIcms: Array<IcmsModel>;
  updateManyIcms: Array<IcmsModel>;
  deleteManyUsers: Array<UserModel>;
  updateManyUsers: Array<UserModel>;
  createLegalClient: LegalClientModel;
  createMaintenance: MaintenanceModel;
  createVehicleType: VehicleTypeModel;
  deleteLegalClient: LegalClientModel;
  updateLegalClient: LegalClientModel;
  updateMaintenance: MaintenanceModel;
  updatedVehicleType: VehicleTypeModel;
  createVehicleBrand: VehicleBrandModel;
  deleteManySenders: Array<SenderModel>;
  updateManySenders: Array<SenderModel>;
  updatedVehicleBrand: VehicleBrandModel;
  createLegalContract: LegalContractModel;
  createVehicleModel: VehicleModelGraphql;
  updatelegalContract: LegalContractModel;
  deleteManyIncident: Array<IncidentModel>;
  updateManyIncident: Array<IncidentModel>;
  updatedVehicleModel: VehicleModelGraphql;
  createCarrierCompany: CarrierCompanyModel;
  createFreightExpense: FreightExpenseModel;
  createLegalClientCte: LegalClientCteModel;
  deleteCarrierCompany: CarrierCompanyModel;
  deleteFreightExpense: FreightExpenseModel;
  updateCarriercompany: CarrierCompanyModel;
  updateFreightExpense: FreightExpenseModel;
  updateLegalClientCte: LegalClientCteModel;
  createCompanyVehicle: CompanyVehicleIModel;
  createCompletedOrders: CompletedOrdersModel;
  createOrderProcessing: OrderProcessingModel;
  createVehicleBodywork: VehicleBodyworkModel;
  deleteManyOwnDrivers: Array<OwnDriverModel>;
  deleteManyRecipients: Array<RecipientModel>;
  updateCompletedOrders: CompletedOrdersModel;
  updateManyOwnDrivers: Array<OwnDriverModel>;
  updateManyRecipients: Array<RecipientModel>;
  updateOrderProcessing: OrderProcessingModel;
  updateVehicleBodywork: VehicleBodyworkModel;
  updatedCompanyVehicle: CompanyVehicleIModel;
  createLegalClientOrder: LegalClientOrderModel;
  createOutsourcedDriver: OutsourcedDriverModel;
  createPhysicalCustomer: PhysicalCustomerModel;
  deletePhysicalCustomer: PhysicalCustomerModel;
  updateOutsourcedDriver: OutsourcedDriverModel;
  updatePhysicalCustomer: PhysicalCustomerModel;
  updatelegalClientOrder: LegalClientOrderModel;
  createTypeOfMaintenance: TypeOfMaintenanceModel;
  deleteManyLegalClients: Array<LegalClientModel>;
  updateManyLegalClients: Array<LegalClientModel>;
  updateTypeOfMaintenance: TypeOfMaintenanceModel;
  createOutsourcedVehicle: OutsourcedVehicleIModel;
  createCiotForLegalClient: CiotForLegalClientModel;
  createMaintenanceCompany: MaintenanceCompanyModel;
  updateMaintenanceCompany: MaintenanceCompanyModel;
  updateciotForLegalClient: CiotForLegalClientModel;
  updatedOutsourcedVehicle: OutsourcedVehicleIModel;
  createPhysicalCustomerCte: PhysicalCustomerCteModel;
  updatePhysicalCustomerCte: PhysicalCustomerCteModel;
  deleteManyFreightExpenses: Array<FreightExpenseModel>;
  updateManyFreightExpenses: Array<FreightExpenseModel>;
  deleteManyCarrierCompanies: Array<CarrierCompanyModel>;
  updateManyCarrierCompanies: Array<CarrierCompanyModel>;
  createLegalClientQuoteTable: LegalClientQuoteTableModel;
  createPhysicalCustomerOrder: PhysicalCustomerOrderModel;
  deleteLegalClientQuoteTable: LegalClientQuoteTableModel;
  updateLegalClientQuoteTable: LegalClientQuoteTableModel;
  updatephysicalCustomerOrder: PhysicalCustomerOrderModel;
  deleteManyPhysicalCustomers: Array<PhysicalCustomerModel>;
  updateManyPhysicalCustomers: Array<PhysicalCustomerModel>;
  createContractOutsourcedDriver: ContractOutsourcedDriverModel;
  deleteContractOutsourcedDriver: ContractOutsourcedDriverModel;
  updatedContractOutsourcedDriver: ContractOutsourcedDriverModel;
  createOutsourcedTransportCompany: OutsourcedTransportCompanyModel;
  createOutsourcedTransportVehicle: OutsourcedTransportVehicleModel;
  createPhysicalCustomerQuoteTable: PhysicalCustomerQuoteTableModel;
  updatePhysicalCustomerQuoteTable: PhysicalCustomerQuoteTableModel;
  updateoutsourcedTransportCompany: OutsourcedTransportCompanyModel;
  updateoutsourcedTransportVehicle: OutsourcedTransportVehicleModel;
  deleteManyLegalClientQuoteTable: Array<LegalClientQuoteTableModel>;
  updateManyLegalClientQuoteTable: Array<LegalClientQuoteTableModel>;
  deleteManyContractOutsourcedDriver: Array<ContractOutsourcedDriverModel>;
  updatedManyContractOutsourcedDriver: Array<ContractOutsourcedDriverModel>;
  createOutsourcedTransportCompanyDriver: OutsourcedTransportCompanyDriverModel;
  updateoutsourcedTransportCompanyDriver: OutsourcedTransportCompanyDriverModel;
  createOutsourcedTransportCompanyContract: OutsourcedTransportCompanyContractModel;
  updateoutsourcedTransportCompanyContract: OutsourcedTransportCompanyContractModel;
};

export type MutationCreateCarrierCompanyArgs = {
  data: CarrierCompanyInput;
};

export type MutationCreateCiotForLegalClientArgs = {
  ciotForLegalClientInput: CiotForLegalClientInput;
};

export type MutationCreateCompanyVehicleArgs = {
  CompanyVehicleInput: CompanyVehicleInput;
};

export type MutationCreateCompletedOrdersArgs = {
  data: CompletedOrdersInput;
};

export type MutationCreateContractOutsourcedDriverArgs = {
  CompanyVehicleInput: ContractOutsourcedDriverInput;
};

export type MutationCreateFreightExpenseArgs = {
  data: FreightExpenseInput;
};

export type MutationCreateIcmsArgs = {
  data: IcmsInput;
};

export type MutationCreateIncidentArgs = {
  data: IncidentInput;
};

export type MutationCreateLegalClientArgs = {
  legalclientInput: LegalClientInput;
};

export type MutationCreateLegalClientCteArgs = {
  data: LegalClientCteInput;
};

export type MutationCreateLegalClientOrderArgs = {
  legalClientOrderInput: LegalClientOrderInput;
};

export type MutationCreateLegalClientQuoteTableArgs = {
  legalClientQuoteTableInput: LegalClientQuoteTableInput;
};

export type MutationCreateLegalContractArgs = {
  legalContractInput: LegalContractInput;
};

export type MutationCreateMaintenanceArgs = {
  data: MaintenanceInput;
};

export type MutationCreateMaintenanceCompanyArgs = {
  maintenancecompanyInput: MaintenanceCompanyInput;
};

export type MutationCreateOrderProcessingArgs = {
  data: OrderProcessingInput;
};

export type MutationCreateOutsourcedDriverArgs = {
  outsourcedDriver: OutsourcedDriverInput;
};

export type MutationCreateOutsourcedTransportCompanyArgs = {
  outsourcedTransportCompanyInput: OutsourcedTransportCompanyInput;
};

export type MutationCreateOutsourcedTransportCompanyContractArgs = {
  outsourcedTransportCompanyContractInput: OutsourcedTransportCompanyContractInput;
};

export type MutationCreateOutsourcedTransportCompanyDriverArgs = {
  outsourcedTransportCompanyDriverInput: OutsourcedTransportCompanyDriverInput;
};

export type MutationCreateOutsourcedTransportVehicleArgs = {
  outsourcedTransportVehicleInput: OutsourcedTransportVehicleInput;
};

export type MutationCreateOutsourcedVehicleArgs = {
  OutsourcedVehicleInput: OutsourcedVehicleInput;
};

export type MutationCreateOwnDriverArgs = {
  ownDriverInput: OwnDriverInput;
};

export type MutationCreatePhysicalCustomerArgs = {
  data: PhysicalCustomerInput;
};

export type MutationCreatePhysicalCustomerCteArgs = {
  data: PhysicalCustomerCteInput;
};

export type MutationCreatePhysicalCustomerOrderArgs = {
  physicalCustomerOrderInput: PhysicalCustomerOrderInput;
};

export type MutationCreatePhysicalCustomerQuoteTableArgs = {
  physicalCustomerQuoteTableInput: PhysicalCustomerQuoteTableInput;
};

export type MutationCreateRecipientArgs = {
  data: RecipientInput;
};

export type MutationCreateSenderArgs = {
  data: SenderInput;
};

export type MutationCreateTypeOfMaintenanceArgs = {
  data: TypeOfMaintenanceInput;
};

export type MutationCreateUserArgs = {
  createUserInput: UserInput;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
};

export type MutationCreateVehicleBodyworkArgs = {
  vehicleBodyworkInput: VehicleBodyworkInput;
};

export type MutationCreateVehicleBrandArgs = {
  vehicleBrandInput: VehicleBrandInput;
};

export type MutationCreateVehicleModelArgs = {
  vehicleModelInput: VehicleModelInput;
};

export type MutationCreateVehicleTypeArgs = {
  vehicleTypeCreate: VehicleTypeInput;
};

export type MutationDeleteCarrierCompanyArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteContractOutsourcedDriverArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteFreightExpenseArgs = {
  delData: DeletFreightExpenseInput;
};

export type MutationDeleteIcmsArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteIncidentArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteLegalClientArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteLegalClientQuoteTableArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteManyCarrierCompaniesArgs = {
  deleteManyCarrierCompanies: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyContractOutsourcedDriverArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyFreightExpensesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyIcmsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyIncidentArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyLegalClientQuoteTableArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyLegalClientsArgs = {
  deleteManyLegalClients: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyOwnDriversArgs = {
  deleteManOwnDrivers: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyPhysicalCustomersArgs = {
  deleteManyPhysicalCustomers: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyRecipientsArgs = {
  deleteManyRecipients: Array<Scalars['String']['input']>;
};

export type MutationDeleteManySendersArgs = {
  deleteManySenders: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyUsersArgs = {
  deleteManyUsers: Array<Scalars['String']['input']>;
};

export type MutationDeleteOwnDriverArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeletePhysicalCustomerArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteRecipientArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteSenderArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  loginData: AuthInput;
};

export type MutationUpdateCarriercompanyArgs = {
  id: Scalars['String']['input'];
  data: CarrierCompanyUpdateInput;
};

export type MutationUpdateCompletedOrdersArgs = {
  id: Scalars['String']['input'];
  data: CompletedOrdersUpdateInput;
};

export type MutationUpdateFreightExpenseArgs = {
  id: Scalars['String']['input'];
  upData: FreightExpenseUpdateInput;
};

export type MutationUpdateIcmsArgs = {
  id: Scalars['String']['input'];
  invoiceForLegalClientInput: IcmsUpdateInput;
};

export type MutationUpdateIncidentArgs = {
  id: Scalars['String']['input'];
  upData: IncidentUpdateInput;
};

export type MutationUpdateLegalClientArgs = {
  id: Scalars['String']['input'];
  legalclientInput: LegalClientUpdateInput;
};

export type MutationUpdateLegalClientCteArgs = {
  id: Scalars['String']['input'];
  ownDriverUpdate: LegalClientCteUpdateInput;
};

export type MutationUpdateLegalClientQuoteTableArgs = {
  id: Scalars['String']['input'];
  legalClientQuoteTableUpdate: LegalClientQuoteTableUpdate;
};

export type MutationUpdateMaintenanceArgs = {
  id: Scalars['String']['input'];
  data: MaintenanceUpdateInput;
};

export type MutationUpdateMaintenanceCompanyArgs = {
  id: Scalars['String']['input'];
  maintenancecompanyInput: MaintenanceCompanyUpdateInput;
};

export type MutationUpdateManyCarrierCompaniesArgs = {
  updateManyCarrierCompanies: Array<CarrierCompanyUpdateManyInput>;
};

export type MutationUpdateManyFreightExpensesArgs = {
  Data: Array<FreightExpenseUpdateManyInput>;
};

export type MutationUpdateManyIcmsArgs = {
  data: Array<IcmsUpdateManyInput>;
};

export type MutationUpdateManyIncidentArgs = {
  data: Array<IncidentUpdateManyInput>;
};

export type MutationUpdateManyLegalClientQuoteTableArgs = {
  data: Array<LegalClientQuoteTableUpdateManyInput>;
};

export type MutationUpdateManyLegalClientsArgs = {
  updateManyLegalClients: Array<LegalClientUpdateManyInput>;
};

export type MutationUpdateManyOwnDriversArgs = {
  updateManyOwnDrivers: Array<OwnDriverUpdateManyInput>;
};

export type MutationUpdateManyPhysicalCustomersArgs = {
  updateManyPhysicalCustomers: Array<PhysicalCustomerUpdateManyInput>;
};

export type MutationUpdateManyRecipientsArgs = {
  updateManyRecipients: Array<RecipientUpdateManyInput>;
};

export type MutationUpdateManySendersArgs = {
  updateManySenders: Array<SenderUpdateManyInput>;
};

export type MutationUpdateManyUsersArgs = {
  updateManyUsers: Array<UserUpdateManyInput>;
};

export type MutationUpdateOrderProcessingArgs = {
  id: Scalars['String']['input'];
  data: OrderProcessingUpdateInput;
};

export type MutationUpdateOutsourcedDriverArgs = {
  id: Scalars['String']['input'];
  outsourcedDriver: OutsourcedDriverUpdateInput;
};

export type MutationUpdateOwnDriverArgs = {
  id: Scalars['String']['input'];
  ownDriverUpdate: OwnDriverUpdate;
};

export type MutationUpdatePhysicalCustomerArgs = {
  id: Scalars['String']['input'];
  ownDriverUpdate: PhysicalCustomerUpdateInput;
};

export type MutationUpdatePhysicalCustomerCteArgs = {
  id: Scalars['String']['input'];
  ownDriverUpdate: PhysicalCustomerCteUpdateInput;
};

export type MutationUpdatePhysicalCustomerQuoteTableArgs = {
  id: Scalars['String']['input'];
  physicalCustomerQuoteTableUpdate: PhysicalCustomerQuoteTableUpdate;
};

export type MutationUpdateRecipientArgs = {
  id: Scalars['String']['input'];
  data: RecipientUpdateInput;
};

export type MutationUpdateSenderArgs = {
  id: Scalars['String']['input'];
  data: SenderUpdateInput;
};

export type MutationUpdateTypeOfMaintenanceArgs = {
  id: Scalars['String']['input'];
  data: TypeOfMaintenanceUpdateInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  userUpdate: UserUpdateInput;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
};

export type MutationUpdateVehicleBodyworkArgs = {
  id: Scalars['String']['input'];
  vehicleBodyworkIUpdate: VehicleBodyworkUpdateInput;
};

export type MutationUpdateciotForLegalClientArgs = {
  id: Scalars['String']['input'];
  ciotForLegalClientInput: CiotForLegalClientUpdateInput;
};

export type MutationUpdatedCompanyVehicleArgs = {
  id: Scalars['String']['input'];
  outsourced: CompanyVehicleUpdateInput;
};

export type MutationUpdatedContractOutsourcedDriverArgs = {
  id: Scalars['String']['input'];
  outsourced: ContractOutsoucedDriverUpdateInput;
};

export type MutationUpdatedManyContractOutsourcedDriverArgs = {
  data: Array<ContractOutsoucedDriverUpdateManyInput>;
};

export type MutationUpdatedOutsourcedVehicleArgs = {
  id: Scalars['String']['input'];
  outsourced: OutsourcedVehicleUpdateInput;
};

export type MutationUpdatedVehicleBrandArgs = {
  id: Scalars['String']['input'];
  vehicleBrandUpdate: VehicleBrandUpdateInput;
};

export type MutationUpdatedVehicleModelArgs = {
  id: Scalars['String']['input'];
  vehicleModelUpdate: VehicleModelUpdateInput;
};

export type MutationUpdatedVehicleTypeArgs = {
  id: Scalars['String']['input'];
  vehicleTypeInput: VehicleTypeUpdateInput;
};

export type MutationUpdatelegalClientOrderArgs = {
  id: Scalars['String']['input'];
  legalClientOrderInput: LegalClientOrderUpdateInput;
};

export type MutationUpdatelegalContractArgs = {
  id: Scalars['String']['input'];
  legalContractInput: LegalContractUpdateInput;
};

export type MutationUpdateoutsourcedTransportCompanyArgs = {
  id: Scalars['String']['input'];
  data: OutsourcedTransportCompanyUpdateInput;
};

export type MutationUpdateoutsourcedTransportCompanyContractArgs = {
  id: Scalars['String']['input'];
  outsourcedTransportCompanyContractInput: OutsourcedTransportCompanyContractUpdateInput;
};

export type MutationUpdateoutsourcedTransportCompanyDriverArgs = {
  id: Scalars['String']['input'];
  data: OutsourcedTransportCompanyDriverUpdateInput;
};

export type MutationUpdateoutsourcedTransportVehicleArgs = {
  id: Scalars['String']['input'];
  outsourcedTransportVehicleInput: OutsourcedTransportVehicleUpdateInput;
};

export type MutationUpdatephysicalCustomerOrderArgs = {
  id: Scalars['String']['input'];
  physicalCustomerOrderInput: PhysicalCustomerOrderUpdateInput;
};

export type NaturalPersonInput = {
  rg: Scalars['String']['input'];
  uf: Scalars['String']['input'];
  cep: Scalars['String']['input'];
  cpf: Scalars['String']['input'];
  city: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  first_phone: Scalars['String']['input'];
  nationality: Scalars['String']['input'];
  neighborhood: Scalars['String']['input'];
  public_place: Scalars['String']['input'];
  date_birth: Scalars['Timestamp']['input'];
  address_number: Scalars['String']['input'];
  complement?: InputMaybe<Scalars['String']['input']>;
  third_phone?: InputMaybe<Scalars['String']['input']>;
  second_phone?: InputMaybe<Scalars['String']['input']>;
};

export type NaturalPersonModel = {
  id: Scalars['String']['output'];
  rg: Scalars['String']['output'];
  uf: Scalars['String']['output'];
  cep: Scalars['String']['output'];
  cpf: Scalars['String']['output'];
  __typename?: 'NaturalPersonModel';
  city: Scalars['String']['output'];
  name: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  first_phone: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  neighborhood: Scalars['String']['output'];
  public_place: Scalars['String']['output'];
  date_birth: Scalars['Timestamp']['output'];
  address_number: Scalars['String']['output'];
  complement?: Maybe<Scalars['String']['output']>;
  third_phone?: Maybe<Scalars['String']['output']>;
  second_phone?: Maybe<Scalars['String']['output']>;
};

export type NaturalPersonOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  rg?: InputMaybe<SortOrder>;
  uf?: InputMaybe<SortOrder>;
  cep?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  complement?: InputMaybe<SortOrder>;
  date_birth?: InputMaybe<SortOrder>;
  first_phone?: InputMaybe<SortOrder>;
  nationality?: InputMaybe<SortOrder>;
  third_phone?: InputMaybe<SortOrder>;
  neighborhood?: InputMaybe<SortOrder>;
  public_place?: InputMaybe<SortOrder>;
  second_phone?: InputMaybe<SortOrder>;
  address_number?: InputMaybe<SortOrder>;
  Sender?: InputMaybe<SenderOrderByWithRelationInput>;
  Recipient?: InputMaybe<RecipientOrderByWithRelationInput>;
  OwnDriver?: InputMaybe<OwnDriverOrderByRelationAggregateInput>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverOrderByRelationAggregateInput>;
  PhysicalCustomer?: InputMaybe<PhysicalCustomerOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyDriver?: InputMaybe<OutsourcedTransportCompanyDriverOrderByWithRelationInput>;
};

export type NaturalPersonUpdate = {
  rg?: InputMaybe<Scalars['String']['input']>;
  uf?: InputMaybe<Scalars['String']['input']>;
  cep?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  complement?: InputMaybe<Scalars['String']['input']>;
  first_phone?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  third_phone?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  public_place?: InputMaybe<Scalars['String']['input']>;
  second_phone?: InputMaybe<Scalars['String']['input']>;
  date_birth?: InputMaybe<Scalars['Timestamp']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
};

export type NaturalPersonWhereInput = {
  id?: InputMaybe<StringFilter>;
  rg?: InputMaybe<StringFilter>;
  uf?: InputMaybe<StringFilter>;
  cep?: InputMaybe<StringFilter>;
  cpf?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  Sender?: InputMaybe<SenderWhereInput>;
  first_phone?: InputMaybe<StringFilter>;
  nationality?: InputMaybe<StringFilter>;
  date_birth?: InputMaybe<DateTimeFilter>;
  neighborhood?: InputMaybe<StringFilter>;
  public_place?: InputMaybe<StringFilter>;
  address_number?: InputMaybe<StringFilter>;
  Recipient?: InputMaybe<RecipientWhereInput>;
  complement?: InputMaybe<StringNullableFilter>;
  third_phone?: InputMaybe<StringNullableFilter>;
  OR?: InputMaybe<Array<NaturalPersonWhereInput>>;
  second_phone?: InputMaybe<StringNullableFilter>;
  AND?: InputMaybe<Array<NaturalPersonWhereInput>>;
  NOT?: InputMaybe<Array<NaturalPersonWhereInput>>;
  OwnDriver?: InputMaybe<OwnDriverListRelationFilter>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverListRelationFilter>;
  PhysicalCustomer?: InputMaybe<PhysicalCustomerListRelationFilter>;
  OutsourcedTransportCompanyDriver?: InputMaybe<OutsourcedTransportCompanyDriverWhereInput>;
};

export type NestedBoolFilter = {
  not?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NestedDateTimeFilter = {
  not?: InputMaybe<NestedDateTimeFilter>;
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type NestedFloatFilter = {
  not?: InputMaybe<NestedFloatFilter>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  not?: InputMaybe<NestedIntFilter>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  not?: InputMaybe<NestedStringFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedStringNullableFilter = {
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderProcessingInput = {
  status: StatusOrder;
  vehicle_id: Scalars['String']['input'];
  start_at: Scalars['Timestamp']['input'];
  total_distance: Scalars['Float']['input'];
  total_spend_liters: Scalars['Float']['input'];
  total_spending_money: Scalars['Float']['input'];
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  legal_customer_order_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  physical_customer_order_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderProcessingModel = {
  id: Scalars['String']['output'];
  status: StatusOrder;
  Vehicle: VehicleCarModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'OrderProcessingModel';
  end_at: Scalars['Timestamp']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  vehicle_id: Scalars['String']['output'];
  start_at: Scalars['Timestamp']['output'];
  total_distance: Scalars['Float']['output'];
  order_processing: Scalars['String']['output'];
  total_spend_liters: Scalars['Float']['output'];
  LegalClientOrders: Array<LegalClientOrderModel>;
  total_spending_money: Scalars['Float']['output'];
  order_processing_number: Scalars['String']['output'];
  PhysicalCustomerOrders: Array<PhysicalCustomerOrderModel>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OrderProcessingOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  end_at?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  start_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  total_distance?: InputMaybe<SortOrder>;
  total_spend_liters?: InputMaybe<SortOrder>;
  total_spending_money?: InputMaybe<SortOrder>;
  order_processing_number?: InputMaybe<SortOrder>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  Incident?: InputMaybe<IncidentOrderByRelationAggregateInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OrderProcessingUpdateInput = {
  status?: InputMaybe<StatusOrder>;
  end_at?: InputMaybe<Scalars['Timestamp']['input']>;
  vehicle_id?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Timestamp']['input']>;
  total_distance?: InputMaybe<Scalars['Float']['input']>;
  total_spend_liters?: InputMaybe<Scalars['Float']['input']>;
  total_spending_money?: InputMaybe<Scalars['Float']['input']>;
  disconnect_legal_client_order?: InputMaybe<Scalars['String']['input']>;
  legal_customer_order_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  disconnect_physical_customer_order?: InputMaybe<Scalars['String']['input']>;
  physical_customer_order_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderProcessingWhereInput = {
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  start_at?: InputMaybe<DateTimeFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  total_distance?: InputMaybe<FloatFilter>;
  end_at?: InputMaybe<DateTimeNullableFilter>;
  total_spend_liters?: InputMaybe<FloatFilter>;
  total_spending_money?: InputMaybe<FloatFilter>;
  Incident?: InputMaybe<IncidentListRelationFilter>;
  OR?: InputMaybe<Array<OrderProcessingWhereInput>>;
  AND?: InputMaybe<Array<OrderProcessingWhereInput>>;
  NOT?: InputMaybe<Array<OrderProcessingWhereInput>>;
  order_processing_number?: InputMaybe<StringFilter>;
  LegalClientOrder?: InputMaybe<LegalClientOrderListRelationFilter>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedDriverInput = {
  cnh: Scalars['String']['input'];
  NaturalPerson: NaturalPersonInput;
  cnh_category: Scalars['String']['input'];
  course_mopp: Scalars['Boolean']['input'];
  cnh_expiration: Scalars['Timestamp']['input'];
  company_vehicle_id?: InputMaybe<Scalars['String']['input']>;
  outsourced_vehicle_id?: InputMaybe<Scalars['String']['input']>;
  ContractOutsourcedDriver: ContractOutsourcedDriverReferecesInput;
};

export type OutsourcedDriverListRelationFilter = {
  none?: InputMaybe<OutsourcedDriverWhereInput>;
  some?: InputMaybe<OutsourcedDriverWhereInput>;
  every?: InputMaybe<OutsourcedDriverWhereInput>;
};

export type OutsourcedDriverModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  cnh: Scalars['String']['output'];
  NaturalPerson: NaturalPersonModel;
  __typename?: 'OutsourcedDriverModel';
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  cnh_category: Scalars['String']['output'];
  course_mopp: Scalars['Boolean']['output'];
  CompanyVehicle?: Maybe<CompanyVehicleIModel>;
  company_vehicle: Scalars['Boolean']['output'];
  cnh_expiration: Scalars['Timestamp']['output'];
  natural_person_id: Scalars['String']['output'];
  OutsourcedVehicle?: Maybe<OutsourcedVehicleIModel>;
  outsourced_vehicle_id: Scalars['String']['output'];
  ContractOutsourcedDriver: Array<ContractOutsourcedDriverModel>;
};

export type OutsourcedDriverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedDriverOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  cnh?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  course_mopp?: InputMaybe<SortOrder>;
  cnh_category?: InputMaybe<SortOrder>;
  cnh_expiration?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  company_vehicle_id?: InputMaybe<SortOrder>;
  outsourced_vehicle_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  CompanyVehicle?: InputMaybe<CompanyVehicleOrderByWithRelationInput>;
  OutsourcedVehicle?: InputMaybe<OutsourcedVehicleOrderByWithRelationInput>;
  ContractOutsourcedDriver?: InputMaybe<ContractOutsourcedDriverOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedDriverUpdateInput = {
  cnh?: InputMaybe<Scalars['String']['input']>;
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  cnh_category?: InputMaybe<Scalars['String']['input']>;
  course_mopp?: InputMaybe<Scalars['Boolean']['input']>;
  cnh_expiration?: InputMaybe<Scalars['Timestamp']['input']>;
  company_vehicle_id?: InputMaybe<Scalars['String']['input']>;
  outsourced_vehicle_id?: InputMaybe<Scalars['String']['input']>;
};

export type OutsourcedDriverWhereInput = {
  id?: InputMaybe<StringFilter>;
  cnh?: InputMaybe<StringFilter>;
  course_mopp?: InputMaybe<BoolFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  cnh_category?: InputMaybe<StringFilter>;
  cnh_expiration?: InputMaybe<DateTimeFilter>;
  natural_person_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<OutsourcedDriverWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedDriverWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedDriverWhereInput>>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  CompanyVehicle?: InputMaybe<CompanyVehicleWhereInput>;
  company_vehicle_id?: InputMaybe<StringNullableFilter>;
  outsourced_vehicle_id?: InputMaybe<StringNullableFilter>;
  OutsourcedVehicle?: InputMaybe<OutsourcedVehicleWhereInput>;
  ContractOutsourcedDriver?: InputMaybe<ContractOutsourcedDriverListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedTransportCompanyContractInput = {
  carrierCompanyId: Scalars['String']['input'];
  legalClientOrderId: Scalars['String']['input'];
  outSourcedTransportCompanyId: Scalars['String']['input'];
};

export type OutsourcedTransportCompanyContractListRelationFilter = {
  none?: InputMaybe<OutsourcedTransportCompanyContractWhereInput>;
  some?: InputMaybe<OutsourcedTransportCompanyContractWhereInput>;
  every?: InputMaybe<OutsourcedTransportCompanyContractWhereInput>;
};

export type OutsourcedTransportCompanyContractModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  CarrierCompany: CarrierCompanyModel;
  LegalClientOrder: LegalClientOrderModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  contractNumber: Scalars['String']['output'];
  carrierCompanyId: Scalars['String']['output'];
  legalClientOrderId: Scalars['String']['output'];
  __typename?: 'OutsourcedTransportCompanyContractModel';
  outSourcedTransportCompanyId: Scalars['String']['output'];
  OutsourcedTransportCompany: OutsourcedTransportCompanyModel;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OutsourcedTransportCompanyContractOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyContractOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  contract_number?: InputMaybe<SortOrder>;
  carrier_company_id?: InputMaybe<SortOrder>;
  legal_client_order_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  outsourced_transport_company_id?: InputMaybe<SortOrder>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderOrderByWithRelationInput>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyContractUpdateInput = {
  carrierCompanyId?: InputMaybe<Scalars['String']['input']>;
  outSourcedTransportCompanyId?: InputMaybe<Scalars['String']['input']>;
};

export type OutsourcedTransportCompanyContractWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  contract_number?: InputMaybe<StringFilter>;
  carrier_company_id?: InputMaybe<StringFilter>;
  legal_client_order_id?: InputMaybe<StringFilter>;
  CarrierCompany?: InputMaybe<CarrierCompanyWhereInput>;
  LegalClientOrder?: InputMaybe<LegalClientOrderWhereInput>;
  outsourced_transport_company_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<OutsourcedTransportCompanyContractWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedTransportCompanyContractWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedTransportCompanyContractWhereInput>>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedTransportCompanyDriverInput = {
  cnh: Scalars['String']['input'];
  cnh_category: Scalars['String']['input'];
  course_mopp: Scalars['Boolean']['input'];
  cnh_expiration: Scalars['Timestamp']['input'];
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
  outsourced_transport_company_id: Scalars['String']['input'];
};

export type OutsourcedTransportCompanyDriverListRelationFilter = {
  none?: InputMaybe<OutsourcedTransportCompanyDriverWhereInput>;
  some?: InputMaybe<OutsourcedTransportCompanyDriverWhereInput>;
  every?: InputMaybe<OutsourcedTransportCompanyDriverWhereInput>;
};

export type OutsourcedTransportCompanyDriverModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  cnh: Scalars['String']['output'];
  NaturalPerson: NaturalPersonModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  cnh_category: Scalars['String']['output'];
  course_mopp: Scalars['Boolean']['output'];
  cnh_expiration: Scalars['Timestamp']['output'];
  natural_person_id: Scalars['String']['output'];
  __typename?: 'OutsourcedTransportCompanyDriverModel';
  OutsourcedTransportCompany: OutsourcedTransportCompanyModel;
  outsourced_transport_company_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OutsourcedTransportCompanyDriverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyDriverOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  cnh?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  course_mopp?: InputMaybe<SortOrder>;
  cnh_category?: InputMaybe<SortOrder>;
  cnh_expiration?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  outsourced_transport_company_id?: InputMaybe<SortOrder>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyDriverUpdateInput = {
  cnh?: InputMaybe<Scalars['String']['input']>;
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  cnh_category?: InputMaybe<Scalars['String']['input']>;
  course_mopp?: InputMaybe<Scalars['Boolean']['input']>;
  cnh_expiration?: InputMaybe<Scalars['Timestamp']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
  outsourced_transport_company_id?: InputMaybe<Scalars['String']['input']>;
};

export type OutsourcedTransportCompanyDriverWhereInput = {
  id?: InputMaybe<StringFilter>;
  cnh?: InputMaybe<StringFilter>;
  course_mopp?: InputMaybe<BoolFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  cnh_category?: InputMaybe<StringFilter>;
  cnh_expiration?: InputMaybe<DateTimeFilter>;
  natural_person_id?: InputMaybe<StringFilter>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  outsourced_transport_company_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<OutsourcedTransportCompanyDriverWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedTransportCompanyDriverWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedTransportCompanyDriverWhereInput>>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedTransportCompanyInput = {
  LegalPerson?: InputMaybe<LegalPersonInput>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type OutsourcedTransportCompanyListRelationFilter = {
  none?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  some?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  every?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
};

export type OutsourcedTransportCompanyModel = {
  id: Scalars['String']['output'];
  LegalPerson: LegalPersonModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  legalPersonId: Scalars['String']['output'];
  __typename?: 'OutsourcedTransportCompanyModel';
  Vehicles?: Maybe<Array<OutsourcedTransportVehicleModel>>;
  Drivers?: Maybe<Array<OutsourcedTransportCompanyDriverModel>>;
  Contracts?: Maybe<Array<OutsourcedTransportCompanyContractModel>>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OutsourcedTransportCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  OutsourcedCompanyVehicle?: InputMaybe<OutsourcedTransportVehicleOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyDriver?: InputMaybe<OutsourcedTransportCompanyDriverOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportCompanyUpdateInput = {
  LegalPerson: LegalPersonUpdateInput;
};

export type OutsourcedTransportCompanyWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  legal_person_id?: InputMaybe<StringFilter>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  OR?: InputMaybe<Array<OutsourcedTransportCompanyWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedTransportCompanyWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedTransportCompanyWhereInput>>;
  OutsourcedCompanyVehicle?: InputMaybe<OutsourcedTransportVehicleListRelationFilter>;
  OutsourcedTransportCompanyDriver?: InputMaybe<OutsourcedTransportCompanyDriverListRelationFilter>;
  OutsourcedTransportCompanyContract?: InputMaybe<OutsourcedTransportCompanyContractListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedTransportVehicleInput = {
  Vehicle: VehicleInput;
  outsourced_company_id: Scalars['String']['input'];
};

export type OutsourcedTransportVehicleListRelationFilter = {
  none?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
  some?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
  every?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
};

export type OutsourcedTransportVehicleModel = {
  id: Scalars['String']['output'];
  Vehicle: VehicleCarModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  vehicle_id: Scalars['String']['output'];
  __typename?: 'OutsourcedTransportVehicleModel';
  outsourced_company_id: Scalars['String']['output'];
  OutsourcedTransportCompany: OutsourcedTransportCompanyModel;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OutsourcedTransportVehicleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportVehicleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  outsourced_company_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedTransportVehicleUpdateInput = {
  Vehicle?: InputMaybe<VehicleUpdateInput>;
  outsourced_company_id?: InputMaybe<Scalars['String']['input']>;
};

export type OutsourcedTransportVehicleWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  outsourced_company_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<OutsourcedTransportVehicleWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedTransportVehicleWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedTransportVehicleWhereInput>>;
  OutsourcedTransportCompany?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OutsourcedVehicleIModel = {
  id: Scalars['String']['output'];
  Vehicle: VehicleCarModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'OutsourcedVehicleIModel';
  vehicle_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OutsourcedVehicleInput = {
  Vehicle: VehicleInput;
};

export type OutsourcedVehicleListRelationFilter = {
  none?: InputMaybe<OutsourcedVehicleWhereInput>;
  some?: InputMaybe<OutsourcedVehicleWhereInput>;
  every?: InputMaybe<OutsourcedVehicleWhereInput>;
};

export type OutsourcedVehicleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OutsourcedVehicleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  vehicle_id?: InputMaybe<SortOrder>;
  order_processing_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  orderProcessingLegalClientId?: InputMaybe<SortOrder>;
  Vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OutsourcedVehicleUpdateInput = {
  Vehicle?: InputMaybe<VehicleUpdateInput>;
};

export type OutsourcedVehicleWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  vehicle_id?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  Vehicle?: InputMaybe<VehicleWhereInput>;
  OR?: InputMaybe<Array<OutsourcedVehicleWhereInput>>;
  AND?: InputMaybe<Array<OutsourcedVehicleWhereInput>>;
  NOT?: InputMaybe<Array<OutsourcedVehicleWhereInput>>;
  order_processing_id?: InputMaybe<StringNullableFilter>;
  OutsourcedDriver?: InputMaybe<OutsourcedDriverWhereInput>;
  orderProcessingLegalClientId?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OwnDriverInput = {
  cnh: Scalars['String']['input'];
  cnh_category: Scalars['String']['input'];
  course_mopp: Scalars['Boolean']['input'];
  company_vehicle: Scalars['Boolean']['input'];
  cnh_expiration: Scalars['Timestamp']['input'];
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type OwnDriverListRelationFilter = {
  none?: InputMaybe<OwnDriverWhereInput>;
  some?: InputMaybe<OwnDriverWhereInput>;
  every?: InputMaybe<OwnDriverWhereInput>;
};

export type OwnDriverModel = {
  id: Scalars['String']['output'];
  __typename?: 'OwnDriverModel';
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  cnh: Scalars['String']['output'];
  NaturalPerson: NaturalPersonModel;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  cnh_category: Scalars['String']['output'];
  course_mopp: Scalars['Boolean']['output'];
  company_vehicle: Scalars['Boolean']['output'];
  cnh_expiration: Scalars['Timestamp']['output'];
  natural_person_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type OwnDriverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OwnDriverOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  cnh?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  course_mopp?: InputMaybe<SortOrder>;
  cnh_category?: InputMaybe<SortOrder>;
  cnh_expiration?: InputMaybe<SortOrder>;
  company_vehicle?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type OwnDriverUpdate = {
  cnh?: InputMaybe<Scalars['String']['input']>;
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  cnh_category?: InputMaybe<Scalars['String']['input']>;
  course_mopp?: InputMaybe<Scalars['Boolean']['input']>;
  company_vehicle?: InputMaybe<Scalars['Boolean']['input']>;
  cnh_expiration?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type OwnDriverUpdateManyInput = {
  id: Scalars['String']['input'];
  cnh?: InputMaybe<Scalars['String']['input']>;
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  cnh_category?: InputMaybe<Scalars['String']['input']>;
  course_mopp?: InputMaybe<Scalars['Boolean']['input']>;
  company_vehicle?: InputMaybe<Scalars['Boolean']['input']>;
  cnh_expiration?: InputMaybe<Scalars['Timestamp']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type OwnDriverWhereInput = {
  id?: InputMaybe<StringFilter>;
  cnh?: InputMaybe<StringFilter>;
  course_mopp?: InputMaybe<BoolFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  cnh_category?: InputMaybe<StringFilter>;
  company_vehicle?: InputMaybe<BoolFilter>;
  OR?: InputMaybe<Array<OwnDriverWhereInput>>;
  cnh_expiration?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<OwnDriverWhereInput>>;
  NOT?: InputMaybe<Array<OwnDriverWhereInput>>;
  natural_person_id?: InputMaybe<StringFilter>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type PhysicalCustomerCteInput = {
  cteType: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerCteModel = {
  id: Scalars['String']['output'];
  cteType: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  acessKey: Scalars['String']['output'];
  cteNumber: Scalars['String']['output'];
  __typename?: 'PhysicalCustomerCteModel';
  observations?: Maybe<Scalars['String']['output']>;
};

export type PhysicalCustomerCteOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  order_id?: InputMaybe<SortOrder>;
  type_cte?: InputMaybe<SortOrder>;
  access_key?: InputMaybe<SortOrder>;
  cte_number?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByWithRelationInput>;
};

export type PhysicalCustomerCteUpdateInput = {
  cteType?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerCteWhereInput = {
  id?: InputMaybe<StringFilter>;
  order_id?: InputMaybe<StringFilter>;
  type_cte?: InputMaybe<StringFilter>;
  access_key?: InputMaybe<StringFilter>;
  cte_number?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<PhysicalCustomerCteWhereInput>>;
  AND?: InputMaybe<Array<PhysicalCustomerCteWhereInput>>;
  NOT?: InputMaybe<Array<PhysicalCustomerCteWhereInput>>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderWhereInput>;
};

export type PhysicalCustomerInput = {
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  branch?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerListRelationFilter = {
  none?: InputMaybe<PhysicalCustomerWhereInput>;
  some?: InputMaybe<PhysicalCustomerWhereInput>;
  every?: InputMaybe<PhysicalCustomerWhereInput>;
};

export type PhysicalCustomerModel = {
  id: Scalars['String']['output'];
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  NaturalPerson: NaturalPersonModel;
  __typename?: 'PhysicalCustomerModel';
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  branch?: Maybe<Scalars['String']['output']>;
  natural_person_id: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type PhysicalCustomerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  branch?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerOrderInput = {
  carrier_id: Scalars['String']['input'];
  quote_table_id: Scalars['String']['input'];
  physicalCustomerId: Scalars['String']['input'];
};

export type PhysicalCustomerOrderListRelationFilter = {
  none?: InputMaybe<PhysicalCustomerOrderWhereInput>;
  some?: InputMaybe<PhysicalCustomerOrderWhereInput>;
  every?: InputMaybe<PhysicalCustomerOrderWhereInput>;
};

export type PhysicalCustomerOrderModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  order: Scalars['String']['output'];
  CarrierCompany: CarrierCompanyModel;
  Quote: PhysicalCustomerQuoteTableModel;
  PhysicalCustomer: PhysicalCustomerModel;
  carrier_id: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  __typename?: 'PhysicalCustomerOrderModel';
  FreightExpenses: Array<FreightExpenseModel>;
  quote_table_id: Scalars['String']['output'];
  physicalCustomerId: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type PhysicalCustomerOrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerOrderOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  carrier_id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  quote_table_id?: InputMaybe<SortOrder>;
  completedOrdersId?: InputMaybe<SortOrder>;
  order_processing_id?: InputMaybe<SortOrder>;
  physical_customer_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  CarrierCompany?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
  CompletedOrders?: InputMaybe<CompletedOrdersOrderByWithRelationInput>;
  OrderProcessing?: InputMaybe<OrderProcessingOrderByWithRelationInput>;
  PhysicalCustomer?: InputMaybe<PhysicalCustomerOrderByWithRelationInput>;
  FreightExpenses?: InputMaybe<FreightExpensesOrderByRelationAggregateInput>;
  PhysicalCustomerCte?: InputMaybe<PhysicalCustomerCteOrderByWithRelationInput>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerOrderUpdateInput = {
  carrier_id?: InputMaybe<Scalars['String']['input']>;
  quote_table_id?: InputMaybe<Scalars['String']['input']>;
  physicalCustomerId?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerOrderWhereInput = {
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<StringFilter>;
  carrier_id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  quote_table_id?: InputMaybe<StringFilter>;
  physical_customer_id?: InputMaybe<StringFilter>;
  completedOrdersId?: InputMaybe<StringNullableFilter>;
  CarrierCompany?: InputMaybe<CarrierCompanyWhereInput>;
  order_processing_id?: InputMaybe<StringNullableFilter>;
  CompletedOrders?: InputMaybe<CompletedOrdersWhereInput>;
  OR?: InputMaybe<Array<PhysicalCustomerOrderWhereInput>>;
  OrderProcessing?: InputMaybe<OrderProcessingWhereInput>;
  AND?: InputMaybe<Array<PhysicalCustomerOrderWhereInput>>;
  NOT?: InputMaybe<Array<PhysicalCustomerOrderWhereInput>>;
  PhysicalCustomer?: InputMaybe<PhysicalCustomerWhereInput>;
  FreightExpenses?: InputMaybe<FreightExpensesListRelationFilter>;
  PhysicalCustomerCte?: InputMaybe<PhysicalCustomerCteWhereInput>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableWhereInput>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type PhysicalCustomerQuoteTableInput = {
  mass: Scalars['Float']['input'];
  amount: Scalars['Float']['input'];
  volume: Scalars['Float']['input'];
  nf_value: Scalars['Float']['input'];
  senderId: Scalars['String']['input'];
  who_pays: Scalars['String']['input'];
  description: Scalars['String']['input'];
  recipientId: Scalars['String']['input'];
  postalCodOrigin: Scalars['String']['input'];
  typeMerchandise: Scalars['String']['input'];
  postalCodDestiny: Scalars['String']['input'];
};

export type PhysicalCustomerQuoteTableListRelationFilter = {
  none?: InputMaybe<PhysicalCustomerQuoteTableWhereInput>;
  some?: InputMaybe<PhysicalCustomerQuoteTableWhereInput>;
  every?: InputMaybe<PhysicalCustomerQuoteTableWhereInput>;
};

export type PhysicalCustomerQuoteTableModel = {
  id: Scalars['String']['output'];
  Sender: SenderModel;
  Recipient: RecipientModel;
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  mass: Scalars['Float']['output'];
  amount: Scalars['Float']['output'];
  volume: Scalars['Float']['output'];
  nf_value: Scalars['Float']['output'];
  codQuote: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  who_pays: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  recipientId: Scalars['String']['output'];
  postalCodOrigin: Scalars['String']['output'];
  typeMerchandise: Scalars['String']['output'];
  postalCodDestiny: Scalars['String']['output'];
  __typename?: 'PhysicalCustomerQuoteTableModel';
};

export type PhysicalCustomerQuoteTableOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerQuoteTableOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  mass?: InputMaybe<SortOrder>;
  amount?: InputMaybe<SortOrder>;
  volume?: InputMaybe<SortOrder>;
  nf_value?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  who_pays?: InputMaybe<SortOrder>;
  cod_quote?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  recipient_id?: InputMaybe<SortOrder>;
  type_merchandise?: InputMaybe<SortOrder>;
  postal_cod_origin?: InputMaybe<SortOrder>;
  postal_cod_destiny?: InputMaybe<SortOrder>;
  Sender?: InputMaybe<SenderOrderByWithRelationInput>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Recipient?: InputMaybe<RecipientOrderByWithRelationInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type PhysicalCustomerQuoteTableUpdate = {
  mass?: InputMaybe<Scalars['Float']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
  nf_value?: InputMaybe<Scalars['Float']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  who_pays?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  recipientId?: InputMaybe<Scalars['String']['input']>;
  postalCodOrigin?: InputMaybe<Scalars['String']['input']>;
  typeMerchandise?: InputMaybe<Scalars['String']['input']>;
  postalCodDestiny?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerQuoteTableWhereInput = {
  id?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  mass?: InputMaybe<FloatFilter>;
  volume?: InputMaybe<FloatFilter>;
  nf_value?: InputMaybe<FloatFilter>;
  senderId?: InputMaybe<StringFilter>;
  who_pays?: InputMaybe<StringFilter>;
  cod_quote?: InputMaybe<StringFilter>;
  Sender?: InputMaybe<SenderWhereInput>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  recipient_id?: InputMaybe<StringFilter>;
  Recipient?: InputMaybe<RecipientWhereInput>;
  type_merchandise?: InputMaybe<StringFilter>;
  postal_cod_origin?: InputMaybe<StringFilter>;
  postal_cod_destiny?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<PhysicalCustomerQuoteTableWhereInput>>;
  AND?: InputMaybe<Array<PhysicalCustomerQuoteTableWhereInput>>;
  NOT?: InputMaybe<Array<PhysicalCustomerQuoteTableWhereInput>>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type PhysicalCustomerUpdateInput = {
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  branch?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerUpdateManyInput = {
  id: Scalars['String']['input'];
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  branch?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCustomerWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  branch?: InputMaybe<StringNullableFilter>;
  natural_person_id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<PhysicalCustomerWhereInput>>;
  AND?: InputMaybe<Array<PhysicalCustomerWhereInput>>;
  NOT?: InputMaybe<Array<PhysicalCustomerWhereInput>>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  PhysicalCustomerOrder?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  user: UserModel;
  getICMS: IcmsModel;
  __typename?: 'Query';
  getSender: SenderModel;
  users: Array<UserModel>;
  getIncident: IncidentModel;
  getRecipient: RecipientModel;
  getMaintenance: MaintenanceModel;
  getVehicleType: VehicleTypeModel;
  getVehicleBrand: VehicleBrandModel;
  generateLegalClientCte: CtePDfModel;
  getAllICMS?: Maybe<Array<IcmsModel>>;
  getOwnDriver?: Maybe<OwnDriverModel>;
  getVehicleModel: VehicleModelGraphql;
  countIcms: Scalars['Float']['output'];
  getLegalClientModel: LegalClientModel;
  getAllOwnDriver: Array<OwnDriverModel>;
  getFreightExpense: FreightExpenseModel;
  totalUsers: Scalars['Float']['output'];
  getCompanyVehicle: CompanyVehicleIModel;
  generatePhysicalCustomerCte: CtePDfModel;
  getAllSender?: Maybe<Array<SenderModel>>;
  getCompletedOrders: CompletedOrdersModel;
  getOrderProcessing: OrderProcessingModel;
  totalSenders: Scalars['Float']['output'];
  countIncident: Scalars['Float']['output'];
  getLegalContractModel: LegalContractModel;
  getOutsourcedDriver: OutsourcedDriverModel;
  getCarrierCompanyModel: CarrierCompanyModel;
  totalOwnDrivers: Scalars['Float']['output'];
  totalRecipients: Scalars['Float']['output'];
  getAllVehicleBrand: Array<VehicleBrandModel>;
  getTypeOfMaintenance: TypeOfMaintenanceModel;
  getAllIncidents?: Maybe<Array<IncidentModel>>;
  getOutsourcedVehicle: OutsourcedVehicleIModel;
  getVehicleBodyworkModel: VehicleBodyworkModel;
  totalLegalClients: Scalars['Float']['output'];
  getAllRecipient?: Maybe<Array<RecipientModel>>;
  getLegalClientCte?: Maybe<LegalClientCteModel>;
  countFreightExpenses: Scalars['Float']['output'];
  getAllLegalClientCte: Array<LegalClientCteModel>;
  getAllCompanyVehicle: Array<CompanyVehicleIModel>;
  totalCarrierCompanies: Scalars['Float']['output'];
  getAllCompletedOrders: Array<CompletedOrdersModel>;
  getAllLegalClient?: Maybe<Array<LegalClientModel>>;
  getAllMaintenance?: Maybe<Array<MaintenanceModel>>;
  getAllOrderProcessing: Array<OrderProcessingModel>;
  getPhysicalCustomer?: Maybe<PhysicalCustomerModel>;
  totalPhysicalCustomers: Scalars['Float']['output'];
  getAllVehicleTypes?: Maybe<Array<VehicleTypeModel>>;
  getCiotForLegalClientModel: CiotForLegalClientModel;
  getMaintenanceCompanyModel: MaintenanceCompanyModel;
  getAllOutsourcedDriver: Array<OutsourcedDriverModel>;
  getAllPhysicalCustomer: Array<PhysicalCustomerModel>;
  countLegalClientQuoteTable: Scalars['Float']['output'];
  getAllLegalContract?: Maybe<Array<LegalContractModel>>;
  getAllVehicleModel?: Maybe<Array<VehicleModelGraphql>>;
  getAllOutsourcedVehicle: Array<OutsourcedVehicleIModel>;
  getLegalClientOrderModel?: Maybe<LegalClientOrderModel>;
  getAllCarrierCompany?: Maybe<Array<CarrierCompanyModel>>;
  getPhysicalCustomerCte?: Maybe<PhysicalCustomerCteModel>;
  getAllFreightExpenses?: Maybe<Array<FreightExpenseModel>>;
  totalContractOutsourcedDriver: Scalars['Float']['output'];
  getAllPhysicalCustomerCte: Array<PhysicalCustomerCteModel>;
  getAllVehicleBodywork?: Maybe<Array<VehicleBodyworkModel>>;
  getContractOutsourcedDriver: ContractOutsourcedDriverModel;
  getAllLegalClientOrder?: Maybe<Array<LegalClientOrderModel>>;
  getLegalClientQuoteTable?: Maybe<LegalClientQuoteTableModel>;
  getAllLegalClientQuoteTable: Array<LegalClientQuoteTableModel>;
  getAllTypeOfMaintenance?: Maybe<Array<TypeOfMaintenanceModel>>;
  getAllCiotForLegalClient?: Maybe<Array<CiotForLegalClientModel>>;
  getAllMaintenanceCompany?: Maybe<Array<MaintenanceCompanyModel>>;
  getPhysicalCustomerOrderModel?: Maybe<PhysicalCustomerOrderModel>;
  getAllContractOutsourcedDriver: Array<ContractOutsourcedDriverModel>;
  getAllPhysicalCustomerOrder?: Maybe<Array<PhysicalCustomerOrderModel>>;
  getPhysicalCustomerQuoteTable?: Maybe<PhysicalCustomerQuoteTableModel>;
  getAllPhysicalCustomerQuoteTable: Array<PhysicalCustomerQuoteTableModel>;
  getOutsourcedTransportCompanyModel?: Maybe<OutsourcedTransportCompanyModel>;
  getOutsourcedTransportVehicleModel?: Maybe<OutsourcedTransportVehicleModel>;
  getOutsourcedTransportCompanyDriverModel: OutsourcedTransportCompanyDriverModel;
  getAllOutsourcedTransportCompany?: Maybe<
    Array<OutsourcedTransportCompanyModel>
  >;
  getAllOutsourcedTransportVehicle?: Maybe<
    Array<OutsourcedTransportVehicleModel>
  >;
  getOutsourcedTransportCompanyContractModel?: Maybe<OutsourcedTransportCompanyContractModel>;
  getAllOutsourcedTransportCompanyDriver?: Maybe<
    Array<OutsourcedTransportCompanyDriverModel>
  >;
  getAllOutsourcedTransportCompanyContract?: Maybe<
    Array<OutsourcedTransportCompanyContractModel>
  >;
};

export type QueryCountFreightExpensesArgs = {
  where?: InputMaybe<FreightExpensesWhereInput>;
};

export type QueryCountIcmsArgs = {
  where?: InputMaybe<IcmsWhereInput>;
};

export type QueryCountIncidentArgs = {
  where?: InputMaybe<IncidentWhereInput>;
};

export type QueryCountLegalClientQuoteTableArgs = {
  where?: InputMaybe<LegalClientQuoteTableWhereInput>;
};

export type QueryGenerateLegalClientCteArgs = {
  request: CtePdfLegalClientInput;
};

export type QueryGeneratePhysicalCustomerCteArgs = {
  request: CtePdfPhysicalCustomerInput;
};

export type QueryGetAllCarrierCompanyArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<CarrierCompanyWhereInput>;
  sort?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
};

export type QueryGetAllCiotForLegalClientArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<CiotForLegalClientWhereInput>;
  sort?: InputMaybe<CiotForLegalClientOrderByWithRelationInput>;
};

export type QueryGetAllCompanyVehicleArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<CompanyVehicleWhereInput>;
  sort?: InputMaybe<CompanyVehicleOrderByWithRelationInput>;
};

export type QueryGetAllCompletedOrdersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<CompletedOrdersWhereInput>;
  sort?: InputMaybe<CompletedOrdersOrderByWithRelationInput>;
};

export type QueryGetAllContractOutsourcedDriverArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<ContractOutsourcedDriverWhereInput>;
  sort?: InputMaybe<ContractOutsourcedDriverOrderByWithRelationInput>;
};

export type QueryGetAllFreightExpensesArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<FreightExpensesWhereInput>;
  sort?: InputMaybe<FreightExpensesOrderByWithRelationInput>;
};

export type QueryGetAllIcmsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<IcmsWhereInput>;
  sort?: InputMaybe<IcmsOrderByWithRelationInput>;
};

export type QueryGetAllIncidentsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<IncidentWhereInput>;
  sort?: InputMaybe<IncidentOrderByWithRelationInput>;
};

export type QueryGetAllLegalClientArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<LegalClientWhereInput>;
  sort?: InputMaybe<LegalClientOrderByWithRelationInput>;
};

export type QueryGetAllLegalClientCteArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OwnDriverWhereInput>;
  sort?: InputMaybe<LegalClientCteOrderByWithRelationInput>;
};

export type QueryGetAllLegalClientOrderArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<LegalClientOrderWhereInput>;
  sort?: InputMaybe<LegalClientOrderOrderByWithRelationInput>;
};

export type QueryGetAllLegalClientQuoteTableArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<LegalClientQuoteTableWhereInput>;
  sort?: InputMaybe<LegalClientQuoteTableOrderByWithRelationInput>;
};

export type QueryGetAllLegalContractArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<LegalContractWhereInput>;
  sort?: InputMaybe<LegalContractOrderByWithRelationInput>;
};

export type QueryGetAllMaintenanceArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<MaintenanceWhereInput>;
  sort?: InputMaybe<MaintenanceOrderByWithRelationInput>;
};

export type QueryGetAllMaintenanceCompanyArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<MaintenanceCompanyWhereInput>;
  sort?: InputMaybe<MaintenanceCompanyOrderByWithRelationInput>;
};

export type QueryGetAllOrderProcessingArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OrderProcessingWhereInput>;
  sort?: InputMaybe<OrderProcessingOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedDriverArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedDriverWhereInput>;
  sort?: InputMaybe<OutsourcedDriverOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedTransportCompanyArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  sort?: InputMaybe<OutsourcedTransportCompanyOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedTransportCompanyContractArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedTransportCompanyWhereInput>;
  sort?: InputMaybe<OutsourcedTransportCompanyOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedTransportCompanyDriverArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedTransportCompanyDriverWhereInput>;
  sort?: InputMaybe<OutsourcedTransportCompanyDriverOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedTransportVehicleArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
  sort?: InputMaybe<OutsourcedTransportVehicleOrderByWithRelationInput>;
};

export type QueryGetAllOutsourcedVehicleArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
  sort?: InputMaybe<OutsourcedTransportVehicleOrderByWithRelationInput>;
};

export type QueryGetAllOwnDriverArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OwnDriverWhereInput>;
  sort?: InputMaybe<OwnDriverOrderByWithRelationInput>;
};

export type QueryGetAllPhysicalCustomerArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<PhysicalCustomerWhereInput>;
  sort?: InputMaybe<PhysicalCustomerOrderByWithRelationInput>;
};

export type QueryGetAllPhysicalCustomerCteArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<OwnDriverWhereInput>;
  sort?: InputMaybe<PhysicalCustomerCteOrderByWithRelationInput>;
};

export type QueryGetAllPhysicalCustomerOrderArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<PhysicalCustomerOrderWhereInput>;
  sort?: InputMaybe<PhysicalCustomerOrderOrderByWithRelationInput>;
};

export type QueryGetAllPhysicalCustomerQuoteTableArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<PhysicalCustomerQuoteTableWhereInput>;
  sort?: InputMaybe<PhysicalCustomerQuoteTableOrderByWithRelationInput>;
};

export type QueryGetAllRecipientArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<RecipientWhereInput>;
  sort?: InputMaybe<RecipientOrderByWithRelationInput>;
};

export type QueryGetAllSenderArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<SenderWhereInput>;
  sort?: InputMaybe<SenderOrderByWithRelationInput>;
};

export type QueryGetAllTypeOfMaintenanceArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<TypeOfMaintenanceWhereInput>;
  sort?: InputMaybe<TypeOfMaintenanceOrderByWithRelationInput>;
};

export type QueryGetAllVehicleBodyworkArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<VehicleBodyworkWhereInput>;
  sort?: InputMaybe<VehicleBodyworkOrderByWithRelationInput>;
};

export type QueryGetAllVehicleBrandArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<VehicleBrandWhereInput>;
  sort?: InputMaybe<VehicleBrandOrderByWithRelationInput>;
};

export type QueryGetAllVehicleModelArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<VehicleModelWhereInput>;
  sort?: InputMaybe<VehicleModelOrderByWithRelationInput>;
};

export type QueryGetAllVehicleTypesArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<VehicleTypeWhereInput>;
  sort?: InputMaybe<VehicleTypeOrderByWithRelationInput>;
};

export type QueryGetCarrierCompanyModelArgs = {
  cnpj?: InputMaybe<Scalars['String']['input']>;
  fantasyName?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  legalClientId?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetCiotForLegalClientModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  ciot?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetCompanyVehicleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetCompletedOrdersArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  vehicleData?: InputMaybe<GetVehicleTypeArgs>;
  order_processing?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetContractOutsourcedDriverArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetFreightExpenseArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetIcmsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  StateRelation?: InputMaybe<StateRelationIcmsArgs>;
};

export type QueryGetIncidentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLegalClientCteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  acessKey?: InputMaybe<Scalars['String']['input']>;
  cteNumber?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLegalClientModelArgs = {
  cnpj?: InputMaybe<Scalars['String']['input']>;
  fantasyName?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  legalClientId?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLegalClientOrderModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLegalClientQuoteTableArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  cod_quote?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLegalContractModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetMaintenanceArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetMaintenanceCompanyModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
  fantasyName?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOrderProcessingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  vehicleData?: InputMaybe<GetVehicleTypeArgs>;
  order_processing?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedDriverArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  rg?: InputMaybe<Scalars['String']['input']>;
  cnh?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  naturalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedTransportCompanyContractModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedTransportCompanyDriverModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  rg?: InputMaybe<Scalars['String']['input']>;
  cnh?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  naturalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedTransportCompanyModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
  fantasyName?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  legalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedTransportVehicleModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutsourcedVehicleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOwnDriverArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  rg?: InputMaybe<Scalars['String']['input']>;
  cnh?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  naturalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPhysicalCustomerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  rg?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  naturalPersonId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPhysicalCustomerCteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  acessKey?: InputMaybe<Scalars['String']['input']>;
  cteNumber?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPhysicalCustomerOrderModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPhysicalCustomerQuoteTableArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  cod_quote?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetRecipientArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  legalPerson?: InputMaybe<GetLegalPersonInput>;
  naturalPerson?: InputMaybe<GetNaturalPersonInput>;
};

export type QueryGetSenderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  legalPerson?: InputMaybe<GetLegalPersonInput>;
  naturalPerson?: InputMaybe<GetNaturalPersonInput>;
};

export type QueryGetTypeOfMaintenanceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetVehicleBodyworkModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetVehicleBrandArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetVehicleModelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetVehicleTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTotalCarrierCompaniesArgs = {
  where?: InputMaybe<CarrierCompanyWhereInput>;
};

export type QueryTotalContractOutsourcedDriverArgs = {
  where?: InputMaybe<ContractOutsourcedDriverWhereInput>;
};

export type QueryTotalLegalClientsArgs = {
  where?: InputMaybe<LegalClientWhereInput>;
};

export type QueryTotalOwnDriversArgs = {
  where?: InputMaybe<OwnDriverWhereInput>;
};

export type QueryTotalPhysicalCustomersArgs = {
  where?: InputMaybe<PhysicalCustomerWhereInput>;
};

export type QueryTotalRecipientsArgs = {
  where?: InputMaybe<RecipientWhereInput>;
};

export type QueryTotalSendersArgs = {
  where?: InputMaybe<SenderWhereInput>;
};

export type QueryTotalUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type QueryUsersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where?: InputMaybe<UserWhereInput>;
  sort?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RecipientInput = {
  LegalPerson?: InputMaybe<LegalPersonInput>;
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type RecipientListRelationFilter = {
  none?: InputMaybe<RecipientWhereInput>;
  some?: InputMaybe<RecipientWhereInput>;
  every?: InputMaybe<RecipientWhereInput>;
};

export type RecipientModel = {
  id: Scalars['String']['output'];
  __typename?: 'RecipientModel';
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  LegalPerson?: Maybe<LegalPersonModel>;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  NaturalPerson?: Maybe<NaturalPersonModel>;
  legal_person_id?: Maybe<Scalars['String']['output']>;
  natural_person_id?: Maybe<Scalars['String']['output']>;
};

export type RecipientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipientOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  LegalClientQuoteTable?: InputMaybe<LegalClientQuoteTableOrderByRelationAggregateInput>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type RecipientUpdateInput = {
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  LegalPerson?: InputMaybe<LegalPersonUpdateInput>;
};

export type RecipientUpdateManyInput = {
  id: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type RecipientWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<RecipientWhereInput>>;
  AND?: InputMaybe<Array<RecipientWhereInput>>;
  NOT?: InputMaybe<Array<RecipientWhereInput>>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  legal_person_id?: InputMaybe<StringNullableFilter>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  natural_person_id?: InputMaybe<StringNullableFilter>;
  LegalClientQuoteTable?: InputMaybe<LegalClientQuoteTableListRelationFilter>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type SenderInput = {
  LegalPerson?: InputMaybe<LegalPersonInput>;
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type SenderListRelationFilter = {
  none?: InputMaybe<SenderWhereInput>;
  some?: InputMaybe<SenderWhereInput>;
  every?: InputMaybe<SenderWhereInput>;
};

export type SenderModel = {
  id: Scalars['String']['output'];
  __typename?: 'SenderModel';
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  LegalPerson?: Maybe<LegalPersonModel>;
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  NaturalPerson?: Maybe<NaturalPersonModel>;
  legal_person_id?: Maybe<Scalars['String']['output']>;
  natural_person_id?: Maybe<Scalars['String']['output']>;
};

export type SenderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SenderOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  legal_person_id?: InputMaybe<SortOrder>;
  natural_person_id?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  LegalPerson?: InputMaybe<LegalPersonOrderByWithRelationInput>;
  NaturalPerson?: InputMaybe<NaturalPersonOrderByWithRelationInput>;
  LegalClientQuoteTable?: InputMaybe<LegalClientQuoteTableOrderByRelationAggregateInput>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type SenderUpdateInput = {
  NaturalPerson?: InputMaybe<NaturalPersonUpdate>;
  LegalPerson?: InputMaybe<LegalPersonUpdateInput>;
};

export type SenderUpdateManyInput = {
  id: Scalars['String']['input'];
  LegalPerson?: InputMaybe<LegalPersonInput>;
  NaturalPerson?: InputMaybe<NaturalPersonInput>;
  legal_person_id?: InputMaybe<Scalars['String']['input']>;
  natural_person_id?: InputMaybe<Scalars['String']['input']>;
};

export type SenderWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<SenderWhereInput>>;
  AND?: InputMaybe<Array<SenderWhereInput>>;
  NOT?: InputMaybe<Array<SenderWhereInput>>;
  LegalPerson?: InputMaybe<LegalPersonWhereInput>;
  legal_person_id?: InputMaybe<StringNullableFilter>;
  NaturalPerson?: InputMaybe<NaturalPersonWhereInput>;
  natural_person_id?: InputMaybe<StringNullableFilter>;
  LegalClientQuoteTable?: InputMaybe<LegalClientQuoteTableListRelationFilter>;
  PhysicalCustomerQuoteTable?: InputMaybe<PhysicalCustomerQuoteTableListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StateRelationIcmsArgs = {
  state_origin: Scalars['String']['input'];
  recipient_state: Scalars['String']['input'];
};

export enum StatusOrder {
  Created = 'CREATED',
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  InIncident = 'IN_INCIDENT',
  InProcessing = 'IN_PROCESSING',
}

export type StringFilter = {
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type StringNullableFilter = {
  mode?: InputMaybe<QueryMode>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum TypeMaintenanceEnum {
  DetectiveMaintenance = 'DETECTIVE_MAINTENANCE',
  CorrectiveMaintenance = 'CORRECTIVE_MAINTENANCE',
  PredictiveMaintenance = 'PREDICTIVE_MAINTENANCE',
  PreventiveMaintenance = 'PREVENTIVE_MAINTENANCE',
}

export type TypeOfMaintenanceInput = {
  typeMaintenance: TypeMaintenanceEnum;
  description: Scalars['String']['input'];
};

export type TypeOfMaintenanceListRelationFilter = {
  none?: InputMaybe<TypeOfMaintenanceWhereInput>;
  some?: InputMaybe<TypeOfMaintenanceWhereInput>;
  every?: InputMaybe<TypeOfMaintenanceWhereInput>;
};

export type TypeOfMaintenanceModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  __typename?: 'TypeOfMaintenanceModel';
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  typeMaintenance: Scalars['String']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type TypeOfMaintenanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TypeOfMaintenanceOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  typeMaintenance?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type TypeOfMaintenanceUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  typeMaintenance?: InputMaybe<Scalars['String']['input']>;
};

export type TypeOfMaintenanceWhereInput = {
  id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  typeMaintenance?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<TypeOfMaintenanceWhereInput>>;
  AND?: InputMaybe<Array<TypeOfMaintenanceWhereInput>>;
  NOT?: InputMaybe<Array<TypeOfMaintenanceWhereInput>>;
  Maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type UserInput = {
  name: Scalars['String']['input'];
  role: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserModel = {
  id: Scalars['String']['output'];
  __typename?: 'UserModel';
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
  avatar_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Timestamp']['output']>;
  created_at?: Maybe<Scalars['Timestamp']['output']>;
};

export type UserModelRefereces = {
  id: Scalars['String']['output'];
  __typename?: 'UserModelRefereces';
  name: Scalars['String']['output'];
  email: Scalars['String']['output'];
  username: Scalars['String']['output'];
  avatar_url?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  avatar_url?: InputMaybe<SortOrder>;
  IcmsCreatedBy?: InputMaybe<IcmsOrderByRelationAggregateInput>;
  IcmsUpdatedBy?: InputMaybe<IcmsOrderByRelationAggregateInput>;
  SenderCreatedBy?: InputMaybe<SenderOrderByRelationAggregateInput>;
  SenderUpdatedBy?: InputMaybe<SenderOrderByRelationAggregateInput>;
  IncidentCreatedBy?: InputMaybe<IncidentOrderByRelationAggregateInput>;
  IncidentUpdatedBy?: InputMaybe<IncidentOrderByRelationAggregateInput>;
  OwnDriverCreatedBy?: InputMaybe<OwnDriverOrderByRelationAggregateInput>;
  OwnDriverUpdatedBy?: InputMaybe<OwnDriverOrderByRelationAggregateInput>;
  RecipientCreatedBy?: InputMaybe<RecipientOrderByRelationAggregateInput>;
  RecipientUpdatedBy?: InputMaybe<RecipientOrderByRelationAggregateInput>;
  LegalClientCreatedBy?: InputMaybe<LegalClientOrderByRelationAggregateInput>;
  LegalClientUpdatedBy?: InputMaybe<LegalClientOrderByRelationAggregateInput>;
  MaintenanceCreatedBy?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  MaintenanceUpdatedBy?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  VehicleTypeCreatedBy?: InputMaybe<VehicleTypeOrderByRelationAggregateInput>;
  VehicleTypeUpdatedBy?: InputMaybe<VehicleTypeOrderByRelationAggregateInput>;
  VehicleBrandCreatedBy?: InputMaybe<VehicleBrandOrderByRelationAggregateInput>;
  VehicleBrandUpdatedBy?: InputMaybe<VehicleBrandOrderByRelationAggregateInput>;
  VehicleModelCreatedBy?: InputMaybe<VehicleModelOrderByRelationAggregateInput>;
  VehicleModelUpdatedBy?: InputMaybe<VehicleModelOrderByRelationAggregateInput>;
  LegalContractCreatedBy?: InputMaybe<LegalContractOrderByRelationAggregateInput>;
  LegalContractUpdatedBy?: InputMaybe<LegalContractOrderByRelationAggregateInput>;
  CarrierCompanyCreatedBt?: InputMaybe<CarrierCompanyOrderByRelationAggregateInput>;
  CarrierCompanyUpdatedBy?: InputMaybe<CarrierCompanyOrderByRelationAggregateInput>;
  CompanyVehicleCreatedBy?: InputMaybe<CompanyVehicleOrderByRelationAggregateInput>;
  CompanyVehicleUpdatedBy?: InputMaybe<CompanyVehicleOrderByRelationAggregateInput>;
  VehicleBodyworkCreatedBy?: InputMaybe<VehicleBodyworkOrderByRelationAggregateInput>;
  VehicleBodyworkUpdatedBy?: InputMaybe<VehicleBodyworkOrderByRelationAggregateInput>;
  OutsourcedDriverCreatedBy?: InputMaybe<OutsourcedDriverOrderByRelationAggregateInput>;
  OutsourcedDriverUpdatedBy?: InputMaybe<OutsourcedDriverOrderByRelationAggregateInput>;
  PhysicalCustomerCreatedBy?: InputMaybe<PhysicalCustomerOrderByRelationAggregateInput>;
  PhysicalCustomerUpdatedBy?: InputMaybe<PhysicalCustomerOrderByRelationAggregateInput>;
  OutsourcedVehicleCreatedBy?: InputMaybe<OutsourcedVehicleOrderByRelationAggregateInput>;
  OutsourcedVehicleUpdatedBy?: InputMaybe<OutsourcedVehicleOrderByRelationAggregateInput>;
  TypeOfMaintenanceCreatedBy?: InputMaybe<TypeOfMaintenanceOrderByRelationAggregateInput>;
  TypeOfMaintenanceUpdatedBy?: InputMaybe<TypeOfMaintenanceOrderByRelationAggregateInput>;
  CiotForLegalCreatedByClient?: InputMaybe<CiotForLegalClientOrderByRelationAggregateInput>;
  CiotForLegalUpdatedByClient?: InputMaybe<CiotForLegalClientOrderByRelationAggregateInput>;
  MaintenanceCompanyCreatedBy?: InputMaybe<MaintenanceCompanyOrderByRelationAggregateInput>;
  MaintenanceCompanyUpdatedBy?: InputMaybe<MaintenanceCompanyOrderByRelationAggregateInput>;
  LegalClientCustomerOrderCreatedBy?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  LegalClientCustomerOrderUpdatedBy?: InputMaybe<LegalClientOrderOrderByRelationAggregateInput>;
  LegalClientQuoteTableCreatedBy?: InputMaybe<LegalClientQuoteTableOrderByRelationAggregateInput>;
  LegalClientQuoteTableUpdatedBy?: InputMaybe<LegalClientQuoteTableOrderByRelationAggregateInput>;
  PhysicalCustomerOrderCreatedBy?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  PhysicalCustomerOrderUpdatedBy?: InputMaybe<PhysicalCustomerOrderOrderByRelationAggregateInput>;
  ContractOutsourcedDriverCreatedBy?: InputMaybe<ContractOutsourcedDriverOrderByRelationAggregateInput>;
  ContractOutsourcedDriverUpdatedBy?: InputMaybe<ContractOutsourcedDriverOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyCreatedBy?: InputMaybe<OutsourcedTransportCompanyOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyUpdatedBy?: InputMaybe<OutsourcedTransportCompanyOrderByRelationAggregateInput>;
  OutsourcedTransportVehicleCreatedBy?: InputMaybe<OutsourcedTransportVehicleOrderByRelationAggregateInput>;
  OutsourcedTransportVehicleUpdatedBy?: InputMaybe<OutsourcedTransportVehicleOrderByRelationAggregateInput>;
  PhysicalCustomerQuoteTableCreatedBy?: InputMaybe<PhysicalCustomerQuoteTableOrderByRelationAggregateInput>;
  PhysicalCustomerQuoteTableUpdatedBy?: InputMaybe<PhysicalCustomerQuoteTableOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyDriverCreatedBy?: InputMaybe<OutsourcedTransportCompanyDriverOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyDriverUpdatedBy?: InputMaybe<OutsourcedTransportCompanyDriverOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyContractCreatedBy?: InputMaybe<OutsourcedTransportCompanyContractOrderByRelationAggregateInput>;
  OutsourcedTransportCompanyContractUpdatedBy?: InputMaybe<OutsourcedTransportCompanyContractOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  avatar_url?: InputMaybe<StringNullableFilter>;
  IcmsCreatedBy?: InputMaybe<IcmsListRelationFilter>;
  IcmsUpdatedBy?: InputMaybe<IcmsListRelationFilter>;
  SenderCreatedBy?: InputMaybe<SenderListRelationFilter>;
  SenderUpdatedBy?: InputMaybe<SenderListRelationFilter>;
  IncidentCreatedBy?: InputMaybe<IncidentListRelationFilter>;
  IncidentUpdatedBy?: InputMaybe<IncidentListRelationFilter>;
  OwnDriverCreatedBy?: InputMaybe<OwnDriverListRelationFilter>;
  OwnDriverUpdatedBy?: InputMaybe<OwnDriverListRelationFilter>;
  RecipientCreatedBy?: InputMaybe<RecipientListRelationFilter>;
  RecipientUpdatedBy?: InputMaybe<RecipientListRelationFilter>;
  LegalClientCreatedBy?: InputMaybe<LegalClientListRelationFilter>;
  LegalClientUpdatedBy?: InputMaybe<LegalClientListRelationFilter>;
  MaintenanceCreatedBy?: InputMaybe<MaintenanceListRelationFilter>;
  MaintenanceUpdatedBy?: InputMaybe<MaintenanceListRelationFilter>;
  VehicleTypeCreatedBy?: InputMaybe<VehicleTypeListRelationFilter>;
  VehicleTypeUpdatedBy?: InputMaybe<VehicleTypeListRelationFilter>;
  VehicleBrandCreatedBy?: InputMaybe<VehicleBrandListRelationFilter>;
  VehicleBrandUpdatedBy?: InputMaybe<VehicleBrandListRelationFilter>;
  VehicleModelCreatedBy?: InputMaybe<VehicleModelListRelationFilter>;
  VehicleModelUpdatedBy?: InputMaybe<VehicleModelListRelationFilter>;
  LegalContractCreatedBy?: InputMaybe<LegalContractListRelationFilter>;
  LegalContractUpdatedBy?: InputMaybe<LegalContractListRelationFilter>;
  CarrierCompanyCreatedBt?: InputMaybe<CarrierCompanyListRelationFilter>;
  CarrierCompanyUpdatedBy?: InputMaybe<CarrierCompanyListRelationFilter>;
  CompanyVehicleCreatedBy?: InputMaybe<CompanyVehicleListRelationFilter>;
  CompanyVehicleUpdatedBy?: InputMaybe<CompanyVehicleListRelationFilter>;
  VehicleBodyworkCreatedBy?: InputMaybe<VehicleBodyworkListRelationFilter>;
  VehicleBodyworkUpdatedBy?: InputMaybe<VehicleBodyworkListRelationFilter>;
  OutsourcedDriverCreatedBy?: InputMaybe<OutsourcedDriverListRelationFilter>;
  OutsourcedDriverUpdatedBy?: InputMaybe<OutsourcedDriverListRelationFilter>;
  PhysicalCustomerCreatedBy?: InputMaybe<PhysicalCustomerListRelationFilter>;
  PhysicalCustomerUpdatedBy?: InputMaybe<PhysicalCustomerListRelationFilter>;
  OutsourcedVehicleCreatedBy?: InputMaybe<OutsourcedVehicleListRelationFilter>;
  OutsourcedVehicleUpdatedBy?: InputMaybe<OutsourcedVehicleListRelationFilter>;
  TypeOfMaintenanceCreatedBy?: InputMaybe<TypeOfMaintenanceListRelationFilter>;
  TypeOfMaintenanceUpdatedBy?: InputMaybe<TypeOfMaintenanceListRelationFilter>;
  CiotForLegalCreatedByClient?: InputMaybe<CiotForLegalClientListRelationFilter>;
  CiotForLegalUpdatedByClient?: InputMaybe<CiotForLegalClientListRelationFilter>;
  MaintenanceCompanyCreatedBy?: InputMaybe<MaintenanceCompanyListRelationFilter>;
  MaintenanceCompanyUpdatedBy?: InputMaybe<MaintenanceCompanyListRelationFilter>;
  LegalClientCustomerOrderCreatedBy?: InputMaybe<LegalClientOrderListRelationFilter>;
  LegalClientCustomerOrderUpdatedBy?: InputMaybe<LegalClientOrderListRelationFilter>;
  LegalClientQuoteTableCreatedBy?: InputMaybe<LegalClientQuoteTableListRelationFilter>;
  LegalClientQuoteTableUpdatedBy?: InputMaybe<LegalClientQuoteTableListRelationFilter>;
  PhysicalCustomerOrderCreatedBy?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  PhysicalCustomerOrderUpdatedBy?: InputMaybe<PhysicalCustomerOrderListRelationFilter>;
  ContractOutsourcedDriverCreatedBy?: InputMaybe<ContractOutsourcedDriverListRelationFilter>;
  ContractOutsourcedDriverUpdatedBy?: InputMaybe<ContractOutsourcedDriverListRelationFilter>;
  OutsourcedTransportCompanyCreatedBy?: InputMaybe<OutsourcedTransportCompanyListRelationFilter>;
  OutsourcedTransportCompanyUpdatedBy?: InputMaybe<OutsourcedTransportCompanyListRelationFilter>;
  OutsourcedTransportVehicleCreatedBy?: InputMaybe<OutsourcedTransportVehicleListRelationFilter>;
  OutsourcedTransportVehicleUpdatedBy?: InputMaybe<OutsourcedTransportVehicleListRelationFilter>;
  PhysicalCustomerQuoteTableCreatedBy?: InputMaybe<PhysicalCustomerQuoteTableListRelationFilter>;
  PhysicalCustomerQuoteTableUpdatedBy?: InputMaybe<PhysicalCustomerQuoteTableListRelationFilter>;
  OutsourcedTransportCompanyDriverCreatedBy?: InputMaybe<OutsourcedTransportCompanyDriverListRelationFilter>;
  OutsourcedTransportCompanyDriverUpdatedBy?: InputMaybe<OutsourcedTransportCompanyDriverListRelationFilter>;
  OutsourcedTransportCompanyContractCreatedBy?: InputMaybe<OutsourcedTransportCompanyContractListRelationFilter>;
  OutsourcedTransportCompanyContractUpdatedBy?: InputMaybe<OutsourcedTransportCompanyContractListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type VehicleBodyworkInput = {
  axles: Scalars['Int']['input'];
  mass: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  volume: Scalars['Float']['input'];
};

export type VehicleBodyworkListRelationFilter = {
  none?: InputMaybe<VehicleBodyworkWhereInput>;
  some?: InputMaybe<VehicleBodyworkWhereInput>;
  every?: InputMaybe<VehicleBodyworkWhereInput>;
};

export type VehicleBodyworkModel = {
  id: Scalars['String']['output'];
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  mass: Scalars['Float']['output'];
  axles: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  volume: Scalars['Float']['output'];
  __typename?: 'VehicleBodyworkModel';
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  VehicleTypes?: Maybe<Array<VehicleTypeModel>>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type VehicleBodyworkOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleBodyworkOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  mass?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  axles?: InputMaybe<SortOrder>;
  volume?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  VehicleType?: InputMaybe<VehicleTypeOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type VehicleBodyworkUpdateInput = {
  axles?: InputMaybe<Scalars['Int']['input']>;
  mass?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};

export type VehicleBodyworkWhereInput = {
  id?: InputMaybe<StringFilter>;
  axles?: InputMaybe<IntFilter>;
  mass?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  volume?: InputMaybe<FloatFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<VehicleBodyworkWhereInput>>;
  AND?: InputMaybe<Array<VehicleBodyworkWhereInput>>;
  NOT?: InputMaybe<Array<VehicleBodyworkWhereInput>>;
  VehicleType?: InputMaybe<VehicleTypeListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type VehicleBrandInput = {
  name: Scalars['String']['input'];
};

export type VehicleBrandListRelationFilter = {
  none?: InputMaybe<VehicleBrandWhereInput>;
  some?: InputMaybe<VehicleBrandWhereInput>;
  every?: InputMaybe<VehicleBrandWhereInput>;
};

export type VehicleBrandModel = {
  id: Scalars['String']['output'];
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  __typename?: 'VehicleBrandModel';
  name: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  VehicleModels?: Maybe<VehicleModelGraphql>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type VehicleBrandOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleBrandOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  VehicleModel?: InputMaybe<VehicleModelOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type VehicleBrandReferences = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  __typename?: 'VehicleBrandReferences';
};

export type VehicleBrandUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VehicleBrandWhereInput = {
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<VehicleBrandWhereInput>>;
  AND?: InputMaybe<Array<VehicleBrandWhereInput>>;
  NOT?: InputMaybe<Array<VehicleBrandWhereInput>>;
  VehicleModel?: InputMaybe<VehicleModelListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type VehicleCarModel = {
  id: Scalars['String']['output'];
  VehicleType: VehicleTypeModel;
  __typename?: 'VehicleCarModel';
  createdUser: UserModelRefereces;
  updatedUser: UserModelRefereces;
  antt: Scalars['String']['output'];
  year: Scalars['String']['output'];
  color: Scalars['String']['output'];
  plate: Scalars['String']['output'];
  VehicleBrand: VehicleBrandReferences;
  VehicleModel: VehicleModelReferences;
  renavam: Scalars['String']['output'];
  model_id: Scalars['String']['output'];
  isIpvaPaid: Scalars['Boolean']['output'];
  registration: Scalars['Timestamp']['output'];
};

export type VehicleInput = {
  antt: Scalars['String']['input'];
  year: Scalars['String']['input'];
  color: Scalars['String']['input'];
  plate: Scalars['String']['input'];
  renavam: Scalars['String']['input'];
  model_id: Scalars['String']['input'];
  isIpvaPaid: Scalars['Boolean']['input'];
  registration: Scalars['Timestamp']['input'];
};

export type VehicleListRelationFilter = {
  none?: InputMaybe<VehicleWhereInput>;
  some?: InputMaybe<VehicleWhereInput>;
  every?: InputMaybe<VehicleWhereInput>;
};

export type VehicleModelGraphql = {
  id: Scalars['String']['output'];
  VehicleType: VehicleTypeModel;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  axles: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  __typename?: 'VehicleModelGraphql';
  weight: Scalars['Float']['output'];
  VehicleBrand: VehicleBrandReferences;
  type_id: Scalars['String']['output'];
  brand_id: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  capacity_max: Scalars['Float']['output'];
  capacity_per_axle: Scalars['Int']['output'];
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type VehicleModelInput = {
  axles: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  weight: Scalars['Float']['input'];
  type_id: Scalars['String']['input'];
  brand_id: Scalars['String']['input'];
  capacity_max: Scalars['Float']['input'];
  capacity_per_axle: Scalars['Int']['input'];
};

export type VehicleModelListRelationFilter = {
  none?: InputMaybe<VehicleModelWhereInput>;
  some?: InputMaybe<VehicleModelWhereInput>;
  every?: InputMaybe<VehicleModelWhereInput>;
};

export type VehicleModelOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleModelOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  axles?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  type_id?: InputMaybe<SortOrder>;
  brand_id?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  capacity_max?: InputMaybe<SortOrder>;
  capacity_per_axle?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  Brand?: InputMaybe<VehicleBrandOrderByWithRelationInput>;
  Vehicle?: InputMaybe<VehicleOrderByRelationAggregateInput>;
  VehicleType?: InputMaybe<VehicleTypeOrderByWithRelationInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type VehicleModelReferences = {
  id: Scalars['String']['output'];
  axles: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
  type_id: Scalars['String']['output'];
  __typename?: 'VehicleModelReferences';
  brand_id: Scalars['String']['output'];
  capacity_max: Scalars['Float']['output'];
  capacity_per_axle: Scalars['Int']['output'];
};

export type VehicleModelUpdateInput = {
  axles?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  type_id?: InputMaybe<Scalars['String']['input']>;
  brand_id?: InputMaybe<Scalars['String']['input']>;
  capacity_max?: InputMaybe<Scalars['Float']['input']>;
  capacity_per_axle?: InputMaybe<Scalars['Int']['input']>;
};

export type VehicleModelWhereInput = {
  id?: InputMaybe<StringFilter>;
  axles?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  weight?: InputMaybe<FloatFilter>;
  type_id?: InputMaybe<StringFilter>;
  brand_id?: InputMaybe<StringFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  capacity_max?: InputMaybe<FloatFilter>;
  Brand?: InputMaybe<VehicleBrandWhereInput>;
  OR?: InputMaybe<Array<VehicleModelWhereInput>>;
  AND?: InputMaybe<Array<VehicleModelWhereInput>>;
  NOT?: InputMaybe<Array<VehicleModelWhereInput>>;
  Vehicle?: InputMaybe<VehicleListRelationFilter>;
  VehicleType?: InputMaybe<VehicleTypeWhereInput>;
  capacity_per_axle?: InputMaybe<IntNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type VehicleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  antt?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
  color?: InputMaybe<SortOrder>;
  plate?: InputMaybe<SortOrder>;
  renavam?: InputMaybe<SortOrder>;
  model_id?: InputMaybe<SortOrder>;
  is_ipva_paid?: InputMaybe<SortOrder>;
  registration?: InputMaybe<SortOrder>;
  Model?: InputMaybe<VehicleModelOrderByWithRelationInput>;
  Maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  CompanyVehicle?: InputMaybe<CompanyVehicleOrderByWithRelationInput>;
  CompletedOrders?: InputMaybe<CompletedOrdersOrderByWithRelationInput>;
  OrderProcessing?: InputMaybe<OrderProcessingOrderByWithRelationInput>;
  OutsourcedVehicle?: InputMaybe<OutsourcedVehicleOrderByWithRelationInput>;
  OutsourcedTransportVehicle?: InputMaybe<OutsourcedTransportVehicleOrderByWithRelationInput>;
};

export type VehicleTypeInput = {
  name: Scalars['String']['input'];
  bodyWork: Scalars['Boolean']['input'];
  body_work_id?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type VehicleTypeListRelationFilter = {
  none?: InputMaybe<VehicleTypeWhereInput>;
  some?: InputMaybe<VehicleTypeWhereInput>;
  every?: InputMaybe<VehicleTypeWhereInput>;
};

export type VehicleTypeModel = {
  id: Scalars['String']['output'];
  __typename?: 'VehicleTypeModel';
  CpdatedUser: UserModelRefereces;
  CreatedUser: UserModelRefereces;
  UpdatedUser: UserModelRefereces;
  name: Scalars['String']['output'];
  bodyWork: Scalars['Boolean']['output'];
  created_by: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  VehicleModels?: Maybe<VehicleModelGraphql>;
  BodyWorks?: Maybe<Array<VehicleBodyworkModel>>;
  updated_at: Scalars['Timestamp']['output'];
  created_at: Scalars['Timestamp']['output'];
};

export type VehicleTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleTypeOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  bodywork?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  CreatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  VehicleModel?: InputMaybe<VehicleModelOrderByRelationAggregateInput>;
  VehicleBodyWork?: InputMaybe<VehicleBodyworkOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type VehicleTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  bodyWork?: InputMaybe<Scalars['Boolean']['input']>;
  del_body_id?: InputMaybe<Array<Scalars['String']['input']>>;
  body_work_id?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type VehicleTypeWhereInput = {
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  bodywork?: InputMaybe<BoolFilter>;
  created_by?: InputMaybe<StringFilter>;
  updated_by?: InputMaybe<StringFilter>;
  CreatedBy?: InputMaybe<UserWhereInput>;
  UpdatedBy?: InputMaybe<UserWhereInput>;
  OR?: InputMaybe<Array<VehicleTypeWhereInput>>;
  AND?: InputMaybe<Array<VehicleTypeWhereInput>>;
  NOT?: InputMaybe<Array<VehicleTypeWhereInput>>;
  VehicleModel?: InputMaybe<VehicleModelListRelationFilter>;
  VehicleBodyWork?: InputMaybe<VehicleBodyworkListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type VehicleUpdateInput = {
  antt?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  renavam?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  isIpvaPaid?: InputMaybe<Scalars['Boolean']['input']>;
  registration?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type VehicleWhereInput = {
  id?: InputMaybe<StringFilter>;
  antt?: InputMaybe<StringFilter>;
  year?: InputMaybe<StringFilter>;
  color?: InputMaybe<StringFilter>;
  plate?: InputMaybe<StringFilter>;
  renavam?: InputMaybe<StringFilter>;
  model_id?: InputMaybe<StringFilter>;
  is_ipva_paid?: InputMaybe<BoolFilter>;
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  registration?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  Model?: InputMaybe<VehicleModelWhereInput>;
  NOT?: InputMaybe<Array<VehicleWhereInput>>;
  CompanyVehicle?: InputMaybe<CompanyVehicleWhereInput>;
  CompletedOrders?: InputMaybe<CompletedOrdersWhereInput>;
  Maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  OrderProcessing?: InputMaybe<OrderProcessingWhereInput>;
  OutsourcedVehicle?: InputMaybe<OutsourcedVehicleWhereInput>;
  OutsourcedTransportVehicle?: InputMaybe<OutsourcedTransportVehicleWhereInput>;
};

export type CreateCarrierCompanyMutationVariables = Exact<{
  carrier: CarrierCompanyInput;
}>;

export type CreateCarrierCompanyMutation = {
  __typename?: 'Mutation';
  createCarrierCompany: {
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteCarrierCompanyMutationVariables = Exact<{
  deleteCarrierCompanyId: Scalars['String']['input'];
}>;

export type DeleteCarrierCompanyMutation = {
  __typename?: 'Mutation';
  deleteCarrierCompany: {
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteManyCarrierCompaniesMutationVariables = Exact<{
  deleteManyCarrierCompanies:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyCarrierCompaniesMutation = {
  __typename?: 'Mutation';
  deleteManyCarrierCompanies: Array<{
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type UpdateCarrierCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: CarrierCompanyUpdateInput;
}>;

export type UpdateCarrierCompanyMutation = {
  __typename?: 'Mutation';
  updateCarriercompany: {
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  };
};

export type UpdateManyCarrierCompaniesMutationVariables = Exact<{
  updateManyCarrierCompanies:
    | CarrierCompanyUpdateManyInput
    | Array<CarrierCompanyUpdateManyInput>;
}>;

export type UpdateManyCarrierCompaniesMutation = {
  __typename?: 'Mutation';
  updateManyCarrierCompanies: Array<{
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type CreateLegalClientMutationVariables = Exact<{
  legalClientInput: LegalClientInput;
}>;

export type CreateLegalClientMutation = {
  __typename?: 'Mutation';
  createLegalClient: {
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteLegalClientMutationVariables = Exact<{
  deleteLegalClientId: Scalars['String']['input'];
}>;

export type DeleteLegalClientMutation = {
  __typename?: 'Mutation';
  deleteLegalClient: {
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteManyLegalClientsMutationVariables = Exact<{
  deleteManyLegalClients:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyLegalClientsMutation = {
  __typename?: 'Mutation';
  deleteManyLegalClients: Array<{
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type UpdateLegalClientMutationVariables = Exact<{
  legalClientInput: LegalClientUpdateInput;
  updateLegalClientId: Scalars['String']['input'];
}>;

export type UpdateLegalClientMutation = {
  __typename?: 'Mutation';
  updateLegalClient: {
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  };
};

export type UpdateManyLegalClientsMutationVariables = Exact<{
  updateManyLegalClients:
    | LegalClientUpdateManyInput
    | Array<LegalClientUpdateManyInput>;
}>;

export type UpdateManyLegalClientsMutation = {
  __typename?: 'Mutation';
  updateManyLegalClients: Array<{
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type CreateOwnDriverMutationVariables = Exact<{
  ownDriver: OwnDriverInput;
}>;

export type CreateOwnDriverMutation = {
  __typename?: 'Mutation';
  createOwnDriver: {
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteOwnDriverMutationVariables = Exact<{
  deleteOwnDriverId: Scalars['String']['input'];
}>;

export type DeleteOwnDriverMutation = {
  __typename?: 'Mutation';
  deleteOwnDriver: {
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteManyOwnDriversMutationVariables = Exact<{
  deleteManOwnDrivers:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyOwnDriversMutation = {
  __typename?: 'Mutation';
  deleteManyOwnDrivers: Array<{
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type UpdateOwnDriverMutationVariables = Exact<{
  ownDriverUpdate: OwnDriverUpdate;
  updateOwnDriverId: Scalars['String']['input'];
}>;

export type UpdateOwnDriverMutation = {
  __typename?: 'Mutation';
  updateOwnDriver: {
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  };
};

export type UpdateManyOwnDriversMutationVariables = Exact<{
  updateManyOwnDrivers:
    | OwnDriverUpdateManyInput
    | Array<OwnDriverUpdateManyInput>;
}>;

export type UpdateManyOwnDriversMutation = {
  __typename?: 'Mutation';
  updateManyOwnDrivers: Array<{
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type CreatePhysicalCustomerMutationVariables = Exact<{
  data: PhysicalCustomerInput;
}>;

export type CreatePhysicalCustomerMutation = {
  __typename?: 'Mutation';
  createPhysicalCustomer: {
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeletePhysicalCustomerMutationVariables = Exact<{
  deletePhysicalCustomerId: Scalars['String']['input'];
}>;

export type DeletePhysicalCustomerMutation = {
  __typename?: 'Mutation';
  deletePhysicalCustomer: {
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  };
};

export type DeleteManyPhysicalCustomersMutationVariables = Exact<{
  deleteManyPhysicalCustomers:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyPhysicalCustomersMutation = {
  __typename?: 'Mutation';
  deleteManyPhysicalCustomers: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type UpdatePhysicalCustomerMutationVariables = Exact<{
  ownDriverUpdate: PhysicalCustomerUpdateInput;
  updatePhysicalCustomerId: Scalars['String']['input'];
}>;

export type UpdatePhysicalCustomerMutation = {
  __typename?: 'Mutation';
  updatePhysicalCustomer: {
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  };
};

export type UpdateManyPhysicalCustomersMutationVariables = Exact<{
  updateManyPhysicalCustomers:
    | PhysicalCustomerUpdateManyInput
    | Array<PhysicalCustomerUpdateManyInput>;
}>;

export type UpdateManyPhysicalCustomersMutation = {
  __typename?: 'Mutation';
  updateManyPhysicalCustomers: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type CreateRecipientMutationVariables = Exact<{
  recipient: RecipientInput;
}>;

export type CreateRecipientMutation = {
  __typename?: 'Mutation';
  createRecipient: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type DeleteRecipientMutationVariables = Exact<{
  deleteRecipientId: Scalars['String']['input'];
}>;

export type DeleteRecipientMutation = {
  __typename?: 'Mutation';
  deleteRecipient: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type DeleteManyRecipientsMutationVariables = Exact<{
  deleteManyRecipients:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyRecipientsMutation = {
  __typename?: 'Mutation';
  deleteManyRecipients: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type UpdateRecipientMutationVariables = Exact<{
  updateRecipientData: RecipientUpdateInput;
  updateRecipientId: Scalars['String']['input'];
}>;

export type UpdateRecipientMutation = {
  __typename?: 'Mutation';
  updateRecipient: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type UpdateManyRecipientsMutationVariables = Exact<{
  updateManyRecipients:
    | RecipientUpdateManyInput
    | Array<RecipientUpdateManyInput>;
}>;

export type UpdateManyRecipientsMutation = {
  __typename?: 'Mutation';
  updateManyRecipients: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type CreateSenderMutationVariables = Exact<{
  sender: SenderInput;
}>;

export type CreateSenderMutation = {
  __typename?: 'Mutation';
  createSender: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type DeleteSenderMutationVariables = Exact<{
  deleteSenderId: Scalars['String']['input'];
}>;

export type DeleteSenderMutation = {
  __typename?: 'Mutation';
  deleteSender: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type DeleteManySendersMutationVariables = Exact<{
  deleteManySenders:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManySendersMutation = {
  __typename?: 'Mutation';
  deleteManySenders: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type UpdateSenderMutationVariables = Exact<{
  data: SenderUpdateInput;
  updateSenderId: Scalars['String']['input'];
}>;

export type UpdateSenderMutation = {
  __typename?: 'Mutation';
  updateSender: {
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  };
};

export type UpdateManySendersMutationVariables = Exact<{
  updateManySenders: SenderUpdateManyInput | Array<SenderUpdateManyInput>;
}>;

export type UpdateManySendersMutation = {
  __typename?: 'Mutation';
  updateManySenders: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: UserInput;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  };
};

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['String']['input'];
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser: {
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  };
};

export type DeleteManyUsersMutationVariables = Exact<{
  deleteManyUsers:
    | Scalars['String']['input']
    | Array<Scalars['String']['input']>;
}>;

export type DeleteManyUsersMutation = {
  __typename?: 'Mutation';
  deleteManyUsers: Array<{
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  }>;
};

export type UpdateUserMutationVariables = Exact<{
  userUpdate: UserUpdateInput;
  updateUserId: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['Upload']['input']>;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: {
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  };
};

export type UpdateManyUsersMutationVariables = Exact<{
  updateManyUsers: UserUpdateManyInput | Array<UserUpdateManyInput>;
}>;

export type UpdateManyUsersMutation = {
  __typename?: 'Mutation';
  updateManyUsers: Array<{
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  }>;
};

export type GetAllCarrierCompanyQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarrierCompanyWhereInput>;
  sort?: InputMaybe<CarrierCompanyOrderByWithRelationInput>;
}>;

export type GetAllCarrierCompanyQuery = {
  __typename?: 'Query';
  totalCarrierCompanies: number;
  getAllCarrierCompany?: null | Array<{
    id: string;
    rntrc: string;
    created_by: string;
    updated_by: string;
    legalPersonId: string;
    __typename?: 'CarrierCompanyModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type GetAllLegalClientQueryVariables = Exact<{
  where?: InputMaybe<LegalClientWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<LegalClientOrderByWithRelationInput>;
}>;

export type GetAllLegalClientQuery = {
  __typename?: 'Query';
  totalLegalClients: number;
  getAllLegalClient?: null | Array<{
    id: string;
    branch: string;
    created_by: string;
    updated_by: string;
    legal_person_id: string;
    __typename?: 'LegalClientModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type GetAllOwnDriverQueryVariables = Exact<{
  where?: InputMaybe<OwnDriverWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<OwnDriverOrderByWithRelationInput>;
}>;

export type GetAllOwnDriverQuery = {
  __typename?: 'Query';
  totalOwnDrivers: number;
  getAllOwnDriver: Array<{
    id: string;
    cnh: string;
    created_by: string;
    updated_by: string;
    cnh_expiration: any;
    cnh_category: string;
    course_mopp: boolean;
    company_vehicle: boolean;
    natural_person_id: string;
    __typename?: 'OwnDriverModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type GetAllPhysicalCustomerQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PhysicalCustomerWhereInput>;
  sort?: InputMaybe<PhysicalCustomerOrderByWithRelationInput>;
}>;

export type GetAllPhysicalCustomerQuery = {
  __typename?: 'Query';
  totalPhysicalCustomers: number;
  getAllPhysicalCustomer: Array<{
    id: string;
    created_by: string;
    updated_by: string;
    branch?: null | string;
    natural_person_id: string;
    __typename?: 'PhysicalCustomerModel';
    updated_at: any;
    created_at: any;
  }>;
};

export type GetAllRecipientQueryVariables = Exact<{
  where?: InputMaybe<RecipientWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<RecipientOrderByWithRelationInput>;
}>;

export type GetAllRecipientQuery = {
  __typename?: 'Query';
  totalRecipients: number;
  getAllRecipient?: null | Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'RecipientModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type GetAllSenderQueryVariables = Exact<{
  where?: InputMaybe<SenderWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SenderOrderByWithRelationInput>;
}>;

export type GetAllSenderQuery = {
  __typename?: 'Query';
  totalSenders: number;
  getAllSender?: null | Array<{
    id: string;
    created_by: string;
    updated_by: string;
    __typename?: 'SenderModel';
    legal_person_id?: null | string;
    natural_person_id?: null | string;
  }>;
};

export type AvatarQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;

export type AvatarQuery = {
  __typename?: 'Query';
  user: { __typename?: 'UserModel'; avatar_url?: null | string };
};

export type UserQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;

export type UserQuery = {
  __typename?: 'Query';
  user: {
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    avatar_url?: null | string;
    updated_at?: any | null;
    created_at?: any | null;
  };
};

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<UserOrderByWithRelationInput>;
}>;

export type UsersQuery = {
  totalUsers: number;
  __typename?: 'Query';
  users: Array<{
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    username: string;
    __typename?: 'UserModel';
    updated_at?: any | null;
    created_at?: any | null;
  }>;
};

export const CreateCarrierCompanyDocument = gql`
  mutation CreateCarrierCompany($carrier: CarrierCompanyInput!) {
    createCarrierCompany(data: $carrier) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

export type CreateCarrierCompanyMutationFn = Apollo.MutationFunction<
  CreateCarrierCompanyMutation,
  CreateCarrierCompanyMutationVariables
>;

/**
 * __useCreateCarrierCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCarrierCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarrierCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarrierCompanyMutation, { data, loading, error }] = useCreateCarrierCompanyMutation({
 *   variables: {
 *      carrier: // value for 'carrier'
 *   },
 * });
 */
export function useCreateCarrierCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCarrierCompanyMutation,
    CreateCarrierCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreateCarrierCompanyMutation,
    CreateCarrierCompanyMutationVariables
  >(CreateCarrierCompanyDocument, options);
}

export type CreateCarrierCompanyMutationHookResult = ReturnType<
  typeof useCreateCarrierCompanyMutation
>;

export type CreateCarrierCompanyMutationResult =
  Apollo.MutationResult<CreateCarrierCompanyMutation>;

export type CreateCarrierCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCarrierCompanyMutation,
  CreateCarrierCompanyMutationVariables
>;

export const DeleteCarrierCompanyDocument = gql`
  mutation DeleteCarrierCompany($deleteCarrierCompanyId: String!) {
    deleteCarrierCompany(id: $deleteCarrierCompanyId) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

export type DeleteCarrierCompanyMutationFn = Apollo.MutationFunction<
  DeleteCarrierCompanyMutation,
  DeleteCarrierCompanyMutationVariables
>;

/**
 * __useDeleteCarrierCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCarrierCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCarrierCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCarrierCompanyMutation, { data, loading, error }] = useDeleteCarrierCompanyMutation({
 *   variables: {
 *      deleteCarrierCompanyId: // value for 'deleteCarrierCompanyId'
 *   },
 * });
 */
export function useDeleteCarrierCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCarrierCompanyMutation,
    DeleteCarrierCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteCarrierCompanyMutation,
    DeleteCarrierCompanyMutationVariables
  >(DeleteCarrierCompanyDocument, options);
}

export type DeleteCarrierCompanyMutationHookResult = ReturnType<
  typeof useDeleteCarrierCompanyMutation
>;

export type DeleteCarrierCompanyMutationResult =
  Apollo.MutationResult<DeleteCarrierCompanyMutation>;

export type DeleteCarrierCompanyMutationOptions = Apollo.BaseMutationOptions<
  DeleteCarrierCompanyMutation,
  DeleteCarrierCompanyMutationVariables
>;

export const DeleteManyCarrierCompaniesDocument = gql`
  mutation DeleteManyCarrierCompanies($deleteManyCarrierCompanies: [String!]!) {
    deleteManyCarrierCompanies(
      deleteManyCarrierCompanies: $deleteManyCarrierCompanies
    ) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

export type DeleteManyCarrierCompaniesMutationFn = Apollo.MutationFunction<
  DeleteManyCarrierCompaniesMutation,
  DeleteManyCarrierCompaniesMutationVariables
>;

/**
 * __useDeleteManyCarrierCompaniesMutation__
 *
 * To run a mutation, you first call `useDeleteManyCarrierCompaniesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCarrierCompaniesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCarrierCompaniesMutation, { data, loading, error }] = useDeleteManyCarrierCompaniesMutation({
 *   variables: {
 *      deleteManyCarrierCompanies: // value for 'deleteManyCarrierCompanies'
 *   },
 * });
 */
export function useDeleteManyCarrierCompaniesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyCarrierCompaniesMutation,
    DeleteManyCarrierCompaniesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyCarrierCompaniesMutation,
    DeleteManyCarrierCompaniesMutationVariables
  >(DeleteManyCarrierCompaniesDocument, options);
}

export type DeleteManyCarrierCompaniesMutationHookResult = ReturnType<
  typeof useDeleteManyCarrierCompaniesMutation
>;

export type DeleteManyCarrierCompaniesMutationResult =
  Apollo.MutationResult<DeleteManyCarrierCompaniesMutation>;

export type DeleteManyCarrierCompaniesMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteManyCarrierCompaniesMutation,
    DeleteManyCarrierCompaniesMutationVariables
  >;

export const UpdateCarrierCompanyDocument = gql`
  mutation UpdateCarrierCompany(
    $id: String!
    $data: CarrierCompanyUpdateInput!
  ) {
    updateCarriercompany(data: $data, id: $id) {
      id
      legalPersonId
      rntrc
      created_at
      created_by
      updated_at
      updated_by
    }
  }
`;

export type UpdateCarrierCompanyMutationFn = Apollo.MutationFunction<
  UpdateCarrierCompanyMutation,
  UpdateCarrierCompanyMutationVariables
>;

/**
 * __useUpdateCarrierCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCarrierCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarrierCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarrierCompanyMutation, { data, loading, error }] = useUpdateCarrierCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCarrierCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCarrierCompanyMutation,
    UpdateCarrierCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateCarrierCompanyMutation,
    UpdateCarrierCompanyMutationVariables
  >(UpdateCarrierCompanyDocument, options);
}

export type UpdateCarrierCompanyMutationHookResult = ReturnType<
  typeof useUpdateCarrierCompanyMutation
>;

export type UpdateCarrierCompanyMutationResult =
  Apollo.MutationResult<UpdateCarrierCompanyMutation>;

export type UpdateCarrierCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCarrierCompanyMutation,
  UpdateCarrierCompanyMutationVariables
>;

export const UpdateManyCarrierCompaniesDocument = gql`
  mutation UpdateManyCarrierCompanies(
    $updateManyCarrierCompanies: [CarrierCompanyUpdateManyInput!]!
  ) {
    updateManyCarrierCompanies(
      updateManyCarrierCompanies: $updateManyCarrierCompanies
    ) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

export type UpdateManyCarrierCompaniesMutationFn = Apollo.MutationFunction<
  UpdateManyCarrierCompaniesMutation,
  UpdateManyCarrierCompaniesMutationVariables
>;

/**
 * __useUpdateManyCarrierCompaniesMutation__
 *
 * To run a mutation, you first call `useUpdateManyCarrierCompaniesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCarrierCompaniesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCarrierCompaniesMutation, { data, loading, error }] = useUpdateManyCarrierCompaniesMutation({
 *   variables: {
 *      updateManyCarrierCompanies: // value for 'updateManyCarrierCompanies'
 *   },
 * });
 */
export function useUpdateManyCarrierCompaniesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyCarrierCompaniesMutation,
    UpdateManyCarrierCompaniesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyCarrierCompaniesMutation,
    UpdateManyCarrierCompaniesMutationVariables
  >(UpdateManyCarrierCompaniesDocument, options);
}

export type UpdateManyCarrierCompaniesMutationHookResult = ReturnType<
  typeof useUpdateManyCarrierCompaniesMutation
>;

export type UpdateManyCarrierCompaniesMutationResult =
  Apollo.MutationResult<UpdateManyCarrierCompaniesMutation>;

export type UpdateManyCarrierCompaniesMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateManyCarrierCompaniesMutation,
    UpdateManyCarrierCompaniesMutationVariables
  >;

export const CreateLegalClientDocument = gql`
  mutation CreateLegalClient($legalClientInput: LegalClientInput!) {
    createLegalClient(legalclientInput: $legalClientInput) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

export type CreateLegalClientMutationFn = Apollo.MutationFunction<
  CreateLegalClientMutation,
  CreateLegalClientMutationVariables
>;

/**
 * __useCreateLegalClientMutation__
 *
 * To run a mutation, you first call `useCreateLegalClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLegalClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLegalClientMutation, { data, loading, error }] = useCreateLegalClientMutation({
 *   variables: {
 *      legalClientInput: // value for 'legalClientInput'
 *   },
 * });
 */
export function useCreateLegalClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLegalClientMutation,
    CreateLegalClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreateLegalClientMutation,
    CreateLegalClientMutationVariables
  >(CreateLegalClientDocument, options);
}

export type CreateLegalClientMutationHookResult = ReturnType<
  typeof useCreateLegalClientMutation
>;

export type CreateLegalClientMutationResult =
  Apollo.MutationResult<CreateLegalClientMutation>;

export type CreateLegalClientMutationOptions = Apollo.BaseMutationOptions<
  CreateLegalClientMutation,
  CreateLegalClientMutationVariables
>;

export const DeleteLegalClientDocument = gql`
  mutation DeleteLegalClient($deleteLegalClientId: String!) {
    deleteLegalClient(id: $deleteLegalClientId) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeleteLegalClientMutationFn = Apollo.MutationFunction<
  DeleteLegalClientMutation,
  DeleteLegalClientMutationVariables
>;

/**
 * __useDeleteLegalClientMutation__
 *
 * To run a mutation, you first call `useDeleteLegalClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLegalClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLegalClientMutation, { data, loading, error }] = useDeleteLegalClientMutation({
 *   variables: {
 *      deleteLegalClientId: // value for 'deleteLegalClientId'
 *   },
 * });
 */
export function useDeleteLegalClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLegalClientMutation,
    DeleteLegalClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteLegalClientMutation,
    DeleteLegalClientMutationVariables
  >(DeleteLegalClientDocument, options);
}

export type DeleteLegalClientMutationHookResult = ReturnType<
  typeof useDeleteLegalClientMutation
>;

export type DeleteLegalClientMutationResult =
  Apollo.MutationResult<DeleteLegalClientMutation>;

export type DeleteLegalClientMutationOptions = Apollo.BaseMutationOptions<
  DeleteLegalClientMutation,
  DeleteLegalClientMutationVariables
>;

export const DeleteManyLegalClientsDocument = gql`
  mutation DeleteManyLegalClients($deleteManyLegalClients: [String!]!) {
    deleteManyLegalClients(deleteManyLegalClients: $deleteManyLegalClients) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeleteManyLegalClientsMutationFn = Apollo.MutationFunction<
  DeleteManyLegalClientsMutation,
  DeleteManyLegalClientsMutationVariables
>;

/**
 * __useDeleteManyLegalClientsMutation__
 *
 * To run a mutation, you first call `useDeleteManyLegalClientsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyLegalClientsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyLegalClientsMutation, { data, loading, error }] = useDeleteManyLegalClientsMutation({
 *   variables: {
 *      deleteManyLegalClients: // value for 'deleteManyLegalClients'
 *   },
 * });
 */
export function useDeleteManyLegalClientsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyLegalClientsMutation,
    DeleteManyLegalClientsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyLegalClientsMutation,
    DeleteManyLegalClientsMutationVariables
  >(DeleteManyLegalClientsDocument, options);
}

export type DeleteManyLegalClientsMutationHookResult = ReturnType<
  typeof useDeleteManyLegalClientsMutation
>;

export type DeleteManyLegalClientsMutationResult =
  Apollo.MutationResult<DeleteManyLegalClientsMutation>;

export type DeleteManyLegalClientsMutationOptions = Apollo.BaseMutationOptions<
  DeleteManyLegalClientsMutation,
  DeleteManyLegalClientsMutationVariables
>;

export const UpdateLegalClientDocument = gql`
  mutation UpdateLegalClient(
    $updateLegalClientId: String!
    $legalClientInput: LegalClientUpdateInput!
  ) {
    updateLegalClient(
      id: $updateLegalClientId
      legalclientInput: $legalClientInput
    ) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdateLegalClientMutationFn = Apollo.MutationFunction<
  UpdateLegalClientMutation,
  UpdateLegalClientMutationVariables
>;

/**
 * __useUpdateLegalClientMutation__
 *
 * To run a mutation, you first call `useUpdateLegalClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLegalClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLegalClientMutation, { data, loading, error }] = useUpdateLegalClientMutation({
 *   variables: {
 *      updateLegalClientId: // value for 'updateLegalClientId'
 *      legalClientInput: // value for 'legalClientInput'
 *   },
 * });
 */
export function useUpdateLegalClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLegalClientMutation,
    UpdateLegalClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateLegalClientMutation,
    UpdateLegalClientMutationVariables
  >(UpdateLegalClientDocument, options);
}

export type UpdateLegalClientMutationHookResult = ReturnType<
  typeof useUpdateLegalClientMutation
>;

export type UpdateLegalClientMutationResult =
  Apollo.MutationResult<UpdateLegalClientMutation>;

export type UpdateLegalClientMutationOptions = Apollo.BaseMutationOptions<
  UpdateLegalClientMutation,
  UpdateLegalClientMutationVariables
>;

export const UpdateManyLegalClientsDocument = gql`
  mutation UpdateManyLegalClients(
    $updateManyLegalClients: [LegalClientUpdateManyInput!]!
  ) {
    updateManyLegalClients(updateManyLegalClients: $updateManyLegalClients) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdateManyLegalClientsMutationFn = Apollo.MutationFunction<
  UpdateManyLegalClientsMutation,
  UpdateManyLegalClientsMutationVariables
>;

/**
 * __useUpdateManyLegalClientsMutation__
 *
 * To run a mutation, you first call `useUpdateManyLegalClientsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyLegalClientsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyLegalClientsMutation, { data, loading, error }] = useUpdateManyLegalClientsMutation({
 *   variables: {
 *      updateManyLegalClients: // value for 'updateManyLegalClients'
 *   },
 * });
 */
export function useUpdateManyLegalClientsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyLegalClientsMutation,
    UpdateManyLegalClientsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyLegalClientsMutation,
    UpdateManyLegalClientsMutationVariables
  >(UpdateManyLegalClientsDocument, options);
}

export type UpdateManyLegalClientsMutationHookResult = ReturnType<
  typeof useUpdateManyLegalClientsMutation
>;

export type UpdateManyLegalClientsMutationResult =
  Apollo.MutationResult<UpdateManyLegalClientsMutation>;

export type UpdateManyLegalClientsMutationOptions = Apollo.BaseMutationOptions<
  UpdateManyLegalClientsMutation,
  UpdateManyLegalClientsMutationVariables
>;

export const CreateOwnDriverDocument = gql`
  mutation CreateOwnDriver($ownDriver: OwnDriverInput!) {
    createOwnDriver(ownDriverInput: $ownDriver) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type CreateOwnDriverMutationFn = Apollo.MutationFunction<
  CreateOwnDriverMutation,
  CreateOwnDriverMutationVariables
>;

/**
 * __useCreateOwnDriverMutation__
 *
 * To run a mutation, you first call `useCreateOwnDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOwnDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOwnDriverMutation, { data, loading, error }] = useCreateOwnDriverMutation({
 *   variables: {
 *      ownDriver: // value for 'ownDriver'
 *   },
 * });
 */
export function useCreateOwnDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOwnDriverMutation,
    CreateOwnDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreateOwnDriverMutation,
    CreateOwnDriverMutationVariables
  >(CreateOwnDriverDocument, options);
}

export type CreateOwnDriverMutationHookResult = ReturnType<
  typeof useCreateOwnDriverMutation
>;

export type CreateOwnDriverMutationResult =
  Apollo.MutationResult<CreateOwnDriverMutation>;

export type CreateOwnDriverMutationOptions = Apollo.BaseMutationOptions<
  CreateOwnDriverMutation,
  CreateOwnDriverMutationVariables
>;

export const DeleteOwnDriverDocument = gql`
  mutation DeleteOwnDriver($deleteOwnDriverId: String!) {
    deleteOwnDriver(id: $deleteOwnDriverId) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeleteOwnDriverMutationFn = Apollo.MutationFunction<
  DeleteOwnDriverMutation,
  DeleteOwnDriverMutationVariables
>;

/**
 * __useDeleteOwnDriverMutation__
 *
 * To run a mutation, you first call `useDeleteOwnDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOwnDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOwnDriverMutation, { data, loading, error }] = useDeleteOwnDriverMutation({
 *   variables: {
 *      deleteOwnDriverId: // value for 'deleteOwnDriverId'
 *   },
 * });
 */
export function useDeleteOwnDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOwnDriverMutation,
    DeleteOwnDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteOwnDriverMutation,
    DeleteOwnDriverMutationVariables
  >(DeleteOwnDriverDocument, options);
}

export type DeleteOwnDriverMutationHookResult = ReturnType<
  typeof useDeleteOwnDriverMutation
>;

export type DeleteOwnDriverMutationResult =
  Apollo.MutationResult<DeleteOwnDriverMutation>;

export type DeleteOwnDriverMutationOptions = Apollo.BaseMutationOptions<
  DeleteOwnDriverMutation,
  DeleteOwnDriverMutationVariables
>;

export const DeleteManyOwnDriversDocument = gql`
  mutation deleteManyOwnDrivers($deleteManOwnDrivers: [String!]!) {
    deleteManyOwnDrivers(deleteManOwnDrivers: $deleteManOwnDrivers) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeleteManyOwnDriversMutationFn = Apollo.MutationFunction<
  DeleteManyOwnDriversMutation,
  DeleteManyOwnDriversMutationVariables
>;

/**
 * __useDeleteManyOwnDriversMutation__
 *
 * To run a mutation, you first call `useDeleteManyOwnDriversMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyOwnDriversMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyOwnDriversMutation, { data, loading, error }] = useDeleteManyOwnDriversMutation({
 *   variables: {
 *      deleteManOwnDrivers: // value for 'deleteManOwnDrivers'
 *   },
 * });
 */
export function useDeleteManyOwnDriversMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyOwnDriversMutation,
    DeleteManyOwnDriversMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyOwnDriversMutation,
    DeleteManyOwnDriversMutationVariables
  >(DeleteManyOwnDriversDocument, options);
}

export type DeleteManyOwnDriversMutationHookResult = ReturnType<
  typeof useDeleteManyOwnDriversMutation
>;

export type DeleteManyOwnDriversMutationResult =
  Apollo.MutationResult<DeleteManyOwnDriversMutation>;

export type DeleteManyOwnDriversMutationOptions = Apollo.BaseMutationOptions<
  DeleteManyOwnDriversMutation,
  DeleteManyOwnDriversMutationVariables
>;

export const UpdateOwnDriverDocument = gql`
  mutation UpdateOwnDriver(
    $updateOwnDriverId: String!
    $ownDriverUpdate: OwnDriverUpdate!
  ) {
    updateOwnDriver(id: $updateOwnDriverId, ownDriverUpdate: $ownDriverUpdate) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdateOwnDriverMutationFn = Apollo.MutationFunction<
  UpdateOwnDriverMutation,
  UpdateOwnDriverMutationVariables
>;

/**
 * __useUpdateOwnDriverMutation__
 *
 * To run a mutation, you first call `useUpdateOwnDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOwnDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOwnDriverMutation, { data, loading, error }] = useUpdateOwnDriverMutation({
 *   variables: {
 *      updateOwnDriverId: // value for 'updateOwnDriverId'
 *      ownDriverUpdate: // value for 'ownDriverUpdate'
 *   },
 * });
 */
export function useUpdateOwnDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOwnDriverMutation,
    UpdateOwnDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateOwnDriverMutation,
    UpdateOwnDriverMutationVariables
  >(UpdateOwnDriverDocument, options);
}

export type UpdateOwnDriverMutationHookResult = ReturnType<
  typeof useUpdateOwnDriverMutation
>;

export type UpdateOwnDriverMutationResult =
  Apollo.MutationResult<UpdateOwnDriverMutation>;

export type UpdateOwnDriverMutationOptions = Apollo.BaseMutationOptions<
  UpdateOwnDriverMutation,
  UpdateOwnDriverMutationVariables
>;

export const UpdateManyOwnDriversDocument = gql`
  mutation UpdateManyOwnDrivers(
    $updateManyOwnDrivers: [OwnDriverUpdateManyInput!]!
  ) {
    updateManyOwnDrivers(updateManyOwnDrivers: $updateManyOwnDrivers) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdateManyOwnDriversMutationFn = Apollo.MutationFunction<
  UpdateManyOwnDriversMutation,
  UpdateManyOwnDriversMutationVariables
>;

/**
 * __useUpdateManyOwnDriversMutation__
 *
 * To run a mutation, you first call `useUpdateManyOwnDriversMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyOwnDriversMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyOwnDriversMutation, { data, loading, error }] = useUpdateManyOwnDriversMutation({
 *   variables: {
 *      updateManyOwnDrivers: // value for 'updateManyOwnDrivers'
 *   },
 * });
 */
export function useUpdateManyOwnDriversMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyOwnDriversMutation,
    UpdateManyOwnDriversMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyOwnDriversMutation,
    UpdateManyOwnDriversMutationVariables
  >(UpdateManyOwnDriversDocument, options);
}

export type UpdateManyOwnDriversMutationHookResult = ReturnType<
  typeof useUpdateManyOwnDriversMutation
>;

export type UpdateManyOwnDriversMutationResult =
  Apollo.MutationResult<UpdateManyOwnDriversMutation>;

export type UpdateManyOwnDriversMutationOptions = Apollo.BaseMutationOptions<
  UpdateManyOwnDriversMutation,
  UpdateManyOwnDriversMutationVariables
>;

export const CreatePhysicalCustomerDocument = gql`
  mutation CreatePhysicalCustomer($data: PhysicalCustomerInput!) {
    createPhysicalCustomer(data: $data) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type CreatePhysicalCustomerMutationFn = Apollo.MutationFunction<
  CreatePhysicalCustomerMutation,
  CreatePhysicalCustomerMutationVariables
>;

/**
 * __useCreatePhysicalCustomerMutation__
 *
 * To run a mutation, you first call `useCreatePhysicalCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhysicalCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhysicalCustomerMutation, { data, loading, error }] = useCreatePhysicalCustomerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePhysicalCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePhysicalCustomerMutation,
    CreatePhysicalCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreatePhysicalCustomerMutation,
    CreatePhysicalCustomerMutationVariables
  >(CreatePhysicalCustomerDocument, options);
}

export type CreatePhysicalCustomerMutationHookResult = ReturnType<
  typeof useCreatePhysicalCustomerMutation
>;

export type CreatePhysicalCustomerMutationResult =
  Apollo.MutationResult<CreatePhysicalCustomerMutation>;

export type CreatePhysicalCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreatePhysicalCustomerMutation,
  CreatePhysicalCustomerMutationVariables
>;

export const DeletePhysicalCustomerDocument = gql`
  mutation DeletePhysicalCustomer($deletePhysicalCustomerId: String!) {
    deletePhysicalCustomer(id: $deletePhysicalCustomerId) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeletePhysicalCustomerMutationFn = Apollo.MutationFunction<
  DeletePhysicalCustomerMutation,
  DeletePhysicalCustomerMutationVariables
>;

/**
 * __useDeletePhysicalCustomerMutation__
 *
 * To run a mutation, you first call `useDeletePhysicalCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhysicalCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhysicalCustomerMutation, { data, loading, error }] = useDeletePhysicalCustomerMutation({
 *   variables: {
 *      deletePhysicalCustomerId: // value for 'deletePhysicalCustomerId'
 *   },
 * });
 */
export function useDeletePhysicalCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePhysicalCustomerMutation,
    DeletePhysicalCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeletePhysicalCustomerMutation,
    DeletePhysicalCustomerMutationVariables
  >(DeletePhysicalCustomerDocument, options);
}

export type DeletePhysicalCustomerMutationHookResult = ReturnType<
  typeof useDeletePhysicalCustomerMutation
>;

export type DeletePhysicalCustomerMutationResult =
  Apollo.MutationResult<DeletePhysicalCustomerMutation>;

export type DeletePhysicalCustomerMutationOptions = Apollo.BaseMutationOptions<
  DeletePhysicalCustomerMutation,
  DeletePhysicalCustomerMutationVariables
>;

export const DeleteManyPhysicalCustomersDocument = gql`
  mutation DeleteManyPhysicalCustomers(
    $deleteManyPhysicalCustomers: [String!]!
  ) {
    deleteManyPhysicalCustomers(
      deleteManyPhysicalCustomers: $deleteManyPhysicalCustomers
    ) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type DeleteManyPhysicalCustomersMutationFn = Apollo.MutationFunction<
  DeleteManyPhysicalCustomersMutation,
  DeleteManyPhysicalCustomersMutationVariables
>;

/**
 * __useDeleteManyPhysicalCustomersMutation__
 *
 * To run a mutation, you first call `useDeleteManyPhysicalCustomersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPhysicalCustomersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPhysicalCustomersMutation, { data, loading, error }] = useDeleteManyPhysicalCustomersMutation({
 *   variables: {
 *      deleteManyPhysicalCustomers: // value for 'deleteManyPhysicalCustomers'
 *   },
 * });
 */
export function useDeleteManyPhysicalCustomersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyPhysicalCustomersMutation,
    DeleteManyPhysicalCustomersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyPhysicalCustomersMutation,
    DeleteManyPhysicalCustomersMutationVariables
  >(DeleteManyPhysicalCustomersDocument, options);
}

export type DeleteManyPhysicalCustomersMutationHookResult = ReturnType<
  typeof useDeleteManyPhysicalCustomersMutation
>;

export type DeleteManyPhysicalCustomersMutationResult =
  Apollo.MutationResult<DeleteManyPhysicalCustomersMutation>;

export type DeleteManyPhysicalCustomersMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteManyPhysicalCustomersMutation,
    DeleteManyPhysicalCustomersMutationVariables
  >;

export const UpdatePhysicalCustomerDocument = gql`
  mutation UpdatePhysicalCustomer(
    $updatePhysicalCustomerId: String!
    $ownDriverUpdate: PhysicalCustomerUpdateInput!
  ) {
    updatePhysicalCustomer(
      id: $updatePhysicalCustomerId
      ownDriverUpdate: $ownDriverUpdate
    ) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdatePhysicalCustomerMutationFn = Apollo.MutationFunction<
  UpdatePhysicalCustomerMutation,
  UpdatePhysicalCustomerMutationVariables
>;

/**
 * __useUpdatePhysicalCustomerMutation__
 *
 * To run a mutation, you first call `useUpdatePhysicalCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysicalCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysicalCustomerMutation, { data, loading, error }] = useUpdatePhysicalCustomerMutation({
 *   variables: {
 *      updatePhysicalCustomerId: // value for 'updatePhysicalCustomerId'
 *      ownDriverUpdate: // value for 'ownDriverUpdate'
 *   },
 * });
 */
export function useUpdatePhysicalCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePhysicalCustomerMutation,
    UpdatePhysicalCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdatePhysicalCustomerMutation,
    UpdatePhysicalCustomerMutationVariables
  >(UpdatePhysicalCustomerDocument, options);
}

export type UpdatePhysicalCustomerMutationHookResult = ReturnType<
  typeof useUpdatePhysicalCustomerMutation
>;

export type UpdatePhysicalCustomerMutationResult =
  Apollo.MutationResult<UpdatePhysicalCustomerMutation>;

export type UpdatePhysicalCustomerMutationOptions = Apollo.BaseMutationOptions<
  UpdatePhysicalCustomerMutation,
  UpdatePhysicalCustomerMutationVariables
>;

export const UpdateManyPhysicalCustomersDocument = gql`
  mutation UpdateManyPhysicalCustomers(
    $updateManyPhysicalCustomers: [PhysicalCustomerUpdateManyInput!]!
  ) {
    updateManyPhysicalCustomers(
      updateManyPhysicalCustomers: $updateManyPhysicalCustomers
    ) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

export type UpdateManyPhysicalCustomersMutationFn = Apollo.MutationFunction<
  UpdateManyPhysicalCustomersMutation,
  UpdateManyPhysicalCustomersMutationVariables
>;

/**
 * __useUpdateManyPhysicalCustomersMutation__
 *
 * To run a mutation, you first call `useUpdateManyPhysicalCustomersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyPhysicalCustomersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyPhysicalCustomersMutation, { data, loading, error }] = useUpdateManyPhysicalCustomersMutation({
 *   variables: {
 *      updateManyPhysicalCustomers: // value for 'updateManyPhysicalCustomers'
 *   },
 * });
 */
export function useUpdateManyPhysicalCustomersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyPhysicalCustomersMutation,
    UpdateManyPhysicalCustomersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyPhysicalCustomersMutation,
    UpdateManyPhysicalCustomersMutationVariables
  >(UpdateManyPhysicalCustomersDocument, options);
}

export type UpdateManyPhysicalCustomersMutationHookResult = ReturnType<
  typeof useUpdateManyPhysicalCustomersMutation
>;

export type UpdateManyPhysicalCustomersMutationResult =
  Apollo.MutationResult<UpdateManyPhysicalCustomersMutation>;

export type UpdateManyPhysicalCustomersMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateManyPhysicalCustomersMutation,
    UpdateManyPhysicalCustomersMutationVariables
  >;

export const CreateRecipientDocument = gql`
  mutation CreateRecipient($recipient: RecipientInput!) {
    createRecipient(data: $recipient) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type CreateRecipientMutationFn = Apollo.MutationFunction<
  CreateRecipientMutation,
  CreateRecipientMutationVariables
>;

/**
 * __useCreateRecipientMutation__
 *
 * To run a mutation, you first call `useCreateRecipientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipientMutation, { data, loading, error }] = useCreateRecipientMutation({
 *   variables: {
 *      recipient: // value for 'recipient'
 *   },
 * });
 */
export function useCreateRecipientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRecipientMutation,
    CreateRecipientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreateRecipientMutation,
    CreateRecipientMutationVariables
  >(CreateRecipientDocument, options);
}

export type CreateRecipientMutationHookResult = ReturnType<
  typeof useCreateRecipientMutation
>;

export type CreateRecipientMutationResult =
  Apollo.MutationResult<CreateRecipientMutation>;

export type CreateRecipientMutationOptions = Apollo.BaseMutationOptions<
  CreateRecipientMutation,
  CreateRecipientMutationVariables
>;

export const DeleteRecipientDocument = gql`
  mutation DeleteRecipient($deleteRecipientId: String!) {
    deleteRecipient(id: $deleteRecipientId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type DeleteRecipientMutationFn = Apollo.MutationFunction<
  DeleteRecipientMutation,
  DeleteRecipientMutationVariables
>;

/**
 * __useDeleteRecipientMutation__
 *
 * To run a mutation, you first call `useDeleteRecipientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecipientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecipientMutation, { data, loading, error }] = useDeleteRecipientMutation({
 *   variables: {
 *      deleteRecipientId: // value for 'deleteRecipientId'
 *   },
 * });
 */
export function useDeleteRecipientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRecipientMutation,
    DeleteRecipientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteRecipientMutation,
    DeleteRecipientMutationVariables
  >(DeleteRecipientDocument, options);
}

export type DeleteRecipientMutationHookResult = ReturnType<
  typeof useDeleteRecipientMutation
>;

export type DeleteRecipientMutationResult =
  Apollo.MutationResult<DeleteRecipientMutation>;

export type DeleteRecipientMutationOptions = Apollo.BaseMutationOptions<
  DeleteRecipientMutation,
  DeleteRecipientMutationVariables
>;

export const DeleteManyRecipientsDocument = gql`
  mutation DeleteManyRecipients($deleteManyRecipients: [String!]!) {
    deleteManyRecipients(deleteManyRecipients: $deleteManyRecipients) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type DeleteManyRecipientsMutationFn = Apollo.MutationFunction<
  DeleteManyRecipientsMutation,
  DeleteManyRecipientsMutationVariables
>;

/**
 * __useDeleteManyRecipientsMutation__
 *
 * To run a mutation, you first call `useDeleteManyRecipientsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyRecipientsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyRecipientsMutation, { data, loading, error }] = useDeleteManyRecipientsMutation({
 *   variables: {
 *      deleteManyRecipients: // value for 'deleteManyRecipients'
 *   },
 * });
 */
export function useDeleteManyRecipientsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyRecipientsMutation,
    DeleteManyRecipientsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyRecipientsMutation,
    DeleteManyRecipientsMutationVariables
  >(DeleteManyRecipientsDocument, options);
}

export type DeleteManyRecipientsMutationHookResult = ReturnType<
  typeof useDeleteManyRecipientsMutation
>;

export type DeleteManyRecipientsMutationResult =
  Apollo.MutationResult<DeleteManyRecipientsMutation>;

export type DeleteManyRecipientsMutationOptions = Apollo.BaseMutationOptions<
  DeleteManyRecipientsMutation,
  DeleteManyRecipientsMutationVariables
>;

export const UpdateRecipientDocument = gql`
  mutation UpdateRecipient(
    $updateRecipientData: RecipientUpdateInput!
    $updateRecipientId: String!
  ) {
    updateRecipient(data: $updateRecipientData, id: $updateRecipientId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type UpdateRecipientMutationFn = Apollo.MutationFunction<
  UpdateRecipientMutation,
  UpdateRecipientMutationVariables
>;

/**
 * __useUpdateRecipientMutation__
 *
 * To run a mutation, you first call `useUpdateRecipientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipientMutation, { data, loading, error }] = useUpdateRecipientMutation({
 *   variables: {
 *      updateRecipientData: // value for 'updateRecipientData'
 *      updateRecipientId: // value for 'updateRecipientId'
 *   },
 * });
 */
export function useUpdateRecipientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRecipientMutation,
    UpdateRecipientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateRecipientMutation,
    UpdateRecipientMutationVariables
  >(UpdateRecipientDocument, options);
}

export type UpdateRecipientMutationHookResult = ReturnType<
  typeof useUpdateRecipientMutation
>;

export type UpdateRecipientMutationResult =
  Apollo.MutationResult<UpdateRecipientMutation>;

export type UpdateRecipientMutationOptions = Apollo.BaseMutationOptions<
  UpdateRecipientMutation,
  UpdateRecipientMutationVariables
>;

export const UpdateManyRecipientsDocument = gql`
  mutation UpdateManyRecipients(
    $updateManyRecipients: [RecipientUpdateManyInput!]!
  ) {
    updateManyRecipients(updateManyRecipients: $updateManyRecipients) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type UpdateManyRecipientsMutationFn = Apollo.MutationFunction<
  UpdateManyRecipientsMutation,
  UpdateManyRecipientsMutationVariables
>;

/**
 * __useUpdateManyRecipientsMutation__
 *
 * To run a mutation, you first call `useUpdateManyRecipientsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyRecipientsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyRecipientsMutation, { data, loading, error }] = useUpdateManyRecipientsMutation({
 *   variables: {
 *      updateManyRecipients: // value for 'updateManyRecipients'
 *   },
 * });
 */
export function useUpdateManyRecipientsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyRecipientsMutation,
    UpdateManyRecipientsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyRecipientsMutation,
    UpdateManyRecipientsMutationVariables
  >(UpdateManyRecipientsDocument, options);
}

export type UpdateManyRecipientsMutationHookResult = ReturnType<
  typeof useUpdateManyRecipientsMutation
>;

export type UpdateManyRecipientsMutationResult =
  Apollo.MutationResult<UpdateManyRecipientsMutation>;

export type UpdateManyRecipientsMutationOptions = Apollo.BaseMutationOptions<
  UpdateManyRecipientsMutation,
  UpdateManyRecipientsMutationVariables
>;

export const CreateSenderDocument = gql`
  mutation CreateSender($sender: SenderInput!) {
    createSender(data: $sender) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type CreateSenderMutationFn = Apollo.MutationFunction<
  CreateSenderMutation,
  CreateSenderMutationVariables
>;

/**
 * __useCreateSenderMutation__
 *
 * To run a mutation, you first call `useCreateSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSenderMutation, { data, loading, error }] = useCreateSenderMutation({
 *   variables: {
 *      sender: // value for 'sender'
 *   },
 * });
 */
export function useCreateSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSenderMutation,
    CreateSenderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    CreateSenderMutation,
    CreateSenderMutationVariables
  >(CreateSenderDocument, options);
}

export type CreateSenderMutationHookResult = ReturnType<
  typeof useCreateSenderMutation
>;

export type CreateSenderMutationResult =
  Apollo.MutationResult<CreateSenderMutation>;

export type CreateSenderMutationOptions = Apollo.BaseMutationOptions<
  CreateSenderMutation,
  CreateSenderMutationVariables
>;

export const DeleteSenderDocument = gql`
  mutation DeleteSender($deleteSenderId: String!) {
    deleteSender(id: $deleteSenderId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type DeleteSenderMutationFn = Apollo.MutationFunction<
  DeleteSenderMutation,
  DeleteSenderMutationVariables
>;

/**
 * __useDeleteSenderMutation__
 *
 * To run a mutation, you first call `useDeleteSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSenderMutation, { data, loading, error }] = useDeleteSenderMutation({
 *   variables: {
 *      deleteSenderId: // value for 'deleteSenderId'
 *   },
 * });
 */
export function useDeleteSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteSenderMutation,
    DeleteSenderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteSenderMutation,
    DeleteSenderMutationVariables
  >(DeleteSenderDocument, options);
}

export type DeleteSenderMutationHookResult = ReturnType<
  typeof useDeleteSenderMutation
>;

export type DeleteSenderMutationResult =
  Apollo.MutationResult<DeleteSenderMutation>;

export type DeleteSenderMutationOptions = Apollo.BaseMutationOptions<
  DeleteSenderMutation,
  DeleteSenderMutationVariables
>;

export const DeleteManySendersDocument = gql`
  mutation DeleteManySenders($deleteManySenders: [String!]!) {
    deleteManySenders(deleteManySenders: $deleteManySenders) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type DeleteManySendersMutationFn = Apollo.MutationFunction<
  DeleteManySendersMutation,
  DeleteManySendersMutationVariables
>;

/**
 * __useDeleteManySendersMutation__
 *
 * To run a mutation, you first call `useDeleteManySendersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManySendersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManySendersMutation, { data, loading, error }] = useDeleteManySendersMutation({
 *   variables: {
 *      deleteManySenders: // value for 'deleteManySenders'
 *   },
 * });
 */
export function useDeleteManySendersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManySendersMutation,
    DeleteManySendersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManySendersMutation,
    DeleteManySendersMutationVariables
  >(DeleteManySendersDocument, options);
}

export type DeleteManySendersMutationHookResult = ReturnType<
  typeof useDeleteManySendersMutation
>;

export type DeleteManySendersMutationResult =
  Apollo.MutationResult<DeleteManySendersMutation>;

export type DeleteManySendersMutationOptions = Apollo.BaseMutationOptions<
  DeleteManySendersMutation,
  DeleteManySendersMutationVariables
>;

export const UpdateSenderDocument = gql`
  mutation UpdateSender($data: SenderUpdateInput!, $updateSenderId: String!) {
    updateSender(data: $data, id: $updateSenderId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type UpdateSenderMutationFn = Apollo.MutationFunction<
  UpdateSenderMutation,
  UpdateSenderMutationVariables
>;

/**
 * __useUpdateSenderMutation__
 *
 * To run a mutation, you first call `useUpdateSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSenderMutation, { data, loading, error }] = useUpdateSenderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateSenderId: // value for 'updateSenderId'
 *   },
 * });
 */
export function useUpdateSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSenderMutation,
    UpdateSenderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateSenderMutation,
    UpdateSenderMutationVariables
  >(UpdateSenderDocument, options);
}

export type UpdateSenderMutationHookResult = ReturnType<
  typeof useUpdateSenderMutation
>;

export type UpdateSenderMutationResult =
  Apollo.MutationResult<UpdateSenderMutation>;

export type UpdateSenderMutationOptions = Apollo.BaseMutationOptions<
  UpdateSenderMutation,
  UpdateSenderMutationVariables
>;

export const UpdateManySendersDocument = gql`
  mutation UpdateManySenders($updateManySenders: [SenderUpdateManyInput!]!) {
    updateManySenders(updateManySenders: $updateManySenders) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

export type UpdateManySendersMutationFn = Apollo.MutationFunction<
  UpdateManySendersMutation,
  UpdateManySendersMutationVariables
>;

/**
 * __useUpdateManySendersMutation__
 *
 * To run a mutation, you first call `useUpdateManySendersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManySendersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManySendersMutation, { data, loading, error }] = useUpdateManySendersMutation({
 *   variables: {
 *      updateManySenders: // value for 'updateManySenders'
 *   },
 * });
 */
export function useUpdateManySendersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManySendersMutation,
    UpdateManySendersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManySendersMutation,
    UpdateManySendersMutationVariables
  >(UpdateManySendersDocument, options);
}

export type UpdateManySendersMutationHookResult = ReturnType<
  typeof useUpdateManySendersMutation
>;

export type UpdateManySendersMutationResult =
  Apollo.MutationResult<UpdateManySendersMutation>;

export type UpdateManySendersMutationOptions = Apollo.BaseMutationOptions<
  UpdateManySendersMutation,
  UpdateManySendersMutationVariables
>;

export const CreateUserDocument = gql`
  mutation CreateUser($createUserInput: UserInput!, $avatar: Upload) {
    createUser(createUserInput: $createUserInput, avatar: $avatar) {
      created_at
      email
      id
      name
      password
      role
      avatar_url
      updated_at
      username
    }
  }
`;

export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}

export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;

export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;

export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;

export const DeleteUserDocument = gql`
  mutation DeleteUser($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
      avatar_url
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}

export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;

export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;

export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

export const DeleteManyUsersDocument = gql`
  mutation DeleteManyUsers($deleteManyUsers: [String!]!) {
    deleteManyUsers(deleteManyUsers: $deleteManyUsers) {
      avatar_url
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

export type DeleteManyUsersMutationFn = Apollo.MutationFunction<
  DeleteManyUsersMutation,
  DeleteManyUsersMutationVariables
>;

/**
 * __useDeleteManyUsersMutation__
 *
 * To run a mutation, you first call `useDeleteManyUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUsersMutation, { data, loading, error }] = useDeleteManyUsersMutation({
 *   variables: {
 *      deleteManyUsers: // value for 'deleteManyUsers'
 *   },
 * });
 */
export function useDeleteManyUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyUsersMutation,
    DeleteManyUsersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    DeleteManyUsersMutation,
    DeleteManyUsersMutationVariables
  >(DeleteManyUsersDocument, options);
}

export type DeleteManyUsersMutationHookResult = ReturnType<
  typeof useDeleteManyUsersMutation
>;

export type DeleteManyUsersMutationResult =
  Apollo.MutationResult<DeleteManyUsersMutation>;

export type DeleteManyUsersMutationOptions = Apollo.BaseMutationOptions<
  DeleteManyUsersMutation,
  DeleteManyUsersMutationVariables
>;

export const UpdateUserDocument = gql`
  mutation UpdateUser(
    $userUpdate: UserUpdateInput!
    $avatar: Upload
    $updateUserId: String!
  ) {
    updateUser(userUpdate: $userUpdate, avatar: $avatar, id: $updateUserId) {
      avatar_url
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userUpdate: // value for 'userUpdate'
 *      avatar: // value for 'avatar'
 *      updateUserId: // value for 'updateUserId'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}

export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;

export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;

export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

export const UpdateManyUsersDocument = gql`
  mutation UpdateManyUsers($updateManyUsers: [UserUpdateManyInput!]!) {
    updateManyUsers(updateManyUsers: $updateManyUsers) {
      avatar_url
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

export type UpdateManyUsersMutationFn = Apollo.MutationFunction<
  UpdateManyUsersMutation,
  UpdateManyUsersMutationVariables
>;

/**
 * __useUpdateManyUsersMutation__
 *
 * To run a mutation, you first call `useUpdateManyUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyUsersMutation, { data, loading, error }] = useUpdateManyUsersMutation({
 *   variables: {
 *      updateManyUsers: // value for 'updateManyUsers'
 *   },
 * });
 */
export function useUpdateManyUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateManyUsersMutation,
    UpdateManyUsersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpdateManyUsersMutation,
    UpdateManyUsersMutationVariables
  >(UpdateManyUsersDocument, options);
}

export type UpdateManyUsersMutationHookResult = ReturnType<
  typeof useUpdateManyUsersMutation
>;

export type UpdateManyUsersMutationResult =
  Apollo.MutationResult<UpdateManyUsersMutation>;

export type UpdateManyUsersMutationOptions = Apollo.BaseMutationOptions<
  UpdateManyUsersMutation,
  UpdateManyUsersMutationVariables
>;

export const GetAllCarrierCompanyDocument = gql`
  query GetAllCarrierCompany(
    $limit: Int
    $offset: Int
    $sort: CarrierCompanyOrderByWithRelationInput
    $where: CarrierCompanyWhereInput
  ) {
    totalCarrierCompanies(where: $where)
    getAllCarrierCompany(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

/**
 * __useGetAllCarrierCompanyQuery__
 *
 * To run a query within a React component, call `useGetAllCarrierCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCarrierCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCarrierCompanyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllCarrierCompanyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >(GetAllCarrierCompanyDocument, options);
}

export function useGetAllCarrierCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >(GetAllCarrierCompanyDocument, options);
}

export function useGetAllCarrierCompanySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetAllCarrierCompanyQuery,
    GetAllCarrierCompanyQueryVariables
  >(GetAllCarrierCompanyDocument, options);
}

export type GetAllCarrierCompanyQueryHookResult = ReturnType<
  typeof useGetAllCarrierCompanyQuery
>;

export type GetAllCarrierCompanyLazyQueryHookResult = ReturnType<
  typeof useGetAllCarrierCompanyLazyQuery
>;

export type GetAllCarrierCompanySuspenseQueryHookResult = ReturnType<
  typeof useGetAllCarrierCompanySuspenseQuery
>;

export type GetAllCarrierCompanyQueryResult = Apollo.QueryResult<
  GetAllCarrierCompanyQuery,
  GetAllCarrierCompanyQueryVariables
>;

export const GetAllLegalClientDocument = gql`
  query GetAllLegalClient(
    $limit: Int
    $offset: Int
    $sort: LegalClientOrderByWithRelationInput
    $where: LegalClientWhereInput
  ) {
    totalLegalClients(where: $where)
    getAllLegalClient(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

/**
 * __useGetAllLegalClientQuery__
 *
 * To run a query within a React component, call `useGetAllLegalClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLegalClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLegalClientQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllLegalClientQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >(GetAllLegalClientDocument, options);
}

export function useGetAllLegalClientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >(GetAllLegalClientDocument, options);
}

export function useGetAllLegalClientSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetAllLegalClientQuery,
    GetAllLegalClientQueryVariables
  >(GetAllLegalClientDocument, options);
}

export type GetAllLegalClientQueryHookResult = ReturnType<
  typeof useGetAllLegalClientQuery
>;

export type GetAllLegalClientLazyQueryHookResult = ReturnType<
  typeof useGetAllLegalClientLazyQuery
>;

export type GetAllLegalClientSuspenseQueryHookResult = ReturnType<
  typeof useGetAllLegalClientSuspenseQuery
>;

export type GetAllLegalClientQueryResult = Apollo.QueryResult<
  GetAllLegalClientQuery,
  GetAllLegalClientQueryVariables
>;

export const GetAllOwnDriverDocument = gql`
  query GetAllOwnDriver(
    $limit: Int
    $offset: Int
    $sort: OwnDriverOrderByWithRelationInput
    $where: OwnDriverWhereInput
  ) {
    totalOwnDrivers(where: $where)
    getAllOwnDriver(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

/**
 * __useGetAllOwnDriverQuery__
 *
 * To run a query within a React component, call `useGetAllOwnDriverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOwnDriverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOwnDriverQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllOwnDriverQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllOwnDriverQuery,
    GetAllOwnDriverQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetAllOwnDriverQuery, GetAllOwnDriverQueryVariables>(
    GetAllOwnDriverDocument,
    options,
  );
}

export function useGetAllOwnDriverLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllOwnDriverQuery,
    GetAllOwnDriverQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetAllOwnDriverQuery,
    GetAllOwnDriverQueryVariables
  >(GetAllOwnDriverDocument, options);
}

export function useGetAllOwnDriverSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllOwnDriverQuery,
    GetAllOwnDriverQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetAllOwnDriverQuery,
    GetAllOwnDriverQueryVariables
  >(GetAllOwnDriverDocument, options);
}

export type GetAllOwnDriverQueryHookResult = ReturnType<
  typeof useGetAllOwnDriverQuery
>;

export type GetAllOwnDriverLazyQueryHookResult = ReturnType<
  typeof useGetAllOwnDriverLazyQuery
>;

export type GetAllOwnDriverSuspenseQueryHookResult = ReturnType<
  typeof useGetAllOwnDriverSuspenseQuery
>;

export type GetAllOwnDriverQueryResult = Apollo.QueryResult<
  GetAllOwnDriverQuery,
  GetAllOwnDriverQueryVariables
>;

export const GetAllPhysicalCustomerDocument = gql`
  query GetAllPhysicalCustomer(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerOrderByWithRelationInput
    $where: PhysicalCustomerWhereInput
  ) {
    totalPhysicalCustomers(where: $where)
    getAllPhysicalCustomer(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

/**
 * __useGetAllPhysicalCustomerQuery__
 *
 * To run a query within a React component, call `useGetAllPhysicalCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhysicalCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhysicalCustomerQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllPhysicalCustomerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >(GetAllPhysicalCustomerDocument, options);
}

export function useGetAllPhysicalCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >(GetAllPhysicalCustomerDocument, options);
}

export function useGetAllPhysicalCustomerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetAllPhysicalCustomerQuery,
    GetAllPhysicalCustomerQueryVariables
  >(GetAllPhysicalCustomerDocument, options);
}

export type GetAllPhysicalCustomerQueryHookResult = ReturnType<
  typeof useGetAllPhysicalCustomerQuery
>;

export type GetAllPhysicalCustomerLazyQueryHookResult = ReturnType<
  typeof useGetAllPhysicalCustomerLazyQuery
>;

export type GetAllPhysicalCustomerSuspenseQueryHookResult = ReturnType<
  typeof useGetAllPhysicalCustomerSuspenseQuery
>;

export type GetAllPhysicalCustomerQueryResult = Apollo.QueryResult<
  GetAllPhysicalCustomerQuery,
  GetAllPhysicalCustomerQueryVariables
>;

export const GetAllRecipientDocument = gql`
  query GetAllRecipient(
    $limit: Int
    $offset: Int
    $sort: RecipientOrderByWithRelationInput
    $where: RecipientWhereInput
  ) {
    totalRecipients(where: $where)
    getAllRecipient(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

/**
 * __useGetAllRecipientQuery__
 *
 * To run a query within a React component, call `useGetAllRecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRecipientQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllRecipientQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllRecipientQuery,
    GetAllRecipientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetAllRecipientQuery, GetAllRecipientQueryVariables>(
    GetAllRecipientDocument,
    options,
  );
}

export function useGetAllRecipientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllRecipientQuery,
    GetAllRecipientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetAllRecipientQuery,
    GetAllRecipientQueryVariables
  >(GetAllRecipientDocument, options);
}

export function useGetAllRecipientSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllRecipientQuery,
    GetAllRecipientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetAllRecipientQuery,
    GetAllRecipientQueryVariables
  >(GetAllRecipientDocument, options);
}

export type GetAllRecipientQueryHookResult = ReturnType<
  typeof useGetAllRecipientQuery
>;

export type GetAllRecipientLazyQueryHookResult = ReturnType<
  typeof useGetAllRecipientLazyQuery
>;

export type GetAllRecipientSuspenseQueryHookResult = ReturnType<
  typeof useGetAllRecipientSuspenseQuery
>;

export type GetAllRecipientQueryResult = Apollo.QueryResult<
  GetAllRecipientQuery,
  GetAllRecipientQueryVariables
>;

export const GetAllSenderDocument = gql`
  query GetAllSender(
    $limit: Int
    $offset: Int
    $sort: SenderOrderByWithRelationInput
    $where: SenderWhereInput
  ) {
    totalSenders(where: $where)
    getAllSender(limit: $limit, offset: $offset, sort: $sort, where: $where) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

/**
 * __useGetAllSenderQuery__
 *
 * To run a query within a React component, call `useGetAllSenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSenderQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllSenderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllSenderQuery,
    GetAllSenderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetAllSenderQuery, GetAllSenderQueryVariables>(
    GetAllSenderDocument,
    options,
  );
}

export function useGetAllSenderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllSenderQuery,
    GetAllSenderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetAllSenderQuery, GetAllSenderQueryVariables>(
    GetAllSenderDocument,
    options,
  );
}

export function useGetAllSenderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllSenderQuery,
    GetAllSenderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<GetAllSenderQuery, GetAllSenderQueryVariables>(
    GetAllSenderDocument,
    options,
  );
}

export type GetAllSenderQueryHookResult = ReturnType<
  typeof useGetAllSenderQuery
>;

export type GetAllSenderLazyQueryHookResult = ReturnType<
  typeof useGetAllSenderLazyQuery
>;

export type GetAllSenderSuspenseQueryHookResult = ReturnType<
  typeof useGetAllSenderSuspenseQuery
>;

export type GetAllSenderQueryResult = Apollo.QueryResult<
  GetAllSenderQuery,
  GetAllSenderQueryVariables
>;

export const AvatarDocument = gql`
  query Avatar($userId: String) {
    user(id: $userId) {
      avatar_url
    }
  }
`;

/**
 * __useAvatarQuery__
 *
 * To run a query within a React component, call `useAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvatarQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAvatarQuery(
  baseOptions?: Apollo.QueryHookOptions<AvatarQuery, AvatarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<AvatarQuery, AvatarQueryVariables>(
    AvatarDocument,
    options,
  );
}

export function useAvatarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AvatarQuery, AvatarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<AvatarQuery, AvatarQueryVariables>(
    AvatarDocument,
    options,
  );
}

export function useAvatarSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AvatarQuery,
    AvatarQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<AvatarQuery, AvatarQueryVariables>(
    AvatarDocument,
    options,
  );
}

export type AvatarQueryHookResult = ReturnType<typeof useAvatarQuery>;

export type AvatarLazyQueryHookResult = ReturnType<typeof useAvatarLazyQuery>;

export type AvatarSuspenseQueryHookResult = ReturnType<
  typeof useAvatarSuspenseQuery
>;

export type AvatarQueryResult = Apollo.QueryResult<
  AvatarQuery,
  AvatarQueryVariables
>;

export const UserDocument = gql`
  query User($email: String, $userId: String, $username: String) {
    user(email: $email, id: $userId, username: $username) {
      created_at
      email
      id
      avatar_url
      name
      password
      role
      updated_at
      username
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *      userId: // value for 'userId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}

export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}

export function useUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}

export type UserQueryHookResult = ReturnType<typeof useUserQuery>;

export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;

export type UserSuspenseQueryHookResult = ReturnType<
  typeof useUserSuspenseQuery
>;

export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;

export const UsersDocument = gql`
  query Users(
    $limit: Int
    $offset: Int
    $sort: UserOrderByWithRelationInput
    $where: UserWhereInput
  ) {
    totalUsers(where: $where)
    users(limit: $limit, offset: $offset, sort: $sort, where: $where) {
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}

export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}

export function useUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}

export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;

export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;

export type UsersSuspenseQueryHookResult = ReturnType<
  typeof useUsersSuspenseQuery
>;

export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
