# Flex Layout: cree layouts utilizando el poder de Flexbox

## :sparkles: **Branch:** flexlayout

## Introducción 

[Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) es un paradigma de estructuración de layout creado en el Store Framework para permitir la construcción de layouts complejos. Este paradigma utiliza el concepto de **líneas** y **columnas** para definir la estructura y la colocación deseadas de los bloques en una determinada página.

Hay dos bloques de construcción básicos de cada Flex Layout:

- `flex-layout.row`
- `flex-layout.col`

Si ya está familiarizado con Flexbox utilizado en CSS, Flex Layout debería ser fácil de entender, pues flex-layout.row y flex-layout.col utilizan Flexbox por debajo. 


## Flex Layout

Con Flex Layout es posible crear layouts personalizados, utilizando la estructura de líneas y columnas de Flexbox.

Analizando la documentación del bloque, vemos que puede utilizar cualquier *array*  de bloques como `children` de Flex Layout. Además, siempre debe usar `flex-layout.row` y `flex-layout.col`, **NUNCA** `flex-layout` de forma aislada.

A continuación, tenemos un ejemplo de flex layout compuesto de un `flex-layout.row` con dos *children*: un `info-card` y un `rich-text`:

```json
  "flex-layout.row":{
    "children": [
      "info-card#rethink",
      "rich-text#deletar"
    ]
  },
  
 "info-card#rethink": {
    "props": {
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/utensilios-cozinha-min.png",
      "isFullModeStyle": true,
      "headline": "Time to rethink your kitchen",
      "callToActionText": "Discover",
      "textPosition": "center"
    }
  },
  
  "rich-text#deletar": {
    "props": {
      "text": "I'll be deleted soon"
    }
  }
```

## Actividad

1. Declare el `flex-layout.row` dentro de los  `blocks` del template de `store.home` y declare los bloques propuestos arriba en su archivo `home.jsonc` .
2. Altere los *children* de `flex-layout.row` reemplazando el bloque `rich-text` por una columna `flex-layout.col` .
3. Elimine el bloque de `rich-text` propuesto arriba de su tema.
4. Declare el bloque `flex-layout.col` en su archivo `home.jsonc` con dos componentes de imagen como children: `image#electronics` y `image#major-appliance`, *en este orden*.
5. Defina los bloques `image` con las siguientes props:

```json
...
"image#electronics": {
  "props": {
    "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/electronics_banner___25d69b49f8224b369375e68513b4d593.png",
    "maxWidth": "100%"
  }
},
"image#major-appliance": {
  "props": {
    "src": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/major_appliance_banner___bb10093866a127345ddfbcca3efa5022.png",
    "maxWidth": "100%"
  }
}
```

El resultado obtenido debe ser semejante a este:

![image](https://user-images.githubusercontent.com/12139385/70185681-0c5ed300-16c9-11ea-9260-b88179b508f2.png)

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/layout/vtex.flex-layout) de Flex Layout  si tiene alguna duda durante la actividad.

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Flex+Layout:+crie+layouts+utilizando+o+poder+do+Flexbox) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).


