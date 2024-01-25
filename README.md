# McHacks Introduction React Workshop
Welcome to McHacks Introduction React Workshop! <br/>
<br/>
The slides for the workshops are accessible through this link: <br/>
This documentation will help you navigate through this intergactive workshop, so let's get started! <br/>

## What to Install
Before we start please dowloaded Microsoft Visual Studio Code <br/>
The download link is the following: https://code.visualstudio.com/download <br/>
### Node Installation
Next you may have to install Node.js to do so please use this link: https://nodejs.org/en <br/>
To check if you have Node.js on your computer already check via this command in terminal <br/>
```
npm --version
```
### React Installation / Bash Commands Needed
We will then install react using this command  <br/>
```
npm install -g create-react-app
```
To create our first app run the following command  <br/>
```
npx create-react-app <name_of_react_app>
```
Then navigate to the project server using the following bash command  <br/>
```
cd <name_of_react_app>
```
To view your project, once it is finished the following command is <br/>
```
npm start
```
### React Project Setup
Congratualtion you fully installed React and setup your project. Now let's start coding <br/>
Let's first look at the file index.html, here is what we need to do in index.html to setup our project properly.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="<path_to_the_favicon_you_want>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> <Websit_Title_Insert_Here> </title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> <!-- if you want to link a style sheet, (get a font that is not apart of the basic fonts in this case inter) -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script> <!-- this is where the main react file will be -->
  </body>
</html>
```


