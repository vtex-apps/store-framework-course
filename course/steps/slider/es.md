# Carrusel de bloques 

## :sparkles: **Branch:** slider-layout

## Introducción

Slider Layout, como Flex Layout, es una forma flexible de crear  un nuevo bloque a partir de otros bloques usando `children`. Este permite que se creen sliders de otros bloques, como `info-card`s e incluso `flex-layout`s, por ejemplo.

Utilizaremos Slider Layout para convertir un conjunto de info-cards en un slider.

## Slider Layout

Analizando la [documentación](https://vtex.io/docs/components/layout/vtex.slider-layout), vemos que usted  puede utilizar cualquier _array_ de bloques  como `children`, así como en el Flex Layout.

A continuación, sigue un ejemplo de implementación de un slider-layout con dos `info-card`:

```json

  "slider-layout#home": {
    "children": ["info-card#1", "info-card#2"],
    "props": {
      "autoplay": {
        "timeout": 5000,
        "stopOnHover": false
      }
    }
  },
  
  "info-card#1": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  },
  
  "info-card#2": {
    "props": {
      "imageUrl": "https://images.unsplash.com/photo-1524185962737-ea7c028a12cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "isFullModeStyle": true,
      "headline": "Black Friday",
      "callToActionText": "Subscribe",
      "textPosition": "center"
    }
  }

```

## Actividad

En esta actividad, crearemos un slider de marcas para nuestro sitio web:

![](https://appliancetheme.vteximg.com.br/arquivos/brand-slider.png)

1. En el archivo `home.jsonc`, declare el bloque `slider-layout#home` al template `store.home` .

2. Cree un archivo llamado `slider-layout.jsonc` dentro de la carpeta `/store/blocks` .

3. En este archivo, basado en el código anterior, reemplace los `info-card` declarados como children de `slider-layout#home` y agregue 6 [componentes de imagen](https://vtex.io/docs/components/general/vtex.store-components/image) `image` como children. Utilice el formato `image#brand1`, `image#brand2` (...) `image#brand6` para declarar los componentes.

4. Declare una prop `src` específica para cada `image#brand` definido. Utilice las siguientes URLs para cada una:
   1.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square1.png`
   2.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square2.png`
   3.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square3.png`
   4.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square4.png`
   5.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square5.png`
   6.  `https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square6.png`
   
5. Por último, usted debe utilizar la propriedad de `autoplay` en el bloque `slider-layout#home`. Haga que el slide cambie automáticamente cada **7 segundos y que se detenga cuando el usuario pase el mouse encima del slide**.

:information_source: Recuerde acceder a la documentación del [Slider Layout](https://vtex.io/docs/components/layout/vtex.slider-layout) e [Image](https://vtex.io/docs/components/general/vtex.store-components/image) si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Carrossel+de+blocos) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
