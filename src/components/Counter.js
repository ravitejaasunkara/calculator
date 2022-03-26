import React, { Component } from 'react';

class Counter extends Component
{
    constructor(){
        super()
        this.state = {
            a : 0
        }
    }
    increase(){
        this.setState({
            a : this.state.a+1
        })
        //document.getElementById('display').innerHTML = this.a;
       
    }
    decrease(){
        this.setState({
            a : this.state.a-1
        })
        //document.getElementById('display').innerHTML = this.a;
    }
    add(){
        this.setState({
            //val = parseInt(document.getElementById('addinp').value)
            a : this.state.a + parseInt(document.getElementById('addinp').value)
        })
    }
    remove(){
        this.setState({
            //value = parseInt(document.getElementById('removeinp').value)
            a : this.state.a - parseInt(document.getElementById('removeinp').value)
        })
    }
    reset1(){
        document.getElementById('addinp').value = '';
        document.getElementById('removeinp').value = '';
        this.reset2()
    }
    reset2(){
        this.setState({
            a : 0
        })
    }
    render(){
        return(
            <body className='body'>
                <div>
                <br/>
                    <button className="btn1" onClick={() => this.increase()}>Increase</button>
                    <button className="btn2" onClick={() => this.decrease()}>Decrease</button>
                    <br/>

                    <input type={'text'} id="addinp" />
                    <button className='addbtn' onClick={() => this.add()}>+</button>
                    
                    <br/>

                    <input type={'text'} id="removeinp" />
                    <button className='removebtn' onClick={() => this.remove()}>-</button>

                    <br/><br/>

                    <button className='resetbtn' onClick={() => this.reset1()}>RESET</button>

                    <p className='p'>value - {this.state.a}</p>
                </div>
            </body>
        );
    }
}
export default Counter;