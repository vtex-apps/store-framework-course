# Funcionamento do curso

<a href="http://bit.ly/vtex-course-workflow" target="_blank"><img src="https://user-images.githubusercontent.com/18701182/70206348-fae7ec00-1705-11ea-8c8d-90f614062782.png" 
alt="IMAGE ALT TEXT HERE" width="720" height="360" border="10" /></a>

## Objetivo

É importante estabelecer que este não é um curso expositivo. O seu objetivo é ensinar os participantes sobre o Store Framework do VTEX IO a partir de atividades práticas. Por isso, para que se consiga avançar, é preciso que um pouco do seu tempo e dedicação sejam investidos. 

No começo do curso você recebeu um repositório com código mínimo e queremos que, ao completar todas as tarefas, você o tenha transformado em uma **loja completa e funcional**. 

## Introdução

O curso é divido em etapas. Ao começo de cada etapa, você receberá instruções iniciais, como você já recebeu nesse e no anterior. Você deve ler todo o conteúdo apresentado e receberá, ao fim, uma pequena atividade.

Para que suas respostas sejam enviadas, siga os seguintes passos:

1. Abra uma nova janela do VSCode
2. Execute Ctrl + Shift + P (Cmd + Shift + P)
3. Digite `git clone`

![image](https://user-images.githubusercontent.com/18701182/70205859-51ecc180-1704-11ea-9683-e33f04d7893a.png)

4. Digite o nome do repositório como `https://github.com/{{ user.username }}/store-framework`
5. Confirme e selecione o lugar onde deseja baixar o repositório
6. Clique em `Open` na notificação que abre no canto inferior direito 

![image](https://user-images.githubusercontent.com/18701182/70205950-ae4fe100-1704-11ea-9dfd-b90e7e3e294e.png)

7. Abra a [página de instalação do nosso robô de testes](https://github.com/apps/vtex-course-hub) e clique em **Configure**;
    - :warning: Note que este bot é diferente do bot do [GitHub Learning Lab](https://lab.github.com/). Ele é responsável por analisar a resposta de cada etapa do curso.
8. Selecione **Only selected repositories**, clique em **Select repositories** e digite `store-framework`;
9. Clique em `{{ user.username }}/store-framework` e clique em **Install**.

<img src="https://user-images.githubusercontent.com/18701182/68790213-a03b0300-0625-11ea-8b8a-ec483f4c0a7a.png" width="350" />

## Submetendo as suas respostas

Ao terminar de ler todo o conteúdo e fazer a atividade proposta, você deve enviar a sua resposta seguindo os passos abaixo:

1. Clique em `Source Control`, no menu lateral do VSCode;

<img src="https://user-images.githubusercontent.com/18701182/68774671-36fac600-060c-11ea-9b25-1d767261fbfa.png" width="350" />

2. Clique no `+` na seção de CHANGES;

![image](https://user-images.githubusercontent.com/18701182/68774959-935de580-060c-11ea-9636-d8ba71508e31.png)

3. Escreva alguma mensagem que represente sua mudança. Por exemplo:

![image](https://user-images.githubusercontent.com/18701182/68775357-1a12c280-060d-11ea-9710-aaf8faca0f36.png)

4. Clique no `✓` (Commit);

![image](https://user-images.githubusercontent.com/18701182/68775612-8f7e9300-060d-11ea-8c0f-2c648fa54e7a.png)

5. Clique no canto inferior esquerdo;

<img src="https://user-images.githubusercontent.com/18701182/68775881-eedca300-060d-11ea-9518-5899c8294fe1.png" width="300" />

6. Quando uma nova janela aparecer, coloque o nome da Branch que lhe foi dado no começo do texto e clique em `+ Create new branch...`;

<img src="https://user-images.githubusercontent.com/18701182/68776006-23505f00-060e-11ea-8e0e-ba7a5ca0abb3.png" width="500" />

<img src="https://user-images.githubusercontent.com/18701182/68776527-fcdef380-060e-11ea-9d26-84e16a583c3d.png" width="400" />

7. Para finalizar, clique na nuvem no canto inferior esquerdo:

<img src="https://user-images.githubusercontent.com/18701182/68776153-614d8300-060e-11ea-92a0-58205a3e9e7d.png" width="150" />

Quando terminar de fazer todo o fluxo, nosso robô responderá se você conseguiu ou não acertar a resposta que esperávamos. Se sim, receberá uma resposta como: 

<img src="https://user-images.githubusercontent.com/18701182/68778185-93141900-0611-11ea-8b72-791ab9a2a3f8.png" width="400" />

Em seguida, você receberá uma outra resposta que indicará os próximos passos:

<img src="https://user-images.githubusercontent.com/18701182/68778199-97d8cd00-0611-11ea-9383-856cf735c094.png" width="450" />

>Se você é familiarizado com o git, todo esse fluxo equivale a **criar uma branch** com um **nome predefinido**, fazer **commit** das mudanças e dar **push**.

## Tentando novamente

Ao longo do curso, é possível que você não consiga completar corretamente a atividade na primeira tentativa. Se isso acontecer, você receberá uma mensagem de feedback que indicará qual foi o por quê da falha:

<img src="https://user-images.githubusercontent.com/18701182/68778030-56e0b880-0611-11ea-806b-d5232b6e3bd6.png" width="450" />

Você pode submeter quantas respostas você quiser, basta refazer todo o processo explicado na seção anterior. 
:warning: No **item 6** não será necessário refazer tudo, uma vez que a branch do step já foi criada. No **item 7**, ao invés de ver uma nuvem, você verá algumas setas, basta clicar nelas para reenviar:

![image](https://user-images.githubusercontent.com/18701182/68778823-762c1580-0612-11ea-80e2-4406097fddd0.png)

## Progresso do curso

A qualquer momento do curso você pode acompanhar o seu progresso voltando na [página inicial](https://lab.github.com/vtex-trainings/store-framework). Nela, serão indicados todos os steps, quais você já completou e um botão para você voltar para o step de onde parou:

![image](https://user-images.githubusercontent.com/18701182/68779406-62cd7a00-0613-11ea-93e5-7604f57f8f86.png)

## Não esqueça de linkar

A todo momento, abrindo o terminal do VSCode, você pode executar um `vtex link` e acompanhar a evolução do seu projeto em `https://{workspace}--{conta}.myvtex.com`. Certifique-se que **visualmente** a solução é **equiparável com o que foi apresentado** e que **nenhum erro aconteceu no link**.

## :warning: Cuidado :warning:   

Não crie issues e PRs durante o fluxo do curso, isso pode interferir no seu funcionament

---


### :no_entry_sign: Perdido? 

Há algum problema com esse passo? Que tal nos enviar um feedback? :pray:

[Criar feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Funcionamento+do+curso) 

----

## Para continuar clique em **Close issue**
