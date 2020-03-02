# Configuraciones básicas

## Introducción

Antes de comenzar a poner manos a la obra y aprender más sobre el Store Framework de VTEX IO, usted debe realizar algunas configuraciones básicas, como:

- Instalar **Git**.
- Instalar **Toolbelt**.
- Hacer **login** en una cuenta VTEX.
- Crear un **workspace** de desarrollo.
- **Enlazar** sus archivos locales con la plataforma.

A continuación, consulte el procedimiento para cada una de estas configuraciones:

## Instalando Git 

Instale Git en su computadora accediendo al siguiente enlace y seleccionando el software usado por su computadora (Windows, MAC o Linux):

[https://git-scm.com/downloads](https://git-scm.com/downloads)


## Instalando Toolbelt

**Toolbelt** es la herramienta de **línea de comando** de VTEX IO. Este le permite realizar cualquier actividad en la plataforma, como crear un nuevo  workspace de desarrollo, iniciar sesión en una cuenta VTEX, desarrollar nuevas  apps, gestionar las ya existentes, etc.

Dado que Toolbelt es el que establece la comunicación entre el desarrollador y la  plataforma, usted lo necesitará para lograr realizar todas las actividades  propuestas durante el curso de Store Framework. 

1. Instale [**Node.js**](https://nodejs.org/). Si la computadora que usted está usando es MAC, instale también [**Yarn**](https://yarnpkg.com/).
2. Ejecute el comando `npm i -g vtex` en su terminal si usted  está trabajando de un Windows y `yarn global add vtex` en  MAC.

Usted puede ejecutar el comando `vtex-v` (Windows) o `vtex` (MAC) para confirmar si la instalación de Toolbelt ocurrió como se esperaba. 

Con la instalación concluida, su próximo paso debe ser *iniciar sesión* en una cuenta VTEX. 

## Iniciando sesión  

1. Ejecute el comando `vtex login contaVTEX` en su terminal, reemplazando `contaVTEX` con el nombre real de la cuenta en la que desea trabajar. Por ejemplo, `vtex login appliancetheme` .

2. Una vez que haya *iniciado sesión*, ejecute el comando `vtex whoami` para confirmar en qué cuenta y workspace usted está. 

Workspaces no son más que espacios de trabajo. En la plataforma VTEX IO, las cuentas tienen tres tipos principales de workspaces: [master](https://vtex.io/docs/recipes/store/promoting-a-workspace-to-master), de [producción](https://vtex.io/docs/recipes/store/creating-a-production-workspace) y desarrollo.

El siguiente paso hará que se cree un workspace de desarrollo para usted, permitiendo que las configuraciones realizadas en las actividades del curso no cambien la versión pública final de la tienda. 

## Creando un workspace de desarrollo

1. Ejecute `vtex use nome-do-workspace`, reemplazando  `nome-do-workspace` con el nombre deseado. Por ejemplo, `vtex use devworkspace` .

### Visualizando su workspace

Una vez creado su workspace, podrá acceder a este desde el enlace `https://{workspace}--{cuenta}.myvtex.com`, reemplazando `{workspace}` y `{cuenta}` con el workspace creado anteriormente y el nombre de la cuenta, respectivamente. Por ejemplo, `https://devworkspace--appliancetheme.myvtex.com`

---


### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Configura%C3%A7%C3%B5es+b%C3%A1sicas) 

---

Con todas las configuraciones básicas completadas, ¡usted está listo para comenzar el curso!

## Para continuar, haga clic en Close Issue
