# Cabeçalho da loja

## :sparkles: **Branch:** header

## Introdução

Neste passo, aprenderemos a configurar o primeiro componente de toda loja: o [**Header**](https://vtex.io/docs/components/all/vtex.store-header/).

O Header tem um papel muito importante na página inicial da loja, pois ele é o responsável por abrigar outros blocos essenciais para a navegação do usuário, como a barra de busca e o menu.

Header Desktop:
![image](https://user-images.githubusercontent.com/12139385/70191371-420ab880-16d7-11ea-9d28-fa2f184870ce.png)

Header Mobile:
![image](https://user-images.githubusercontent.com/12139385/70191413-6797c200-16d7-11ea-9401-754942f5d9a9.png)

## Configurando o Header

O bloco do Header é **responsivo**, ou seja, ele pode ser configurado para se adaptar a diferentes dispositivos, como desktop e mobile.

Abaixo, podemos conferir um exemplo de implementação:

```json
{
  "header": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },
  "header.full": {
    "blocks": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },

  "header-layout.desktop": {
    "children": [
      "header-row#notification",
      "header-row#main"
    ]
  },

  "header-layout.mobile": {
    "children": [
      "header-row#notification",
      "header-row#main-mobile",
      "header-row#search"
    ]
  },
}
```

## Atividade

Agora, vamos configurar do zero um Header para a página inicial da sua loja, com barra de notificação e busca, logo, carrinho e login. O Menu não será configurado nesse momento, pois trabalharemos com ele mais a fundo na próxima atividade.

Para a implementação do Header com todos esses blocos, levaremos em consideração o código exemplo apresentado acima. Assim, será possível construir um Header responsivo, adaptável para usuários de desktop e mobile.

1. Diferentemente do comportamento de outros blocos, o [Header](https://vtex.io/docs/components/all/vtex.store-header/) não precisa ser declarado dentro um template do seu tema, pois de toda forma ele será renderizado em todas as páginas da loja. Neste exercício, vamos declarar os blocos do `header` no arquivo `header.jsonc`, que deve ser criado na pasta `store/blocks`.
2. Declare o seguinte bloco em seguida:

```json
"header-row#notification": {
  "children": [
    "header-spacer",
    "rich-text#header",
    "header-spacer"
  ]
},
```

3. Com base no bloco acima, construa o `header-row#main` com as seguintes *children*: `logo`, `header-spacer`, `search-bar`, `minicart` e `login`;
4. Ainda no bloco `header-row#main`, declare as props `inverted`, `sticky` e `fullWidth` com os valores `true`, `true` e `false`, respectivamente;
5. Copie e cole o código abaixo para configurar o bloco header para mobile, da mesma forma que fizemos para o desktop anteriormente:

```json
"header-row#main-mobile": {
  "children": [
    "logo",
    "header-spacer",
    "minicart",
    "login"
  ],

  "props": {
    "sticky": true,
    "inverted":true
  }
},

"header-row#search": {
  "children": [
    "search-bar"
  ],
  "props": {
    "sticky": true
  }
},

```

6. Declare o bloco responsável por definir o login e o logo da loja, usando o código apresentado abaixo. Eles serão usados pelo Header dos dois dispositivos;

```json
"login":{
  "props": {
    "showIconProfile": true,
    "iconLabel": "Login"
  }
},

"logo":{
  "props": {
    "url": "https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/flatflat___6081e50402943bcb11bc45a8e613aa72.png"
  }
},
```

7. Por último, precisamos declarar o componente principal da linha do Header de notificação (`"header-row#notification"`): o Rich Text;

```json
"rich-text#header": {
  "props": {
    "text": "**Free Shipping on orders over $50**",
    "textPosition": "CENTER"
  }
}
```

8. Seguindo a recipe sobre [**customizar ícones de loja**](https://vtex.io/docs/recipes/style/customizing-your-stores-icons), substitua o ícone padrão usado na barra de busca e no carrinho pelos exemplificados abaixo.

- Novo ícone da barra de busca:

```html
<path fill="currentColor" d="M4,13H1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V13z"></path> <path fill="currentColor" d="M15,3H1C0.448,3,0,2.552,0,2v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0C16,2.552,15.552,3,15,3z"></path> <path fill="currentColor" d="M4,8H1C0.448,8,0,7.552,0,7v0c0-0.552,0.448-1,1-1h3V8z"></path> <path fill="currentColor" d="M15.707,13.293l-2.274-2.274C13.785,10.424,14,9.74,14,9c0-2.206-1.794-4-4-4S6,6.794,6,9 s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l2.274,2.274L15.707,13.293z M10,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S11.103,11,10,11z"></path>
```

- Novo ícone do carrinho:

```html
<path fill="currentColor" d="M15,6h-1.4l-2.7-5.4C10.6,0.1,10-0.1,9.6,0.1C9.1,0.4,8.9,1,9.1,1.4L11.4,6H4.6l2.3-4.6 c0.2-0.5,0-1.1-0.4-1.3C6-0.1,5.4,0.1,5.1,0.6L2.4,6H1c-1.1,0-1.1,1-0.9,1.4l3,8C3.2,15.7,3.6,16,4,16h8c0.4,0,0.8-0.3,0.9-0.6l3-8 C16.1,7,16,6,15,6z"></path>
```

Ao concluir o passo 8, os novos ícones de barra de busca e carrinho devem estar renderizados na sua loja da seguinte forma:

![new-store-icons](https://user-images.githubusercontent.com/52087100/69972450-652f3f80-1500-11ea-93b0-c9a652622840.png)

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/all/vtex.store-header/) do Header caso tenha alguma dúvida durante a atividade.

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Cabe%C3%A7alho+da+loja) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
