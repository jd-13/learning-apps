var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseQuestion = function () {
    function BaseQuestion() {
        _classCallCheck(this, BaseQuestion);
    }
    // Do nothing


    /**
     * Inheriting classes must implement this to populate questionDiv with the HTML elements
     * required by the question, and implement a call back for one of the elements which will enable
     * $nextBtn when the user has provided an answer.
     */


    _createClass(BaseQuestion, [{
        key: "renderQuestion",
        value: function renderQuestion() {
            throw new BadMethodCallException();
        }
    }]);

    return BaseQuestion;
}();

/**
 * Generates and renders a question which asks the user to type the correct case.
 */


var TypedQuestion = function (_BaseQuestion) {
    _inherits(TypedQuestion, _BaseQuestion);

    function TypedQuestion() {
        _classCallCheck(this, TypedQuestion);

        var _this = _possibleConstructorReturn(this, (TypedQuestion.__proto__ || Object.getPrototypeOf(TypedQuestion)).call(this));

        console.log("Creating TypedQuestion");

        // Choose a country at random
        var chosenCountry = Countries.getRandomCountry();
        console.log("Chose country: " + chosenCountry.getCountryName());

        var questions = ["_setupCountry", "_setupGenitive", "_setupLanguage", "_setupNationality"];

        var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
        _this[chosenQuestion](chosenCountry);
        return _this;
    }

    _createClass(TypedQuestion, [{
        key: "_setupCountry",
        value: function _setupCountry(chosenCountry) {
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Что это за страна?";
            this._answers = [chosenCountry.getCountryName()];
            this._feedbackText = "\u042D\u0442\u043E " + chosenCountry.getCountryName();
        }
    }, {
        key: "_setupGenitive",
        value: function _setupGenitive(chosenCountry) {
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Они из ...";
            this._answers = [chosenCountry.getGenitive()];
            this._feedbackText = "\u041E\u043D\u0438 \u0438\u0437 " + chosenCountry.getGenitive();
        }
    }, {
        key: "_setupLanguage",
        value: function _setupLanguage(chosenCountry) {
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Они говорят по- ...";
            this._answers = chosenCountry.getLanguages();
            this._feedbackText = "\u041E\u043D\u0438 \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043F\u043E-" + chosenCountry.getLanguages();
        }
    }, {
        key: "_setupNationality",
        value: function _setupNationality(chosenCountry) {
            // Choose a random gender
            var _Countries$getRandomG = Countries.getRandomGender(),
                _Countries$getRandomG2 = _slicedToArray(_Countries$getRandomG, 2),
                chosenGender = _Countries$getRandomG2[0],
                chosenPronoun = _Countries$getRandomG2[1];

            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = chosenPronoun + " - \u044D\u0442\u043E ...";
            this._answers = [chosenCountry.getNationality(chosenGender)];
            this._feedbackText = chosenPronoun + " " + chosenCountry.getNationality(chosenGender);
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            // Render the question
            ReactDOM.render(React.createElement(TypedQuestionElement, { flagURL: this._flagURL, questionText: this._questionText, answers: this._answers, feedbackText: this._feedbackText }), questionDiv);

            // Render the buttons
            var reportTitle = this._questionText;
            var reportBody = "[" + this._answers + "]";
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: reportTitle, reportBody: reportBody, nextButtonDisabled: true }), buttonsDiv);
        }
    }]);

    return TypedQuestion;
}(BaseQuestion);

var ChoiceQuestion = function (_BaseQuestion2) {
    _inherits(ChoiceQuestion, _BaseQuestion2);

    function ChoiceQuestion() {
        _classCallCheck(this, ChoiceQuestion);

        var _this2 = _possibleConstructorReturn(this, (ChoiceQuestion.__proto__ || Object.getPrototypeOf(ChoiceQuestion)).call(this));

        console.log("Creating ChoiceQuestion");

        // Choose a country at random
        var chosenCountry = Countries.getRandomCountry();
        console.log("Chose country: " + chosenCountry.getCountryName());

        var questions = ["_setupCountry", "_setupGenitive", "_setupLanguage", "_setupNationality"];

        var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
        _this2[chosenQuestion](chosenCountry);
        return _this2;
    }

    _createClass(ChoiceQuestion, [{
        key: "_setupCountry",
        value: function _setupCountry(chosenCountry) {
            // Choose two incorrect countries at random
            // TODO: there may be duplicates
            this._incorrectChoices = [Countries.getRandomCountry().getCountryName(), Countries.getRandomCountry().getCountryName()];
            console.log("Incorrect choices: " + this._incorrectChoices);

            // Store the results
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Что это за страна?";
            this._answers = [chosenCountry.getCountryName()];
            this._feedbackText = "\u042D\u0442\u043E " + chosenCountry.getCountryName();
        }
    }, {
        key: "_setupGenitive",
        value: function _setupGenitive(chosenCountry) {
            // Choose two incorrect countries at random
            // TODO: there may be duplicates
            this._incorrectChoices = [Countries.getRandomCountry().getGenitive(), Countries.getRandomCountry().getGenitive()];
            console.log("Incorrect choices: " + this._incorrectChoices);

            // Store the results
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Они из ...";
            this._answers = [chosenCountry.getGenitive()];
            this._feedbackText = "\u041E\u043D\u0438 \u0438\u0437 " + chosenCountry.getGenitive();
        }
    }, {
        key: "_setupLanguage",
        value: function _setupLanguage(chosenCountry) {
            // Choose two incorrect countries at random
            // TODO: there may be duplicates
            this._incorrectChoices = [Countries.getRandomCountry().getRandomLanguage(), Countries.getRandomCountry().getRandomLanguage()];
            console.log("Incorrect choices: " + this._incorrectChoices);

            // Store the results
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = "Они говорят по- ...";
            this._answers = chosenCountry.getLanguages();
            this._feedbackText = "\u041E\u043D\u0438 \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043F\u043E-" + chosenCountry.getLanguages();
        }
    }, {
        key: "_setupNationality",
        value: function _setupNationality(chosenCountry) {
            // Choose a random gender
            var _Countries$getRandomG3 = Countries.getRandomGender(),
                _Countries$getRandomG4 = _slicedToArray(_Countries$getRandomG3, 2),
                chosenGender = _Countries$getRandomG4[0],
                chosenPronoun = _Countries$getRandomG4[1];

            // Collect all gender versions for this country


            var nationalities = {
                "masculine": chosenCountry.getNationality("masculine"),
                "feminine": chosenCountry.getNationality("feminine"),
                "plural": chosenCountry.getNationality("plural")

                // Store the answer and remove it from the dictionary
            };this._answers = [nationalities[chosenGender]];
            console.log(this.answer);
            delete nationalities[chosenGender];

            // Use the remaining values in the dictionary as incorrect options
            this._incorrectChoices = Object.values(nationalities);

            // Store the results
            this._flagURL = chosenCountry.getFlagURL();
            this._questionText = chosenPronoun + " - \u044D\u0442\u043E ...";
            this._feedbackText = chosenPronoun + " " + chosenCountry.getNationality(chosenGender);
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            // Prepare the answer choices
            shuffledAnswers = [].concat(_toConsumableArray(this._incorrectChoices));
            shuffledAnswers.push(this._answers);
            shuffleArray(shuffledAnswers);

            // Render the question
            ReactDOM.render(React.createElement(ChoiceQuestionElement, { flagURL: this._flagURL, questionText: this._questionText, answers: this._answers, shuffledAnswers: shuffledAnswers, incorrectChoices: this._incorrectChoices, feedbackText: this._feedbackText }), questionDiv);

            // Render the buttons
            var reportTitle = this._questionText;
            var reportBody = "[" + this._shuffledAnswers + "][" + this._answers + "]";
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: reportTitle, reportBody: reportBody, nextButtonDisabled: true }), buttonsDiv);
        }
    }]);

    return ChoiceQuestion;
}(BaseQuestion);