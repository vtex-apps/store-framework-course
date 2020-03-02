# Insertando un Iframe en nuestra página institucional

## :sparkles: **Branch:** iframe

## Introducción

Un *Iframe* es un elemento HTML que permite la incorporación de otra página HTML en la actual. De esta forma, a partir del bloque [**Iframe**](https://vtex.io/docs/components/all/vtex.iframe/) es posible incluir contenidos de otras URLs para que se muestren en nuestra página. Es importante recordar que las URLs renderizadas por Iframe poseen su propio contexto, teniendo un historial de sesión y DOM independientes de su página personalizada.

**ATENCIÓN**: Solo se permiten Iframes dentro de templates de custom pages.

El bloque `iframe` tiene propiedades muy simples:

- `src`: indica cuál URL iframe debe renderizar.
- `width`: anchura del elemento iframe en píxeles.
- `height`: altura del elemento iframe.

A continuación, vemos un ejemplo de implementación del bloque `iframe`:

```json
"store.custom#about-us": {
   "blocks": [
     "flex-layout.row#about-us",
     "iframe"
   ]
 },

"iframe": {
  "props": {
    "src": "http://someURL.com/resource",
    "width": 100,
    "height": 200
  }
}
```

## Actividad

Vamos a mostrar una publicación de Instagram en nuestra tienda:

1. Cambie el label de la pestaña "Electronics" a "Instagram".
2. En el contenido de la pestaña Instagram, borre el  `rich-text` e incluya un bloque `iframe` .
3. En las props del `iframe`, muestre el contenido del link `https://www.instagram.com/p/B37Zfd6FobU/embed` en un  container de 800px de anchura por 1000px de altura.

:information_source: Recuerde acceder a la documentación del [Iframe](https://vtex.io/docs/components/all/vtex.iframe/) si tiene alguna duda durante la actividad. 

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/imagem-iframe.png)

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Inserindo+um+Iframe+na+nossa+p%C3%A1gina+institucional) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
