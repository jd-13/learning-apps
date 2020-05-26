const feedbackDiv = document.querySelector("#feedback");
const questionDiv = document.querySelector("#questionContainer");
const buttonsDiv = document.querySelector("#mainButtons");

class NextButtonElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e) {
        // Disable this button
        ReactDOM.render(<MainButtonsElement reportTitle="" reportBody="" nextButtonDisabled={true}/>, buttonsDiv);

        // Clear the feedback and text fields
        ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

        // Load the next question
        newQuestion();
    }

    render() {
        return (
            <button type="button" className="button is-success" id="nextButton" disabled={this.props.disabled} onClick={e => this.onClick(e)}>Next</button>
        );
    }
}

class ReportButtonElement extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Sometimes we want to update MainButtonsElement to enable NextButtonElement but don't want
        // to update this element
        if (nextProps.reportTitle === undefined || nextProps.reportBody === undefined) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const reportTitle = `Reported: ${this.props.reportTitle}`;
        const reportBody = `.....................%0AThanks for your report, please add any additional comments above this line and click submit.%0A%0ADebug info: ${this.props.reportBody}`;
        const reportUrl = `https://github.com/jd-13/learning-apps/issues/new?title=${reportTitle}&body=${reportBody}&labels=reported-question`;

        return (
            <a href={reportUrl} target="_blank" rel="noopener">
                <button type="button" className="button is-danger is-outlined">
                    <span className="icon"><i className="far fa-flag"></i></span>
                    <span>Report</span>
                </button>
            </a>
        );
    }
}

class MainButtonsElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-narrow has-text-centered">
                    <ReportButtonElement reportTitle={this.props.reportTitle} reportBody={this.props.reportBody}/>
                </div>
                <div className="column is-narrow has-text-centered">
                    <NextButtonElement disabled={this.props.nextButtonDisabled}/>
                </div>
            </div>
        )
    }
}

class FeedbackElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container has-text-centered is-size-4" id="isCorrect">{this.props.isCorrect}</div>
                <br></br>
                <div className="container has-text-centered" id="feedbackLine1">{this.props.feedbackText}</div>
            </div>
        );
    }
}

class TypedQuestionElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        console.log(this.props.answer);

        // Check the answer
        if ($("#answerInput").val().toLowerCase() === this.props.answer.toLowerCase()) {
            ReactDOM.render(<FeedbackElement isCorrect={"Correct!"} feedbackText={this.props.feedbackText}/>,
                            feedbackDiv);
        } else {
            ReactDOM.render(<FeedbackElement isCorrect={"Oops!"} feedbackText={this.props.feedbackText}/>,
                            feedbackDiv);
        }

        ReactDOM.render(<MainButtonsElement nextButtonDisabled={false}/>, buttonsDiv);
    }

    render() {
        // Clear the previous answer if one exists
        let answerInput = document.querySelector("#answerInput");
        if (answerInput != null) {
            answerInput.value = "";
        }

        return (
            <div>
                <img src={this.props.flagURL} class="flag"></img>

                <br></br>
                <br></br>

                <div>{this.props.questionText}</div>
                <div>
                    <br></br>
                    <input class="input" type="text" name="answer" id="answerInput"/>
                </div>
                <div>
                    <br></br>
                    <button type="button" className="button" id="submitBtn" onClick={e => this.onSubmit(e)}>Submit</button>
                </div>
            </div>
        );
    }
}

class ChoiceQuestionElement extends React.Component {
    constructor(props) {
        super(props);
    }

    onAnswer(e) {
        const answerText = e.target.textContent.toLowerCase();

        if (answerText === this.props.answer.toLowerCase()) {
            ReactDOM.render(<FeedbackElement isCorrect={"Correct!"} feedbackText={this.props.feedbackText}/>,
                            feedbackDiv);
        } else {
            ReactDOM.render(<FeedbackElement isCorrect={"Oops!"} feedbackText={this.props.feedbackText}/>,
                            feedbackDiv);
        }

        ReactDOM.render(<MainButtonsElement nextButtonDisabled={false}/>, buttonsDiv);
    }

    render() {
        // For the nested JSX
        let that = this;

        return (
            <div>
                <img src={this.props.flagURL} class="flag"></img>

                <br></br>
                <br></br>

                <div>{this.props.questionText}</div>

                <br></br>
                <br></br>

                <div className="columns is-vcentered is-centered is-mobile">
                    <div className="column is-narrow">

                        {this.props.shuffledAnswers.map(function(object) {
                            return <div><button type="button" className="button multiAnswer" onClick={e => that.onAnswer(e)}>{object}</button><br></br></div>;
                        })}

                    </div>
                </div>
            </div>
        );
    }
}