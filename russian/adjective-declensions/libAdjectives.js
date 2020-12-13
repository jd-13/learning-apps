var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

kSINGULAR = "singular";
kGENDER = "gender";

kMASCULINE = "masculine";
kFEMININE = "feminine";
kNEUTER = "neuter";
kPLURAL = "plural";

ADJECTIVES = [(_ref = {}, _defineProperty(_ref, kMASCULINE, { "удобный": ["стул", "диван"] }), _defineProperty(_ref, kFEMININE, { "удобная": ["одежда", "кровать"] }), _defineProperty(_ref, kNEUTER, { "удобное": ["кресло"] }), _defineProperty(_ref, kPLURAL, { "удобные": ["гамаки", "диваны"] }), _ref), (_ref2 = {}, _defineProperty(_ref2, kMASCULINE, { "неудобный": ["диван", "гамак"] }), _defineProperty(_ref2, kFEMININE, { "неудобная": ["одежда"] }), _defineProperty(_ref2, kNEUTER, { "неудобное": ["кресло"] }), _defineProperty(_ref2, kPLURAL, { "неудобные": ["стулья", "кресла"] }), _ref2), (_ref3 = {}, _defineProperty(_ref3, kMASCULINE, { "новый": ["телефон", "стол"] }), _defineProperty(_ref3, kFEMININE, { "новая": ["машина", "футболка"] }), _defineProperty(_ref3, kNEUTER, { "новое": ["меню", "кино"] }), _defineProperty(_ref3, kPLURAL, { "новые": ["дома", "студенты"] }), _ref3), (_ref4 = {}, _defineProperty(_ref4, kMASCULINE, { "старый": ["дом", "человек"] }), _defineProperty(_ref4, kFEMININE, { "старая": ["женщина", "кошка"] }), _defineProperty(_ref4, kNEUTER, { "старое": ["пианино"] }), _defineProperty(_ref4, kPLURAL, { "старые": ["люди"] }), _ref4), (_ref5 = {}, _defineProperty(_ref5, kMASCULINE, { "красивый": ["человек"] }), _defineProperty(_ref5, kFEMININE, { "красивая": ["картина"] }), _defineProperty(_ref5, kNEUTER, { "красивое": ["море"] }), _defineProperty(_ref5, kPLURAL, { "красивые": ["фотографии"] }), _ref5), (_ref6 = {}, _defineProperty(_ref6, kMASCULINE, { "некрасивый": ["завод"] }), _defineProperty(_ref6, kFEMININE, { "некрасивая": ["собака"] }), _defineProperty(_ref6, kNEUTER, { "некрасивое": ["фото"] }), _defineProperty(_ref6, kPLURAL, { "некрасивые": ["животные"] }), _ref6), (_ref7 = {}, _defineProperty(_ref7, kMASCULINE, { "тёплый": ["камин"] }), _defineProperty(_ref7, kFEMININE, { "тёплая": ["батарея", "шапка"] }), _defineProperty(_ref7, kNEUTER, { "тёплое": ["пальто"] }), _defineProperty(_ref7, kPLURAL, { "тёплые": ["свитеры"] }), _ref7), (_ref8 = {}, _defineProperty(_ref8, kMASCULINE, { "холодный": ["пол"] }), _defineProperty(_ref8, kFEMININE, { "холодная": ["погода", "комната"] }), _defineProperty(_ref8, kNEUTER, { "холодное": ["озеро"] }), _defineProperty(_ref8, kPLURAL, { "холодные": ["воды"] }), _ref8), (_ref9 = {}, _defineProperty(_ref9, kMASCULINE, { "добрый": ["день"] }), _defineProperty(_ref9, kFEMININE, { "добрая": ["девушка"] }), _defineProperty(_ref9, kNEUTER, { "доброе": ["слово"] }), _defineProperty(_ref9, kPLURAL, { "добрые": ["учителя"] }), _ref9), (_ref10 = {}, _defineProperty(_ref10, kMASCULINE, { "злой": ["учитель", "герой"] }), _defineProperty(_ref10, kFEMININE, { "злая": ["кошка"] }), _defineProperty(_ref10, kNEUTER, { "злое": ["место"] }), _defineProperty(_ref10, kPLURAL, { "злые": ["люди"] }), _ref10), (_ref11 = {}, _defineProperty(_ref11, kMASCULINE, { "длинный": ["волос"] }), _defineProperty(_ref11, kFEMININE, { "длинная": ["дорога"] }), _defineProperty(_ref11, kNEUTER, { "длинное": ["шоссе"] }), _defineProperty(_ref11, kPLURAL, { "длинные": ["письма"] }), _ref11), (_ref12 = {}, _defineProperty(_ref12, kMASCULINE, { "короткий": ["фильм", "путь"] }), _defineProperty(_ref12, kFEMININE, { "короткая": ["песня"] }), _defineProperty(_ref12, kNEUTER, { "короткое": ["пальто"] }), _defineProperty(_ref12, kPLURAL, { "короткие": ["брюки"] }), _ref12), (_ref13 = {}, _defineProperty(_ref13, kMASCULINE, { "интересный": ["учебник"] }), _defineProperty(_ref13, kFEMININE, { "интересная": ["книга"] }), _defineProperty(_ref13, kNEUTER, { "интересное": ["письмо"] }), _defineProperty(_ref13, kPLURAL, { "интересные": ["документы"] }), _ref13), (_ref14 = {}, _defineProperty(_ref14, kMASCULINE, { "скучный": ["преподаватель"] }), _defineProperty(_ref14, kFEMININE, { "скучная": ["опера"] }), _defineProperty(_ref14, kNEUTER, { "скучное": ["видео"] }), _defineProperty(_ref14, kPLURAL, { "скучные": ["бизнесмены"] }), _ref14)];

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