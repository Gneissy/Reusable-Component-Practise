import React from "react";
var PropTypes = require('prop-types');
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}){
  // ...rest here is the whole props object remanining.
  // It may include all event listeners like
  // onClick, onMouseover, onHover etc.

  const classes = className(rest.className, "px-6 py-3 border", {
    "border-blue-500 bg-blue-500 text-white" : primary,
    "border-gray-900 bg-gray-900 text-white" : secondary,
    "border-green-500 bg-green-500 text-white" : success,
    "border-yellow-400 bg-yellow-400 text-white" : warning,
    "border-red-500 bg-red-500 text-white" : danger,
    "rounded-full" : rounded,
    "bg-white" : outline,
    "text-blue-500" : outline && primary,
    "text-gray-900" : outline && secondary,
    "text-green-500" : outline && success,
    "text-yellow-400" : outline && warning,
    "text-red-500" : outline && danger
  });
  return (
    <button {...rest} className = {classes} > {children} </button>
  );
}

// The logic here is:
// True means 1 as number.
// !!true means 1, which is itself.
// False means 0 as number.
// !!false means 0, which is itself.
// undefined means NaN (Not a Number).
// !!undefined means 0, as unexpected. *****

// So i want only one of them will be true, thats the sum of their values.
// They should be only one true which is 1, and remaninings are undefined which is 0.
// Sum should not be more than one, so it's an error.
Button.propTypes = {
  checkVariationNumber : function ({ primary, secondary, success, warning, danger }){
    let total = Number(!!primary)
    + Number(!!secondary)
    + Number(!!success)
    + Number(!!warning)
    + Number(!!danger);

    if (total > 1) {
      return new Error("Only one of them (primary, secondary, success, warning, danger) should be true.");
    }
  }
}


export default Button;
