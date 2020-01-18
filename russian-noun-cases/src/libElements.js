const feedbackDiv = document.querySelector("#feedback");
const questionDiv = document.querySelector("#questionContainer");
const nextButton = document.querySelector("#nextButton");

class NextButtonElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e) {
        // Disable this button
        ReactDOM.render(<NextButtonElement disabled={true}/>, nextButton);

        // Clear the feedback and text fields
        ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

        // Load the next question
        question = newQuestion(DICTIONARY);
        question.renderQuestion();
    }

    render() {
        return (
            <div class="container has-text-centered">
                <button type="button" class="button is-success" id="nextButton" disabled={this.props.disabled} onClick={e => this.onClick(e)}>Next</button>
            </div>
        );
    }
}

class FeedbackElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="container has-text-centered is-size-4" id="isCorrect">{this.props.isCorrect}</div>
                <br></br>
                <div class="container has-text-centered" id="feedbackLine1">{this.props.feedbackLine1}</div>
                <div class="container has-text-centered" id="feedbackLine2">{this.props.feedbackLine2}</div>
            </div>
        );
    }
}

class SimpleQuestionElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        // Enable the next button
        ReactDOM.render(<NextButtonElement disabled={false}/>, nextButton);

        // Check the answer
        if ($("#answerInput").val().toLowerCase() === this.props.answer) {
            ReactDOM.render(<FeedbackElement isCorrect={"Correct!"} feedbackLine1={this.props.feedbackLine1} feedbackLine2={this.props.feedbackLine2}/>,
                            feedbackDiv);
        } else {
            ReactDOM.render(<FeedbackElement isCorrect={"Oops!"} feedbackLine1={this.props.feedbackLine1} feedbackLine2={this.props.feedbackLine2}/>,
                            feedbackDiv);
        }
    }

    render() {
        // Clear the previous answer if one exists
        let answerInput = document.querySelector("#answerInput");
        if (answerInput != null) {
            answerInput.value = "";
        }

        return (
            <div>
                <div>{this.props.questionText}</div>
                <div>
                    <br></br>
                    <input type="text" name="answer" id="answerInput"/>
                </div>
                <div>
                    <br></br>
                    <button type="button" class="button" id="submitBtn" onClick={e => this.onSubmit(e)}>Submit</button>
                </div>
            </div>
        );
    }
}

class CaseChoiceQuestionElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onAnswer(e) {
        // Enable the next button
        ReactDOM.render(<NextButtonElement disabled={false}/>, nextButton);

        const answerText = e.target.textContent.toLowerCase();

        if (answerText === this.props.answer) {
            ReactDOM.render(<FeedbackElement isCorrect={"Correct!"} feedbackLine1={this.props.feedbackLine1} feedbackLine2={this.props.feedbackLine2}/>,
                            feedbackDiv);
        } else {
            ReactDOM.render(<FeedbackElement isCorrect={"Oops!"} feedbackLine1={this.props.feedbackLine1} feedbackLine2={this.props.feedbackLine2}/>,
                            feedbackDiv);
        }
    }

    render() {
        // Prepare the data
        const splitPhrase = this.props.questionText.split("||");

        let shuffledAnswers = [...this.props.incorrectChoices];
        shuffledAnswers.push(this.props.answer);
        shuffleArray(shuffledAnswers);

        // For the nested JSX
        let that = this;

        return (
            <div>
                <div>Choose the correct case for the noun/pronoun in the below phrase:</div>
                <br></br>
                <div class="columns is-vcentered is-centered is-mobile">
                    <div class="column is-narrow">{splitPhrase[0]}</div>
                    <div class="column is-narrow">

                        {shuffledAnswers.map(function(object) {
                            return <div><button type="button" class="button multiAnswer" onClick={e => that.onAnswer(e)}>{object}</button><br></br></div>;
                        })}

                    </div>
                    <div class="column is-narrow">{splitPhrase[1]}</div>
                </div>

            </div>
        );
    }
}