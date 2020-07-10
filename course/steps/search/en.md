# Search page

## :sparkles: **Branch:** search

## Introduction  

![image](https://user-images.githubusercontent.com/18701182/69843114-d6db6500-1244-11ea-82a7-b10880e2ed55.png)

We've just implemented our product page and are moving on to the search page. Both are similar in the sense that both have blocks that are unique in this context. We will explore this block in a disorderly fashion for now, just to get an idea of its behavior. Then, we'll look at improving the layout.   

## Search Layout  

Same as other templates, `store.search` can also be flexible. To build a unique layout you'll need to use a block called `search-result-layout`.

 ```json
{
  "store.search": {
     "blocks": ["search-result-layout"]
  }
}
```

The `search-result-layout`, in turn, must receive 3 other blocks:

- `search-result-layout.desktop`
- `search-result-layout.mobile`
- `search-not-found-layout`

As you've already notice, the first two define which layout will be displayed on **desktop and mobile** respectively, while the third defines the layout of the **no results found search page**.

 ```json
{
  "store.search": {
     "blocks": ["search-result-layout"]
  },
  "search-result-layout": {
     "blocks": [
        "search-result-layout.desktop",
        "search-result-layout.mobile",
        "search-not-found-layout"
     ]
  }
}
```

In the course, we'll **focus** on **desktop layout** implementation.  

## Search blocks

The [search results documentation](https://vtex.io/docs/components/search-related/vtex.search-result/) offers a good reference for blocks that can be use in a **search context**. This step will focus on highlighting the main ones:

- Search breadcrumb (`breadcrumb.search`);
- Search title (`search-title.v2`);
- Total products found (`total-products.v2`);
- Product ordering (`order-by.v2`);
- Show more results button (`search-fetch-more`);
- Show previous results button (`search-fetch-previous`);
- Navigation filter (`filter-navigator.v3`);
- Search results (`search-content`)

Although quite many, all these blocks are relatively simple and work very well without an express need to configure their  `props`.

## Activity

![image](https://user-images.githubusercontent.com/18701182/69843046-7f3cf980-1244-11ea-8309-8a26071cd6f0.png)

Copy the code above in `search.jsonc` and define a `search-result-layout.desktop` having the following, in the order mentioned below:

- `breadcrumb.search`;
- `search-title.v2`;
- `total-products.v2`;
- `order-by.v2`;
- `search-fetch-previous`;
- `search-content`;
- `filter-navigator.v3`;
- `search-fetch-more`.

:information_source: Remember to go through the Search Result [documentation](https://vtex.io/docs/components/all/vtex.search-result/) if you have any questions during the activity.

---

### :no_entry_sign: Are you lost?

Is there any problem with this step? What about sending us a feedback? :pray:

[Submit feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Rodap%C3%A9)

---

If you're still unsure as to how to send your answers, click [here](https://github.com/{{ user.username }}/store-framework/issues/3).
