# Página de búsqueda  

## :sparkles: **Branch:** search

## Introducción  

![image](https://user-images.githubusercontent.com/18701182/69843114-d6db6500-1244-11ea-82a7-b10880e2ed55.png)

Hemos terminado de implementar nuestra página de producto y pasaremos a la página de búsqueda. Ambas son muy similares en el sentido de que tienen bloques que son exclusivos de este contexto. Exploraremos este bloque de forma desordenada en este step, solo para entender su comportamiento, y continuaremos mejorando el diseño en el siguiente paso.

## Search Layout  

`store.search`, como otros templates, también puede ser flexible. Para construir un layout único, es necesario usar un bloque llamado `search-result-layout` .

 ```json
{
  "store.search": {
     "blocks": ["search-result-layout"]
  }
}
```

`search-result-layout`, a su vez, debe recibir otros tres bloques:

- `search-result-layout.desktop`
- `search-result-layout.mobile`
- `search-not-found-layout`

Como usted ya debe haber notado, los dos primeros definen cuál layout se mostrará en **desktop y mobile**, respectivamente, y el tercero define el layout de la **página de resultados no encontrados**.


 ```json
{
  "store.search": {
     "blocks": ["search-result-layout"]
  },
  "search-result-layout": {
     "blocks": [
        "search-result-layout.desktop",
        "search-result-layout.mobile",
        "search-not-found-layout"
     ]
  }
}
```


En el curso, **nos centraremos** en implementar **layout de desktop** 


## Bloques de search

La [documentación de Search Result](https://vtex.io/docs/components/search-related/vtex.search-result/) ofrece una buena referencia de los bloques que pueden usarse en el **contexto de búsqueda**. En este step nos centraremos en tratar de mostrar los principales:

- Breadcrumb de search (`breadcrumb.search`) .
- Título de búsqueda (`search-title.v2`) .
- Total de productos encontrados (`total-products.v2`) .
- Orden de productos (`order-by.v2`) .
- Botón de búsqueda más abajo (`search-fetch-more`) .
- Botón de búsqueda más arriba (`search-fetch-previous`) .
- Filtro de navegación (`filter-navigator.v3`) .
- Resultados de búsqueda (`search-content`) .

Aunque son muchos, todos estos bloques son relativamente simples y funcionan muy bien sin mucha necesidad de configurar sus `props` .

## Actividad

![image](https://user-images.githubusercontent.com/18701182/69843046-7f3cf980-1244-11ea-8309-8a26071cd6f0.png)

Copie el código anterior en el archivo `search.jsonc` y defina un `search-result-layout.desktop` que tenga:

- Tipo de paginación como 'Show more' (vea la prop `pagination` [aquí](https://vtex.io/docs/components/search-related/vtex.search-result/#layout-api)).

Y tenga como hijos, en este orden:

- `breadcrumb.search` 
- `search-title.v2` 
- `total-products.v2` 
- `order-by.v2` 
- `search-fetch-previous` 
- `search-content` 
- `filter-navigator.v3` 
- `search-fetch-more` 

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.search-result/) del Search Result si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=P%C3%A1gina+de+busca) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
