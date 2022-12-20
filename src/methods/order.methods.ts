import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { IOrder, IOrderSearchResponse } from '../interfaces/order.interfaces';
import { Methods } from '../methods';

export class OrderMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'orders');
  }

  /** Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async get(searchCriteria: ISearchCriteria): Promise<IOrderSearchResponse> {
    return await super.request('GET', '', { searchCriteria });
  }

  /** Loads a specified order. */
  async getById(orderId: number): Promise<IOrder> {
    return await super.request('GET', orderId.toString());
  }
}
