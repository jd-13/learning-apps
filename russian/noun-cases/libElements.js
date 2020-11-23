var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var feedbackDiv = document.querySelector("#feedback");
var questionDiv = document.querySelector("#questionContainer");
var buttonsDiv = document.querySelector("#mainButtons");
var dropdownDiv = document.querySelector("#dropdownContainer");

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
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: "", reportBody: "", nextButtonDisabled: true }), buttonsDiv);

            // Clear the feedback and text fields
            ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

            // Load the next question
            newQuestion();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { type: "button", className: "button is-success", id: "nextButton", disabled: this.props.disabled, onClick: function onClick(e) {
                        return _this2.onClick(e);
                    } },
                "Next"
            );
        }
    }]);

    return NextButtonElement;
}(React.Component);

var ReportButtonElement = function (_React$Component2) {
    _inherits(ReportButtonElement, _React$Component2);

    function ReportButtonElement(props) {
        _classCallCheck(this, ReportButtonElement);

        return _possibleConstructorReturn(this, (ReportButtonElement.__proto__ || Object.getPrototypeOf(ReportButtonElement)).call(this, props));
    }

    _createClass(ReportButtonElement, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            // Sometimes we want to update MainButtonsElement to enable NextButtonElement but don't want
            // to update this element
            if (nextProps.reportTitle === undefined || nextProps.reportBody === undefined) {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var reportTitle = "Reported: " + this.props.reportTitle;
            var reportBody = "....................%0AThanks for your report, please add any additional comments above this line and click submit.%0A%0ADebug info: " + this.props.reportBody;
            var reportUrl = "https://github.com/jd-13/learning-apps/issues/new?title=" + reportTitle + "&body=" + reportBody + "&labels=reported-question";

            return React.createElement(
                "a",
                { href: reportUrl, target: "_blank", rel: "noopener" },
                React.createElement(
                    "button",
                    { type: "button", className: "button is-danger is-outlined" },
                    React.createElement(
                        "span",
                        { className: "icon" },
                        React.createElement("i", { className: "far fa-flag" })
                    ),
                    React.createElement(
                        "span",
                        null,
                        "Report"
                    )
                )
            );
        }
    }]);

    return ReportButtonElement;
}(React.Component);

var MainButtonsElement = function (_React$Component3) {
    _inherits(MainButtonsElement, _React$Component3);

    function MainButtonsElement(props) {
        _classCallCheck(this, MainButtonsElement);

        return _possibleConstructorReturn(this, (MainButtonsElement.__proto__ || Object.getPrototypeOf(MainButtonsElement)).call(this, props));
    }

    _createClass(MainButtonsElement, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "columns is-centered is-mobile" },
                React.createElement(
                    "div",
                    { className: "column is-narrow has-text-centered" },
                    React.createElement(ReportButtonElement, { reportTitle: this.props.reportTitle, reportBody: this.props.reportBody })
                ),
                React.createElement(
                    "div",
                    { className: "column is-narrow has-text-centered" },
                    React.createElement(NextButtonElement, { disabled: this.props.nextButtonDisabled })
                )
            );
        }
    }]);

    return MainButtonsElement;
}(React.Component);

var CasesDropdownElement = function (_React$Component4) {
    _inherits(CasesDropdownElement, _React$Component4);

    function CasesDropdownElement(props) {
        _classCallCheck(this, CasesDropdownElement);

        return _possibleConstructorReturn(this, (CasesDropdownElement.__proto__ || Object.getPrototypeOf(CasesDropdownElement)).call(this, props));
    }

    _createClass(CasesDropdownElement, [{
        key: "render",
        value: function render() {
            // For the nested JSX
            var that = this;

            return React.createElement(
                "div",
                { "class": "dropdown is-up", id: "casesDropdown" },
                React.createElement(
                    "div",
                    { "class": "dropdown-trigger" },
                    React.createElement(
                        "button",
                        { "class": "button", "aria-haspopup": "true", "aria-controls": "dropdown-menu7", id: "casesDropdownButton" },
                        React.createElement(
                            "span",
                            null,
                            "Cases"
                        ),
                        React.createElement(
                            "span",
                            { "class": "icon is-small" },
                            React.createElement("i", { "class": "fas fa-angle-up", "aria-hidden": "true" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "dropdown-menu", id: "dropdown-menu7", role: "menu" },
                    React.createElement(
                        "div",
                        { "class": "dropdown-content" },
                        React.createElement(
                            "div",
                            { "class": "dropdown-item" },
                            React.createElement(
                                "p",
                                null,
                                "Enable and disable cases for the question selection"
                            ),
                            React.createElement(
                                "div",
                                { "class": "has-text-grey-light is-size-7" },
                                React.createElement(
                                    "p",
                                    null,
                                    "Nominative case is always enabled"
                                )
                            )
                        ),
                        Object.keys(this.props.enabledCases).map(function (caseKey) {
                            var id = caseKey + "checkbox";

                            var buttonClass = "button is-primary";
                            if (!that.props.enabledCases[caseKey]) {
                                buttonClass += " is-inverted";
                            }

                            return React.createElement(
                                "div",
                                { "class": "dropdown-item" },
                                React.createElement(
                                    "button",
                                    { "class": buttonClass, id: id },
                                    caseKey
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return CasesDropdownElement;
}(React.Component);

var FeedbackElement = function (_React$Component5) {
    _inherits(FeedbackElement, _React$Component5);

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
                    { className: "container has-text-centered is-size-4", id: "isCorrect" },
                    this.props.isCorrect
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "container has-text-centered", id: "feedbackLine1" },
                    this.props.feedbackLine1
                ),
                React.createElement(
                    "div",
                    { className: "container has-text-centered", id: "feedbackLine2" },
                    this.props.feedbackLine2
                )
            );
        }
    }]);

    return FeedbackElement;
}(React.Component);

var SimpleQuestionElement = function (_React$Component6) {
    _inherits(SimpleQuestionElement, _React$Component6);

    function SimpleQuestionElement(props) {
        _classCallCheck(this, SimpleQuestionElement);

        return _possibleConstructorReturn(this, (SimpleQuestionElement.__proto__ || Object.getPrototypeOf(SimpleQuestionElement)).call(this, props));
    }

    _createClass(SimpleQuestionElement, [{
        key: "onSubmit",
        value: function onSubmit(e) {
            // Check the answer
            if ($("#answerInput").val().toLowerCase() === this.props.answer) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            }

            ReactDOM.render(React.createElement(MainButtonsElement, { nextButtonDisabled: false }), buttonsDiv);
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            // Clear the previous answer if one exists
            var answerInput = document.querySelector("#answerInput");
            if (answerInput != null) {
                answerInput.value = "";
            }

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
                    React.createElement("input", { "class": "input", type: "text", name: "answer", id: "answerInput" })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { type: "button", className: "button", id: "submitBtn", onClick: function onClick(e) {
                                return _this8.onSubmit(e);
                            } },
                        "Submit"
                    )
                )
            );
        }
    }]);

    return SimpleQuestionElement;
}(React.Component);

var CaseChoiceQuestionElement = function (_React$Component7) {
    _inherits(CaseChoiceQuestionElement, _React$Component7);

    function CaseChoiceQuestionElement(props) {
        _classCallCheck(this, CaseChoiceQuestionElement);

        return _possibleConstructorReturn(this, (CaseChoiceQuestionElement.__proto__ || Object.getPrototypeOf(CaseChoiceQuestionElement)).call(this, props));
    }

    _createClass(CaseChoiceQuestionElement, [{
        key: "onAnswer",
        value: function onAnswer(e) {
            var answerText = e.target.textContent.toLowerCase();

            if (answerText === this.props.answer) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackLine1: this.props.feedbackLine1, feedbackLine2: this.props.feedbackLine2 }), feedbackDiv);
            }

            ReactDOM.render(React.createElement(MainButtonsElement, { nextButtonDisabled: false }), buttonsDiv);
        }
    }, {
        key: "render",
        value: function render() {
            // Prepare the data
            var splitPhrase = this.props.questionText.split("||");

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
                    { className: "columns is-vcentered is-centered is-mobile" },
                    React.createElement(
                        "div",
                        { className: "column is-narrow" },
                        splitPhrase[0]
                    ),
                    React.createElement(
                        "div",
                        { className: "column is-narrow" },
                        this.props.shuffledAnswers.map(function (object) {
                            return React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "button",
                                    { type: "button", className: "button multiAnswer", onClick: function onClick(e) {
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
                        { className: "column is-narrow" },
                        splitPhrase[1]
                    )
                )
            );
        }
    }]);

    return CaseChoiceQuestionElement;
}(React.Component);