# Layout de pestañas 

## :sparkles: **Branch:** tablayout

## Introducción

[Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) es un paradigma de estructuración de layouts creado en Store Framework para permitir la construcción de layouts con pestañas.

En este paradigma tenemos dos containers: `tab-list` y `tab-content` . En cada uno de estos containers, tenemos los ítems que los componen. Dentro de `tab-list`, tenemos los `tab-list.item` .  En `tab-content`, tenemos los `tab-content.item` .

A continuación, veremos un ejemplo de implementación de un tab layout.

En primer lugar, es necesario declarar el block `tab-layout` en el template deseado:

```json
{
  "store.custom#about-us": {
    "blocks": [
      ...
      "tab-layout"
    ]
  }
}

```

Después, es necesario declarar un `tab-list` y un `tab-content` como children del `tab-layout`:

```json
...
"tab-layout": {
  "children": [
    "tab-list",
    "tab-content"
  ]
}
```


Con esto, tenemos estos dos containers como componentes de nuestro `tab-layout` . El siguiente paso es declarar los `tab-list.item`  y `tab-content.item` como children del `tab-list`  y  `tab-content`, respectivamente:

```json
...
"tab-list": {
  "children": [
    "tab-list.item#1",
    "tab-list.item#2"
    ]
}
```

```json
...
"tab-content": {
  "children": [
    "tab-content.item#1",
    "tab-content.item#2"
    ]
}
```

En la siguiente etapa, tenemos que declarar las propiedades de los `tab-list.item` . El siguiente código genera una interfaz de tabs como la de esta imagen:

![](https://appliancetheme.vteximg.com.br/arquivos/tab-list-items.png)

La propiedad `tabId` es muy importante, pues es la llave que conecta el botón de un `tab-list.item` con un `tab-content.item` .

```json
...
"tab-list.item#1": {
  "props": {
    "tabId": "majorAppliances",
    "label": "Major Appliances",
    "defaultActiveTab": true
  }
},
"tab-list.item#2": {
  "props": {
    "tabId": "electronics",
    "label": "Electronics"
  }
}
```

A continuación, declararemos los children y las props de los  `tab-content.item` .

En el array de children, es posible incluir diversos blocks como `rich-text`, `info-card`, `image`, `flex-layout` y etc.

En la prop `tabId`, es necesario incluir los mismos ids declarados en los `tab-list.item` para que el enlace entre la pestaña y el contenido funcione.

```json
...
"tab-content.item#1": {
  "children": [
    "rich-text#1"
  ],
  "props": {
    "tabId": "majorAppliances"
  }
},
"tab-content.item#2": {
  "children": [
    "rich-text#2"
  ],
  "props": {
    "tabId": "electronics"
  }
}
```

Por último, debe declarar las propiedades de su contenido. En nuestro ejemplo, colocamos apenas un `rich-text` en cada `tab-content.item` :

```json
"rich-text#1": {
  "props": {
    "text": "Texto para Major Appliances",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
},
"rich-text#2": {
  "props": {
    "text": "Texto para Electronics",
    "textPosition": "CENTER",
    "font": "t-heading-3"
  }
}
```

## Actividad

En esta actividad, crearemos la estructura simple de un  tab layout, como en la siguiente imagen. Más adelante incluiremos algún contenido para estilizar nuestra página personalizada.


![](https://appliancetheme.vteximg.com.br/arquivos/tarefa-tab-layout.png)

1. En el archivo `about-us.jsonc` creado anteriormente, agregue un `tab-layout#home` al template `store.custom#about-us` .
2. Declare el bloque `tab-layout#home` y agregue como sus children un `tab-list#home` y un `tab-content#home` .
3. Declare un `tab-list#home` y agregue como sus children un `tab-list.item#home1` y un `tab-list.item#home2` .
4. Declare las props del `tab-list.item#home1` de manera que la interfaz muestre el texto "Major Appliances". (Consejo: no olvide que incluir en las props un `tabId` = `"majorAppliances"` y la propiedad `defaultActiveTab` = `true`).
5. Declare las props de `tab-list.item#home2` de manera que la interfaz muestre el texto "Electronics". (Consejo: no se olvide que incluir en las props un `tabId` = `"electronics"`).
6. Ahora, vayamos a la parte del contenido. Declare un `tab-content#home` en su tema y agregue los children `tab-content.item#home1` y `tab-content.item#home2` .
7. En cada `tab-content.item`, declare apenas un `rich-text` como children (por ejemplo, `rich-text#home1` y `rich-text#home2`).
8. Después, incluya una prop `tabId` en cada `tab-content.item` de manera que se produzca el enlace entre el `tab-list` creado anteriormente y `tab-content` .
9. Por último, agregue los `rich-text` y declare sus props  de acuerdo con el siguiente código:
  
  ```json
  "rich-text#home1": {
    "props": {
      "text": "Área do conteúdo da tab-list.item com  tabId = majorAppliances",
      "textPosition": "CENTER",
      "font": "t-heading-3"
    }
  },
  "rich-text#home2": {
    "props": {
      "text": "Área do conteúdo da tab-list.item com  tabId = electronics",
      "textPosition": "CENTER",
      "font": "t-heading-3"
    }
  }
  ```
  
  :information_source:  Recuerde acceder a la documentación [Tab Layout](https://vtex.io/docs/components/layout/vtex.tab-layout) y [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/)  si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Layout+de+abas) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
