# Inserindo um Iframe na nossa página institucional

## :sparkles: **Branch:** iframe

## Introdução

Um *Iframe* é um elemento HTML que permite a incorporação de uma outra página HTML à atual. Dessa forma, a partir do bloco [**Iframe**](https://vtex.io/docs/components/all/vtex.iframe/) é possível embutir conteúdos de outras URLs para serem exibidos em nossa página. É importante lembrar que as URLs renderizadas pelo Iframe possuem um contexto próprio, tendo histórico de sessão e DOM independentes da sua página customizada.

**ATENÇÃO**: Iframes só são permitidos dentro de templates de custom pages.

O bloco `iframe` tem propriedades bem simples:

- `src`: indica qual URL o iframe deve renderizar
- `width`: largura do elemento iframe em pixels
- `height`: altura do elemento iframe

Abaixo, vemos um exemplo de implementação do bloco `iframe`:

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

## Atividade

Vamos exibir um post de Instagram em nossa loja:

1. Troque a label da aba "Electronics" para "Instagram";
2. No conteúdo da aba Instagram, apague o `rich-text` e inclua um bloco `iframe`;
3. Nas props do `iframe`, exiba o conteúdo do link `https://www.instagram.com/p/B37Zfd6FobU/embed` num container de 800px de largura por 1000px de altura.

:information_source: Lembre-se de acessar a documentação do [Iframe](https://vtex.io/docs/components/all/vtex.iframe/) caso tenha alguma dúvida durante a atividade.

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/imagem-iframe.png)

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Inserindo+um+Iframe+na+nossa+p%C3%A1gina+institucional) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
