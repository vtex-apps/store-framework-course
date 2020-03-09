# Finalizando su pdp

## :sparkles: **Branch:** pdp3

## Introducción 

En este paso, terminaremos de construir nuestra página de producto. Aprenderemos cómo apilar bloques usando [**Stack Layout**](https://vtex.io/docs/app/vtex.stack-layout), cómo sugerir productos similares y cómo personalizar mejor el SKU Selector para productos con imagen de SKU.

Para probar este step, utilice la url del producto `/3-colors-retro-stand-mixer/p` .

![image](https://user-images.githubusercontent.com/18701182/69393219-50a8a700-0cb7-11ea-8718-c5ec0536cbe2.png)

## Stack Layout

`stack-layout` es un tipo de layout que permite apilar bloques sobre otros. Es muy útil cuando desea colocar un badge encima de una imagen o producto. También es útil para componer textos compuestos sobre imágenes (usando `rich-text` e `image`).

![image](https://user-images.githubusercontent.com/18701182/69392819-0a9f1380-0cb6-11ea-8238-1e2e75b9eee9.png)

(En la imagen, un shelf apilado sobre un carrusel :point_up_2:)

En este paso, usaremos `stack-layout` para colocar la marca sobre las imágenes de producto.

## Actividad

Evolucione la página de producto añadiendo los siguientes pasos al archivo `product.jsonc`:

1. Declare un [`shelf.relatedProducts`](https://vtex.io/docs/app/vtex.shelf) debajo de la **línea  principal** de producto.

```json
"store.product": {
  "children": [
    "breadcrumb",
    "flex-layout.row#main",
    "shelf.relatedProducts"
  ]
}
```

:warning: Recuerde, este estante de productos aparece solo en el  producto `/3-colors-retro-stand-mixer/p` .

2. Cambie `product-images` en la columna de la izquierda por una declaración de `stack-layout` .

```json
"flex-layout.col#left": {
  "children": [
    "stack-layout#brand"
  ]
}
```

3. Defina el `stack-layout` y coloque como hijos `product-images` y [`product-brand`](https://vtex.io/docs/components/product-related/vtex.store-components/product-brand).

```json
"stack-layout#brand": {
  "children": [
    "product-images",
    "product-brand"
  ]
}
```

4. Consulte la [documentación](https://vtex.io/docs/components/product/vtex.store-components/product-brand#configuration) para cambiar la forma en que se muestra `product-brand` . Debe hacer que el logo aparezca con una altura de **30** e incluir la prop  `displayMode: "logo"` . 

5. Consulte la [documentación](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) para hacer que el `sku-selector`: 
  - Comience sin ningún SKU seleccionado.
  - Muestre el nombre por variación de SKU.
  - Muestre error si no se selecciona una variación de SKU.
  
  :information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/app/vtex.stack-layout) del Stack Layout si tiene alguna duda durante la actividad.

:information_source: Recuerde utilizar el producto `/3-colors-retro-stand-mixer/p` para probar este paso.

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Finalizando+sua+pdp) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).

