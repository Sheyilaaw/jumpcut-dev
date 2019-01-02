import React, { Component } from 'react';
import Generator from '../Generator/Generator';

class Sequencer extends Component {

    constructor(props){
        super(props);
        this.state = {
            start: '',
            step: '',
            sequenceFac: null,
            fibonacciFac:null,
            rangeFac:null,
            primeFac:null,
            factorial: [],
            fibonacci: [],
            range: [],
            prime: [],
        };

    }

    handleStartOnChange(e) {
        this.setState({
            start: e.target.value
        });
    }

    handleStepOnChange(e) {
        this.setState({
            step: e.target.value
        });
    }

    handleClick = (e) => {
        e.stopPropagation();
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
            case 'range':
                if(this.state.state === '' || this.state.step === ''){
                    alert('Enter a start and step');
                }else {
                    if(this.state.rangeFac == null){
                        const start = parseInt(this.state.start);
                        const step = parseInt(this.state.step);
                        const range = Generator.rangeSeq;
                        const sequence = Generator.generator(range,start,step);
                        this.setState({
                            rangeFac: sequence,
                            range: [...this.state.range, sequence.next()]
                        });
                    } else{
                        const nextSequenceVal = this.state.rangeFac.next();
                        this.setState({
                            range: [...this.state.range, nextSequenceVal]
                        });
                    }
                }
                break;
            case 'prime':
                if(this.state.primeFac == null){
                    const prime = Generator.primeSeq;
                    const sequence = Generator.generator(prime);
                    this.setState({
                        primeFac: sequence,
                        prime: [...this.state.prime, sequence.next()]
                    });
                } else{
                    const nextSequenceVal = this.state.primeFac.next();
                    this.setState({
                        prime: [...this.state.prime, nextSequenceVal]
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
                    <input type="number" id="start" placeholder="Start Number"
                           value={this.state.start} onChange={ (e) => this.handleStartOnChange(e) } />
                    <input type="number" id="step" placeholder="Step"
                           value={this.state.step} onChange={ (e) => this.handleStepOnChange(e) } />
                    <ul className="range-list">
                        {
                            this.state.range.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>

                </div>

                <div className="col-md-2" id="prime" onClick={this.handleClick}>
                    <button id="prime" onClick={ this.handleClick } > Prime </button>
                    <ul className="prime-list">
                        {
                            this.state.prime.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>
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