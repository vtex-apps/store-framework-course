# Info Card: el call to action de Store Framework

## :sparkles: **Branch:** infocard

## Introducción

Una tienda necesita un buen *home page* para mantener la atención del usuario, aumentando el tiempo de sesión y, por lo tanto, aumentando las posibilidades de conversión. Para que esto sea posible, se pueden usar varios elementos, como: banners promocionales, estantes de destaque, contenidos institucionales.

Crearemos el siguiente bloque en el *home page* usando un *Call to Action*.  En el Store Framework, tenemos un bloque que sirve para este propósito llamado [**Info Card**](https://vtex.io/docs/app/vtex.store-components/Info-Card).

## Info Card

![image](https://user-images.githubusercontent.com/18701182/68480411-7b085800-0213-11ea-9426-31dcb0d0aa7d.png)

Con el Info Card, es posible crear imágenes con enlaces y botones (en la parte superior o lateral del bloque) que dirigen el flujo del usuario (*Call to Action*).

Revisando la [documentación](https://vtex.io/docs/app/vtex.store-components/info-card#blocks-api) es posible ver que:

- `isFullModeStyle` define si el *Call to Action (CTA)* debe estar arriba del banner.
- `textPosition` definirá la posición del texto.
- `textAlignment` definirá el alineamiento del texto.
- `imageUrl` definirá cuál imagen será usada como banner.
- `headline` determinará cuál es el texto que será usado de título.
- `callToActionMode` permitirá elegir el *CTA* como un enlace o un botón.
- `callToActionText` definirá el texto del *CTA*.
- `callToActionUrl` determinará el enlace al que será dirigido.

Así, quedamos con las siguientes props:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card"
      ]
    },
    "rich-text": {
      "props": {
        "text": "*Hello, World!*",
        "textPosition": "RIGHT"
      }
    },
    "info-card": {
      "props": {
      "isFullModeStyle": false,
      "textPosition": "right",
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
      "headline": "Vintage Pink",
      "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
      "callToActionMode": "button",
      "callToActionText": "Explore",
      "callToActionUrl": "/sale/d",
      "textAlignment": "center"
      }
    }
  }
```

## Instanciando bloques

Puede ser que usted se haya preguntado: 
> "¿Y si quiero tener dos Info Cards con apariencias diferentes?" 

Esto es posible a través de la **instanciación de bloques**.

Todos los bloques tienen nombres preestablecidos, pero puede crear instancias de estos y definir apariencias diferentes para el mismo tipo de bloque. Para hacer esto, simplemente coloque un `#` con un nombre **arbitrario** y que tenga sentido después de definir cada bloque, por ejemplo:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card#button-right"
      ]
    },
    ...
    "info-card#button-right": {
      "props": {
        "isFullModeStyle": false,
        "textPosition": "right",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
        "headline": "Vintage Pink",
        "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
        "callToActionMode": "button",
        "callToActionText": "Explore",
        "callToActionUrl": "/sale/d",
        "textAlignment": "center"
      }
    }
  }
```

> **ATENCIÓN** Durante el curso se verán varios `...`, esta parte no debe copiarse y representa el progreso de steps anteriores.

## Actividad

A partir del código anterior, en el archivo `home.jsonc`, cree el `info-card#button-left` justo debajo del infocard `info-card#button-right` . Este nuevo infocard debe contener:

 1. El título `Shining chrome` .
 2. Un call to action del tipo enlace con el texto `Go to Collection` en el lugar del botón.
 3. La imagen `https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png`  .
 4. El subtítulo `Give your kitchen a cool style adding warm metallic finishes.<br>Available until January 2020.`
 5. El texto colocado a la izquierda de la imagen (`textPosition`).

El resultado esperado es semejante al que se presenta en la siguiente imagen:

![image](https://appliancetheme.vteximg.com.br/arquivos/info-card-activity.png)

:information_source:  Recuerde acceder a la documentación del [Info Card](https://vtex.io/docs/app/vtex.store-components/Info-Card)  si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Info+Card:+o+call+to+action+do+Store+Framework) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
