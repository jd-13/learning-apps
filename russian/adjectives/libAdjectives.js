var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ref, _ref2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

kSINGULAR = "singular";
kGENDER = "gender";

kMASCULINE = "masculine";
kFEMININE = "feminine";
kNEUTER = "neuter";
kPLURAL = "plural";

ADJECTIVES = [(_ref = {}, _defineProperty(_ref, kMASCULINE, { "удобный": ["стул", "диван"] }), _defineProperty(_ref, kFEMININE, { "удобная": ["одежда"] }), _defineProperty(_ref, kNEUTER, { "удобное": ["кресло"] }), _defineProperty(_ref, kPLURAL, { "удобные": ["гамаки", "диваны"] }), _ref), (_ref2 = {}, _defineProperty(_ref2, kMASCULINE, { "неудобный": ["диван", "гамак"] }), _defineProperty(_ref2, kFEMININE, { "неудобная": ["одежда"] }), _defineProperty(_ref2, kNEUTER, { "неудобное": ["кресло"] }), _defineProperty(_ref2, kPLURAL, { "неудобные": ["стулья", "кресла"] }), _ref2)];

var Adjective = function () {
    function Adjective(json) {
        _classCallCheck(this, Adjective);

        this._json = json;
    }

    _createClass(Adjective, [{
        key: "getDeclension",
        value: function getDeclension(targetGender) {
            return Object.keys(this._json[targetGender])[0];
        }
    }, {
        key: "getRandomDeclensionAndNoun",
        value: function getRandomDeclensionAndNoun() {

            var chosenDeclension = "";
            var chosenNoun = "";

            // Build an array of the genders and shuffle them so that we can iterate through randomly
            var genders = [kMASCULINE, kFEMININE, kNEUTER, kPLURAL];
            var chosenGender = genders[Math.floor(Math.random() * genders.length)];

            var thisDeclension = this._json[chosenGender];

            chosenDeclension = Object.keys(thisDeclension)[0];

            var availableNouns = thisDeclension[chosenDeclension];
            chosenNoun = availableNouns[Math.floor(Math.random() * availableNouns.length)];

            return [chosenDeclension, chosenNoun, chosenGender];
        }
    }, {
        key: "getRandomDeclensions",
        value: function getRandomDeclensions(numDeclensions, excludeGender) {

            // Build an array of the genders and shuffle them so that we can iterate through randomly
            var shuffledGenders = [kMASCULINE, kFEMININE, kNEUTER, kPLURAL];
            shuffledGenders.splice(shuffledGenders.indexOf(excludeGender), 1);
            shuffleArray(shuffledGenders);

            var retVal = [];

            for (var index = 0; index < numDeclensions; index++) {
                var thisGender = shuffledGenders[index];
                retVal.push(Object.keys(this._json[thisGender])[0]);
            }

            return retVal;
        }
    }]);

    return Adjective;
}();

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */


var Adjectives = function () {
    function Adjectives() {
        _classCallCheck(this, Adjectives);
    }

    _createClass(Adjectives, null, [{
        key: "getRandomAdjective",

        /**
         * Returns a randomly chosen verb from the dictionary.
         */
        value: function getRandomAdjective() {
            return new Adjective(ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]);
        }
    }]);

    return Adjectives;
}();