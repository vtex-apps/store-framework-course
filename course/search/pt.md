# Página de busca 

## :sparkles: **Branch:** search

## Introdução  

![image](https://user-images.githubusercontent.com/18701182/69843114-d6db6500-1244-11ea-82a7-b10880e2ed55.png)

Terminamos de implementar nossa página de produto e seguiremos para a página de busca. Ambas são muito similares no aspecto de terem blocos que são únicos desse contexto. Exploraremos esse bloco de forma desordenada nesse step, somente para entender seus comportamentos e seguiremos para melhorar o layout no próximo passo.  

## Search Layout  

A `store.search`, como os outros templates, também pode ser flexível. Para construir um layout único, é preciso usar um bloco chamado `search-result-layout`.

 ```json
{
  "store.search": {
     "blocks": ["search-result-layout"]
  }
}
```

O `search-result-layout`, por sua vez, deve receber três outros blocos:

- `search-result-layout.desktop`
- `search-result-layout.mobile`
- `search-not-found-layout`

Como você já deve ter percebido, os dois primeiros definem qual layout será exibido no **desktop e no mobile**, respectivamente, e o terceiro define o layout da **página de resultados não encontrados**.

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

No curso, **focaremos** na implementação do **layout de desktop**  

## Blocos de search

A [documentação de Search Result](https://vtex.io/docs/components/search-related/vtex.search-result/) oferece uma boa referência dos blocos que podem ser usados no **contexto de busca**. Nesse step focaremos em tentar exibir os principais:

- Breadcrumb da search (`breadcrumb.search`);
- Título de busca (`search-title.v2`);
- Total de produtos encontrados (`total-products.v2`);
- Ordenação de produtos (`order-by.v2`);
- Botão de buscar mais abaixo (`search-fetch-more`);
- Botão de buscar mais acima (`search-fetch-previous`);
- Filtro de navegação (`filter-navigator.v3`);
- Resultados de busca (`search-content`)

Apesar de serem muitos, todos esses blocos são relativamente simples e funcionam muito bem sem muita necessidade de configurar suas `props`.

## Atividade

![image](https://user-images.githubusercontent.com/18701182/69843046-7f3cf980-1244-11ea-8309-8a26071cd6f0.png)

Copie o código acima no arquivo `search.jsonc` e defina uma `search-result-layout.desktop` que tenha:

- Tipo de paginação como 'Show more' (veja a prop `pagination` [aqui](https://vtex.io/docs/components/search-related/vtex.search-result/#layout-api));

E tenha como filhos, nesta ordem:

- `breadcrumb.search`;
- `search-title.v2`;
- `total-products.v2`;
- `order-by.v2`;
- `search-fetch-previous`;
- `search-content`;
- `filter-navigator.v3`;
- `search-fetch-more`.

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/all/vtex.search-result/) de Search Result caso tenha alguma dúvida durante a atividade.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=P%C3%A1gina+de+busca) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
