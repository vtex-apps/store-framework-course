# Prateleira de produtos

## :sparkles: **Branch:** shelf

## Introdução

O próximo bloco que vamos utilizar é a Shelf, a nossa prateleira para uma coleção de produtos. Nessa sessão vamos aprender a renderizar e configurar essa prateleira na home da nossa loja.

## Shelf

Analisando a documentação da [Shelf](https://vtex.io/docs/app/vtex.shelf), vemos que é possível configurar qual coleção de produtos queremos mostrar através das props `category`, `specificationFilters` ou `collection`, de acordo com os produtos cadastrados no catálogo.

As demais props são para configuração na maneira com que os items são mostrados. É importante notar que o componente `shelf` sempre pede que block do tipo `product-summary` faça parte da sua composição. Veja a [documentação](https://vtex.io/docs/components/product/vtex.product-summary) do bloco product-summary para entender mais sobre seu funcionamento

Abaixo, temos o exemplo da implementação de uma Shelf:

```json
{
  "store.home": {
    "blocks": [
      ...
      "shelf"
    ]
  },
  ...
  "shelf": {
    "blocks": ["product-summary.shelf"],
    "props": {
      "category": 1,
      "orderBy": "OrderByTopSaleDESC",
      "paginationDotsVisibility": "desktopOnly",
      "productList": {
        "maxItems": 10,
        "itemsPerPage": 5,
        "minItemsPerPage": 1,
        "scroll": "BY_PAGE",
        "arrows": true,
        "titleText": "Top sellers"
      }
    }
  },
  "product-summary.shelf": {
    "children": [
      "product-summary-image",
      "product-summary-add-to-list-button",
      "product-summary-name",
      "product-rating-inline",
      "product-summary-space",
      "product-summary-price",
      "product-identifier.summary",
      "product-summary-buy-button"
    ]
  }
}
```

## Atividade

1. No arquivo `home.jsonc`, declare um componente `shelf` no template `store.home`
2. Dentro da pasta blocks, crie um arquivo `shelf.jsonc`
3. No arquivo `shelf.jsonc`, defina o bloco `shelf` com todas as props propostas no exemplo acima
4. Altere o número máximo de itens exibidos para `8`
5. Altere o número de itens por página para `4`

Obs.: É importante notar que o bloco `product-summary.shelf` já está declarado dentro do arquivo `default.jsonc`. Por este motivo, não foi necessário declará-lo nesta atividade.

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/app/vtex.shelf) da Shelf caso tenha alguma dúvida durante a atividade.

O resultado final esperado deve ser semelhante a este:
![image](https://user-images.githubusercontent.com/12139385/70187041-1209e800-16cc-11ea-85b8-80162239ce1d.png)

## Observação

Caso esteja usando uma conta VTEX própria, verifique se a categoria `1` está ativa e funcional no ambiente que está usando.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Prateleira+de+produtos) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
