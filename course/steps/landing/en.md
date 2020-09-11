# Building a custom search landing page 

## :sparkles: **Branch:** landing

## Introduction

In the previous step, we looked at creating a custom template. In scenarios involving promotions and commemorative dates, it's quite common to create special *landing pages*. 

## Custom searches

We saw that the search deduces what is needed from the given context. On a custom page however, the context doesn't exist and you need to state which *query* should be performed to get the results. All this is made possible by the `search-result-layout.customQuery`.

## Query schema

The query schema is one of the [custom query search result props](https://vtex.io/docs/app/vtex.search-result#layout-api) that allows you to control the search that the *landing page* should run. To know more the query schema's possibilities, read through its [documentation](https://vtex.io/docs/app/vtex.search-result#queryschema).

## Activity

![image](https://user-images.githubusercontent.com/18701182/69890324-d1792b80-12d3-11ea-911d-194d2cb778c8.png)

1. Define a new path (`store.custom#landing`) in `routes.json`;

    ```json
    "store.custom#landing": {
      "path": "/landing"
    }
    ```

2. Create a new file called `search-landing.jsonc` in the blocks folder;
3. Create a new custom template entitled `store.custom#landing`;
4. Define the [`image`](https://vtex.io/docs/components/all/vtex.store-components/image) block as one of this template's blocks. This block must have `minWidth` props of 100% and an image of your choosing. 
5. Repeat the same with `search-result-layout.customQuery`:

    ```json
    {
      "store.custom#landing": { 
        "blocks": [
          "image#landingbanner", 
          "search-result-layout.customQuery"
        ]
      }
    }
    ```

6. Define the `search-result-layout.customQuery` block as the [*querySchema* prop](https://vtex.io/docs/app/vtex.search-result#queryschema) that:
  - Sorts by latest release date;
  - Hides unavailable items;
  - Displays a max of 8 items per page;
  - Uses "Camera" as *query*.

7. At this point, you're probably not seeing the block on the landing page. This is due to the fact that we have not add a block to the search-result-layout.customQuery yet. You can do that by adding the following lines:
    ```diff
    // store/blocks/search-landing.jsonc
    {
        ...
        "search-result-layout.customQuery": {
            "props": {
                "querySchema": {
                    "orderByField": "OrderByReleaseDateDESC",
                    "hideUnavailableItems": true,
                    "maxItemsPerPage": 8,
                    "queryField": "Camera",
                    "mapField": "ft",
                    "skusFilter": "ALL_AVAILABLE"
                }
            },
    +       "blocks": [
    +         "search-result-layout.desktop"
    +       ]
        }
    }
    ```
---

### :no_entry_sign: Are you lost?

Is there any problem with this step? What about sending us a feedback? :pray:

[Submit feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Rodap%C3%A9)

---

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
