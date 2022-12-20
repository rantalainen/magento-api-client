import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { ICustomer, ICustomerSearchResponse } from '../interfaces/customer.interfaces';
import { Methods } from '../methods';

export class CustomerMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'customers');
  }

  /** Retrieves customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async get(searchCriteria: ISearchCriteria): Promise<ICustomerSearchResponse> {
    return await super.request('GET', 'search', { searchCriteria });
  }

  /** Retrieves all customers. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async getAll() {
    const searchCriteria: ISearchCriteria = {
      filter_groups: [],
      sort_orders: [
        {
          field: 'id',
          direction: 'ASC'
        }
      ]
    };
    return await this.get(searchCriteria);
  }

  /** Gets customer by customer ID. */
  async getById(customerId: number): Promise<ICustomer> {
    return await super.request('GET', customerId.toString());
  }
}
