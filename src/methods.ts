import { MagentoApiClient } from './index';
import { Method } from 'got';

export class Methods {
  /** @private */
  _magento: MagentoApiClient;

  /** @private */
  _selectedApi: string;

  constructor(magento: MagentoApiClient, selectedApi: string) {
    if (!magento || typeof magento !== 'object') {
      throw new Error('Incorrect or missing magento in method initialization');
    }

    this._magento = magento;
    this._selectedApi = selectedApi;
  }

  async request(method: Method, path: string, queryString?: any, body?: any) {
    return await this._magento.request(method, `${this._selectedApi}${path !== '' ? `/${path}` : ''}`, queryString, body);
  }
}
