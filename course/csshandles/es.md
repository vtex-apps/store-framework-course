# CSS Handles y el poder de la personalización de bloques

## :sparkles: **Branch:** csshandles

## Introducción 

Si echa un vistazo a su tienda actual, podrá ver que todos los componentes tienen estilos parecidos,  incluso si usted no ha realizado ninguna personalización.

Todos estos, incluyendo el [Info Card](https://vtex.io/docs/components/all/vtex.store-components/info-card) recién configurado, comparten **valores preestablecidos** para fuente, color de fondo, color principal, formato de los botones, etc.

Esto se debe al `style.json`, archivo responsable de declarar valores genéricos de personalización para toda tienda del Store Framework.

![style](https://user-images.githubusercontent.com/52087100/69889933-60854400-12d2-11ea-8d11-97aef0f3bf83.png)

Para crear una identidad propia para los componentes de su tienda, puede sobrescribir estos valores a través de **personalizaciones de CSS**.

Analizando el [recipe](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) para personalizaciones de tienda por CSS, percibimos que serán necesarios algunos pasos para aplicar el estilo propio que usted desea, como:

1. Cree un nuevo archivo dentro de la carpeta `CSS` con el nombre `vtex.{AppName}.css`.
2. Utilice el CSS Handle del componente que se personalizará dentro de este archivo siguiendo el formato a continuación:

```css
.{CSSHandle} {
    {PropriedadeDeCSS}: {ValorDesejado};
    {PropriedadeDeCSS}: {ValorDesejado};
}
```

3. En ausencia de CSS Handles, aplicar CSS Selectors permitidos, como es el caso de  `:global(vtex-{componentName})`.
4. Para aplicar CSS en un bloque específico y no a todos los bloques de aquel tipo, se utiliza el recurso de blockClass, que aparece junto a los handles de css al inspeccionar el código. Los blockClass deben ser declarados como una prop en el bloque en cuestión, y luego hacer referencia en el archivo de estilo como se muestra a continuación:

```css
.{CSSHandle}--{blockClass} {
    {PropriedadeDeCSS}: {ValorDesejado};
    {PropriedadeDeCSS}: {ValorDesejado};
}
```

## Personalizando el Info Card

Para descubrir los CSS Handles de un componente, como el Info Card, basta con acceder a la sección `Customization` de su documentación.

De acuerdo con la descripción de CSS Handles y con el recipe de personalizaciones de tienda por CSS, pudimos implementar un ejemplo de Info Card personalizado, cambiando su título y la configuración del botón call to action al agregar el siguiente código al archivo `vtex.store-components.css` dentro de `/styles/css`:

```css
.infoCardHeadline {
    font-family: serif;
    font-size: 2.25rem;
    font-weight: normal;
    color: gray;
    border: 2px solid black;
    padding: 24px;
}

.infoCardCallActionContainer :global(.vtex-button) {
    color: white;
    background-color: gray;
    border: transparent;
}

.infoCardCallActionContainer :global(.vtex-button):hover {
    color: gray;
    background-color: blue;
    border: transparent;
}
```

Puedes comprobar el efecto de los cambios realizados ejecutando el comando  `vtex link`.

![image](https://user-images.githubusercontent.com/12139385/70145123-2626f880-167e-11ea-97f4-65aaacba74c3.png)

En seguida, añadiremos un estilo específico al info card Vintage.  Para empezar, agregue la prop `blockClass` en el `info-card#button-right`  como se muestra a continuación:

```json
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
    "textAlignment": "center",
    "blockClass": "vintage"     //  <------------
  }
}
```
Y entonces declare un `background-color` para este info card específico en su archivo de css:

```css
.infoCardContainer--vintage {
  background-color: #EDCFD1
}
```
Observe el efecto alcanzado al enlazar su app.

![image](https://user-images.githubusercontent.com/12139385/70145268-743bfc00-167e-11ea-9dca-070d444b16b5.png)

## Actividad

1.  En el archivo `vtex.store-components.css`, copie el código anterior para usarlo en el archivo CSS de su tema, siguiendo el [recipe](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) sobre personalizaciones de tienda por CSS. 
2. Basado en los Handles del [**Info Card**](https://vtex.io/docs/components/all/vtex.store-components/info-card), defina el ancho máximo (`max-width`) de todos los info cards en `1260px`, el margin en `0 auto` y el padding en  `0`.
3. Cambie el color del título del componente a `black` .
4. Coloque el título en negrita (`bold`) .
5. Cambie el color de fondo del botón durante el hover a `white` .
6. Paralelamente al blockClass `vintage`, aplique un nuevo block class llamado `metal` en el info card `info-card#button-left` y aplique el color de fondo de `#e1e1e1` en este. 

![image](https://user-images.githubusercontent.com/12139385/70145478-ead8f980-167e-11ea-8951-5d4b98e6d5c0.png)

---


### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=CSS+handles+e+o+poder+da+customiza%C3%A7%C3%A3o+de+blocos) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
