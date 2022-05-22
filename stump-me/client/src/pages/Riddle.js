
import React from 'react';

class Riddle extends React.Component {
    riddle_api = 'https://opentdb.com/api.php?amount=50&type=multiple';

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            initial: 'state',
            riddle: [],
        };
    }

    componentDidMount = () => {
        fetch(this.riddle_api)
            .then(res => res.json())
            .then(
                result => {
                    this.riddle_group = result.results;
                    this.setState({
                        isLoaded: true,
                        items: result.results,
                        riddle_group: result.results,
                        riddle: result.results[0],
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }





    render() {
        return (
            <div>
                <h1>Riddle</h1>
                <h2 >{this.state.riddle.question}</h2>
                <h3>{this.state.riddle.correct_answer}</h3>
                <h3>{this.state.riddle.incorrect_answers}</h3>
            </div>
        )
    }
}

export default Riddle


