# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 Reference

Link: 🔗 https://www.youtube.com/watch?v=EaG3Zd04W5s&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=39 \
Link: 🔗 https://www.youtube.com/watch?v=Xe8CkYZvCig&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=38 \
PlayList: 🔗 https://youtu.be/vz1RlUyrc3w?si=bLwgUNz49oW99PMt

# ⭐ React learning

📌 To Code in React\
📌 To Crack React Js Interview

<hr style= "border-top: 1px dotted #ccc;">

# ⭐ Learn what matters

Facebook was facing a problem that they were not able to show the notifications\
and reactions in real time, to show the notifications and reactions they need to \
reload the page, they were facing this problem because they were using php earlier.\
To solve this problem, in 2013 one of the facebook engineer's made a library and this\
library was special, because this was able to show the data in real time, but the working\
of this library was different. This doesn't updates the <b>main DOM</b> tree directly, means if \
there is any change in the page, the DOM tree will <b>not be</b> updated directly. This library\
has it's own DOM tree named as <b>'Virtual DOM'</b>. This virtual DOM tree is an <b>exact copy</b> of \
the real/main DOM tree, but there is a difference between them, that is whenever there is\
a change in the virtual DOM only that part of the page will be changed rather than\
refreshing the whole page.

This is why react became so famous and useful for big applications.

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 What is react? ✅

--> React is a JavaScript library to maintain the front-end efficiently

⭐ Features and advantages of react

📌 very very very less page reloads\
📌 extreme use of reusable components\
📌 very very efficient\
📌 more opportunities

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 When should I learn React ? ✅

-->
📌 After mastering JS\
📌 most project don't need react in initial phase

# 🎯 Why to use and learn react?

-->
📌 efficient and lightweight\
📌 hype, job, trend, build UI\
📌 makes easy to manage & build complex front-end

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 How to use react? ✅

📌 create components,\
📌 and make data if you need it,\
📌 link the data and change data whenever you want,\
📌 react will react whenever data is changed.

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 When to use it? ✅

--> Whenever you have to create a generous application where there are lots of things\
happening and a lot of reusable components structure are there.

<hr style= "border-top: 1px dotted #ccc;">

# ⭐ Build something!!

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 Topics to learn ✅

📌 core of React (state or UI manipulation, JSX)\
📌 component reusability\
📌 Reusing of component (Props)\
📌 How to propagate change (hooks)

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 Additional Addon to React ✅

📌 Router (React don't have Router)\
📌 state management (React don't have state management)\
↘️ Redux, Redux toolkit, zustand, <b>context API</b>\
📌 class based component\
↘️ legacy code\
📌BAAS Apps\
↘️ social media clone, ecommerce app...

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 How to create an react project ✅

--> There are total 3 react(s)

📌 The old or raw react js that we can create with the command

    npx create-react-app

The old react (not so old) gives a lot of unnecessary dependencies.\
If you create you react app with the above command then will take a very long time.

📌 The new react js that is now intigrated with nextjs framework. command:

    npx creat-next-app

📌 The faster and efficient way is react with vite. command:

    npm create vite@latest

This is the fastest and most efficient way to create your react app.

<hr style= "border-top: 1px dotted #ccc;">

# 🎯 Understanding react flow and structure

--> React is a Single Page Application(SPA) library.

⭐ In raw react (npx create-react-app) inside the 'index.html' file there is no script tag.\
 But, in the starting stages we have learned that we have to inject or add the script tag \
 and we have to add the javascript file to make changes with the help of javascript.

So, the question is if there is no script attached in the 'index.html' file then how it\
 is working and how javascript is working and rendering ?

The answer to your question is, if you open the 'package.json' file then there in the \
 dependencies object you find the react, react-dom which are essential to manipulate the\
 DOM and after that you will find a react-script. This react-script sneaks through and \
 adds the script(javaScript file) to the 'index.html' file. If you go to your browser and\
 view page source(or you can also inspect) there you will find that react has automatically\
 added many things by itself. There you find the script tag was also added/attached and\
 this is done by the react-script package.

<hr style="border-top: 1px solid #111;">

⭐ In react + vite the index.html is outside (or say in the main directory). Now if you\
open the 'package.json' file you will notice that there is no 'react-script' package \
installed.

Now, the question arise, then how the react file (or say javascript file) is injected in\
the 'index.html' file ?

The answer to your question is when you open the 'index.html' file you will notice that \
they have already added the script tag there and attached the 'main.jsx' which was \
'index.js' previously, to the 'index.html' file. So, there is no need for the 'react-script'\
package.

<hr style="border-top: 1px solid #111;">

⭐ If you create a component in the raw react(npx create-react-app) there you can give \
either fileName.js or fileName.jsx but, if you are using viteReact since react is a \
library viteReact (vite) have some constraints. The constraints are whenever you are\
creating a file you must name it with .jsx extension and in both React and Vite you have\
to start the component name with an uppercase letter as these are the best practices.

<hr style="border-top: 1px solid #111;">

# 🔑 key points ⬇️

📌 In react can name either fileName.js or fileName.jsx.\
📌 In vite you must name the file with .jsx extension.\
📌 In both react and vite component(function) name must start with an uppercase letter.\
📌 It is always recommended to start the component fileName also with an uppercase letter.

<hr style="border-top: 1px dotted #ccc;">

# 🎯 Creating your own custom react 

--> Go to the customReact folder. You will see there is an 'index.html' file and a \
'customreact.js' file(you can name whatever you want). Now go to the 'index.html' \
file in that file there is only one 'div' with and 'id = root'. 

Go to the 'customreact.js' file. What we are doing here is we are creating an object(let's\
say library) named as reactElement. There are types and arrtibutes they take as an element\
in HTML. 

Now, have a function named 'customRender' which takes what to render and where to render. \
Inside the 'customRender' function we are creating an element and injecting the type, props,\
etc. and adding it to the main root div.

This is an overview of how react actually works under the hood. You can add more types in\
the reactElement and render it accordingly. This was the basic idea of how react works.

🌟 You can go to your page and view page source, there you will see same HTML as react\
renders and everthing is rendered through JavaScript.

As the components are nothing but functions, you can render/run them as normal functions but \
you shouldn't.

⭐Exmp: Go to the main.jsx/index.js and write a function

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";

    function MyApp () {
      return (
        <div>
          <h1>Custom App !!!</h1>
        </div>
      )
    }

    ReactDOM.createRoot(document.getElementById("root")).render(
        <MyApp />
    );

📝 The function MyApp is a simple function which is returning a jsx. You can run it as shown or\
    you can run it like MyApp() like a function.

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";

    function MyApp () {
      return (
        <div>
          <h1>Custom App !!!</h1>
        </div>
      )
    }

    ReactDOM.createRoot(document.getElementById("root")).render(
        MyApp()
    );

📌 You can go to 'react inner working' commit to see these code.

<hr style="border-top: 1px solid #111;">

🌟 Expression and Evaluated expressions

--> In javaScript we used to have the template literals like this

    const name = 'Sagar';
    <h1>My name is: ${name}</h1>

and whatever we use to write between this ${} it was treated as a variable.

Similarly, in react we have something similar,

    import React from 'react'

    const username = 'hellow dosto!';

    function App() {
      return (
        <div>
          Hellow {username}
        </div>
      )
    }

    export default App

Here, we are having a variable username and if want to print the value then we wrap the \
variable between {} these curly braces. \

📌 Anything between {} these braces are treated as expression and {username} this is known as\
evaluated expression which means that we don't write whole javascript here but the final outcome\
after all evaluation is written here.

<hr style="border-top: 1px dotted #ccc;">