kSINGULAR = "singular"
kGENDER = "gender"

kMASCULINE = "masculine"
kFEMININE = "feminine"
kNEUTER = "neuter"
kPLURAL = "plural"

ADJECTIVES =
[
    {
        [kMASCULINE]: {"удобный": ["стул", "диван"]},
        [kFEMININE]: {"удобная": ["одежда", "кровать"]},
        [kNEUTER]: {"удобное": ["кресло"]},
        [kPLURAL]: {"удобные": ["гамаки", "диваны"]}
    },
    {
        [kMASCULINE]: {"неудобный": ["диван", "гамак"]},
        [kFEMININE]: {"неудобная": ["одежда"]},
        [kNEUTER]: {"неудобное": ["кресло"]},
        [kPLURAL]: {"неудобные": ["стулья", "кресла"]}
    },
    {
        [kMASCULINE]: {"новый": ["телефон", "стол"]},
        [kFEMININE]: {"новая": ["машина", "футболка"]},
        [kNEUTER]: {"новое": ["меню", "кино"]},
        [kPLURAL]: {"новые": ["дома", "студенты"]}
    },
    {
        [kMASCULINE]: {"старый": ["дом", "человек"]},
        [kFEMININE]: {"старая": ["женщина", "кошка"]},
        [kNEUTER]: {"старое": ["пианино"]},
        [kPLURAL]: {"старые": ["люди"]}
    },
    {
        [kMASCULINE]: {"красивый": ["человек"]},
        [kFEMININE]: {"красивая": ["картина"]},
        [kNEUTER]: {"красивое": ["море"]},
        [kPLURAL]: {"красивые": ["фотографии"]}
    },
    {
        [kMASCULINE]: {"некрасивый": ["завод"]},
        [kFEMININE]: {"некрасивая": ["собака"]},
        [kNEUTER]: {"некрасивое": ["фото"]},
        [kPLURAL]: {"некрасивые": ["животные"]}
    },
    {
        [kMASCULINE]: {"тёплый": ["камин"]},
        [kFEMININE]: {"тёплая": ["батарея", "шапка"]},
        [kNEUTER]: {"тёплое": ["пальто"]},
        [kPLURAL]: {"тёплые": ["свитеры"]}
    },
    {
        [kMASCULINE]: {"холодный": ["пол"]},
        [kFEMININE]: {"холодная": ["погода", "комната"]},
        [kNEUTER]: {"холодное": ["озеро"]},
        [kPLURAL]: {"холодные": ["воды"]}
    },
    {
        [kMASCULINE]: {"добрый": ["день"]},
        [kFEMININE]: {"добрая": ["девушка"]},
        [kNEUTER]: {"доброе": ["слово"]},
        [kPLURAL]: {"добрые": ["учителя"]}
    },
    {
        [kMASCULINE]: {"злой": ["учитель", "герой"]},
        [kFEMININE]: {"злая": ["кошка"]},
        [kNEUTER]: {"злое": ["место"]},
        [kPLURAL]: {"злые": ["люди"]}
    },
    {
        [kMASCULINE]: {"длинный": ["волос"]},
        [kFEMININE]: {"длинная": ["дорога"]},
        [kNEUTER]: {"длинное": ["шоссе"]},
        [kPLURAL]: {"длинные": ["письма"]}
    },
    {
        [kMASCULINE]: {"короткий": ["фильм", "путь"]},
        [kFEMININE]: {"короткая": ["песня"]},
        [kNEUTER]: {"короткое": ["пальто"]},
        [kPLURAL]: {"короткие": ["брюки"]}
    },
    {
        [kMASCULINE]: {"интересный": ["учебник"]},
        [kFEMININE]: {"интересная": ["книга"]},
        [kNEUTER]: {"интересное": ["письмо"]},
        [kPLURAL]: {"интересные": ["документы"]}
    },
    {
        [kMASCULINE]: {"скучный": ["преподаватель"]},
        [kFEMININE]: {"скучная": ["опера"]},
        [kNEUTER]: {"скучное": ["видео"]},
        [kPLURAL]: {"скучные": ["бизнесмены"]}
    },
]

class Adjective {
    constructor(json) {
        this._json = json;
    }

    getDeclension(targetGender) {
        return Object.keys(this._json[targetGender])[0];
    }

    getRandomDeclensionAndNoun() {

        let chosenDeclension = "";
        let chosenNoun = "";

        // Build an array of the genders and shuffle them so that we can iterate through randomly
        const genders = [kMASCULINE, kFEMININE, kNEUTER, kPLURAL];
        const chosenGender = genders[Math.floor(Math.random() * genders.length)];

        const thisDeclension = this._json[chosenGender];

        chosenDeclension = Object.keys(thisDeclension)[0];

        const availableNouns = thisDeclension[chosenDeclension];
        chosenNoun = availableNouns[Math.floor(Math.random() * availableNouns.length)];

        return [chosenDeclension, chosenNoun, chosenGender];
    }

    getRandomDeclensions(numDeclensions, excludeGender) {

        // Build an array of the genders and shuffle them so that we can iterate through randomly
        let shuffledGenders = [kMASCULINE, kFEMININE, kNEUTER, kPLURAL];
        shuffledGenders.splice(shuffledGenders.indexOf(excludeGender), 1);
        shuffleArray(shuffledGenders);

        let retVal = [];

        for (let index = 0; index < numDeclensions; index++) {
            const thisGender = shuffledGenders[index];
            retVal.push(Object.keys(this._json[thisGender])[0]);
        }

        return retVal;
    }
}

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */
class Adjectives {
    /**
     * Returns a randomly chosen verb from the dictionary.
     */
    static getRandomAdjective() {
        return new Adjective(ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]);
    }
}