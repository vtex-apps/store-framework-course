# Explorando el poder de rich text

## :sparkles: **Branch:** richtextmarkdown

## Introducción 

Como hemos visto, Markdown es un lenguaje de marcado amigable que se puede convertir fácilmente a HTML. En esta lección, veremos cómo puede usar este lenguaje en nuestro bloque [**Rich Text**](https://vtex.io/docs/components/all/vtex.rich-text/) para crear textos interesantes.

## Rich Text con Markdown

Para incluir textos en el bloque de `rich-text`, es necesario utilizar la prop `text`:

```json
  "rich-text#home1": {
    "props": {
      "text": "Meu texto",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

La prop `text` acepta el formato de markdown. Por lo tanto, si usted desea escribir su texto utilizando este lenguaje, su código debería quedar semejante a este:

```json
```json
  "rich-text#home1": {
    "props": {
      "text": "# Meu título h1 \n Escreva aqui um parágrafo \n ## Meu título h2 \n Escreva aqui seu segundo parágrafo \n Inclua aqui uma lista \n - Item 1 \n - Item 2 \n - Item3",
      "textPosition": "LEFT",
      "textAlignment": "LEFT"
    }
```

**CONSEJO**: Utilice siempre el comando `\n` para saltar líneas al utilizar markdown en la prop `text` .

Otras propiedades del componente `rich-text` pueden encontrase en la  [documentación oficial del Store Framework](https://vtex.io/docs/components/all/vtex.rich-text/).

## Actividad

1. Dentro del archivo `about-us.jsonc`, cambie el texto de `tab-list.item#home1` para que aparezca un "Sobre" en la primera pestaña.

2. En el contenido `rich-text` asociado a esta pestaña, utilice el siguiente texto:

```
# Nossa História \n ### Nascemos de uma hackathon interna da VTEX! \n Isso mesmo. A primeira Hackatheme (hackathon de temas de loja) da VTEX teve 3 finalistas. Um deles foi a FlatFlat, essa loja que vocês estão acessando agora. A FlatFlat foi criada pelos engenheiros Afonso Praça e Sávio Muniz, pelos designers Lucas Falcão e Augusto Barbosa, e pelo diretor de novos negócios Maurício Baum. Como a loja foi criada por profissionais com os mais diversos backgrounds, o resultado ficou óbvio: foram finalistas com o layout mais legal dentre os participantes.
```

3. Coloque el título y el subtítulo en negrita.

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/rich-text-solution.png)

:information_source: Recuerde acceder a la [documentación](https://vtex.io/docs/components/all/vtex.rich-text/) del Rich Text si tiene alguna duda durante la actividad. 

---

### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Explorando+o+poder+do+rich+text) 

----

Si aún tiene alguna duda sobre cómo enviar su respuesta, puede revisar el siguiente enlace:

`https://github.com/{{user.username}}/store-framework/issues/2`
