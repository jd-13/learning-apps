var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var feedbackDiv = document.querySelector("#feedback");
var questionDiv = document.querySelector("#questionContainer");
var buttonsDiv = document.querySelector("#mainButtons");

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
            var reportBody = ".....................%0AThanks for your report, please add any additional comments above this line and click submit.%0A%0ADebug info: " + this.props.reportBody;
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

var FeedbackElement = function (_React$Component4) {
    _inherits(FeedbackElement, _React$Component4);

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
                    this.props.feedbackText
                )
            );
        }
    }]);

    return FeedbackElement;
}(React.Component);

var TypedQuestionElement = function (_React$Component5) {
    _inherits(TypedQuestionElement, _React$Component5);

    function TypedQuestionElement(props) {
        _classCallCheck(this, TypedQuestionElement);

        return _possibleConstructorReturn(this, (TypedQuestionElement.__proto__ || Object.getPrototypeOf(TypedQuestionElement)).call(this, props));
    }

    _createClass(TypedQuestionElement, [{
        key: "onSubmit",
        value: function onSubmit(e) {
            console.log(this.props.answers);

            var isCorrect = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.props.answers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var acceptedAnswer = _step.value;

                    if ($("#answerInput").val().toLowerCase() === acceptedAnswer.toLowerCase()) {
                        isCorrect = true;
                        break;
                    }
                }

                // Check the answer
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (isCorrect) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackText: this.props.feedbackText }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackText: this.props.feedbackText }), feedbackDiv);
            }

            ReactDOM.render(React.createElement(MainButtonsElement, { nextButtonDisabled: false }), buttonsDiv);
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            // Clear the previous answer if one exists
            var answerInput = document.querySelector("#answerInput");
            if (answerInput != null) {
                answerInput.value = "";
            }

            return React.createElement(
                "div",
                null,
                React.createElement("img", { src: this.props.flagURL, "class": "flag" }),
                React.createElement("br", null),
                React.createElement("br", null),
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
                                return _this7.onSubmit(e);
                            } },
                        "Submit"
                    )
                )
            );
        }
    }]);

    return TypedQuestionElement;
}(React.Component);

var ChoiceQuestionElement = function (_React$Component6) {
    _inherits(ChoiceQuestionElement, _React$Component6);

    function ChoiceQuestionElement(props) {
        _classCallCheck(this, ChoiceQuestionElement);

        return _possibleConstructorReturn(this, (ChoiceQuestionElement.__proto__ || Object.getPrototypeOf(ChoiceQuestionElement)).call(this, props));
    }

    _createClass(ChoiceQuestionElement, [{
        key: "onAnswer",
        value: function onAnswer(e) {
            var answerText = e.target.textContent.toLowerCase();

            var isCorrect = false;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.props.answers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var acceptedAnswer = _step2.value;

                    if (answerText === acceptedAnswer.toLowerCase()) {
                        isCorrect = true;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (isCorrect) {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Correct!", feedbackText: this.props.feedbackText }), feedbackDiv);
            } else {
                ReactDOM.render(React.createElement(FeedbackElement, { isCorrect: "Oops!", feedbackText: this.props.feedbackText }), feedbackDiv);
            }

            ReactDOM.render(React.createElement(MainButtonsElement, { nextButtonDisabled: false }), buttonsDiv);
        }
    }, {
        key: "render",
        value: function render() {
            // For the nested JSX
            var that = this;

            return React.createElement(
                "div",
                null,
                React.createElement("img", { src: this.props.flagURL, "class": "flag" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    null,
                    this.props.questionText
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "columns is-vcentered is-centered is-mobile" },
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
                    )
                )
            );
        }
    }]);

    return ChoiceQuestionElement;
}(React.Component);