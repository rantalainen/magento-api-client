import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { IProduct, IProductResponseObject } from '../interfaces/product.interfaces';
import { Methods } from '../methods';

export class ProductMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'products');
  }

  /** Lists products that match specified search criteria. */
  async get(searchCriteria: ISearchCriteria): Promise<IProductResponseObject> {
    return await super.request('GET', '', { searchCriteria });
  }

  /** Gets info about product by product SKU. */
  async getBySku(sku: string): Promise<IProduct> {
    return await super.request('GET', sku);
  }
}
