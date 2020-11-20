import React from 'react';
import './App.css'

import Screen from './Screen';
import Keyboard from './Keyboard';

class App extends React.Component{
    state = {
        input: '',
        varA: '',
        varB: '',
        func: '',
        output: false
    }

    updateState = (value) => {
        if(this.state.output === true){
            this.setState({input: "" + value, output: false})
        }else{
            this.setState({input: this.state.input + value})
        }
    }

    setFunction = (func) => {
        this.setState({varA: parseInt(this.state.input), func:func, input: ''})
    }

    setVariable = () => {
        this.setState({varB: parseInt(this.state.input), input: ''},() => {
            this.calculate();
        })
    }

    calculate = () => {
        var a = this.state.varA;
        var b = this.state.varB;
        var result = 0;
        
        if(a === ''){
            this.setState({input: this.state.input})
        }else if(this.state.func === "+"){
            result = a+b;
        }else if(this.state.func === "-"){
            result = a-b;
        }else if(this.state.func === "*"){
            result = a*b;
        }else if(this.state.func === "/"){
            result = a/b;
        }
        
        this.setState({input: result.toString(10), varA: '', varB: '', func: '', output: true})
    }

    editVariable = () => {
        if(this.state.input !== ""){
            this.setState({input: this.state.input.slice(0, -1)});
        }else{
            this.setState({input: ""})
        }
    }

    render(){
        return (
            <div className="calculator">
                <Screen data={this.state} />
                <Keyboard 
                    updateState={this.updateState} 
                    setFunction={this.setFunction} 
                    setVariable={this.setVariable} 
                    editVariable={this.editVariable} 
                /> 
            </div>
        )
    }
}


export default App;