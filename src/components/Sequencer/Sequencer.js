import React, { Component } from 'react';
import Generator from '../Generator/Generator';

class Sequencer extends Component {

    constructor(props){
        super(props);
        this.state = {
            sequenceFac: null, factorial: [],
            fibonacciFac:null, fibonacci: [],
            rangeFac:null, range: [], start: '', step: '',
            primeFac:null, prime: [],
            partialFac:null,partial: [],partials: '',
            pipedFac:null,piped: [],
            pipeOption: '', pipedPartial: '', pipedStart: '', pipedStep: '',
        };

    }

    handleStartOnChange(e) {
        this.setState({
            start: e.target.value
        });
    }

    handlePartialsOnChange(e) {
        this.setState({
            partials: e.target.value
        });
    }

    handleStepOnChange(e) {
        this.setState({
            step: e.target.value
        });
    }

    handlePipeListOnChange(e) {
        this.setState({
            pipeOption: e.target.value
        });
    }

    handlePipedPartialsOnChange(e) {
        this.setState({
            pipedPartial : e.target.value
        });
    }

    handlePipedStartOnChange(e) {
        this.setState({
            pipedStart : e.target.value
        });
    }

    handlePipedStepOnChange(e) {
        this.setState({
            pipedStep : e.target.value
        });
    }

    handleClick = (e) => {
        e.stopPropagation();
        const btnId = e.target.id;
        switch (btnId) {
            case 'factorial':
                this.factorialSequencer();
                break;
            case 'fibonacci':
                this.fibonacciSequencer();
                break;
            case 'range':
                this.rangeSequencer();
                break;
            case 'prime':
                this.primeSequencer();
                break;
            case 'partial':
                this.partialSequencer();
                break;
            case 'piped':
                const pipeOption = this.state.pipeOption;
                if(pipeOption === ''){
                    alert('Kindly choose a Sequencer')
                }else {
                    if(pipeOption === 'range'){
                        const start = this.state.pipedStart ;
                        const step = this.state.pipedStep ;
                        if(start !== '' && step !== ''){
                            this.pipedSequencer();
                        }else{
                            alert('Kindly input a Range');
                        }
                    }
                    else if(pipeOption === 'partial'){
                        const partialInput = this.state.pipedPartial;
                        if(partialInput !== ''){
                            this.pipedSequencer();
                        }else {
                            alert('Kindly input a partial input');
                        }
                    }
                    else {
                        this.pipedSequencer();
                    }
                }
                break;
            default:
                return ;
        }

    };

    fibonacciSequencer() {
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
    }

    rangeSequencer() {
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
    }

    primeSequencer() {
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
    }

    factorialSequencer() {
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
    }

    formatPartial(word){
        return word.split(' ').map(el => {
            let number = Number(el);
            return number === 0 ? number : number || el;
        });
    }

    partialSequencer() {
        if(this.state.partialFac == null){
            const partial = Generator.partialSumSeq;
            let partialsInput =  this.state.partials.trim();
            const sequence = Generator.generator(partial,this.formatPartial(partialsInput));
            this.setState({
                partialFac: sequence,
                partial: [...this.state.partial, sequence.next()]
            });
        } else{
            const nextSequenceVal = this.state.partialFac.next();
            this.setState({
                partial: [...this.state.partial, nextSequenceVal]
            });
        }
    }

    pipedSequencer() {
        function getInputSequence(inputSequencer,formatPartial,partialInput,pipedStart,pipedStep) {
            const ac = Generator.accumulator();
            let piped;
            switch (inputSequencer) {
                case 'factorial' :
                    piped = Generator.pipeSeq(Generator.factorialSeq).pipeline(ac).invoke();
                    break;
                case 'fibonacci' :
                    piped = Generator.pipeSeq(Generator.fibonacciSeq).pipeline(ac).invoke();
                    break;
                case  'range' :
                    piped = Generator.pipeSeq(Generator.rangeSeq,pipedStart,pipedStep).pipeline(ac).invoke();
                    break;
                case  'prime' :
                    piped = Generator.pipeSeq(Generator.primeSeq).pipeline(ac).invoke();
                    break;
                case 'partial':
                    const partialsArr = formatPartial(partialInput);
                    piped = Generator.pipeSeq(Generator.partialSumSeq,partialsArr).pipeline(ac).invoke();
                    break;
                default:
                    return;

            }
            return piped;
        }

        if(this.state.pipedFac == null){
            const pipeOption = this.state.pipeOption;
            const partialInput = this.state.pipedPartial;
            const pipedStart = this.state.pipedStart;
            const pipedStep = this.state.pipedStep;
            const pipeline = getInputSequence(pipeOption,this.formatPartial,partialInput,pipedStart,pipedStep);
            const sequence = Generator.generator(pipeline);
            this.setState({
                pipedFac: sequence,
                piped: [...this.state.piped, sequence.next()]
            });
        } else{
            const nextSequenceVal = this.state.pipedFac.next();
            this.setState({
                piped: [...this.state.piped, nextSequenceVal]
            });
        }
    }

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
                    <input type="text" id="partial-values" placeholder="1 3 7 2 0"
                           value={this.state.partials} onChange={ (e) => this.handlePartialsOnChange(e) } />
                    <ul className="partial-list">
                        {
                            this.state.partial.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="col-md-2" id="piped" onClick={this.handleClick}>
                    <button id="piped"  onClick={ this.handleClick } > Piped </button>
                    <br />
                    <select id="piped-options" onChange={ (e) => this.handlePipeListOnChange(e) }>
                        <option value="">Choose a Sequencer</option>
                        <option value="factorial">Factorial</option>
                        <option value="fibonacci">Fibonacci</option>
                        <option value="range">Range</option>
                        <option value="prime">Prime</option>
                        <option value="partial">Partial</option>
                    </select>
                    {
                        this.state.pipeOption === 'range' ? (
                            <div>
                                <input type="number" id="piped-start" placeholder="Start Number"
                                       value={this.state.pipedStart} onChange={ (e) => this.handlePipedStartOnChange(e) } />
                                <input type="number" id="piped-step" placeholder="Step"
                                       value={this.state.pipedStep} onChange={ (e) => this.handlePipedStepOnChange(e) } />
                            </div>
                        ):('')
                    }
                    {
                        this.state.pipeOption === 'partial' ? (
                            <input type="text" id="piped-partial" placeholder="1 3 7 2 0"
                                   value={this.state.pipedPartial} onChange={ (e) => this.handlePipedPartialsOnChange(e) } />
                        ):('')
                    }
                    <ul className="piped-list">
                        {
                            this.state.piped.map(function(value) {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }

}

export default Sequencer;