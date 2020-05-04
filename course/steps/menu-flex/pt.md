# Menu avançado com Flex Layout

## :sparkles: **Branch:** menuflex

## Introdução 

Como vimos no último passo, um Submenu aceita como *children* qualquer bloco do Store Framework.  

A partir desse entendimento, podemos melhorar a configuração do [Menu](https://vtex.io/docs/components/all/vtex.menu/) feita na atividade anterior, incrementando seu conteúdo com o uso do [**Flex Layout**](https://vtex.io/docs/components/layout/vtex.flex-layout). 

## Atividade

De acordo com o que foi praticado na atividade anterior e o que foi aprendido sobre Flex Layout, vamos aplicar o Flex Layout no Submenu de *Major Appliance*. 

1. No arquivo `menu.jsonc`, remova o block de código em que são definidos `vtex.menu@2.x:submenu#major` e seus filhos:
    ```json
    "vtex.menu@2.x:submenu#major": { 
          "children":[ "vtex.menu@2.x:menu#major" ]
      },
      "vtex.menu@2.x:menu#major": { 
          "children": [ 
              "menu-item#refrigerators", 
              "menu-item#ovens", 
              "menu-item#washers" 
          ], 
          "props": { 
              "orientation": "vertical" 
          }
      },
    ```

2. Crie o arquivo `menu-flex.jsonc` file; `flex-layout.row#major` estará na lista de *children* do bloco `vtex.menu@2.x:submenu#major` e será definido como:

    ```json
    {
      ...
      "flex-layout.row#major": {
        "children": [
          "flex-layout.col#menu",
          "flex-layout.col#img"
        ]
      },
      ...
    }
    ```


3. Agora temos que declarar os blocos definidos em  `flex-layout.row#major`. Para começar, declare o bloco `flex-layout.col#menu` com `vtex.menu@2.x:menu#major` como *children*;
4. Faça o mesmo para o bloco `flex-layout.col#img`, o declarando com `image#menu` e `rich-text#header` como *children* e as seguintes props:

    ```json
    ...
    "props":{
      "paddingRight": 4,
      "horizontalAlign": "right"
    }
    ...
    ```

5. Por último, vamos declarar o `image#menu` passado como *children* no último passo. Para isso, use o código abaixo: 

    ```json
    ...
    "image#menu": {
      "props": {
        "src": "https://appliancetheme.vteximg.com.br/arquivos/menu-washer.jpg",
        "link": {
          "url": "/small-appliances/coffee-makers"
        },
        "alt": "Coffee Makers Collection",
        "maxWidth": "200px"
      }
    }
    ```

:information_source: Lembre-se de acessar a documentação do [Flex Layout](https://vtex.io/docs/components/layout/vtex.flex-layout) e do [Menu](https://vtex.io/docs/components/all/vtex.menu/) caso tenha alguma dúvida durante a atividade.

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/menu-flex.png)

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Menu+avan%C3%A7ado+com+flex+layout) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
