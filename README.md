# magento-api-client

MagentoApiClient is a third party Magento API client.

:warning: This tool is in early stages and is subject to change.

## Installation

Add to project's package.json:

```
npm install @rantalainen/magento-api-client
```

## Setup

### Import to NodeJS project

```javascript
const { MagentoApiClient } = require('@rantalainen/magento-api-client');
```

### Import to TypeScript project

```javascript
import { MagentoApiClient } from '@rantalainen/magento-api-client';
```

### Setup client with options

```javascript
const magento = new MagentoApiClient({
  // Required options:
  url: 'https://example.test',
  accessToken: 'access_token',

  // Optional options (and default values):
  consumerKey: undefined,
  consumerSecret: undefined,
  accessTokenSecret: undefined,
  apiVersion: 'V1',
  timeout: 120000
});
```

## Implemented methods

The following API methods have been implemented:

- `customers`
- `invoices`
- `orders`
- `products`
- `stockItems`

## Customers

### magento.customers.get(searchCriteria: ISearchCriteria): Promise\<ICustomerSearchResponse\>

Retrieves customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.

**required**:

- `searchCriteria.filter_groups` Specifies filters

**optional**:

- `searchCriteria.sort_orders` Specifies sorting
- `searchCriteria.page_size` Specifies the maximum number of items to return. If not specified, returns all matches.
- `searchCriteria.current_page` Specifies the page to return.

```javascript
// Gets customers updated after 2022-12-01, sorted by email in ascending order
const customers = await magento.customers.get({
  filter_groups: [
    {
      filters: [
        {
          field: 'updated_at',
          value: '2022-12-01',
          condition_type: 'gt'
        }
      ]
    }
  ],
  sort_orders: [
    {
      field: 'email',
      direction: 'ASC'
    }
  ]
});
console.log(customers);
```

### magento.customers.getAll(): Promise\<ICustomerSearchResponse\>

Retrieves all customers. This call returns an array of objects, but detailed information about each object’s attributes might not be included.

```javascript
// Gets all customers, sorted by customer id in ascending order
const customers = await magento.customers.getAll();
console.log(customers);
```

### magento.customers.getById(customerId: number): Promise\<ICustomer\>

Gets customer by customer ID.

**required**:

- `customerId` Customer ID

```javascript
// Gets customer 123
const customer = await magento.customers.getById(123);
console.log(customer);
```

## Invoices

### magento.invoices.get(searchCriteria: ISearchCriteria): Promise\<IInvoiceSearchResponse\>

Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.

**required**:

- `searchCriteria.filter_groups` Specifies filters

**optional**:

- `searchCriteria.sort_orders` Specifies sorting
- `searchCriteria.page_size` Specifies the maximum number of items to return. If not specified, returns all matches.
- `searchCriteria.current_page` Specifies the page to return.

```javascript
// Gets max 2 invoices created after 2022-12-08
const invoices = await magento.invoices.get({
  filter_groups: [
    {
      filters: [
        {
          field: 'created_at',
          value: '2022-12-08',
          condition_type: 'gt'
        }
      ]
    }
  ],
  page_size: 2
});
console.log(invoices);
```

### magento.invoices.getAll(): Promise\<IInvoiceSearchResponse\>

Lists all invoices. This call returns an array of objects, but detailed information about each object’s attributes might not be included.

```javascript
// Gets all invoices, sorted by order id in ascending order
const invoices = await magento.invoices.getAll();
console.log(invoices);
```

### magento.invoices.getById(invoiceId: number): Promise\<IInvoice\>

Gets invoice by invoice ID.

**required**:

- `invoiceId` Invoice ID

```javascript
// Gets invoice 123
const invoice = await magento.invoices.getById(123);
console.log(invoice);
```

## Orders

### magento.orders.get(searchCriteria: ISearchCriteria): Promise\<IOrderSearchResponse\>

Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.

**required**:

- `searchCriteria.filter_groups` Specifies filters

**optional**:

- `searchCriteria.sort_orders` Specifies sorting
- `searchCriteria.page_size` Specifies the maximum number of items to return. If not specified, returns all matches.
- `searchCriteria.current_page` Specifies the page to return.

```javascript
// Gets orders created after 2022-12-01
const orders = await magento.orders.get({
  filter_groups: [
    {
      filters: [
        {
          field: 'created_at',
          value: '2022-12-01',
          condition_type: 'gt'
        }
      ]
    }
  ]
});
console.log(orders);
```

### magento.orders.getById(orderId: number): Promise\<IOrder\>

Loads a specified order.

```javascript
// Gets order 123
const order = await magento.orders.getById(123);
console.log(order);
```

## Products

### magento.products.get(searchCriteria: ISearchCriteria): Promise\<IProductSearchResponse\>

Lists products that match specified search criteria.

**required**:

- `searchCriteria.filter_groups` Specifies filters

**optional**:

- `searchCriteria.sort_orders` Specifies sorting
- `searchCriteria.page_size` Specifies the maximum number of items to return. If not specified, returns all matches.
- `searchCriteria.current_page` Specifies the page to return.

```javascript
// Gets products created after 2022-12-01
const products = await magento.products.get({
  filter_groups: [
    {
      filters: [
        {
          field: 'created_at',
          value: '2022-12-01',
          condition_type: 'gt'
        }
      ]
    }
  ]
});
console.log(products);
```

### magento.products.getAll(): Promise\<IProductSearchResponse\>

Lists all products.

```javascript
// Gets all products, sorted by product id in ascending order
const products = await magento.products.getAll();
console.log(products);
```

### magento.products.getBySku(productSku: string): Promise\<IProduct\>

Gets info about product by product SKU.

**required**:

- `productSku` Product SKU

```javascript
// Gets product A123
const product = await magento.products.getBySku('A123');
console.log(product);
```

### magento.products.putStockItem(itemId: string, productSku: string, stockItem: IStockItem): Promise\<number\>

Updates stock item.

**required**:

- `itemId` Item ID
- `productSku` Product SKU
- `stockItem` Stock item

## Stock Items

### magento.stockItems.getBySku(productSku: string): Promise\<IStockItem\>

Gets stock item by product SKU.

**required**:

- `productSku` Product SKU

```javascript
// Gets stock item for product A123
const stockItem = await magento.stockItems.getBySku('A123');
console.log(stockItem);
```

## Resources

- Magento REST documentation: https://developer.adobe.com/commerce/webapi/rest/

## Changelog

- 0.0.1 First release
- 0.0.2 Added support for `orders` and `stockItems` methods
