# <img src="https://github.com/ethanwongca/McHacksReactWorkshop/assets/87055387/ca8bc3ea-1308-43b8-978e-17bfa6a1c78d" width="50" height="50"> McHacks Introduction to React Workshop   
**Welcome to McHacks Introduction to React Workshop!** <br/>
The slides for the workshops are accessible through this link: <br/>
https://docs.google.com/presentation/d/1k6j8V6mCiauWRhYFgynjDa_vyWBY72ruva6FOAzMkeA/edit?usp=sharing <br/>
This documentation will help you navigate through this intergactive workshop, so let's get started! <br/>
> [!IMPORTANT]
> This workshop is aimed towards beginners in React.js, however all are welcomed! <br/>
> If you have trouble following the live programming you can refer to the final result in the documentation.

## What to Install
Before we start please dowloaded **Microsoft Visual Studio Code**. <br/>
The download link is the following: https://code.visualstudio.com/download <br/>
### Node Installation
Next you may have to install **Node.js** to do so please use this link: https://nodejs.org/en <br/>
> [!NOTE]
> You may have Node.js already installed on your computer, please check via this command:
```
npm --version
```
### React Installation / Bash Commands Needed
We will then install react using this command:  <br/>
```
npm install -g create-react-app
```
To create our first app run the following command:  <br/>
```
npx create-react-app <name_of_react_app>
```
Then navigate to the project folder using the following bash command:  <br/>
```
cd <name_of_react_app>
```
To view your project, once it is finished type the following command: <br/>
```
npm start
```
## Project Setup

### React Project Setup
**Congratualtions!** you fully installed React and setup your project. Now let's start coding! <br/>
Let's first look at the file **index.html**, here is what we need to do in index.html to setup our project properly.<br/>
> [!NOTE]
> If you have never seen HTML before, here is a link to teach you! <br/>
> McHacksxCSUS HTML and CSS Workshop: https://github.com/ethanwongca/CSUSxMcHacksWebDev

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="<path_to_the_favicon_you_want>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> <Websit_Title_Insert_Here> </title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> <!-- if you want to link a style sheet -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script> <!-- this is where the main react file will be -->
  </body>
</html>
```
Now let's look at the **index.js** file, notice how there is not much code, most of the code will be in App.jsx which will have all the React components! <br/>
The purpose of index.js is to render the whole project!
```
import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
App.jsx stores all the components and serves to structure each component properly <br/>
In bigger website projects **App.jsx** contains all the possible pages of the website, and a website.jsx stores the components<br/>>
> [!TIP]
> A react component can be a button, navigation bar, or even a loading screen! <br/>
> The intention of components is so that you can re-use elements in a website. <br/>
Here is what App.jsx looks like, we put the components in JSX.
```
import component from '<path_to_component>';
//if you have more than one component in your component folder you can do
import {component1, component2} from '<path_to_component>';

function App() {
  return (
    <component /> 
  )
}

export default App;
```
Here is an example component.
```
import {loading} from '../assets';

const Loading = () =>{
    return( 
    <div className="loading-container">
    <img src={loading} alt="loading" className="loading-gif"/>
    </div>
    )
}

export default Loading
```
>[!CAUTION]
> Be **careful** with your paths, as this is a major way for your React app not working. <br/>

### Designing the Website 
We still use CSS to design the website. Here is an example CSS file. <br/>
```
/* To design certain components in React */
body {

}
```
**Good luck with your projects at McHacks 11! We hope you enjoyed our workshop!**

## Resources Available 
<img src="https://github.com/ethanwongca/McHacksReactWorkshop/assets/87055387/3aa025c8-55fd-416d-a84f-40037069a729" width="35">
Documentation for JavaScript, React, HTML, and CSS: https://developer.mozilla.org/en-US/


