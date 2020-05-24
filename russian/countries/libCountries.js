var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

COUNTRIES = [{
    "flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    "country": "Россия",
    "genitive": "России",
    "language": "русски",
    "nationality": {
        "masculine": "русскии",
        "feminine": "русская",
        "plural": "русские"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
    "country": "Швейцария",
    "genitive": "Швейцарии",
    "language": "немецки",
    "nationality": {
        "masculine": "швейцарец",
        "feminine": "швейцарка",
        "plural": "швейцарцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    "country": "Италия",
    "genitive": "Италии",
    "language": "итальянски",
    "nationality": {
        "masculine": "итальянец",
        "feminine": "итальянка",
        "plural": "итальянцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    "country": "Франция",
    "genitive": "Франции",
    "language": "французски",
    "nationality": {
        "masculine": "француз",
        "feminine": "француженка",
        "plural": "французы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    "country": "Германия",
    "genitive": "Германии",
    "language": "немецки",
    "nationality": {
        "masculine": "немец",
        "feminine": "немка",
        "plural": "немцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
    "country": "Англия",
    "genitive": "Англии",
    "language": "английски",
    "nationality": {
        "masculine": "англичанин",
        "feminine": "англичанка",
        "plural": "англичане"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    "country": "Испания",
    "genitive": "Испании",
    "language": "испански",
    "nationality": {
        "masculine": "испанец",
        "feminine": "испанка",
        "plural": "испанцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    "country": "Америка",
    "genitive": "Америки",
    "language": "английски",
    "nationality": {
        "masculine": "американец",
        "feminine": "американка",
        "plural": "американцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    "country": "Мексика",
    "genitive": "Мексики",
    "language": "испански",
    "nationality": {
        "masculine": "мексиканец",
        "feminine": "мексиканка",
        "plural": "мексиканцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    "country": "Аргентина",
    "genitive": "Аргентины",
    "language": "испански",
    "nationality": {
        "masculine": "аргентинец",
        "feminine": "аргентинка",
        "plural": "аргентинцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    "country": "Канада",
    "genitive": "Канады",
    "language": "английски", //TODO: could also accept Французски
    "nationality": {
        "masculine": "канадец",
        "feminine": "канадка",
        "plural": "канадцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    "country": "Китай",
    "genitive": "Китая",
    "language": "китайски",
    "nationality": {
        "masculine": "китаец",
        "feminine": "китаянка",
        "plural": "китайцы"
    }
}];

var Country = function () {
    function Country(json) {
        _classCallCheck(this, Country);

        this._json = json;
    }

    _createClass(Country, [{
        key: "getFlagURL",
        value: function getFlagURL() {
            return this._json["flag"];
        }
    }, {
        key: "getCountryName",
        value: function getCountryName() {
            return this._json["country"];
        }
    }, {
        key: "getGenitive",
        value: function getGenitive() {
            return this._json["genitive"];
        }
    }, {
        key: "getLanguage",
        value: function getLanguage() {
            return this._json["language"];
        }
    }, {
        key: "getNationality",
        value: function getNationality(gender) {
            return this._json["nationality"][gender];
        }
    }]);

    return Country;
}();

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */


var Countries = function () {
    function Countries() {
        _classCallCheck(this, Countries);
    }

    _createClass(Countries, null, [{
        key: "getRandomCountry",

        /**
         * Returns a randomly chosen country from the dictionary.
         */
        value: function getRandomCountry() {
            return new Country(COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]);
        }

        /**
         * Returns a randomly chosen gender that can be used for nationalities.
         */

    }, {
        key: "getRandomGender",
        value: function getRandomGender() {
            var genders = [["masculine", "он"], ["feminine", "она"], ["plural", "они"]];
            return genders[Math.floor(Math.random() * genders.length)];
        }
    }]);

    return Countries;
}();