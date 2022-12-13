import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { IInvoice, IInvoiceResponseObject } from '../interfaces/invoice.interfaces';
import { Methods } from '../methods';

export class InvoiceMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'invoices');
  }

  /** Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. */
  async get(searchCriteria: ISearchCriteria): Promise<IInvoiceResponseObject> {
    return await super.request('GET', '', { searchCriteria });
  }

  /** Loads a specified invoice. */
  async getById(invoiceId: number): Promise<IInvoice> {
    return await super.request('GET', invoiceId.toString());
  }
}
