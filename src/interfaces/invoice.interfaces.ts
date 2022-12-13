import { ISearchCriteria } from '../interfaces';

export interface IInvoiceItem {
  additional_data?: string;
  base_cost?: number;
  base_discount_amount?: number;
  base_discount_tax_compensation_amount?: number;
  base_price?: number;
  base_price_incl_tax?: number;
  base_row_total?: number;
  base_row_total_incl_tax?: number;
  base_tax_amount?: number;
  description?: string;
  discount_amount?: number;
  entity_id?: number;
  discount_tax_compensation_amount?: number;
  name?: string;
  parent_id?: number;
  price?: number;
  price_incl_tax?: number;
  product_id?: number;
  row_total?: number;
  row_total_incl_tax?: number;
  sku: string;
  tax_amount?: number;
  extension_attributes?: any;
  order_item_id: number;
  qty: number;
}

export interface IInvoiceComment {
  is_customer_notified: number;
  parent_id: number;
  extension_attributes?: any;
  comment: string;
  is_visible_on_front: number;
  created_at?: string;
  entity_id?: number;
}

export interface IInvoiceExtensionAttributes {
  base_customer_balance_amount?: number;
  customer_balance_amount?: number;
  base_gift_cards_amount?: number;
  gift_cards_amount?: number;
  gw_base_price?: string;
  gw_price?: string;
  gw_items_base_price?: string;
  gw_items_price?: string;
  gw_card_base_price?: string;
  gw_card_price?: string;
  gw_base_tax_amount?: string;
  gw_tax_amount?: string;
  gw_items_base_tax_amount?: string;
  gw_items_tax_amount?: string;
  gw_card_base_tax_amount?: string;
  gw_card_tax_amount?: string;
}

export interface IInvoice {
  base_currency_code?: string;
  base_discount_amount?: number;
  base_grand_total?: number;
  base_discount_tax_compensation_amount?: number;
  base_shipping_amount?: number;
  base_shipping_discount_tax_compensation_amnt?: number;
  base_shipping_incl_tax?: number;
  base_shipping_tax_amount?: number;
  base_subtotal?: number;
  base_subtotal_incl_tax?: number;
  base_tax_amount?: number;
  base_total_refunded?: number;
  base_to_global_rate?: number;
  base_to_order_rate?: number;
  billing_address_id?: number;
  can_void_flag?: number;
  created_at?: string;
  discount_amount?: number;
  discount_description?: string;
  email_sent?: number;
  entity_id?: number;
  global_currency_code?: string;
  grand_total?: number;
  discount_tax_compensation_amount?: number;
  increment_id?: string;
  is_used_for_refund?: number;
  order_currency_code?: string;
  order_id: number;
  shipping_address_id?: number;
  shipping_amount?: number;
  shipping_discount_tax_compensation_amount?: number;
  shipping_incl_tax?: number;
  shipping_tax_amount?: number;
  state?: number;
  store_currency_code?: string;
  store_id?: number;
  store_to_base_rate?: number;
  store_to_order_rate?: number;
  subtotal?: number;
  subtotal_incl_tax?: number;
  tax_amount?: number;
  total_qty: number;
  transaction_id?: string;
  updated_at?: string;
  items: IInvoiceItem[];
  comments?: IInvoiceComment[];
  extension_attributes?: IInvoiceExtensionAttributes;
}

export interface IInvoiceResponseObject {
  items: IInvoice[];
  search_criteria: ISearchCriteria;
  total_count: number;
}
