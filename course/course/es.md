# Funcionamiento del curso

## Objetivo

Es importante establecer que este no es un curso expositivo. Su objetivo es enseñar a los participantes sobre el Store Framework de VTEX IO a partir de actividades prácticas. Por lo tanto, para que sea posible avanzar, es necesario que se invierta un poco de su tiempo y dedicación. 

Al comienzo del curso usted recibió un repositorio con código mínimo y queremos que, al completar todas las tareas, lo haya transformado en una **tienda completa y funcional**. 


## Introducción 

El curso está dividido en etapas. Al comienzo de cada etapa, usted recibirá instrucciones iniciales, como ya recibió en esta y en la anterior. Debe leer todo el contenido presentado y recibirá, al final, una pequeña actividad.

Para que sus respuestas se envíen, siga los siguientes pasos:

1. Abrir una nueva ventana de VSCode.
2. Ejecute Ctrl + Shift + P (Cmd + Shift + P).
3. Digite `git clone` .


![image](https://user-images.githubusercontent.com/18701182/70205859-51ecc180-1704-11ea-9683-e33f04d7893a.png)


4. Digite el nombre del repositorio como `https://github.com/{{ user.username }}/store-framework` .
5. Confirme y seleccione el lugar donde desea descargar el repositorio.
6. Haga clic en `Open` en la notificación que se abre en la esquina inferior derecha. 


![image](https://user-images.githubusercontent.com/18701182/70205950-ae4fe100-1704-11ea-9dfd-b90e7e3e294e.png)


7. Abra la [página de instalación de nuestro robot de pruebas](https://github.com/apps/vtex-course-hub)  y haga clic en **Configure**.
    - :warning: Note que este bot es diferente del bot de [GitHub Learning Lab](https://lab.github.com/). Este es responsable de analizar la respuesta en cada etapa del curso.
8. Seleccione **Only selected repositories**, haga clic en **Select repositories** y digite `store-framework` .
9. Haga clic en `{{ user.username }}/store-framework` y haga clic en **Install**.

<img src="https://user-images.githubusercontent.com/18701182/68790213-a03b0300-0625-11ea-8b8a-ec483f4c0a7a.png" width="350" />

## Enviando sus respuestas

Cuando haya terminado de leer todo el contenido y de realizar la actividad propuesta, debe enviar su respuesta siguiendo los pasos que se indican a continuación:

1. Haga clic en `Source Control`, en el menú lateral de VSCode.

<img src="https://user-images.githubusercontent.com/18701182/68774671-36fac600-060c-11ea-9b25-1d767261fbfa.png" width="350" />

2. Haga clic en `+` en la sección de CHANGES.

![image](https://user-images.githubusercontent.com/18701182/68774959-935de580-060c-11ea-9636-d8ba71508e31.png)

3. Escriba algún mensaje que represente su alteración.  Por ejemplo:

![image](https://user-images.githubusercontent.com/18701182/68775357-1a12c280-060d-11ea-9710-aaf8faca0f36.png)

4. Haga clic en  `✓` (Commit).

![image](https://user-images.githubusercontent.com/18701182/68775612-8f7e9300-060d-11ea-8c0f-2c648fa54e7a.png)

5. Haga clic en la esquina inferior izquierda.

<img src="https://user-images.githubusercontent.com/18701182/68775881-eedca300-060d-11ea-9518-5899c8294fe1.png" width="300" />

6. Cuando aparezca una nueva ventana, coloque el nombre del Branch que se le dio al comienzo del texto y haga clic en 
 `+ Create new branch...`

<img src="https://user-images.githubusercontent.com/18701182/68776006-23505f00-060e-11ea-8e0e-ba7a5ca0abb3.png" width="500" />

<img src="https://user-images.githubusercontent.com/18701182/68776527-fcdef380-060e-11ea-9d26-84e16a583c3d.png" width="400" />

7. Para finalizar, haga clic en la nube en la esquina inferior izquierda:

<img src="https://user-images.githubusercontent.com/18701182/68776153-614d8300-060e-11ea-92a0-58205a3e9e7d.png" width="150" />

Cuando termine de hacer el flujo completo, nuestro robot responderá si logró o no acertar la respuesta que esperábamos. Si es así, obtendrá una respuesta como: 

<img src="https://user-images.githubusercontent.com/18701182/68778185-93141900-0611-11ea-8b72-791ab9a2a3f8.png" width="400" />

En seguida, recibirá otra respuesta que le indicará los siguientes pasos:

<img src="https://user-images.githubusercontent.com/18701182/68778199-97d8cd00-0611-11ea-9383-856cf735c094.png" width="450" />

>Si está familiarizado con el git, todo este flujo equivale a **crear un  branch** con un **nombre predefinido**, hacer **commit** de los cambios y dar **push**.



## Intentándolo nuevamente

A lo largo del curso, es posible que no pueda completar la actividad correctamente en el primer intento. Si esto sucede, recibirá un mensaje de feedback que le indicará cuál fue el porqué de la falla:

<img src="https://user-images.githubusercontent.com/18701182/68778030-56e0b880-0611-11ea-806b-d5232b6e3bd6.png" width="450" />

Usted puede enviar tantas respuestas como quiera, basta rehacer todo el proceso explicado en la sección anterior. 
:warning: En **el ítem 6** no será necesario rehacer todo, ya que el branch del step ya ha sido creado. En el **ítem 7**, en vez de ver una nube, usted verá algunas flechas, basta hacer clic en estas para reenviar: 

![image](https://user-images.githubusercontent.com/18701182/68778823-762c1580-0612-11ea-80e2-4406097fddd0.png)

## Progreso del curso

En cualquier momento del curso, usted puede acompañar su progreso volviendo a la [página de inicio](https://lab.github.com/vtex-trainings/store-framework). En esta, se indicarán todos los steps que ya completó y un botón para que vuelva al step desde donde lo dejó:

![image](https://user-images.githubusercontent.com/18701182/68779406-62cd7a00-0613-11ea-93e5-7604f57f8f86.png)

## No olvide enlazar  

En todo momento, al abrir el terminal VSCode, puede ejecutar un `vtex link` y acompañar la evolución de su proyecto en `https://{workspace}--{conta}.myvtex.com` .  Asegúrese de que **visualmente** la solución es  **equiparable con lo que se presentó** y que **no se haya producido ningún error en el enlace**.

## :warning: Cuidado :warning:   

No cree issues y PRs durante el flujo del curso, ya que esto puede interferir en su funcionamiento.


---


### :no_entry_sign: ¿Perdido? 

¿Hay algún problema con este paso? ¿Qué tal si nos envía un feedback? :pray:

[Crear feedback](https://docs.google.com/forms/d/e/1FAIpQLSeaWrm0Hogm-txm5Ww6mUa68eDuE3WnpFjUSVJ3Wi3dnmCb7A/viewform?usp=pp_url&entry.1784529524=Funcionamento+do+curso) 

----

## Para continuar haga clic en **Close issue**
