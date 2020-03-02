# Ajustando layout da página de busca

## :sparkles: **Branch:** search2

## Introdução

No último step conhecemos a página de busca e seus principais componentes. Também aprendemos que o layout de search funciona como qualquer outro bloco tendo, portanto, toda a flexibilidade ao seu alcance. Nesse step criaremos algumas linhas e colunas para melhorar a aparência da busca criada.

## Atividade

![image](https://user-images.githubusercontent.com/18701182/69843559-db088200-1246-11ea-8873-8651dd973be9.png)

1. No arquivo `search.jsonc`, remova `total-products.v2` e `order-by.v2` do `search-result-layout.desktop`.

2. Substitua ambos acima por uma linha de topo que inclua os blocos removidos:

```json
...
"flex-layout.row#top": {
  "children": [
    "total-products.v2",
    "order-by.v2"
  ]
}
...
```

3. Remova o `search-content` e o `filter-navigator.v3` do `search-result-layout.desktop` e crie uma linha de resultados;

4. Na linha de resultado coloque outras duas colunas:

```json
{
  ...
  "search-result-layout.desktop": {
    "children": [
      "breadcrumb.search",
      "search-title.v2",
      "flex-layout.row#top",
      "search-fetch-previous",
      "flex-layout.row#results",
      "search-fetch-more"
    ],
    "props": {
      "pagination": "show-more"
    }
  },
  "flex-layout.row#results": {
    "children": [
      "flex-layout.col#filter",
      "flex-layout.col#search"
    ]
  },
  ...
}
```

5. Configure a prop `width` da coluna `filter` para `20%`.

6. Na coluna da esquerda inclua o `filter-navigator.v3` novamente e, na da direita, inclua o `search-content`

Para finalizar, vamos usar o mesmo **Resumo de Produto**(`product-summary`) que usamos na shelf para exibir os resultados de busca.

7. Defina seu `search-content` com os blocos `gallery` e `not-found`:

```json
{
  ...
  "search-content": {
    "blocks": ["gallery", "not-found"]
  }
  ...
}
```

8. Use o `product-summary.shelf` nas props da Gallery:

```json
{
  ...
  "search-content": {
    "blocks": ["gallery", "not-found"]
  },
  "gallery": {
    "blocks": ["product-summary.shelf"]
  }
  ...
}
```

9.  No bloco`product-summary.shelf` que se encontra no arquivo `default.jsonc`, inclua `product-summary-sku-selector` acima de `product-summary-buy-button`.

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/layout/vtex.flex-layout) do Flex Layout caso tenha alguma dúvida durante a atividade.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Ajustando+layout+da+p%C3%A1gina+de+busca) 

----
Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
