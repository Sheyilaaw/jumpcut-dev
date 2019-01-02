import React, { Component } from 'react';
import Generator from '../Generator/Generator';

class Sequencer extends Component {

    constructor(props){
        super(props);
        this.state = {
            sequenceFac: null,
            fibonacciFac:null,
            factorial: [],
            fibonacci: [],
        };

    }

    handleClick = (e) => {
        const btnId = e.target.id;
        switch (btnId) {
            case 'factorial':
                if(this.state.sequenceFac == null){
                    const factorial = Generator.factorialSeq;
                    const sequence = Generator.generator(factorial);
                    this.setState({
                        sequenceFac: sequence,
                        factorial: [...this.state.factorial, sequence.next()]
                    });
                } else{
                    const nextSequenceVal = this.state.sequenceFac.next();
                    this.setState({
                        factorial: [...this.state.factorial, nextSequenceVal]
                    });
                }
                break;
            case 'fibonacci':
                if(this.state.fibonacciFac == null){
                    const fibonacci = Generator.fibonacciSeq;
                    const sequence = Generator.generator(fibonacci);
                    this.setState({
                        fibonacciFac: sequence,
                        fibonacci: [...this.state.fibonacci, sequence.next()]
                    });
                } else{
                    const nextSequenceVal = this.state.fibonacciFac.next();
                    this.setState({
                        fibonacci: [...this.state.fibonacci, nextSequenceVal]
                    });
                }
                break;
            default:
                break;
        }

    };

    render() {
        return (
            <div className="row">

                <div className="col-md-2">
                    <button id="factorial" onClick={this.handleClick}> Factorial </button>
                    <ul className="factorial-list">
                        {
                            this.state.factorial.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>

                </div>

                <div className="col-md-2" >
                    <button id="fibonacci" onClick={ this.handleClick } > Fibonacci </button>
                    <ul className="fibonacci-list">
                        {
                            this.state.fibonacci.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="col-md-2" id="range" onClick={this.handleClick}>
                    <button id="range" onClick={ this.handleClick } > Range </button>
                </div>

                <div className="col-md-2" id="prime" onClick={this.handleClick}>
                    <button id="prime" onClick={ this.handleClick } > Prime </button>
                </div>

                <div className="col-md-2" id="partial" onClick={this.handleClick}>
                    <button id="partial" onClick={ this.handleClick } > Partial </button>
                </div>

                <div className="col-md-2" id="piped" onClick={this.handleClick}>
                    <button id="piped"  onClick={ this.handleClick } > Piped </button>
                </div>

            </div>
        )
    }

}

export default Sequencer;