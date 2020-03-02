# Página de producto

## :sparkles: **Branch:** pdp1

## Introducción

Una vez terminada la página inicial de nuestra tienda, comenzamos un nuevo template de la tienda: la página de producto. Las páginas de producto son probablemente el template que más tienen bloques diferentes, lo que las hace extremadamente personalizables y flexibles.

## MVP

Así que construyamos una página de producto mínima donde solo tengamos lo esencial:

- **imágenes**
- **precio**
- **nombre**
- **botón de comprar**

![image](https://user-images.githubusercontent.com/18701182/69375575-6b632780-0c87-11ea-85d2-41e1e858a33e.png)

## Bloques de producto

La mayoría de los bloques de producto, a diferencia de los de contenido, tienen un contexto en el que están insertados. Todo esto hace que estos bloques sean un poco plug-n-play: colocar un `product-images` en la página de producto, automáticamente redenrizará las imágenes del producto de la página, tal como se hace con el precio y el nombre.

Sin embargo, nada de esto significa que estos bloques sean poco personalizables, como veremos más adelante.

## Actividad

Construya una página de producto usando los bloques [`product-images`](https://vtex.io/docs/components/product-related/vtex.store-components/product-images), [`product-price`](https://vtex.io/docs/components/product-related/vtex.store-components/product-price), [`product-name`](https://vtex.io/docs/components/product-related/vtex.store-components/product-name) y [`buy-button`](https://vtex.io/docs/app/vtex.store-components/buy-button) en el archivo `product.jsonc` declarado dentro de la carpeta `store/blocks` . Esperamos que en la estructura tengamos:  

1. Una **línea** en `store.product` .

```json
{
 "store.product": {
    "children": [
      "flex-layout.row#main"
    ]
  }
}
```

2. Dentro de la **línea** debe haber **dos columnas**.

```json
"flex-layout.row#main": { 
  "props": { 
    "marginTop": 6
  },
  "children": [
    "flex-layout.col#left",
    "flex-layout.col#right"
  ]
}
```

3. Dentro de la columna de la izquierda debe haber un [`product-images`](https://vtex.io/docs/components/all/vtex.store-components/product-images).

```json
"flex-layout.col#left": {
  "children": [
    "product-images"
  ]
}
```

4. Dentro de la columna derecha debe estar el [`product-name`](https://vtex.io/docs/components/all/vtex.store-components/product-name), [`product-price`](https://vtex.io/docs/components/all/vtex.store-components/product-price) y [`buy-button`](https://vtex.io/docs/app/vtex.store-components/buy-button).

Además, queremos que:

1. La columna derecha esté verticalmente alineada al centro (vea las props `verticalAlign` y `preventVerticalStretch` en la [documentación de Flex Layout Column](https://vtex.io/docs/app/vtex.flex-layout#flex-layoutcol)).
2. El [`product-price`](https://vtex.io/docs/components/all/vtex.store-components/product-price#configuration) muestre el ahorro total y el precio de lista (`showSavings` y `showListPrice`).

:information_source: Recuerde acceder a la documentación del  [`product-images`](https://vtex.io/docs/components/product-related/vtex.store-components/product-images), [`product-price`](https://vtex.io/docs/components/product-related/vtex.store-components/product-price), [`product-name`](https://vtex.io/docs/components/product-related/vtex.store-components/product-name) y [`buy-button`](https://vtex.io/docs/app/vtex.store-components/buy-button)  si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=P%C3%A1gina+de+produto) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
