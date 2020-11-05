COUNTRIES = [
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        "country": "Америка",
        "genitive": "Америки",
        "languages": ["английски"],
        "nationality": {
            "masculine": "американец",
            "feminine": "американка",
            "plural": "американцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
        "country": "Англия",
        "genitive": "Англии",
        "languages": ["английски"],
        "nationality": {
            "masculine": "англичанин",
            "feminine": "англичанка",
            "plural": "англичане"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        "country": "Аргентина",
        "genitive": "Аргентины",
        "languages": ["испански"],
        "nationality": {
            "masculine": "аргентинец",
            "feminine": "аргентинка",
            "plural": "аргентинцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        "country": "Германия",
        "genitive": "Германии",
        "languages": ["немецки"],
        "nationality": {
            "masculine": "немец",
            "feminine": "немка",
            "plural": "немцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        "country": "Испания",
        "genitive": "Испании",
        "languages": ["испански"],
        "nationality": {
            "masculine": "испанец",
            "feminine": "испанка",
            "plural": "испанцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        "country": "Италия",
        "genitive": "Италии",
        "languages": ["итальянски"],
        "nationality": {
            "masculine": "итальянец",
            "feminine": "итальянка",
            "plural": "итальянцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        "country": "Канада",
        "genitive": "Канады",
        "languages": ["английски", "Французски"],
        "nationality": {
            "masculine": "канадец",
            "feminine": "канадка",
            "plural": "канадцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        "country": "Китай",
        "genitive": "Китая",
        "languages": ["китайски"],
        "nationality": {
            "masculine": "китаец",
            "feminine": "китаянка",
            "plural": "китайцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
        "country": "Мексика",
        "genitive": "Мексики",
        "languages": ["испански"],
        "nationality": {
            "masculine": "мексиканец",
            "feminine": "мексиканка",
            "plural": "мексиканцы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
        "country": "Россия",
        "genitive": "России",
        "languages": ["русски"],
        "nationality": {
            "masculine": "русскии",
            "feminine": "русская",
            "plural": "русские"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        "country": "Франция",
        "genitive": "Франции",
        "languages": ["французски"],
        "nationality": {
            "masculine": "француз",
            "feminine": "француженка",
            "plural": "французы"
        }
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
        "country": "Швейцария",
        "genitive": "Швейцарии",
        "languages": ["немецки"],
        "nationality": {
            "masculine": "швейцарец",
            "feminine": "швейцарка",
            "plural": "швейцарцы"
        }
    }
]

class Country {
    constructor(json) {
        this._json = json;
    }

    getFlagURL() { return this._json["flag"]; }
    getCountryName() { return this._json["country"]; }
    getGenitive() { return this._json["genitive"]; }
    getLanguages() { return this._json["languages"]; }
    getNationality(gender) { return this._json["nationality"][gender]; }

    getRandomLanguage() {
        return this._json["languages"][Math.floor(Math.random() * this._json["languages"].length)]
    }
}

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */
class Countries {
    /**
     * Returns a randomly chosen country from the dictionary.
     */
    static getRandomCountry() {
        return new Country(COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]);
    }

    /**
     * Returns a randomly chosen gender that can be used for nationalities.
     */
    static getRandomGender() {
        const genders = [
            ["masculine", "он"],
            ["feminine", "она"],
            ["plural", "они"]
        ];
        return genders[Math.floor(Math.random() * genders.length)];
    }
}