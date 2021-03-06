var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

COUNTRIES = [{
    "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    "country": "Австралия",
    "genitive": "Австралии",
    "languages": ["английски"],
    "nationality": {
        "masculine": "австралиец",
        "feminine": "австралийка",
        "plural": "австралийцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    "country": "Америка",
    "genitive": "Америки",
    "languages": ["английски"],
    "nationality": {
        "masculine": "американец",
        "feminine": "американка",
        "plural": "американцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
    "country": "Англия",
    "genitive": "Англии",
    "languages": ["английски"],
    "nationality": {
        "masculine": "англичанин",
        "feminine": "англичанка",
        "plural": "англичане"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    "country": "Аргентина",
    "genitive": "Аргентины",
    "languages": ["испански"],
    "nationality": {
        "masculine": "аргентинец",
        "feminine": "аргентинка",
        "plural": "аргентинцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    "country": "Бельгия",
    "genitive": "Бельгии",
    "languages": ["нидерландски", "французски"],
    "nationality": {
        "masculine": "бельгиец",
        "feminine": "бельгийка",
        "plural": "бельгийцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    "country": "Дания",
    "genitive": "Дании",
    "languages": ["датски"],
    "nationality": {
        "masculine": "датчанин",
        "feminine": "датчанка",
        "plural": "датчане"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    "country": "Германия",
    "genitive": "Германии",
    "languages": ["немецки"],
    "nationality": {
        "masculine": "немец",
        "feminine": "немка",
        "plural": "немцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    "country": "Греция",
    "genitive": "Греции",
    "languages": ["гречески"],
    "nationality": {
        "masculine": "грек",
        "feminine": "гречанка",
        "plural": "греки"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    "country": "Испания",
    "genitive": "Испании",
    "languages": ["испански"],
    "nationality": {
        "masculine": "испанец",
        "feminine": "испанка",
        "plural": "испанцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    "country": "Италия",
    "genitive": "Италии",
    "languages": ["итальянски"],
    "nationality": {
        "masculine": "итальянец",
        "feminine": "итальянка",
        "plural": "итальянцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    "country": "Канада",
    "genitive": "Канады",
    "languages": ["английски", "французски"],
    "nationality": {
        "masculine": "канадец",
        "feminine": "канадка",
        "plural": "канадцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    "country": "Китай",
    "genitive": "Китая",
    "languages": ["китайски"],
    "nationality": {
        "masculine": "китаец",
        "feminine": "китаянка",
        "plural": "китайцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    "country": "Мексика",
    "genitive": "Мексики",
    "languages": ["испански"],
    "nationality": {
        "masculine": "мексиканец",
        "feminine": "мексиканка",
        "plural": "мексиканцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    "country": "Норвегия",
    "genitive": "Норвегии",
    "languages": ["норвежски"],
    "nationality": {
        "masculine": "норвежец",
        "feminine": "норвежка",
        "plural": "норвежцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    "country": "Португалия",
    "genitive": "Португалии",
    "languages": ["португальски"],
    "nationality": {
        "masculine": "португалец",
        "feminine": "португалка",
        "plural": "португальцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    "country": "Россия",
    "genitive": "России",
    "languages": ["русски"],
    "nationality": {
        "masculine": "русскии",
        "feminine": "русская",
        "plural": "русские"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    "country": "Украина",
    "genitive": "Украины",
    "languages": ["украински"],
    "nationality": {
        "masculine": "украинец",
        "feminine": "украинка",
        "plural": "украинцы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    "country": "Франция",
    "genitive": "Франции",
    "languages": ["французски"],
    "nationality": {
        "masculine": "француз",
        "feminine": "француженка",
        "plural": "французы"
    }
}, {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
    "country": "Швейцария",
    "genitive": "Швейцарии",
    "languages": ["немецки"],
    "nationality": {
        "masculine": "швейцарец",
        "feminine": "швейцарка",
        "plural": "швейцарцы"
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
        key: "getLanguages",
        value: function getLanguages() {
            return this._json["languages"];
        }
    }, {
        key: "getNationality",
        value: function getNationality(gender) {
            return this._json["nationality"][gender];
        }
    }, {
        key: "getRandomLanguage",
        value: function getRandomLanguage() {
            return this._json["languages"][Math.floor(Math.random() * this._json["languages"].length)];
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