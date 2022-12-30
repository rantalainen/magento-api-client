import { MagentoApiClient } from '../index';
import { ISearchCriteria } from '../interfaces';
import { IProduct, IProductSearchResponse } from '../interfaces/product.interfaces';
import { IStockItem } from '../interfaces/stock-item.interfaces';
import { Methods } from '../methods';

export class ProductMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'products');
  }

  /** Lists products that match specified search criteria. */
  async get(searchCriteria: ISearchCriteria): Promise<IProductSearchResponse> {
    return await super.request('GET', '', { searchCriteria });
  }

  /** Lists all products. */
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

  /** Gets info about product by product SKU. */
  async getBySku(productSku: string): Promise<IProduct> {
    return await super.request('GET', productSku);
  }

  /** Updates stock item. */
  async putStockItem(itemId: string, productSku: string, stockItem: IStockItem): Promise<number> {
    return await super.request('PUT', `${productSku}/stockItems/${itemId}`, undefined, { stockItem: stockItem });
  }
}
