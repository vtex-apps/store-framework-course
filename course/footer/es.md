# Pie de Página

## :sparkles: **Branch:** footer

## Introducción 

En este paso, vamos a aprender cómo crear un componente que comúnmente se considera poco importante, pero que es fundamental para dar al usuario una buena experiencia: el [footer](https://vtex.io/docs/components/all/vtex.store-footer/).

Pocos usuarios se desplazan hasta el footer. Sin embargo, esa parte que llega puede estar buscando información que normalmente se encuentra en este bloque, como enlaces a medios sociales y medios de pago aceptados por la tienda. También puede contener páginas personalizadas que dirigen al sitio de oportunidades laborales de la empresa, soporte al cliente y menús de categorías.

FOTO Footer

## Configurando el Footer

El bloque de Footer, al igual que el bloque de Header, es responsivo. Esto significa que puede configurarse para que se adapte a diferentes dispositivos, como desktop y mobile.

A continuación, podemos ver un ejemplo de implementación de Footer para desktop:

```json
{
  "footer": {
    "blocks": ["footer-layout.desktop"]
  },
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-1-desktop"
    ]
  }
}
```

## Actividad

Ahora, vamos a configurar un footer para la página inicial de su tienda, teniendo en cuenta el código de ejemplo presentado anteriormente para  desktop y mobile.

No vamos a implementar el menú en esta actividad, porque ya fue visto en el contexto de Header. Cubriremos los casos de medios de pago aceptados y redes sociales de la tienda.

1. En el archivo `footer.jsonc`, copie el código anterior para utilizarlo en su tema.
2. Declare el siguiente bloque en seguida:

```json
  "flex-layout.row#footer-1-desktop": {
    "children": [
      "flex-layout.col#footer-left-desktop",
      "flex-layout.col#footer-right-desktop"
    ],
    "props": {
      "blockClass": "footer-row",
      "paddingTop": 7,
      "paddingBottom": 7
    }
  }
```

3. Basado en el bloque anterior, construya el `flex-layout.col#footer-left-desktop` con el siguiente children: `accepted-payment-methods` .

4. Ahora construya el bloque `accepted-payment-methods` con los siguientes medios de pago: `MasterCard`, `Visa` y `Diners Club` . Solo para mostrar un poco más de conocimiento, descubra también cómo mostrar los medios de pago en  colores en esta [documentación](https://vtex.io/docs/components/all/vtex.store-footer/).

5. En el próximo paso vamos a usar el bloque `social-networks` para mostrar las redes sociales de nuestra tienda. Consulte en la documentación cómo hacer esto. E implemente como children del bloque `flex-layout.col#footer-right-desktop` . Queremos mostrar `Facebook`, `Instagram` y `Twitter` .

6. Ahora, haga que los logos de las redes sociales aparezcan con colores, como lo menciona la [documentación](https://vtex.io/docs/components/all/vtex.store-footer/) del footer.

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.store-footer/) del  Footer si tiene alguna duda durante la actividad. 

Resultado esperado:
![image](https://user-images.githubusercontent.com/12139385/70229436-00105f80-1735-11ea-9c26-9f16a3820f52.png)

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Rodap%C3%A9) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
