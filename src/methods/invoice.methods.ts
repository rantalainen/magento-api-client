import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { IInvoice, IInvoiceSearchResponse } from '../interfaces/invoice.interfaces';
import { Methods } from '../methods';

export class InvoiceMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'invoices');
  }

  /** Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async get(searchCriteria: ISearchCriteria): Promise<IInvoiceSearchResponse> {
    return await super.request('GET', '', { searchCriteria });
  }

  /** Lists all invoices. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async getAll() {
    const searchCriteria: ISearchCriteria = {
      filter_groups: [],
      sort_orders: [
        {
          field: 'order_id',
          direction: 'ASC'
        }
      ]
    };
    return await this.get(searchCriteria);
  }

  /** Loads a specified invoice. */
  async getById(invoiceId: number): Promise<IInvoice> {
    return await super.request('GET', invoiceId.toString());
  }
}
