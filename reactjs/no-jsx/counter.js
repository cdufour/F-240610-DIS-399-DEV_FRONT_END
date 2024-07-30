class Counter extends React.Component {

    // propriétés
    state = { num: 0 }

    // méthodes
    onIncrement = () => {
        this.setState({ num: this.state.num + 1 }) // State update => DOM rerender
    }

    onDecrement = () => {
        this.setState({ num: this.state.num - 1 }) // State update => DOM rerender
    }

    render() {
        return React.createElement('div', {}, 
            React.createElement('button', { onClick: this.onIncrement }, 'Increment'),
            React.createElement('button', { onClick: this.onDecrement }, 'Decrement'),
            React.createElement('p', {}, this.state.num)
        );

        // équivalent JSX
        <div>
            <button></button>
            <button></button>
            <p></p>
        </div>
    }

}