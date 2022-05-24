import React from 'react';

class Riddle extends React.Component {
    riddleApi = 'https://opentdb.com/api.php?amount=50&type=multiple';
    riddleArray = []

    constructor(props) {
        super(props);

        this.state = {
            riddleArray: [],
            riddle: {
                question: "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
                correct_answer: "Jordan",
                incorrect_answers: ["Benetton, Ferrari, Mercedes"],
            },
        };
    }

    componentDidMount = () => {
        fetch(this.riddleApi)
            .then(res => res.json())
            .then(
                result => {
                    this.riddleArray = result.results;
                    this.setState({
                        
                        isLoaded: true,
                        riddleArray: result.results,
                        riddle: result.results[0],
                    });
                },
                error => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            );
    }

    render() {
        
        return (
            <div className="bg-secondary mb-4 py-2 flex-row align-center">
                <div className="container flex-row justify-space-between-lg justify-center align-center">
                    <h1 >{this.state.riddle.question}</h1>
                        <div >
                            {this.state.riddle.incorrect_answers.concat(this.state.riddle.correct_answer).map((item) => (<h2 key={item}>{item}</h2>))}
                        </div>
                </div>
            </div>
        )
    }
}

export default Riddle

// {/* <h2>{this.state.riddle.correct_answer + "," + this.state.riddle.incorrect_answers}</h2> */}