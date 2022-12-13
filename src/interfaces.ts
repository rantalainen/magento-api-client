export interface IMagentoApiClientOptions {
  url: string;
  accessToken: string;

  consumerKey?: string;
  consumerSecret?: string;
  accessTokenSecret?: string;

  /** API version that should be used, for example `V1`. Uses API version `V1` by default */
  apiVersion?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
}

export type ConditionType =
  | 'eq'
  | 'finset'
  | 'from'
  | 'gt'
  | 'gteq'
  | 'in'
  | 'like'
  | 'lt'
  | 'lteq'
  | 'moreq'
  | 'neq'
  | 'nfinset'
  | 'nin'
  | 'nlike'
  | 'notnull'
  | 'null'
  | 'to';

export interface IFilter {
  /** Specifies the field to filter */
  field: string;
  /** Specifies the value to search for */
  value: string;
  /** See list of possible values: https://developer.adobe.com/commerce/webapi/rest/use-rest/performing-searches/ */
  condition_type?: ConditionType;
}

export interface IFilterGroup {
  /** Each filter defines a search term */
  filters: IFilter[];
}

export type Direction = 'ASC' | 'DESC';

export interface ISortOrder {
  /** Specifies the field to sort on */
  field: string;
  /** Specifies whether to return results in ascending (ASC) or descending (DESC) order. By default, search results are returned in descending order. */
  direction?: Direction;
}

export interface ISearchCriteria {
  /** Filter groups array defines one or more filters */
  filter_groups: IFilterGroup[];
  sort_orders?: ISortOrder[];
  /** Specifies the maximum number of items to return. The value must be an integer. If the pageSize is not specified, the system returns all matches. */
  page_size?: number;
  /** Returns the current page */
  current_page?: number;
}

export interface ICustomAttribute {
  attribute_code: string;
  value: string;
}
