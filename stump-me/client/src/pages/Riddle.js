import React from 'react';

class Riddle extends React.Component {
    riddleApi = 'https://opentdb.com/api.php?amount=50&type=multiple';
    riddleArray = []

    constructor(props) {
        super(props);

        this.state = {
            riddleArray: [],
            // mounted: true,
            riddle: {
                question: "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
                correct_answer: "Jordan",
                incorrect_answers: ["Benetton, Ferrari, Mercedes"],
            },
        };
    }

    // componentWillUnmount() {
    //     this.mounted = false;
    // }

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
        // const answerBtn = {
        //     backgroundColor: "white",
        //     color: "blue",
        //     alignItems: "space-around",
        // };

        return (
            <div>
                <div>
                    <>
                        <h1 >{this.state.riddle.question}</h1>
                    </>

                    <>
                        <h2>{this.state.riddle.incorrect_answers.concat(this.state.riddle.correct_answer).map((item) => (<button className='answerBtn' onClick={() => this.state.checkAnswer} key={item}>{item}</button>))}</h2>
                    </>
                </div>
            </div>
        )
    }
}

export default Riddle

// {/* <h2>{this.state.riddle.correct_answer + "," + this.state.riddle.incorrect_answers}</h2> */}