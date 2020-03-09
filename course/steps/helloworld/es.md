# Hello, World!

## :sparkles: **Branch:** richtext

## Introducción

Comencemos nuestra jornada a través del clásico **"Hello, World!"**. Para crear algo como esto, necesitamos conocer los bloques del Store Framework y usar uno que nos permita crear textos. Este bloque se llama [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/).

## Rich Text

<img src="https://user-images.githubusercontent.com/18701182/68885337-be6f3480-06f3-11ea-99dd-7d33ad3777cb.png" width="150" />

Rich Text es solo una de las decenas de bloques disponibles en el Store Framework. Es un bloque que parece simple, pero que permite una serie de personalizaciones para crear textos. Para empezar, todo el texto escrito en Rich Text soporta el [lenguaje Markdown](https://www.markdownguide.org/cheat-sheet/), esto hace con que la estilización del texto sea mucho más fácil.

Revisando la [documentación](https://vtex.io/docs/app/vtex.rich-text#blocks-api) del bloque es posible encontrar la especificación técnica. Una de las secciones presentes es la de **Blocks API** en la que puede ver la lista completa de  **propiedades *(props)*** que posee el Rich Text. Las propiedades son el principal **punto de personalización** de un bloque, son las que garantizan que un mismo bloque pueda verse y comportarse de manera completamente diferente, dependiendo de cómo esté configurado.

## Comenzando 

Comencemos, entonces, a personalizar el *home page*. En su tema es posible encontrar un archivo llamado `home.jsonc` en la carpeta `/store/blocks` .  En este archivo se  determina la organización de los bloques que se desea utilizar. El lenguaje para la composición del layout es simple y está basado en [JSON](http://www.json.org/json-pt.html).

En `home.jsonc` se ve un bloque que es estándar en todos los temas: `store.home` . Este bloque determina los bloques hijos que se mostrarán en el *home page*. 

```json
{
  "store.home": {
    "blocks": []
  }
  ...
}
```

Entonces, vamos a usar el Rich Text en su cuerpo:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  }
  ...
}
```

De esta forma, el `store.home` ahora sabe que necesitará renderizar un Rich Text. Sin embargo, aún no hemos especificado cómo se ve este Rich Text. Para esto, necesitamos hacer una **definición de bloque**.

## Definición de bloques

La definición de bloques se debe hacer siempre fuera de cualquier otro bloque, en el nivel de la raíz del archivo JSON.

```json
{
  "store.home": {
    "blocks": [
      "rich-text" <----- Aquí el bloque está siendo usado dentro de otro
    ]
  },
  "rich-text": { <----- Aquí está en la raíz
  }
}
```

En la definición es posible determinar el comportamiento y aspecto de un bloque. Para esto, deben usarse **puntos de personalización**, comenzaremos usando las `props` del Rich Text:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {

    }
  }
}
```

Consulte nuevamente la [documentación](https://vtex.io/docs/app/vtex.rich-text#blocks-api) del  Rich Text y definamos, entonces, las props que usaremos para personalizarlo.

Queremos hacer un simple "Hello, World!", examinando las props vemos una que se llama: `text` [(Text written in markdown language to be displayed)](https://vtex.io/docs/app/vtex.rich-text#blocks-api). Esta es, entonces, la prop que determinará cuál texto será exhibido. 

Incluyendo esta prop tenemos, entonces:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "Hello, World!"
    }
  }
}
```

Revisando la [documentación del Markdown](https://www.markdownguide.org/cheat-sheet/) vemos que para dejarlo en  *cursiva* basta colocar `*` antes y después del texto: 

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*"
    }
  }
}
```

Para centrarlo, podemos agregar la prop `textPosition`  y atribuirle el valor `CENTER`:

```json
{
  "store.home": {
    "blocks": [
      "rich-text"
    ]
  },
  "rich-text": {
    "props": {
      "text": "*Hello, World!*",
      "textPosition": "CENTER"
    }
  }
}
```

## Actividad

Defina un [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) en su home y cree un texto "Hello, World!" en **negrita** y **alineado a la derecha**.

<img src="https://user-images.githubusercontent.com/12139385/70143376-2e7d3480-167a-11ea-8727-2bc6a9422f21.png" width="150" />

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.rich-text/) del Rich Text si tiene alguna duda durante la actividad. 

---

### :no_entry_sign:  ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Hello,+World!) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
