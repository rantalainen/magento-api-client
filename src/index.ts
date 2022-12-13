import got, { Method, OptionsOfJSONResponseBody } from 'got';
import qs from 'qs';
import { IMagentoApiClientOptions } from './interfaces';
import { CustomerMethods } from './methods/customer.methods';
import { InvoiceMethods } from './methods/invoice.methods';
import { ProductMethods } from './methods/product.methods';

export class MagentoApiClient {
  options: IMagentoApiClientOptions;

  readonly customers: CustomerMethods;
  readonly invoices: InvoiceMethods;
  readonly products: ProductMethods;

  constructor(options: IMagentoApiClientOptions) {
    // Set default options
    options.apiVersion = options.apiVersion || 'V1';
    options.timeout = options.timeout || 120000;

    if (!options.url) {
      throw new Error('Missing options.url');
    }
    if (!options.accessToken) {
      throw new Error('Missing options.accessToken');
    }

    this.options = options;

    this.customers = new CustomerMethods(this);
    this.invoices = new InvoiceMethods(this);
    this.products = new ProductMethods(this);
  }

  async request(method: Method, path: string, queryString?: any, body?: any): Promise<any> {
    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url: `${this.options.url}/rest/${this.options.apiVersion}/${path}`,
      timeout: {
        request: this.options.timeout
      },
      headers: {
        Authorization: `Bearer ${this.options.accessToken}`
      },
      throwHttpErrors: false,
      responseType: 'json'
    };

    // If query string is defined
    if (queryString) {
      gotOptions.searchParams = qs.stringify(queryString);
    }

    // If body is defined
    if (body) {
      gotOptions.body = body;
    }

    // Make request
    const response = await got(gotOptions);

    // Status code should be a 200 type
    if (!(response.statusCode >= 200 && response.statusCode < 300)) {
      throw new Error(`Magento HTTP error ${response.statusCode} (${response.statusMessage}): ${JSON.stringify(response.body)}`);
    }

    return response.body;
  }
}
