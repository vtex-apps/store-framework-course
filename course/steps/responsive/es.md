# Haciendo que su contenido sea responsivo

## :sparkles: **Branch:** responsiveimage

## Introducción

La página inicial de un e-commerce es siempre el primer contacto del cliente con la marca. Por lo tanto, es común que el administrador de la tienda quiera establecer una **comunicación directa** con sus usuarios en este momento estratégico de la navegación.

En el Store Framework, existen algunos componentes que atienden a este escenario, como el [Info Card](https://vtex.io/docs/components/all/vtex.store-components/info-card) visto en los pasos anteriores y el [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/).

Como vimos en el [tercer paso](https://github.com/{{ user.username }}/store-framework/issues/3),  Rich Text es responsable de transformar textos en elementos HTML, con la gran ventaja de leer en [**Markdown**](https://www.markdownguide.org/). Esto da al componente la flexibilidad de aceptar diferentes estructuras de texto, permitiendo al administrador de la tienda construir su comunicación de forma más clara y directa.

## Configurando Rich Text

Así como su funcionalidad, la configuración de Rich Text también es simple.

De la misma forma en que se hizo el "**Hello, world!**", podemos crear un ejemplo de implementación del bloque usando texto escrito en markdown. Por ejemplo:

```json
"rich-text": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},
```

Como se mencionó anteriormente, el uso de Markdown permite flexibilidad al componente. Pero, por otro lado, también puede hacer que su renderización sufra alteraciones de acuerdo con el dispositivo utilizado por el usuario.

Por ejemplo, la frase anterior  ( `# Your Coffee, Your Way \n ### New Coffee Makers Collection` ) puede utilizar un markdown adecuado para desktop, pero no necesariamente para mobile (cuyo tamaño de pantalla es menor).

Para resolver este escenario y hacer que el componente sea más adaptable a otros dispositivos, debemos usar [**Responsive Layout**](https://vtex.io/docs/components/layout/vtex.responsive-layout).


Primeramente, debemos declarar los bloques dentro del template `store.home`:

`"responsive-layout.desktop#desktop"
 "responsive-layout.mobile#mobile"`


En seguida, debemos declarar estos bloques de la siguiente forma:

```json

...

"responsive-layout.desktop#desktop": {
  "children": ["rich-text#desktop"]
},

"responsive-layout.mobile#mobile": {
  "children": ["rich-text#mobile"]
},

"rich-text#desktop": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
},

"rich-text#mobile": {
  "props": {
    "text": "# Your Coffee, Your Way \n ### New Coffee Makers Collection",
    "textPosition": "CENTER",
    "textAlignment": "CENTER"
  }
}
```

Al interpretar el código anterior, perciba cómo se construyen dos configuraciones de Rich Text a  partir del uso de `responsive-layout.desktop#desktop` y `responsive-layout.mobile#mobile` . 

## Actividad

En esta actividad, juguemos un poco con el markdown del [Rich Text](https://vtex.io/docs/components/all/vtex.rich-text/) y aprendamos a usarlo con el componente [Image](https://vtex.io/docs/components/all/vtex.store-components/image). Todo esto usando Responsive Layout, ¡está claro!

### Desktop:

![image](https://user-images.githubusercontent.com/12139385/70152049-414c3500-168b-11ea-8da3-4f4ce0f5fee6.png)

### Mobile:

![image](https://user-images.githubusercontent.com/12139385/70152883-bf5d0b80-168c-11ea-81e0-25be5ed3d5ce.png)

1. Agregue el código propuesto anteriormente en el archivo `home.jsonc` y declare los bloques de `responsive-layout` en el template `store.home` .
2. En `rich-text#mobile`, altere el markdown de la primera frase a `h3` y de la segunda a `h4` .
3. Agregue `image#desktop` como children de `responsive-layout.desktop#desktop` . Haga lo  mismo con `image#mobile`  en `responsive-layout.mobile#mobile` .
4. Declare los siguientes bloques de Image:

```json
"image#desktop": {
  "props": {
    "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1",
    "link": {
      "url": "/small-appliances/coffee-makers"
    } ,
    "alt": "Coffee Makers Collection"
  }
},

"image#mobile": {
  "props": {
    "src": "https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1",
    "link": {
      "url": "/small-appliances/coffee-makers"
    } ,
    "alt": "Coffee Makers Collection"
  }
},
```

5. Analizando las props del [componente Image](https://vtex.io/docs/components/general/vtex.store-components/image), defina la anchura máxima de las dos imágenes como `100%` .

:information_source: Recuerde acceder a la [documentación]((https://vtex.io/docs/components/layout/vtex.responsive-layout)) del Responsive Layout  si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Tornando+seu+conte%C3%BAdo+responsivo) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
