# Ajustando layout de página de búsqueda 

## :sparkles: **Branch:** search2

## Introducción 

En el último step conocimos la página de búsqueda y sus componentes principales. También aprendimos que el layout de search funciona como cualquier otro bloque, por lo que tiene toda la flexibilidad a su alcance. En este step crearemos algunas líneas y columnas para mejorar el aspecto de la búsqueda creada.

## Actividad

![image](https://user-images.githubusercontent.com/18701182/69843559-db088200-1246-11ea-8873-8651dd973be9.png)

1. En el archivo  `search.jsonc`, elimine `total-products.v2` y `order-by.v2` del `search-result-layout.desktop` .
 
2. Reemplace los dos anteriores con una línea top que incluya los bloques eliminados:

```json
...
"flex-layout.row#top": {
  "children": [
    "total-products.v2",
    "order-by.v2"
  ]
}
...
```

3. Elimine el  `search-content` y el `filter-navigator.v3` del `search-result-layout.desktop` y cree una línea de resultado.

4. En la línea de resultado, coloque otras dos columnas:

```json
{
  ...
  "search-result-layout.desktop": {
    "children": [
      "breadcrumb.search",
      "search-title.v2",
      "flex-layout.row#top",
      "search-fetch-previous",
      "flex-layout.row#results",
      "search-fetch-more"
    ],
    "props": {
      "pagination": "show-more"
    }
  },
  "flex-layout.row#results": {
    "children": [
      "flex-layout.col#filter",
      "flex-layout.col#search"
    ]
  },
  ...
}
```

5. Configure la prop `width` de la columna `filter` en `20%`.

6. En la columna de la izquierda incluya el `filter-navigator.v3` nuevamente y, en la de la derecha, incluya el `search-content` .

Para finalizar, usaremos el mismo **Resumen de Produto** (`product-summary`) que usamos en el  shelf para mostrar los resultados de búsqueda.

7. Defina su `search-content` con los bloques `gallery` y `not-found`:

```json
{
  ...
  "search-content": {
    "blocks": ["gallery", "not-found"]
  }
  ...
}
```

8. Use el `product-summary.shelf` en las props de Gallery:

```json
{
  ...
  "search-content": {
    "blocks": ["gallery", "not-found"]
  },
  "gallery": {
    "blocks": ["product-summary.shelf"]
  }
  ...
}
```

9.  En el bloque `product-summary.shelf` que se encuentra en el archivo `default.jsonc`, incluya `product-summary-sku-selector` arriba de `product-summary-buy-button` .

:information_source:  Recuerde acceder a la [documentación](https://vtex.io/docs/components/layout/vtex.flex-layout) del Flex Layout  si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Ajustando+layout+da+p%C3%A1gina+de+busca) 

----
Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
