import React from 'react';

const levels = {easy: 10, medium: 100, hard: 1000};

class Addition extends React.Component {
    n1 = 0;
    n2 = 0;
    result = 0;

    constructor({difficulty}) {
        super();
        this.n1 = Math.floor(Math.random() * levels[difficulty]);
        this.n2 = Math.floor(Math.random() * levels[difficulty]);
        this.result = this.n1 + this.n2;
        this.state = {resultVisible: false};
    }

    onClick() {
        this.setState({resultVisible: true})
    }
    
    render() {
        let result = this.state.resultVisible ? this.result : '';

        return (
            <div>
                <span>{this.n1}</span> + <span>{this.n2}</span>
                <button onClick={ () => this.onClick() }>Résultat</button>
                <span>{result}</span>      
            </div>
        )
    }
}

export default Addition;