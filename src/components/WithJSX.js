import React, { Component } from "react";

class WithJSX extends Component{
    render(){
        return(
                React.createElement
                (
                    'div',
                    {id:"div",className:"divclass"},
                    React.createElement
                    (
                        'h1',
                        {id:"h1tag",className:"h1class"},
                        'this is a div'
                    )
                )
        );
    }
}
export default WithJSX;