import "./scss/index.scss";
import Header from "./components/Header.js";
console.log("Getting Started");

const App = () => {
  document.getElementById("header").innerHTML = Header();
};

App();
