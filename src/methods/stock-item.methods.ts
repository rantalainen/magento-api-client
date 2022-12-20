import { MagentoApiClient } from '../index';
import { IStockItem } from '../interfaces/stock-item.interfaces';
import { Methods } from '../methods';

export class StockItemMethods extends Methods {
  constructor(magento: MagentoApiClient) {
    super(magento, 'stockItems');
  }

  /** Gets stock item by product SKU. */
  async getBySku(productSku: string): Promise<IStockItem> {
    return await super.request('GET', productSku);
  }
}
