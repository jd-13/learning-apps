var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var feedbackDiv = document.querySelector("#feedback");
var questionDiv = document.querySelector("#questionContainer");
var nextButton = document.querySelector("#nextButton");

var NextButtonElement = function (_React$Component) {
    _inherits(NextButtonElement, _React$Component);

    function NextButtonElement(props) {
        _classCallCheck(this, NextButtonElement);

        return _possibleConstructorReturn(this, (NextButtonElement.__proto__ || Object.getPrototypeOf(NextButtonElement)).call(this, props));
    }

    _createClass(NextButtonElement, [{
        key: "onClick",
        value: function onClick(e) {
            // Disable this button
            ReactDOM.render(React.createElement(NextButtonElement, { disabled: true }), nextButton);

            // Clear the feedback and text fields
            ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

            // Load the next question
            question = newQuestion(DICTIONARY);
            question.renderQuestion();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { "class": "container has-text-centered" },
                React.createElement(
                    "button",
                    { type: "button", "class": "button is-success", id: "nextButton", disabled: this.props.disabled, onClick: function onClick(e) {
                            return _this2.onClick(e);
                        } },
                    "Next"
                )
            );
        }
    }]);

    return NextButtonElement;
}(React.Component);

var FeedbackElement = function (_React$Component2) {
    _inherits(FeedbackElement, _React$Component2);

    function FeedbackElement(props) {
        _classCallCheck(this, FeedbackElement);

        return _possibleConstructorReturn(this, (FeedbackElement.__proto__ || Object.getPrototypeOf(FeedbackElement)).call(this, props));
    }

    _createClass(FeedbackElement, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { "class": "container has-text-centered is-size-4", id: "isCorrect" },
                    this.props.isCorrect
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { "class": "container has-text-centered", id: "feedbackLine1" },
                    this.props.feedbackLine1
                ),
                React.createElement(
                    "div",
                    { "class": "container has-text-centered", id: "feedbackLine2" },
                    this.props.feedbackLine2
                )
            );
        }
    }]);

    return FeedbackElement;
}(React.Component);

var ReportButtonElement = function (_React$Component3) {
    _inherits(ReportButtonElement, _React$Component3);

    function ReportButtonElement(props) {
        _classCallCheck(this, ReportButtonElement);

        return _possibleConstructorReturn(this, (ReportButtonElement.__proto__ || Object.getPrototypeOf(ReportButtonElement)).call(this, props));
    }

    _createClass(ReportButtonElement, [{
        key: "render",
        value: function render() {
            var reportTitle = "Reported: " + this.props.reportTitle;
            var reportBody = "--------------------%0AThanks for your report, please add any additional comments above this line and click submit.%0A%0ADebug info: " + this.props.reportBody;
            var reportUrl = "https://github.com/jd-13/learning-apps/issues/new?title=" + reportTitle + "&body=" + reportBody + "&labels=reported-question";

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { href: reportUrl, target: "_blank", rel: "noopener" },
                    React.createElement(
                        "button",
                        { type: "button", "class": "button is-danger is-outlined" },
                        React.createElement(
                            "span",
                            { "class": "icon" },
                            React.createElement("i", { "class": "far fa-flag" })
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Report"
                        )
                    )
                )
            );
        }
    }]);

    return ReportButtonElement;
}(React.Component);

var SimpleQuestionElement = function (_React$Component4) {
    _inherits(SimpleQuestionElement, _React$Component4);

    function SimpleQuestionElement(props) {
        _classCallCheck(this, SimpleQuestionElement);

        return _possibleConstructorReturn(this, (SimpleQuestionElement.__proto__ || Object.getPrototypeOf(SimpleQuestionElement)).call(this, props));
    }

    _createClass(SimpleQuestionElement, [{
        key: "onSubmit",
        value: function onSubmit(e) {
            // Enable the next button
            ReactDOM.render(React.createElement(NextButtonElement, { disabled: false }), nextButton);

            // Check the answer
            if ($("#answerInput").val().toLowerCase() === this.props.answer) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            // Clear the previous answer if one exists
            var answerInput = document.querySelector("#answerInput");
            if (answerInput != null) {
                answerInput.value = "";
            }

            var reportTitle = this.props.questionText;
            var reportBody = "[" + this.props.answer + "]";

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    this.props.questionText
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "answer", id: "answerInput" })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { type: "button", "class": "button", id: "submitBtn", onClick: function onClick(e) {
                                return _this6.onSubmit(e);
                            } },
                        "Submit"
                    )
                ),
                React.createElement(
                    "section",
                    { "class": "section" },
                    React.createElement(ReportButtonElement, { reportTitle: reportTitle, reportBody: reportBody })
                )
            );
        }
    }]);

    return SimpleQuestionElement;
}(React.Component);

var CaseChoiceQuestionElement = function (_React$Component5) {
    _inherits(CaseChoiceQuestionElement, _React$Component5);

    function CaseChoiceQuestionElement(props) {
        _classCallCheck(this, CaseChoiceQuestionElement);

        return _possibleConstructorReturn(this, (CaseChoiceQuestionElement.__proto__ || Object.getPrototypeOf(CaseChoiceQuestionElement)).call(this, props));
    }

    _createClass(CaseChoiceQuestionElement, [{
        key: "onAnswer",
        value: function onAnswer(e) {
            // Enable the next button
            ReactDOM.render(React.createElement(NextButtonElement, { disabled: false }), nextButton);

            var answerText = e.target.textContent.toLowerCase();

            if (answerText === this.props.answer) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            }
        }
    }, {
        key: "render",
        value: function render() {
            // Prepare the data
            var splitPhrase = this.props.questionText.split("||");

            var shuffledAnswers = [].concat(_toConsumableArray(this.props.incorrectChoices));
            shuffledAnswers.push(this.props.answer);
            shuffleArray(shuffledAnswers);

            // For bug reports
            var reportTitle = this.props.questionText;
            var reportBody = "[" + shuffledAnswers + "][" + this.props.answer + "]";

            // For the nested JSX
            var that = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "Choose the correct case for the noun/pronoun in the below phrase:"
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { "class": "columns is-vcentered is-centered is-mobile" },
                    React.createElement(
                        "div",
                        { "class": "column is-narrow" },
                        splitPhrase[0]
                    ),
                    React.createElement(
                        "div",
                        { "class": "column is-narrow" },
                        shuffledAnswers.map(function (object) {
                            return React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "button",
                                    { type: "button", "class": "button multiAnswer", onClick: function onClick(e) {
                                            return that.onAnswer(e);
                                        } },
                                    object
                                ),
                                React.createElement("br", null)
                            );
                        })
                    ),
                    React.createElement(
                        "div",
                        { "class": "column is-narrow" },
                        splitPhrase[1]
                    )
                ),
                React.createElement(
                    "section",
                    { "class": "section" },
                    React.createElement(ReportButtonElement, { reportTitle: reportTitle, reportBody: reportBody })
                )
            );
        }
    }]);

    return CaseChoiceQuestionElement;
}(React.Component);