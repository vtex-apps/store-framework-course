# Finalizando sua pdp

## :sparkles: **Branch:** pdp3

## Introdução

Neste passo vamos terminar de montar a nossa página de produto. Aprenderemos como empilhar blocos usando o [**Stack Layout**](https://vtex.io/docs/app/vtex.stack-layout), como sugerir produtos similares e como customizar melhor o SKU Selector para produtos com imagem de SKU.

Para testar este step, utilize a url do produto `/3-colors-retro-stand-mixer/p`.

![image](https://user-images.githubusercontent.com/18701182/69393219-50a8a700-0cb7-11ea-8718-c5ec0536cbe2.png)

## Stack Layout

O `stack-layout` é um tipo layout que possibilita que blocos possam ser empilhados sobre outros. É muito útil quando se deseja colocar algum badge em cima de uma imagem ou produto. Também é útil para compor textos compostos sobre imagens (usando um `rich-text` e uma `image`).

![image](https://user-images.githubusercontent.com/18701182/69392819-0a9f1380-0cb6-11ea-8238-1e2e75b9eee9.png)

(Na imagem, uma shelf empilhada sobre um carrossel :point_up_2:)

Neste passo, usaremos o `stack-layout` para colocar a marca sobre as imagens de produto.

## Atividade

Evolua a página de produto adicionando os passos abaixo ao arquivo `product.jsonc`:

1. Declare um [`shelf.relatedProducts`](https://vtex.io/docs/app/vtex.shelf) abaixo da **linha principal** de produto

```json
"store.product": {
  "children": [
    "breadcrumb",
    "flex-layout.row#main",
    "shelf.relatedProducts"
  ]
}
```

:warning: Lembre-se, esta prateleira de produtos aparece somente no produto `/3-colors-retro-stand-mixer/p`.

2. Troque `product-images` na coluna da esquerda por uma declaração de `stack-layout`;

```json
"flex-layout.col#left": {
  "children": [
    "stack-layout#brand"
  ]
}
```

3. Defina o `stack-layout` e coloque como filhos o `product-images` e [`product-brand`](https://vtex.io/docs/components/product-related/vtex.store-components/product-brand);

```json
"stack-layout#brand": {
  "children": [
    "product-images",
    "product-brand"
  ]
}
```

4. Consulte a [documentação](https://vtex.io/docs/components/product/vtex.store-components/product-brand#configuration) para mudar a forma que o `product-brand` é exibido. Você deve fazer o logo aparecer com altura de **30** e incluir a prop `displayMode: "logo"`. 

5. Consulte a [documentação](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) para fazer com que o `sku-selector`: 
  - comece sem nenhum SKU selecionado;
  - mostre o nome por variação de sku;
  - mostre erro se nenhuma variação de sku for selecionada.
  
  :information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/app/vtex.stack-layout) do Stack Layout caso tenha alguma dúvida durante a atividade.

:information_source: Lembre-se de utilizar o produto `/3-colors-retro-stand-mixer/p` para testar este passo.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Finalizando+sua+pdp) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
