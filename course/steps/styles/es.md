# Estilos globales

## :sparkles: **Branch:** styles

## Introducción

Además de css, que ya se aprendió anteriormente, Store Framework ofrece otro tipo de personalización de diseño, proporcionada a partir de `style.json` .

## Estilización semántica

Todos los bloques de Store Framework utilizan las mismas definiciones semánticas de estilo, definidas usando [Tachyons](https://tachyons.io/). En la práctica, esto significa que en lugar de tener que cambiar todos los fondos de los botones para usar el color que le interesa, apenas tiene que redefinir el color que tiene un `background` de una `action-primary`.

Las personalizaciones a través de `style.json` tienden a tener un impacto mucho mayor que a través de css, pues, en general, mantienen la identidad visual de la tienda a lo largo de todas las páginas siendo necesarios pocos cambios. Por esta razón, siempre que sea posible, se debe utilizar esta herramienta, evitando así overhead de css innecesario.

## Investigando `style.json`

### Colores

<img src="https://user-images.githubusercontent.com/18701182/69848546-24fa6380-1259-11ea-9978-9020222ed77e.png" width="400" />

`styles/configs/style.json` puede ser confuso en un primer momento, por contener todas las definiciones de estilo que usan todos los bloques visuales de Store Framework. Sin embargo, un buen flujo para identificar qué estilos cambiar es mediante la inspección de elementos en el browser.

Por ejemplo, **haga clic derecho en cualquier botón de la tienda y pulse inspeccionar**.

<img src="https://user-images.githubusercontent.com/18701182/69848770-b36ee500-1259-11ea-882a-b2ac5ebdde4d.png" width="400" />

Observando la barra lateral que abrió en Chrome es posible ver una serie de definiciones, una de estas es el color de background del botón (#0f3e99):

<img src="https://user-images.githubusercontent.com/18701182/69849050-77884f80-125a-11ea-87d2-7a148fd56787.png" width="500" />

Además, si inspecciona en el momento en que está solamente pasando el mouse por encima del botón, descubrirá el color de *hover* (#072c75):

![image](https://user-images.githubusercontent.com/18701182/69849774-5f193480-125c-11ea-82e2-f118c8014287.png)

Si buscamos las ocurrencias de ambos colores en `style.json`, los colores que descubrimos son, respectivamente, los usados para `acción-primaria` en `hover-background` y `background`, por ejemplo. Esto nos da una mejor idea de dónde podemos encontrar otras ocurrencias de esta misma definición.

### Tipografía

Para descubrir definiciones semánticas de texto y qué campos son editables, el proceso es el mismo que el anterior, podemos buscar atributos como tamaño de fuente, peso, familia.

En una cabecera nivel 1, por ejemplo, cuando inspeccionamos descubrimos que su tamaño se definió en 3 rem.


![image](https://user-images.githubusercontent.com/18701182/69850262-ab18a900-125d-11ea-8ba8-e6a64874ca04.png)
![image](https://user-images.githubusercontent.com/18701182/69850281-b1a72080-125d-11ea-8c46-302b6a4f9749.png)

## Actividad

<img src="https://user-images.githubusercontent.com/18701182/69850673-8b35b500-125e-11ea-824b-3f3f3235e575.png" width="400" />


1. En el archivo `style.json`, reemplace todas las ocurrencias de los colores que encontramos, cambiando:
  - **#072c75** por **#45a6a3**
  - **#0F3E99** por **#52BAB7**
2. Cambie el tamaño de la fuente heading level 1 para que ahora tenga 2.5 rem de altura.

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Estilos+globais) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar [aquí](https://github.com/{{ user.username }}/store-framework/issues/3).
