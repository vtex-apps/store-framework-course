# Configurações básicas

<a href="https://bit.ly/setup-vtex" target="_blank"><img src="https://user-images.githubusercontent.com/18701182/70204540-be18f680-16ff-11ea-994d-ef580767a673.png" 
alt="IMAGE ALT TEXT HERE" width="600" height="360" border="10" /></a>

> Para o vídeo de setup do Mac, [clique aqui](https://bit.ly/setup-vtex-mac)

## Introdução 

Antes de começar a botar a mão na massa e aprender mais sobre o Store Framework do VTEX IO, algumas configurações básicas precisam ser feitas por você, como:

- Instalar o **Git**; 
- Instalar o **Toolbelt**; 
- Fazer **login** em uma conta VTEX;
- Criar um **workspace** de desenvolvimento;
- **Linkar** seus arquivos locais com a plataforma.

Confira abaixo o passo a passo para cada uma dessas configurações:

## Instalando o Git 

Instale o Git no seu computador acessando o link abaixo e selecionando o software usado pelo seu computador (Windows, MAC ou Linux):

[https://git-scm.com/downloads](https://git-scm.com/downloads)


## Instalando o Toolbelt

O **Toolbelt** é a ferramenta de **linha de comando** do VTEX IO. É ele quem permite a realização de qualquer atividade na plataforma, como criar um novo workspace de desenvolvimento, fazer login em uma conta VTEX, desenvolver novas apps, gerenciar as já existentes, etc.

Uma vez que o Toolbelt é quem estabelece a comunicação entre o desenvolvedor e a plataforma, você precisará dele para conseguir realizar todas as atividades propostas durante o curso do Store Framework. 

1. Instale o [**Node.js**](https://nodejs.org/). Se o computador que você está usando é MAC, instale também o [**Yarn**](https://yarnpkg.com/);
2. Execute o comando `npm i -g vtex` no seu terminal se você estiver trabalhando de um Windows e `yarn global add vtex` no MAC;

Você pode executar o comando `vtex-v` (Windows) ou `vtex` (MAC) para confirmar se a instalação do Toolbelt ocorreu como esperado. 

Com a instalação concluída, o seu próximo passo deve ser *logar* em uma conta VTEX. 

## Fazendo login 

1. Execute o comando `vtex login contaVTEX` no seu terminal, substituindo `contaVTEX` pelo nome real da conta em que você deseja trabalhar. Por exemplo, `vtex login appliancetheme`.

2. Uma vez *logado*, execute o comando `vtex whoami` para confirmar em qual conta e workspace você está. 

Workspaces nada mais são do que espaços de trabalho. Na plataforma do VTEX IO, as contas possuem três tipos principais de workspaces: [master](https://vtex.io/docs/recipes/store/promoting-a-workspace-to-master), de [produção](https://vtex.io/docs/recipes/store/creating-a-production-workspace) e desenvolvimento. 

O próximo passo irá fazer com que um workspace de desenvolvimento seja criado para você, permitindo que as configurações feitas nas atividades do curso não alterem a versão final pública da loja. 

## Criando um workspace de desenvolvimento

1. Execute `vtex use nome-do-workspace`, substituindo `nome-do-workspace` pelo nome desejado. Por exemplo, `vtex use devworkspace`.

### Visualizando seu workspace

Depois que seu workspace foi criado, você conseguirá acessá-lo a partir do link `https://{workspace}--{conta}.myvtex.com`, substituindo `{workspace}` e `{conta}` pelo workspace criado anteriormente e pelo nome da conta, respectivamente. Por exemplo, `https://devworkspace--appliancetheme.myvtex.com`

---


### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Configura%C3%A7%C3%B5es+b%C3%A1sicas) 

---

Com todas as configurações básicas concluídas, você está pronto pra começar o curso! 

## Para continuar clique em Close Issue
