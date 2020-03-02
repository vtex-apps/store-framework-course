# Menu

## :sparkles: **Branch:** menu

## Introdução

Com o Header já configurado e implementado, vamos agora adicionar nele o [**Menu**](https://vtex.io/docs/components/all/vtex.menu/).

A configuração do Menu é um passo importante na construção do tema, pois é ele o bloco é responsável pela **navegação** do usuário na sua loja. 

Por conta da sua função e relevância, o Menu possui uma estrutura hierárquica complexa, envolvendo *Menu Items*, Submenus e, a partir desse último, qualquer bloco do Store Framework (como outros Menus e *Menu Items*). 

Abaixo, você pode conferir uma imagem exemplificando a estrutura do bloco Menu na prática:

![menu](https://user-images.githubusercontent.com/52087100/70004800-5cf9f300-1546-11ea-81fc-369e4bb58ed5.png)

## Configurando o Menu

Se comparada com as de alguns blocos, a configuração do Menu pode parecer mais difícil por conta da sua estrutura de menus, itens de menu e submenus. 

Mas o Menu não necessariamente precisa ser configurado seguindo esse cenário mais complexo. 

Abaixo, podemos conferir um exemplo de implementação básica do bloco, contendo apenas 3 *Menu Items*:

```json
{
  "vtex.menu@2.x:menu#categories": {
    "children": [
      "menu-item#major-appliances",
      "menu-item#small-appliances",
      "menu-item#electronics"
    ],

    "props":{
      "orientation": "horizontal"
    }
  }
},
```

## Atividade

Nesta atividade, entenderemos melhor sobre a configuração do [Menu](https://vtex.io/docs/components/all/vtex.menu/) e a hierarquia existente dentro dele a partir da construção de *Menu Items* e Submenus.  

1. No arquivo `header.jsonc`, adicione `header-row#menu`  como o último item na lista de children do bloco `header-layout.desktop` (configurado na [atividade anterior]) para que o Menu possa ser renderizado pelo Header da loja;
2. Copie e cole o código abaixo para declarar o bloco `header-row#menu` :

```json
"header-row#menu": {
  "children": [
    "header-spacer",
    "vtex.menu@2.x:menu#categories",
    "header-spacer"
  ]
},
```

3. Também precisamos nos preocupar com Menu no layout de outros dispositivos, como mobile. Por isso, adicione [`drawer`](https://vtex.io/docs/components/all/vtex.store-drawer/) como a primeira de children do bloco `header-row#main-mobile`;

4. Cole o código abaixo  no arquivo `menu.jsonc` para renderizar horizontalmente os 3 itens do seu Menu principal:

```json
{
 "vtex.menu@2.x:menu#categories": {
   "children": [
     "menu-item#major-appliances",
     "menu-item#small-appliances",
     "menu-item#electronics"
   ],

   "props":{
     "orientation": "horizontal"
   }
},
```

5. Como vimos na introdução, um *Menu Item* pode permitir a configuração de um Submenu dentro dele que, por sua vez, pode ter consigo outro Menu com *Menu Items*. Crie então o Submenu de *Major Appliance*, ainda no arquivo `menu.jsonc`, de acordo com o exemplo abaixo: 

```json
"vtex.menu@2.x:submenu#major":{
  "children":[
    "vtex.menu@2.x:menu#major"
  ]
},
```

6. Seguindo o formato estabelecido pelo bloco `vtex.menu@2.x:menu#categories`, construa o Menu secundário de *Major Appliances* declarado no último passo no arquivo `menu.jsonc`. Você deve definir `vertical` como valor da prop `orientation` e configurar os seguintes *Menu Items* na lista de children do bloco:  `menu-item#refrigerators`, `menu-item#ovens` e `menu-item#washers`; 

7. Crie também o Submenu de *Small Appliances*:

```json
 "vtex.menu@2.x:submenu#small":{
   "children":[
     "vtex.menu@2.x:menu#small"
   ]
},
```

8. Construa agora o Menu secundário de *Small Appliances* no arquivo `menu.jsonc`. Assim como feito para *Major Appliance*, você deve definir `vertical` como valor da prop `orientation` e configurar os seguintes *Menu Items* na lista de children do bloco:  `menu-item#mixers`, `menu-item#toasters` e `menu-item#coffee`;

9. Com base nos passos anteriores, faça o mesmo para *Eletronics*: crie o seu Submenu (`vtex.menu@2.x:submenu#electronics`) e Menu secundário. Depois, construa esse último com o mesmo valor de prop (`vertical`) e configure o os seguintes *Menu Items* na lista de children do bloco: `menu-item#cameras`, `menu-item#laptops` e `menu-item#tvs`. 

:information_source: Lembre-se de acessar a [documentação](https://vtex.io/docs/components/all/vtex.menu/) do Menu caso tenha alguma dúvida durante a atividade.

Resultado esperado:
![](https://appliancetheme.vteximg.com.br/arquivos/imagem-menu.png)

---

### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Menu) 

----

Se ainda tiver dúvida sobre como enviar sua resposta, você pode rever [aqui](https://github.com/{{ user.username }}/store-framework/issues/3).
