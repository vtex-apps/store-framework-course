# Construyendo un landing personalizado de búsqueda 

## :sparkles: **Branch:** searchlanding

## Introducción 

En el step anterior, pudo aprender un poco más sobre cómo crear un template personalizado. Es muy común que, en escenarios de promoción y fechas conmemorativas, sea necesario crear *landing pages* especiales. 

## Búsquedas personalizadas 

Vimos que la búsqueda infiere lo que necesita por el contexto en que se incluye. En una página personalizada, sin embargo, el contexto no existe y es necesario definir cuál *query* se debe realizar para inferir los resultados. Todo esto es posible a través de `search-result-layout.customQuery` .

## Query schema

Query schema es una de las [props de search result custom query](https://vtex.io/docs/app/vtex.search-result#layout-api) 
con el que puede controlar la búsqueda que debería hacer nuestro *landing page*. Para conocer todas las posibilidades de query schema, vea su [documentación aquí](https://vtex.io/docs/app/vtex.search-result#queryschema).

## Actividad

![image](https://user-images.githubusercontent.com/18701182/69890324-d1792b80-12d3-11ea-911d-194d2cb778c8.png)

1. Defina una ruta nueva (`store.custom#landing`) en el archivo `routes.json` .

```json
"store.custom#landing": {
  "path": "/landing"
}
```

2. Cree un nuevo archivo en la carpeta de bloques llamado `search-landing.jsonc` .
3. Cree un nuevo template custom `store.custom#landing` .
4. Defina el bloque [`image`](https://vtex.io/docs/components/all/vtex.store-components/image) como uno de los bloques de este template. Este bloque debe tener props `minWidth` de 100% y una imagen de su elección.
5. Haga lo mismo con `search-result-layout.customQuery`:

```json
{
  "store.custom#landing": { 
    "blocks": [
      "image#landingbanner", 
      "search-result-layout.customQuery"
    ]
  }
}
```

6. Defina el bloque `search-result-layout.customQuery` con [prop de *querySchema*](https://vtex.io/docs/app/vtex.search-result#queryschema) que:
  - Ordene por fecha de lanzamiento de forma descendente.
  - Esconda ítems indisponibles.
  - Muestre un máximo de 8 ítems por página.
  - Use como *query* "Blue Top Retro Camera".
  - Use como mapField `ft` .

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Construindo+uma+landing+customizada+de+busca) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
