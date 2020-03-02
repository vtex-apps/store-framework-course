# Advanced menu with Flex Layout

## :sparkles: **Branch:** menuflex

## Introduction 

As we've seen in the last step, a Submenu accepts any Store Framework block as *child*.

With this in mind, we can improve the previous activity's [Menu](https://vtex.io/docs/components/all/vtex.menu/) configuration, adding to its content by using [**Flex Layout**](https://vtex.io/docs/components/layout/vtex.flex-layout). 

## Activity

According to what we did in the last activity and what was learned about Flex Layout, let's apply Flex Layout to the *Major Appliances* submenu. 

1. In the `menu.jsonc` file, replace `vtex.menu@2.x:menu#major` with `flex-layout.row#major` in the *children* list pertaining to the `vtex.menu@2.x:submenu#major` block;
2. Create a new file `menu-flex.jsonc` and then define the following `flex-layout.row#major` block: 

```json
...
"flex-layout.row#major": {
  "children": [
    "flex-layout.col#menu",
    "flex-layout.col#img"
  ]
},
```

3. Now, let's declare the blocks defined in `flex-layout.row#major`. To start, declare the `flex-layout.col#menu` block, having `vtex.menu@2.x:menu#major` as *child*;
4. Do the same for the `flex-layout.col#img` block, declaring it as `image#menu`, while `rich-text#header` is declared as *child*, in addition to the following props:

```json
...
"props":{
  "paddingRight": 4,
  "horizontalAlign": "right"
 }
...
```

5. Lastly, let's declare the former `image#menu` as *child* in this last step, using the code below:

```json
...
"image#menu": {
  "props": {
    "src": "https://appliancetheme.vteximg.com.br/arquivos/menu-washer.jpg",
    "link": {
      "url": "/small-appliances/coffee-makers"
    },
    "alt": "Coffee Makers Collection",
    "maxWidth": "200px"
  }
}
```

:information_source: Remember to access the documentation of both [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) and [Menu](https://vtex.io/docs/components/all/vtex.menu/) if you have any questions during the activity.

Expected result:
![](https://user-images.githubusercontent.com/18701182/73485057-365b0b80-4381-11ea-9c0b-4fad693f829a.png)

----

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
