# Evolving your product page (pdp)

## :sparkles: **Branch:** pdp2

## Introduction

During the last step we learned how to create a simple product page with a minimum amount of products, but we know that the result is far from an ideal product page, so we'll add other elements that frequently appear on product pages from various stores.

![image](https://user-images.githubusercontent.com/18701182/69391258-002e4b00-0cb1-11ea-901f-f69d9c0b3062.png)

## Over 30 product blocks

Our [documentation](https://vtex.io/docs/components/product-related) contains more than 30 product-related blocks. At the beginning of the course we looked at the Shelf and its related blocks, in addition to the 4 blocks we looked at during our last session. We'll explore 4 more in this step:

- [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb)
- [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier)
- [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/)
- [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector)

It's important that by the end of the course you take some time to fully explore our components, in addition to the customization possibilities that accompany each component. 

## Activity

Develop the product page by adding the 4 blocks listed above to`product.jsonc` as follows:

1. Define a `breadcrumb` right before the product's **main line**;

    ```json
    "store.product": {
      "children": [
        "breadcrumb",
        "flex-layout.row#main"
      ]
    }
    ```

2. Define the `product-identifier.product` right under the `product-name`;
3. Create a **line** right under the price, having `sku-selector` and `product-quantity` as children;

    ```json
    {
      ...
        "children": [ 
          "product-price",
          "flex-layout.row#qty-sku"
        ]
      },
      "flex-layout.row#qty-sku": {
        "children": [
          "sku-selector",
          "product-quantity"
        ]
      },
      ...
    }
    ```

4. Define `shipping-simulator` right under the line containing the SKU Selector and Product Quantity

:information_source: Remember to access the [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb), [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier), [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/) and [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) documentation if you have any questions during the activity. 

---

### :no_entry_sign: Are you lost?

Is there any problem with this step? What about sending us a feedback? :pray:

[Submit feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Rodap%C3%A9)

---

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
