import React from "react";
import Button from "../Button/Button";
import "./contact.css"

const Contact = () => {

    const handleChangeInputText= (event) => {
        console.log("event",event.target.value);
    };
 
    return (
        <div>
            <h1>please fill this form</h1>
            <input onChange={handleChangeInputText} type="text" placeholder="Name"></input>
            <input onChange={handleChangeInputText} type="text" placeholder="Last Name"></input>
            <input onChange={handleChangeInputText} type="number" placeholder="phone number"></input>
            <input type="email" placeholder="email"></input>
            <div>
                <textarea placeholder="your comment">
                    
                </textarea>
            </div>
            <div>
                <Button>submit</Button>
            </div>
        </div>
    )

};

export default Contact