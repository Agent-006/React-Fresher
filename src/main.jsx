import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
*/

const anotherUser = 'Hellowwww !';

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

function MyApp () {
  return (
    <div>
      <h1>Custom App !!!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  reactElement
);
