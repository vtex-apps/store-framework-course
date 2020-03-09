# Cabecera de la tienda 

## :sparkles: **Branch:** header

## Introducción

En este paso, aprenderemos a configurar el primer componente de toda tienda: el [**Header**](https://vtex.io/docs/components/all/vtex.store-header/).

El Header tiene un papel muy importante en la página inicial de la tienda, porque es responsable de albergar otros bloques esenciales para la navegación del usuario, como la barra de búsqueda y el menú.

Header Desktop:
![image](https://user-images.githubusercontent.com/12139385/70191371-420ab880-16d7-11ea-9d28-fa2f184870ce.png)

Header Mobile:
![image](https://user-images.githubusercontent.com/12139385/70191413-6797c200-16d7-11ea-9401-754942f5d9a9.png)

## Configurando el Header

El bloque del Header es **responsivo**; es decir, puede ser configurado para adaptarse a diferentes dispositivos, como desktop y mobile.

A continuación, podemos ver un ejemplo de implementación:

```json
{
  "header": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },
  "header.full": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },

  "header-layout.desktop": {
    "children": [
      "header-row#notification",
      "header-row#main"
    ]
  },

  "header-layout.mobile": {
    "children": [
      "header-row#notification",
      "header-row#main-mobile",
      "header-row#search"
    ]
  },
}
```

## Actividad

Ahora, vamos a configurar desde cero un Header para la página inicial de su tienda, con barra de notificación y búsqueda, logo, carrito y login. El Menú no se configurará en este momento, porque trabajaremos con este más a fondo en la próxima actividad.

Para la implementación del Header con todos estos bloques, tendremos en cuenta el código de ejemplo presentado anteriormente. Así, será posible construir un Header responsivo, adaptable para usuarios de desktop y mobile.

1. A diferencia del comportamiento de otros bloques, el [Header](https://vtex.io/docs/components/all/vtex.store-header/)  no tiene que declararse dentro de un template de su tema, pues de todos modos será renderizado en todas las páginas de la tienda. En este ejercicio, vamos a declarar los bloques del `header` en el archivo `header.jsonc`, que debe crearse en la carpeta `store/blocks` .
2. Luego, declare el siguiente bloque:

```json
"header-row#notification": {
  "children": [
    "header-spacer",
    "rich-text#header",
    "header-spacer"
  ]
},
```
3. Basado en el bloque anterior, construya el `header-row#main` con los siguientes  *children*: `logo`, `header-spacer`, `search-bar`, `minicart` y `login` .
4. Todavía en el bloque  `header-row#main`, declare las props `inverted`, `sticky` y `fullWidth` con los valores  `true`, `true` y `false`, respectivamente.
5. Copie y pegue el siguiente código para configurar el bloque header para mobile, de la misma forma en que lo hicimos anteriormente para desktop:

```json
"header-row#main-mobile": {
  "children": [
    "logo",
    "header-spacer",
    "minicart",
    "login"
  ],

  "props": {
    "sticky": true,
    "inverted":true
  }
},

"header-row#search": {
  "children": [
    "search-bar"
  ],
  "props": {
    "sticky": true
  }
},

```

6. Declare el bloque responsable por definir el login y el logo de la tienda, usando el código presentado a continuación. Estos serán utilizados por el Header de ambos dispositivos.

```json
"login":{
  "props": {
    "showIconProfile": true,
    "iconLabel": "Login"
  }
},

"logo":{
  "props": {
    "url": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/flatflat___6081e50402943bcb11bc45a8e613aa72.png"
  }
},
```

7. Por último, debemos declarar el componente principal de la línea del Header de notificación (`"header-row#notification"`): el Rich Text.

```json
"rich-text#header": {
  "props": {
    "text": "**Free Shipping on orders over $50**",
    "textPosition": "CENTER"
  }
}
```

8. Siguiendo el recipe sobre [**personalizar íconos de tienda**](https://vtex.io/docs/recipes/style/customizing-your-stores-icons), reemplace el ícono predeterminado utilizado en la barra de búsqueda y el carrito por los que se muestran a continuación.

- Nuevo ícono de la barra de búsqueda:


```html
<path fill="currentColor" d="M4,13H1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V13z"></path> <path fill="currentColor" d="M15,3H1C0.448,3,0,2.552,0,2v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0C16,2.552,15.552,3,15,3z"></path> <path fill="currentColor" d="M4,8H1C0.448,8,0,7.552,0,7v0c0-0.552,0.448-1,1-1h3V8z"></path> <path fill="currentColor" d="M15.707,13.293l-2.274-2.274C13.785,10.424,14,9.74,14,9c0-2.206-1.794-4-4-4S6,6.794,6,9 s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l2.274,2.274L15.707,13.293z M10,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S11.103,11,10,11z"></path>
```

- Nuevo ícono del carrito:

```html
<path fill="currentColor" d="M15,6h-1.4l-2.7-5.4C10.6,0.1,10-0.1,9.6,0.1C9.1,0.4,8.9,1,9.1,1.4L11.4,6H4.6l2.3-4.6 c0.2-0.5,0-1.1-0.4-1.3C6-0.1,5.4,0.1,5.1,0.6L2.4,6H1c-1.1,0-1.1,1-0.9,1.4l3,8C3.2,15.7,3.6,16,4,16h8c0.4,0,0.8-0.3,0.9-0.6l3-8 C16.1,7,16,6,15,6z"></path>
```

Al concluir el paso 8, los nuevos íconos de la barra de búsqueda y el carrito deben estar renderizados en su tienda de la siguiente forma:

![new-store-icons](https://user-images.githubusercontent.com/52087100/69972450-652f3f80-1500-11ea-93b0-c9a652622840.png)

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.store-header/) del  Header si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Cabe%C3%A7alho+da+loja) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
