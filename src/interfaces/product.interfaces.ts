import { ICustomAttribute, ISearchResponse } from '../interfaces';

export interface IFileContent {
  file_data: string;
  name: string;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesCategoryLink {
  position?: number;
  category_id: string;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesBundleProductOptionProductLink {
  id?: string;
  sku?: string;
  option_id?: number;
  qty?: number;
  position?: number;
  is_default: boolean;
  price: number;
  price_type: number;
  can_change_quantity?: number;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesBundleProductOption {
  option_id?: number;
  title?: string;
  required?: boolean;
  type?: string;
  position?: number;
  sku?: string;
  product_links?: IProductExtensionAttributesBundleProductOptionProductLink[];
  extension_attributes?: any;
}

export interface IProductExtensionAttributesStockItem {
  item_id: number;
  product_id?: number;
  stock_id?: number;
  qty: number;
  is_in_stock: boolean;
  is_qty_decimal: boolean;
  show_default_notification_message: boolean;
  use_config_min_qty: boolean;
  min_qty: number;
  use_config_min_sale_qty: number;
  min_sale_qty: number;
  use_config_max_sale_qty: boolean;
  max_sale_qty: number;
  use_config_backorders: boolean;
  backorders: number;
  use_config_notify_stock_qty: boolean;
  notify_stock_qty: number;
  use_config_qty_increments: boolean;
  qty_increments: number;
  use_config_enable_qty_inc: boolean;
  enable_qty_increments: boolean;
  use_config_manage_stock: boolean;
  manage_stock: boolean;
  low_stock_date: string;
  is_decimal_divided: boolean;
  stock_status_changed_auto: number;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesDiscountDiscountData {
  amount: number;
  base_amount: number;
  original_amount: number;
  base_original_amount: number;
}

export interface IProductExtensionAttributesDiscount {
  discount_data: IProductExtensionAttributesDiscountDiscountData;
  rule_label: string;
  rule_id: number;
}

export interface IProductExtensionAttributesDownloadableProductLink {
  id?: number;
  title: string;
  sort_order: number;
  is_shareable: number;
  price: number;
  number_of_downloads?: number;
  link_type: string;
  link_file?: string;
  link_file_content?: IFileContent;
  link_url?: string;
  sample_type: string;
  sample_file?: string;
  sample_file_content?: IFileContent;
  sample_url?: string;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesDownloadableProductSample {
  id?: number;
  title: string;
  sort_order: number;
  sample_type: string;
  sample_file?: string;
  sample_file_content?: IFileContent;
  sample_url?: string;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesGiftcardAmount {
  attribute_id: number;
  website_id: number;
  value: number;
  website_value: number;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesConfigurableProductOptionValue {
  value_index: number;
  extension_attributes?: any;
}

export interface IProductExtensionAttributesConfigurableProductOption {
  id?: number;
  attribute_id?: string;
  label?: string;
  position?: number;
  is_use_default?: boolean;
  values?: IProductExtensionAttributesConfigurableProductOptionValue[];
  extension_attributes?: any;
  product_id?: number;
}

export interface IProductExtensionAttributes {
  website_ids?: number[];
  category_links?: IProductExtensionAttributesCategoryLink[];
  bundle_product_options?: IProductExtensionAttributesBundleProductOption[];
  stock_item?: IProductExtensionAttributesStockItem;
  discounts?: IProductExtensionAttributesDiscount[];
  downloadable_product_links?: IProductExtensionAttributesDownloadableProductLink[];
  downloadable_product_samples?: IProductExtensionAttributesDownloadableProductSample[];
  giftcard_amounts?: IProductExtensionAttributesGiftcardAmount[];
  configurable_product_options?: IProductExtensionAttributesConfigurableProductOption[];
  configurable_product_links?: number[];
}

export interface IProductLinkExtensionAttributes {
  qty?: number;
}

export interface IProductLink {
  sku: string;
  link_type: string;
  linked_product_sku: string;
  linked_product_type: string;
  position: number;
  extension_attributes?: IProductLinkExtensionAttributes;
}

export interface IProductOptionValue {
  title: string;
  sort_order: number;
  price: number;
  price_type: string;
  sku?: string;
  option_type_id?: number;
}

export interface IProductOption {
  product_sku: string;
  option_id?: number;
  title: string;
  type: string;
  sort_order: number;
  is_require: boolean;
  price?: number;
  price_type?: string;
  sku?: string;
  file_extension?: string;
  max_characters?: number;
  image_size_x?: number;
  image_size_y?: number;
  values?: IProductOptionValue[];
  extension_attributes?: any;
}

export interface IProductMediaGalleryEntryContent {
  base64_encoded_data: string;
  type: string;
  name: string;
}

export interface IProductMediaGalleryEntryExtensionAttributesVideoContent {
  media_type: string;
  video_provider: string;
  video_url: string;
  video_title: string;
  video_description: string;
  video_metadata: string;
}

export interface IProductMediaGalleryEntryExtensionAttributes {
  video_content?: IProductMediaGalleryEntryExtensionAttributesVideoContent;
}

export interface IProductMediaGalleryEntry {
  id?: number;
  media_type: string;
  label: string;
  position: number;
  disabled: boolean;
  types: string[];
  file?: string;
  content?: IProductMediaGalleryEntryContent;
  extension_attributes?: IProductMediaGalleryEntryExtensionAttributes;
}

export interface IProductTierPriceExtensionAttributes {
  percentage_value?: number;
  website_id?: number;
}

export interface IProductTierPrice {
  customer_group_id: number;
  qty: number;
  value: number;
  extension_attributes?: IProductTierPriceExtensionAttributes;
}

export interface IProduct {
  id?: number;
  sku: string;
  name?: string;
  attribute_set_id?: number;
  price?: number;
  status?: number;
  visibility?: number;
  type_id?: string;
  created_at?: string;
  updated_at?: string;
  weight?: number;
  extension_attributes?: IProductExtensionAttributes;
  product_links?: IProductLink[];
  options?: IProductOption[];
  media_gallery_entries?: IProductMediaGalleryEntry[];
  tier_prices?: IProductTierPrice[];
  custom_attributes?: ICustomAttribute[];
}

export interface IProductSearchResponse extends ISearchResponse {
  items: IProduct[];
}
