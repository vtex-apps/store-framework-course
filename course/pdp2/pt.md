# Evoluindo sua página de produto (pdp)

## :sparkles: **Branch:** pdp2

## Introdução

No último passo aprendemos como fazer uma página de produto simples com seus itens mínimos, mas sabemos que o que fizemos está longe de ser uma página de produto ideal, colocaremos outros elementos que vemos com frequência nas páginas de produto de várias lojas.

![image](https://user-images.githubusercontent.com/18701182/69391258-002e4b00-0cb1-11ea-901f-f69d9c0b3062.png)

## Mais de 30 blocos de produto

Na [nossa documentação](https://vtex.io/docs/components/product-related) é possível encontrar mais 30 blocos relacionados a produto. No começo do curso falamos sobre Shelf e seus blocos relacionados, além de na última seção termos visto outros 4 blocos. Neste passo veremos mais 4:

- [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb)
- [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier)
- [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/)
- [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector)

É importante que ao fim do curso, você tome um tempo para explorar nossos componentes, bem como as possibilidades de customização que se tem com estes.

## Atividade

Evolua a página de produto adicionando os outros 4 blocos listados acima da seguinte forma no arquivo `product.jsonc`:

1. Defina um `breadcrumb` logo no início antes da **linha principal** do produto;

```json
"store.product": {
  "children": [
    "breadcrumb",
    "flex-layout.row#main"
  ]
}
```

2. Defina o `product-identifier.product` logo abaixo do `product-name`;
3. Crie uma **linha** logo abaixo do preço com o `sku-selector` e o `product-quantity` como children;

```json
{
  ...
    "children": [ 
      "product-price",
      "flex-layout.row#qty-sku"
    ]
  },
  "flex-layout.row#qty-sku": {
    "children": [
      "sku-selector",
      "product-quantity"
    ]
  },
  ...
}
```

4. Defina `shipping-simulator` logo abaixo da linha com o SKU Selector e o Product Quantity

:information_source: Lembre-se de acessar a documentação do [Breadcrumb](https://vtex.io/docs/app/vtex.breadcrumb), [Product Identifier](https://vtex.io/docs/components/product/vtex.product-identifier), [Product Quantity](https://vtex.io/docs/components/product-related/vtex.product-quantity/) e [SKU Selector](https://vtex.io/docs/components/product/vtex.store-components/sku-selector) caso tenha alguma dúvida durante a atividade.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Evoluindo+sua+p%C3%A1gina+de+produto+(pdp)) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
