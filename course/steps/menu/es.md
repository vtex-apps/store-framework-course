# Menú

## :sparkles: **Branch:** menu

## Introducción

Con el Header ya configurado e implementado, ahora vamos a agregarle el [**Menú**](https://vtex.io/docs/components/all/vtex.menu/).

La configuración del Menú es un paso importante en la construcción del tema, ya que es el bloque responsable de la **navegación** del usuario en su tienda.

Debido a su función y relevancia, el Menú tiene una estructura jerárquica compleja, que involucra *Menu Items*, Submenús y, a partir de este último, cualquier bloque del Store Framework (como otros Menús y *Menu Items*).

A continuación, puede ver una imagen que ejemplifica la estructura del bloque Menú en la práctica:

![menu](https://user-images.githubusercontent.com/52087100/70004800-5cf9f300-1546-11ea-81fc-369e4bb58ed5.png)

## Configurando el Menú

Si se compara con las de algunos bloques, la configuración del menú puede parecer más difícil debido a su estructura de menús, ítems de menú y submenús. 

Pero el Menú no necesita necesariamente ser configurado siguiendo este escenario más complejo. 

A continuación, podemos ver un ejemplo de una implementación básica del bloque, que contiene apenas 3 *Menu Items*:

```json
{
  "vtex.menu@2.x:menu#categories": {
    "children": [
      "menu-item#major-appliances",
      "menu-item#small-appliances",
      "menu-item#electronics"
    ],

    "props":{
      "orientation": "horizontal"
    }
  }
},
```

## Actividad

En esta actividad, entenderemos mejor sobre la configuración del [Menú](https://vtex.io/docs/components/all/vtex.menu/) y la jerarquía dentro de este a partir de la construcción de *Menu Items* y Submenús.

1. En el archivo `header.jsonc`, agregue `header-row#menu`  como último ítem en la lista de children del bloque `header-layout.desktop` (configurado en la [actividad anterior]) para que el Menú pueda ser renderizado por el Header de la tienda.
2. Copie y peque el siguiente código para declarar el bloque `header-row#menu`:

```json
"header-row#menu": {
  "children": [
    "header-spacer",
    "vtex.menu@2.x:menu#categories",
    "header-spacer"
  ]
},
```

3. También debemos preocuparnos con el Menú en el layout de otros dispositivos, como mobile. Por eso, agregue [`drawer`](https://vtex.io/docs/components/all/vtex.store-drawer/) como primer ítem de children del bloque `header-row#main-mobile` .

4. Pegue el siguiente código en el archivo `menu.jsonc` para renderizar horizontalmente los 3 ítems de su Menú principal:

```json
{
 "vtex.menu@2.x:menu#categories": {
   "children": [
     "menu-item#major-appliances",
     "menu-item#small-appliances",
     "menu-item#electronics"
   ],

   "props":{
     "orientation": "horizontal"
   }
},
```

5. Como vimos en la introducción, un *Menu Item* puede permitir la configuración de un Submenú dentro de este que, a su vez, puede tener otro Menú con *Menu Items*. Cree entonces el Submenú de *Major Appliance*, aún en el archivo `menu.jsonc`, de acuerdo con el siguiente ejemplo: 

```json
"vtex.menu@2.x:submenu#major":{
  "children":[
    "vtex.menu@2.x:menu#major"
  ]
},
```

6. Siguiendo el formato establecido por el bloque `vtex.menu@2.x:menu#categories`, construya el Menú secundario de *Major Appliances* declarado en el último paso en el archivo `menu.jsonc` . Usted debe definir `vertical` como valor de la prop `orientation` y configurar los siguientes *Menu Items* en la lista de children del bloque:  `menu-item#refrigerators`, `menu-item#ovens` y `menu-item#washers` .

7. Cree también el Submenú de *Small Appliances*:

```json
 "vtex.menu@2.x:submenu#small":{
   "children":[
     "vtex.menu@2.x:menu#small"
   ]
},
```

8. Construya ahora el Menú secundario de *Small Appliances* en el archivo `menu.jsonc` . Así como se hizo para *Major Appliance*, usted debe definir `vertical` como valor de la prop `orientation` y configurar los siguientes *Menu Items* en la lista de children del bloque:  `menu-item#mixers`, `menu-item#toasters` y `menu-item#coffee` .

9. Basado en los pasos anteriores, haga lo mismo para *Eletronics*: cree su Submenú (`vtex.menu@2.x:submenu#electronics`) y Menú secundario. Después, construya este último con el mismo valor de prop (`vertical`) y configure los siguientes *Menu Items* en la lista de children del bloque: `menu-item#cameras`, `menu-item#laptops` y `menu-item#tvs` . 

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.menu/) del Menú si tiene alguna duda durante la actividad. 

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/imagem-menu.png)

---

### :no_entry_sign:  ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Menu) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
