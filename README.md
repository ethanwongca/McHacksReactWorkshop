# McHacks Introduction React Workshop
**Welcome to McHacks Introduction React Workshop!** <br/>
The slides for the workshops are accessible through this link: <br/>
This documentation will help you navigate through this intergactive workshop, so let's get started! <br/>
> [!IMPORTANT]
> This workshop is aimed towards beginners in React, however all are welcomed!

## What to Install
Before we start please dowloaded Microsoft Visual Studio Code <br/>
The download link is the following: https://code.visualstudio.com/download <br/>
### Node Installation
Next you may have to install Node.js to do so please use this link: https://nodejs.org/en <br/>
> [!NOTE]
> You may have Node.js already installed on your computer, check via this command
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
## Project Setup

### React Project Setup
**Congratualtions!** you fully installed React and setup your project. Now let's start coding <br/>
Let's first look at the file index.html, here is what we need to do in index.html to setup our project properly.<br/>
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
Now let's look at the main.jsx file, notice how there is not much code, most of the code will be in App.jsx which will have all the components! <br/>
The prupose of main.jsx is to render the whole project!
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
App.jsx stores all the components, a component could be a button or a navigation bar, and contains code just to create a button. <br/>
Here is what App.jsx looks like, we put the components in JSX
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
Here is an example component
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

**Have fun in your programming journey!**

## Resources Available 
Documentation for JavaScript, React, HTML, and CSS: https://developer.mozilla.org/en-US/
