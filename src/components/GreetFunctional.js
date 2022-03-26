import React from "react";

const GreetFunctional = () =>{
    return(
        <body style={{"backgroundColor":"palegreen"}}>
                <p>In this project we are gonna explore some react things - The Functional Component</p>
                <h1 style={{"color":"royalblue"}}>Hello React</h1>
                <p>Good to see you..!</p>
                <button id="button1">Click</button>
                <button id="button2" onClick={display}>Here</button>
        </body>
    );
    function display(){
       window.alert(Date());
    }
}
export default GreetFunctional;