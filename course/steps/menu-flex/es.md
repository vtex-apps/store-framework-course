# Menú avanzado con Flex Layout

## :sparkles: **Branch:** menuflex

## Introducción 

Como vimos en el último paso, un Submenú acepta como *children* cualquier bloque del Store Framework.

A partir de este entendimiento, podemos mejorar la configuración del [Menú](https://vtex.io/docs/components/all/vtex.menu/) realizada en la actividad anterior, aumentando su contenido utilizando [**Flex Layout**](https://vtex.io/docs/components/layout/vtex.flex-layout). 

## Actividad

De acuerdo con lo que se practicó en la actividad anterior y lo que se aprendió sobre Flex Layout, apliquemos Flex Layout en el Submenú de *Major Appliance*.

1. En el archivo `menu.jsonc`, reemplace `vtex.menu@2.x:menu#major` por `flex-layout.row#major` en la lista de *children* del bloque  `vtex.menu@2.x:submenu#major` .
2. Crea el archivo `menu-flex.jsonc` e luego, defina  el bloque `flex-layout.row#major`: 

```json
...
"flex-layout.row#major": {
  "children": [
    "flex-layout.col#menu",
    "flex-layout.col#img"
  ]
},
```

3. Ahora tenemos que declarar los bloques definidos en  `flex-layout.row#major`. Para comenzar, declare el bloque `flex-layout.col#menu` con `vtex.menu@2.x:menu#major` como *children*.
4. Haga lo mismo para el bloque `flex-layout.col#img`, declarándolo con `image#menu` y `rich-text#header` como *children* y las siguientes props:

```json
...
"props":{
  "paddingRight": 4,
  "horizontalAlign": "right"
 }
...
```

5. Por último, declaremos el  `image#menu` pasado como *children* en el último paso. Para esto, use el siguiente código: 

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
:information_source: Recuerde acceder a la documentación del [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) y del [Menú](https://vtex.io/docs/components/all/vtex.menu/)  si tiene alguna duda durante la actividad. 

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/menu-flex.png)

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Menu+avan%C3%A7ado+com+flex+layout) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
