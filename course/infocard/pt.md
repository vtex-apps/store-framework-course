# Info Card: o call to action do Store Framework

## :sparkles: **Branch:** infocard

## Introdução

Uma loja precisa de uma boa *home page* para manter a atenção do usuário, aumentando o tempo de sessão e, portanto, aumentando as chances de conversão. Para que isso seja possível, vários elementos podem ser usados, como: banners promocionais, prateleiras de destaque, conteúdos institucionais.

Criaremos o próximo bloco na *home page* usando um *Call to Action*. No Store Framework, temos um bloco que serve para esse propósito chamado [**Info Card**](https://vtex.io/docs/app/vtex.store-components/Info-Card).

## Info Card

![image](https://user-images.githubusercontent.com/18701182/68480411-7b085800-0213-11ea-9426-31dcb0d0aa7d.png)

Com o Info Card, é possível criar imagens com links e botões (no topo ou na lateral do bloco) que direcionem o fluxo do usuário (*Call to Action*).

Olhando a [documentação](https://vtex.io/docs/app/vtex.store-components/info-card#blocks-api) é possível ver que:

- `isFullModeStyle` define se o *Call to Action (CTA)* deve estar acima do banner;
- `textPosition` definirá a posição do texto;
- `textAlignment` definirá o alinhamento do texto;
- `imageUrl` definirá qual imagem será usada como banner;
- `headline` determinará qual o texto que será usado de título;
- `callToActionMode` possibilitará a escolha do *CTA* como sendo um link ou um botão;
- `callToActionText` definirá o texto do *CTA*;
- `callToActionUrl` determinará o link ao qual será redirecionado;

Ficamos, assim, com as seguintes props:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card"
      ]
    },
    "rich-text": {
      "props": {
        "text": "*Hello, World!*",
        "textPosition": "RIGHT"
      }
    },
    "info-card": {
      "props": {
      "isFullModeStyle": false,
      "textPosition": "right",
      "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
      "headline": "Vintage Pink",
      "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
      "callToActionMode": "button",
      "callToActionText": "Explore",
      "callToActionUrl": "/sale/d",
      "textAlignment": "center"
      }
    }
  }
```

## Instanciando blocos

Pode ser que você tenha se perguntado: 
> "E se eu quiser ter dois Info Cards com aparências diferentes?" 

Isso é possível através da **instanciação de blocos**.

Todos os blocos têm nomes preestabelecidos, mas você pode criar instâncias deles e definir aparências diferentes para um mesmo tipo de bloco. Para fazer isso, basta colocar um `#` com um nome **arbitrário** e que faça sentido depois da definição de cada bloco, por exemplo:

```json
  {
    "store.home": {
      "blocks": [
        "rich-text",
        "info-card#button-right"
      ]
    },
    ...
    "info-card#button-right": {
      "props": {
        "isFullModeStyle": false,
        "textPosition": "right",
        "imageUrl": "https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png",
        "headline": "Vintage Pink",
        "subhead": "Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020.",
        "callToActionMode": "button",
        "callToActionText": "Explore",
        "callToActionUrl": "/sale/d",
        "textAlignment": "center"
      }
    }
  }
```

> **ATENÇÃO:** Durante o curso serão vistos vários `...`, essa parte não deve ser copiada e representa o progresso de steps anteriores

## Atividade

A partir do código acima, no arquivo `home.jsonc`, crie o `info-card#button-left` logo abaixo do infocard `info-card#button-right`. Este novo infocard deve possuir:

 1. O título `Shining chrome`
 2. Um call to action do tipo link com o texto `Go to Collection` no lugar do botao
 3. A imagem `https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png`
 4. O subtítulo `Give your kitchen a cool style adding warm metallic finishes.<br>Available until January 2020.`
 5. O texto posicionado à esquerda da imagem (`textPosition`).

O resultado esperado é semelhante ao apresentado na imagem abaixo:

![image](https://appliancetheme.vteximg.com.br/arquivos/info-card-activity.png)

:information_source: Lembre-se de acessar a documentação do [Info Card](https://vtex.io/docs/app/vtex.store-components/Info-Card) caso tenha alguma dúvida durante a atividade.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Info+Card:+o+call+to+action+do+Store+Framework) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
