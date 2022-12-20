import { ICustomAttribute, ISearchResponse } from '../interfaces';

export interface ICustomerAddressRegion {
  region_code: string;
  region: string;
  region_id: number;
  extension_attributes?: any;
}

export interface ICustomerAddress {
  id?: number;
  customer_id?: number;
  region?: ICustomerAddressRegion;
  region_id?: number;
  country_id?: string;
  street?: string[];
  company?: string;
  telephone?: string;
  fax?: string;
  postcode?: string;
  city?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  prefix?: string;
  suffix?: string;
  vat_id?: string;
  default_shipping?: boolean;
  default_billing?: boolean;
  extension_attributes?: any;
  custom_attributes?: ICustomAttribute[];
}

export interface ICustomerExtensionAttributesCompanyAttributes {
  customer_id?: number;
  company_id?: number;
  job_title?: string;
  status?: number;
  telephone?: string;
  extension_attributes?: any;
}

export interface ICustomerExtensionAttributes {
  company_attributes?: ICustomerExtensionAttributesCompanyAttributes;
  assistance_allowed?: number;
  is_subscribed?: boolean;
}

export interface ICustomer {
  id?: number;
  group_id?: number;
  default_billing?: string;
  default_shipping?: string;
  confirmation?: string;
  created_at?: string;
  updated_at?: string;
  created_in?: string;
  dob?: string;
  email: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  prefix?: string;
  suffix?: string;
  gender?: number;
  store_id?: number;
  taxvat?: string;
  website_id?: number;
  addresses?: ICustomerAddress[];
  disable_auto_group_change?: number;
  extension_attributes?: ICustomerExtensionAttributes;
  custom_attributes?: ICustomAttribute[];
}

export interface ICustomerSearchResponse extends ISearchResponse {
  items: ICustomer[];
}
