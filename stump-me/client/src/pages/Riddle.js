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

                    var tempArr = result.results.filter(element => {
                       return element.question.includes("&quot" || "#039") ? false : true;
                    })

                    this.riddleArray = tempArr;
                    console.log(this.riddleArray)
                    this.setState({
                        
                        isLoaded: true,
                        riddleArray: tempArr,
                        riddle: this.riddleArray[0],
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
                            {this.state.riddle.incorrect_answers.concat(this.state.riddle.correct_answer).map((item) => (<button key={item} onClick={() => {
                                console.log(this.state.riddle.correct_answer)
                                if (item === this.state.riddle.correct_answer) {
                                    console.log('correct');
                                } else {
                                    console.log('incorrect');
                                }
                            


                            }}>{item}</button>))}
                        </div>
                </div>
            </div>
        )
    }
}

export default Riddle

// {/* <h2>{this.state.riddle.correct_answer + "," + this.state.riddle.incorrect_answers}</h2> */}