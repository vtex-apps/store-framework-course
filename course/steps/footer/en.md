# Footer

## :sparkles: **Branch:** footer

## Introduction

In this step, we will learn how to create a component that is commonly seen as unimportant, but which is critical to providing a good user experience: the [footer](https://vtex.io/docs/components/all/vtex.store-footer/).

Few users scroll until the footer. However, the ones that do make it that far may be looking for information that is usually housed in this block, such as links to social media and payment methods accepted by the store. It can also house customized pages that direct to the company's recruitment site, customer support and category menus. 

FOTO Footer

## Configuring the Footer

The Footer block, just as the Header, is responsive, meaning that it can be configured to adapt to different devices, such as desktop and mobile.

Below, we can see an Footer implementation example for desktop:

```json
{
  "footer": {
    "blocks": ["footer-layout.desktop"]
  },
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-1-desktop"
    ]
  }
}
```

## Activity

We are now going to configure a footer for the store's main page, considering the above-mentioned example code for desktop and mobile.

We will not implement the menu during this activity, since it's already be dealt with during the Header context. We will instead look at accepted payment methods and the store's social media networks. 

1. In the `footer.jsonc` file, copy the code above and to use in your theme; 
2. Thereafter, declare the following block:

    ```json
      "flex-layout.row#footer-1-desktop": {
        "children": [
          "flex-layout.col#footer-left-desktop",
          "flex-layout.col#footer-right-desktop"
        ],
        "props": {
          "blockClass": "footer-row",
          "paddingTop": 7,
          "paddingBottom": 7
        }
      }
    ```

3. Based on the block above, build the `flex-layout.col#footer-left-desktop`, having the following children: `accepted-payment-methods`;

4. Then, build the `accepted-payment-methods` block with the following payment methods: `MasterCard`, `Visa` and `Diners Club`. And just to gain a bit more knowledge, find out how to display payment methods in color in [this documentation](https://vtex.io/docs/components/all/vtex.store-footer/);

5. In this step, we will use the `social-networks` block to display our store's social media networks. Check the documentation for more on this, and then implement as the social media networks as children of the `flex-layout.col#footer-right-desktop` block. We want to display `Facebook`, `Instagram` and `Twitter`.

6. Lastly, make the social media network logos appear in color. Read the footer's [documentation](https://vtex.io/docs/components/all/vtex.store-footer/) for more on this.

:information_source: Remember to access the footer's [documentation](https://vtex.io/docs/components/all/vtex.store-footer/) in case you have any questions during the activity. 

Expected result:
![image](https://user-images.githubusercontent.com/12139385/70229436-00105f80-1735-11ea-9c26-9f16a3820f52.png)

----

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
