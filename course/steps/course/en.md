# Course functioning

<a href="http://bit.ly/vtex-course-workflow" target="_blank"><img src="https://user-images.githubusercontent.com/18701182/70206348-fae7ec00-1705-11ea-8c8d-90f614062782.png" 
alt="IMAGE ALT TEXT HERE" width="720" height="360" border="10" /></a>

## Objective

It's important to establish that is not an expository course. Its objective is to teach participants about the VTEX IO Store Framework based on practical applications/activities. Therefore, in order to advance, you'll need to invest some time and dedication into it.

At the beginning of the course, you'll receive a repository containing a minimum amount of code our wish is that, upon completing all the tasks laid before you, you would have transformed that code into a **fully functional store**.

## Intro

The course is divided into chapters. As each chapter begins, you'll receive initial instructions, just as you've already received for this and previous chapters. You should read through all of the presented content and perform the minor task set out at the end of the chapter.

For your answers to be sent, follow these steps:

1. Open a new window in VSCode
2. Execute CTRL + Shift + P or Cmd + Shift + P
3. Run `git clone`

![image](https://user-images.githubusercontent.com/18701182/70205859-51ecc180-1704-11ea-9683-e33f04d7893a.png)

4. Type in the repository's name, such as `https://github.com/{{ user.username }}/store-framework`
5. Confirm and select where you want to clone the repository
6. Click on `Open` on the notification that appears in the lower right corner 

![image](https://user-images.githubusercontent.com/18701182/70205950-ae4fe100-1704-11ea-9dfd-b90e7e3e294e.png)

7. Open [our test bot installation page](https://github.com/apps/vtex-course-hub) and click on **Configure**;
    - :warning: Note that this bot differs from the [GitHub Learning Lab](https://lab.github.com/) bot. It's responsible for analyzing the answers coming from each course stage. 
8. Select the **Only selected repositories** option, then click on **Select repositories** and type in `store-framework`;
9. Click on `{{ user.username }}/store-framework` and then on **Install**.

<img src="https://user-images.githubusercontent.com/18701182/68790213-a03b0300-0625-11ea-8b8a-ec483f4c0a7a.png" width="350" />

## Submitting your answers

After reading the entire content and performing the wanted task, you should send your answer according to the steps below: 

1. Click on `Source Control`, in the VSCode side menu;

<img src="https://user-images.githubusercontent.com/18701182/68774671-36fac600-060c-11ea-9b25-1d767261fbfa.png" width="350" />

2. Click on the `+` in the CHANGES section;

![image](https://user-images.githubusercontent.com/18701182/68774959-935de580-060c-11ea-9636-d8ba71508e31.png)

3. Compose a message that describes your change. For example:

![image](https://user-images.githubusercontent.com/18701182/68775357-1a12c280-060d-11ea-9710-aaf8faca0f36.png)

4. Click on `✓` (Commit);

![image](https://user-images.githubusercontent.com/18701182/68775612-8f7e9300-060d-11ea-8c0f-2c648fa54e7a.png)

5. Click on the lower left corner;

<img src="https://user-images.githubusercontent.com/18701182/68775881-eedca300-060d-11ea-9518-5899c8294fe1.png" width="300" />

6. When a new window appears, fill it in with the Branch name that was given at the beginning of the text and click on `+ Create new branch...`;

<img src="https://user-images.githubusercontent.com/18701182/68776006-23505f00-060e-11ea-8e0e-ba7a5ca0abb3.png" width="500" />

<img src="https://user-images.githubusercontent.com/18701182/68776527-fcdef380-060e-11ea-9d26-84e16a583c3d.png" width="400" />

7. Lastly, click on the cloud icon in the lower left corner:

<img src="https://user-images.githubusercontent.com/18701182/68776153-614d8300-060e-11ea-92a0-58205a3e9e7d.png" width="150" />

Once you complete this flow, our bot will let you know whether your answers were correct or not. If yes, the reply will look like this:  

<img src="https://user-images.githubusercontent.com/18701182/68778185-93141900-0611-11ea-8b72-791ab9a2a3f8.png" width="400" />

Thereafter, you'll receive another reply highlighting the next steps: 

<img src="https://user-images.githubusercontent.com/18701182/68778199-97d8cd00-0611-11ea-9383-856cf735c094.png" width="450" />

>If you're familiar with git, this entire flow is equivalent to **creating a branch** with a **predefined name**, **committing** changes and then executing a **push**. 

## Retries

Throughout the course, you may run into difficulty and not manage to correctly complete the activity on your first try. When this happens, you'll receive a feedback message that will let you know where you failed: 

<img src="https://user-images.githubusercontent.com/18701182/68778030-56e0b880-0611-11ea-806b-d5232b6e3bd6.png" width="450" />

You can submit as many answers and you want by simply retrying the entire process explained in the previous section. 
:warning: In **item 6** above, you won't need to retry everything, once the step's branch has been created. In **item 7**, instead of a cloud icon, you'll see several arrows, just click on them to resend: 

![image](https://user-images.githubusercontent.com/18701182/68778823-762c1580-0612-11ea-80e2-4406097fddd0.png)

## Course progress

You may see your course progress at any time by going back to the [main page](https://lab.github.com/vtex-trainings/store-framework). There, you'll see every step, what you've already completed, along with a button that takes you back to where you last stopped: 

![image](https://user-images.githubusercontent.com/18701182/68779406-62cd7a00-0613-11ea-93e5-7604f57f8f86.png)

## Don't forget to link

Anytime you open the VSCode terminal, you can run a `vtex link` to monitor the evolution of your project in  `https://{workspace}--{account}.myvtex.com`. Make sure that the solution is **visually comparable to what was presented** and that **no link errors occurred**.

## :warning: Warning :warning:   

Do not create issues and PRs during the course flow, since this can interfere with its functioning. 

----

## To continue, click on **Close issue**