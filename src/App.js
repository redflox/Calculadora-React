import React, { Component } from 'react';
import './App.css';
import ResultadosComponente from './components/ResultadosComponente';
import Tablero from './components/Tablero';


class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calcular()
        }

        else if(button === "C"){
            this.resetear()
        }
        else if(button === "CE"){
            this.borrar()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calcular = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    resetear = () => {
        this.setState({
            result: ""
        })
    };

    borrar = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="container">
                <div className="calculator-body">
                    <h1 className="calculator-title"  >Calculadora</h1>
                    <ResultadosComponente result={this.state.result}/>
                    <Tablero onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
