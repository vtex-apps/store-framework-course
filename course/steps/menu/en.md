# Menu 

## :sparkles: **Branch:** menu 

## Introduction 

Having already configured and implemented the header, let's now add it to the  [**Menu**](https://vtex.io/docs/components/all/vtex.menu/). Configuring the Menu is an important step in building your theme, since it's the block that's responsible for the user's *navigation* in your store. Because of its function and relevance, the Menu possesses a complex hierarchical structure, which involves *menu items*, *submenus* and, based on the latter, any Store Framework block (such as other Menus e Menu Items). Below we can see an image highlighting the Menu block's structure in practice:  

![menu](https://user-images.githubusercontent.com/52087100/70004800-5cf9f300-1546-11ea-81fc-369e4bb58ed5.png) 

## Configuring the Menu 

When compared to some of the other blocks, the Menu's configuration may seem more difficult due to its structure of menus, menu items and submenus. However the Menu does not necessarily need to be configured according to the most complex scenario. Below, we can check a basic implementation example for the block, containing just the following 3 Menu Items:

```json
{
  "vtex.menu@2.x:menu#categories": {
    "children": [
      "menu-item#major-appliances",
      "menu-item#small-appliances",
      "menu-item#electronics"
    ],

    "props":{
      "orientation": "horizontal"
    }
  }
},
```

## Activity 

This activity will help us understand more about configuring the [Menu](https://vtex.io/docs/components/all/vtex.menu/), in addition to its existing hierarchy based on building *Menu Items* and Submenus. 
1. In \`header.jsonc\`, add \`header-row#menu\` as the last item on the \`header-layout.desktop\` block's child list (configured during the previous activity), so that the Menu can be rendered by the store's Header; 
2. Copy and paste the code below to declare the `header-row#menu` block:

    ```json
    "header-row#menu": {
      "children": [
        "header-spacer",
        "vtex.menu@2.x:menu#categories",
        "header-spacer"
      ]
    },
    ```

3. We also need to deal with the layout Menu for other devices, such as mobile. Therefore, add the [`drawer`](https://vtex.io/docs/components/all/vtex.store-drawer/) as the `header-row#main-mobile` block's first child; 
4. Copy the code in the `menu.jsonc` code to horizontally render the 3 main Menu items:

    ```json
    {
      "vtex.menu@2.x:menu#categories": {
        "children": [
          "menu-item#major-appliances",
          "menu-item#small-appliances",
          "menu-item#electronics"
        ],

        "props":{
          "orientation": "horizontal"
        }
    },
    ```

5. As we've seen in the introduction, a *Menu Item* can allow the configuration of a Submenu which in turn can have another Menu with its own *Menu Items*. Therefore, create a Submenu for *Major Appliances*, still in `menu.jsonc`, according to the example below:
    ```json
    "vtex.menu@2.x:submenu#major":{
      "children":[
        "vtex.menu@2.x:menu#major"
      ]
    },
    ```

6. Following the format established by the `vtex.menu@2.x:menu#categories\` block, build a secondary *Major Appliances* Menu, declared in the last step in `menu.jsonc`. You must set the `orientation` prop value to `vertical` and configure the following *Menu Items* in the block's children list: `menu-item#refrigerators`, `menu-item#ovens` and `menu-item#washers`; 

7. In addition, create a *Small Appliances* submenu:

    ```json
    "vtex.menu@2.x:submenu#small":{
      "children":[
        "vtex.menu@2.x:menu#small"
      ]
    },
    ```

8. Now build the *Small Appliances* secondary menu in `menu.jsonc`. As with the *Major Appliances*, you must set the `orientation` prop value to `vertical` and configure the following *Menu Items* in the block children list: `menu-item#mixers`, `menu-item#toasters` and `menu-item#coffee`;

9. Based on the previous steps, do the same with *Electronics*: create your Submenu (`vtex.menu@2.x:submenu#electronics`) and secondary Menu. Thereafter, build the latter with the same prop value (`vertical`) and configure the following *Menu Items* in the block's children list: `menu-item#cameras`, `menu-item#laptops` and `menu-item#tvs`. 

:information_source: Remember to access the Menu's [documentação](https://vtex.io/docs/components/all/vtex.menu/) if your have any questions during the activity. 

Expected result:

<img src="https://appliancetheme.vteximg.com.br/arquivos/imagem-menu.png" width="400" />

---

### :no_entry_sign: Are you lost?

Is there any problem with this step? What about sending us a feedback? :pray:

[Submit feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Rodap%C3%A9)

---

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
