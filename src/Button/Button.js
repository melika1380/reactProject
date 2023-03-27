import React from "react";
import './Button.css';

const Button = ({children}) =>
<button className="Button" onClick={saveInform} >{children}</button>;
   const saveInform= () => {
    alert("thank you :)")
};
export default Button
