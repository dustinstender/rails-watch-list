import Typed from "typed.js";

const initTyped = () => {
  if (document.querySelector('#typed')) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 40
    });
  }
};

export { initTyped };
