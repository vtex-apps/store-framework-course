# Evolucionando su página de producto (pdp)

## :sparkles: **Branch:** pdp2

## Introducción

En el último paso, aprendimos cómo hacer una página de producto simple con sus ítems mínimos, pero sabemos que lo que hicimos está lejos de ser una página de producto ideal, pondremos otros elementos que a menudo vemos en las páginas de producto de varias tiendas.

![image](https://user-images.githubusercontent.com/18701182/69391258-002e4b00-0cb1-11ea-901f-f69d9c0b3062.png)

## Más de 30 bloques de producto

En [nuestra documentación](https://vtex.io/docs/components/product-related) es posible encontrar 30 bloques más relacionados con el producto. Al comienzo del curso hablamos sobre Shelf y sus bloques  relacionados, además de haber visto 4 bloques más en la última parte. En este paso veremos 4 más:  

- [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb)
- [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier)
- [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/)
- [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector)

Es importante que al final del curso, usted se tome un tiempo para explorar nuestros componentes, así como las posibilidades de personalización que se tiene con estos.

## Actividad

Evolucione la página de producto agregando los otros 4 bloques listados anteriormente de la siguiente forma en el archivo  `product.jsonc`:

1. Defina un `breadcrumb` al inicio, antes de la **línea principal** del producto.

```json
"store.product": {
  "children": [
    "breadcrumb",
    "flex-layout.row#main"
  ]
}
```

2. Defina el `product-identifier.product` debajo del `product-name` .
3. Cree una **línea** debajo del precio con el  `sku-selector` y el `product-quantity` como children.

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

4. Defina `shipping-simulator` debajo de la row con el SKU Selector y el Product Quantity.

:information_source: Recuerde acceder a la documentación del [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb), [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier), [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/) y [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) si tiene alguna duda durante la actividad. 


---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Evoluindo+sua+p%C3%A1gina+de+produto+(pdp)) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
