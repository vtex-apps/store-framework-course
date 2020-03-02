# Creando templates personalizados

## :sparkles: **Branch:** template

## Introducción

Las tiendas están compuestas de varias páginas diferentes, cada una con layout y contenido específicos. Al crear una tienda desde cero en VTEX IO, algunas páginas estándar con URLs predefinidas ya están disponibles para usted. A continuación, se muestra una lista de algunas de estas páginas estándar:

- `store.home` (Home page).
- `store.product` (Product page).
- `store.search` (Search Results page).
- `store.account` (Client Account page).
- `store.login` (Login page).
- `store.orderplaced` (Order Placed page).

Pero es posible que desee crear un landing page personalizado. En este caso, debe crear una nueva URL y contenido específico para mostrar a los usuarios que acceden a esta ruta.

## Creando un Landing Page

Se necesitan pocos pasos para crear un landing page personalizado:

1. Crear un nuevo template en el tema de su tienda.
2. Crear el nuevo path para acceder a este template.

### Template

Un template define el layout de la página. Por lo tanto, si desea crear una página personalizada, también debe crear un nuevo template en su tema.

Supongamos que desea crear una página sencilla con información sobre su tienda. Dentro de la carpeta `blocks`,  usted puede crear un archivo que contenga el siguiente código, declarando un nuevo template para una página personalizada.

```json
{
 "store.custom#{templatename}": {
     "blocks": [
     ]
  }
}
```

Donde `{templateName}` debe reemplazarse con el nombre identificador del template.

A continuación, debe completar el código con los componentes necesarios para armar el layout. Abajo, vemos un ejemplo de esta implementación:

```json
{
 "store.custom#{templatename}": {
   "blocks": [
     "flex-layout.row#about-us"
   ]
 },
 "flex-layout.row#about-us": {
   "children": [
     "image#about-us",
     "flex-layout.col#text-about-us"
   ]
 },
 "flex-layout.col#text-about-us": {
   "children": [
     "rich-text#about-title",
     "rich-text#about-content"
   ],
       "props": {
     "preventVerticalStretch": true
   }
 },
"rich-text#about-title": {
   "props": {
     "text":
     "# Sobre a FlatFlat"
   }
 },
 "rich-text#about-content": {
   "props": {
     "text":
     " FlatFlat é uma loja de eletro eletrônicos com muita tradição na fabricação de itens modernos e vintage. Nosso objetivo é criar eletrodomésticos que tornem as casas dos nossos clientes interessantes, independente do estilo. Com apenas 2 meses de história, já somos a loja com os produtos mais bonitos de toda a VTEX. Estamos construindo o nosso site nesse momento com o intuito de dar ao nosso cliente uma experiência memorável com a nossa marca!"
   }
 },
 "image#about-us": {
   "props": {
     "src": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-about-us.png",
     "maxHeight": "600px"
   }
 }
}
```

### Path

Ahora que se ha definido en el código del tema de la tienda un nuevo template con el layout de la página, el siguiente paso es definir la ruta (path) de la página que accederá a este layout.

Debemos crear un archivo `routes.json` dentro de la carpeta  `store` de su tema. Después de esto, ingrese el código a continuación:

```json
{
  "store.custom#about-us": {
    "path": "/{URL}"
  }
}
```

Donde `{URL}` es el nombre del camino deseado.

## Actividad

Crearemos una página con información sobre su tienda como el ejemplo de abajo:

![](https://appliancetheme.vteximg.com.br/arquivos/about-us-activity.png)

1. En la carpeta `blocks`, cree un archivo `about-us.jsonc` .
2. Declare un template `store.custom#about-us` en este archivo.
3. Incluya un block "flex-layout.row#about-us" en este template.
4. Después de declarar el `flex-layout.row`, utilice el código del ejemplo dado anteriormente para completar el layout de la página.
5. En la carpeta `store`, cree un archivo `routes.json` .
6. En este archivo, declare un path `/about-us` .
7. Con el código enlazado, acceda a `{workspace}--appliancetheme.myvtex.com/about-us` para ver su nuevo landing page.

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Criando+templates+customizados) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
