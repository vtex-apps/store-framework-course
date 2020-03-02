# Estante de productos

## :sparkles: **Branch:** shelf

## Introducción

El siguiente bloque que usaremos es Shelf, nuestro estante para una colección de productos. En esta sesión aprenderemos cómo renderizar y configurar este estante en el home de nuestra tienda.

## Shelf

Analizando la documentación de [Shelf](https://vtex.io/docs/app/vtex.shelf), vemos que es posible  configurar cuál colección de productos queremos mostrar a través de las props `category`, `specificationFilters` o `collection`, de acuerdo con los productos registrados en el  catálogo.

Las demás props son para configuración en la manera en que se muestran los ítems. Es importante tener en cuenta que el  componente `shelf` siempre pide que un bloque del tipo `product-summary` forme parte de su composición. Consulte la [documentación](https://vtex.io/docs/components/product/vtex.product-summary) del bloque product-summary para entender más sobre su funcionamiento.

A continuación, tenemos el ejemplo de la implementación de un  Shelf:

```json
{
  "store.home": {
    "blocks": [
      ...
      "shelf"
    ]
  },
  ...
  "shelf": {
    "blocks": ["product-summary.shelf"],
    "props": {
      "category": 1,
      "orderBy": "OrderByTopSaleDESC",
      "paginationDotsVisibility": "desktopOnly",
      "productList": {
        "maxItems": 10,
        "itemsPerPage": 5,
        "minItemsPerPage": 1,
        "scroll": "BY_PAGE",
        "arrows": true,
        "titleText": "Top sellers"
      }
    }
  },
  "product-summary.shelf": {
    "children": [
      "product-summary-image",
      "product-summary-add-to-list-button",
      "product-summary-name",
      "product-rating-inline",
      "product-summary-space",
      "product-summary-price",
      "product-identifier.summary",
      "product-summary-buy-button"
    ]
  }
}
```

## Actividad

1. En el archivo `home.jsonc`, declare un componente `shelf` en el template `store.home` .
2. Dentro de la carpeta blocks, cree un archivo `shelf.jsonc` .
3. En el archivo `shelf.jsonc`, defina el bloque `shelf` con todas las props propuestas en el ejemplo anterior.
4. Altere el número máximo de ítems mostrados a `8`.
5. Altere el número de ítems por página a `4`.

Nota: Es importante tener en cuenta que el bloque `product-summary.shelf`  ya está declarado dentro del archivo `default.jsonc` . Por esta razón, no fue necesario declararlo en esta actividad.

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/app/vtex.shelf) del Shelf si tiene alguna duda durante la actividad. 

El resultado final esperado debe ser semejante a este:
![image](https://user-images.githubusercontent.com/12139385/70187041-1209e800-16cc-11ea-85b8-80162239ce1d.png)

## Solucionar problemas

Si estas utilizando su propia cuenta VTEX, asegúrese de que la categoría `1` sea funcional y activa.

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Prateleira+de+produtos) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
