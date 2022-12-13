import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { ICustomer, ICustomerResponseObject } from '../interfaces/customer.interfaces';
import { Methods } from '../methods';

export class CustomerMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'customers');
  }

  /** Retrieves customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async get(searchCriteria: ISearchCriteria): Promise<ICustomerResponseObject> {
    return await super.request('GET', 'search', { searchCriteria });
  }

  /** Gets customer by customer ID. */
  async getById(customerId: number): Promise<ICustomer> {
    return await super.request('GET', customerId.toString());
  }
}
