var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

NUMBERS = {
    "cardinal": { // A dict with number indicies and an array are exactly the same thing in JS

        // Final positiion digits (if present in a number, they will always be last)
        0: "ноль",
        1: ["один", "одна", "одно"],
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять",
        10: "десять",
        11: "одиннадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать",

        // 10s
        20: "двадцать",
        30: "тридцать",
        40: "сорок",
        50: "пятьдесять",
        60: "шестьдесят",
        70: "семьдесят",
        80: "восемьдесят",
        90: "девяносто",

        // 100s
        100: "сто",
        200: "двести",
        300: "триста",
        400: "четыреста",
        500: "пятьсот",
        600: "шестьсот",
        700: "семьсот",
        800: "восемьсот",
        900: "девятьсот"
    },

    "ordinal": { // A dict with number indicies and an array are exactly the same thing in JS

        // Final positiion digits (if present in a number, they will always be last)
        1: "первый",
        2: "второй",
        3: "третий",
        4: "четвёртый",
        5: "пятый",
        6: "шестой",
        7: "седьмой",
        8: "восьмой",
        9: "девятый",
        10: "десятый",
        11: "одиннадцатый",
        12: "двенадцатый",
        13: "тринадцатый",
        14: "четырнадцатый",
        15: "пятнадцатый",
        16: "шестнадцатый",
        17: "семнадцатый",
        18: "восемнадцатый",
        19: "девятнадцатый",

        // 10s
        20: "двадцатый",
        30: "тридцатый",
        40: "сороковой",
        50: "пятидесятый",
        60: "шестидесятый",
        70: "семидесятый",
        80: "восьмидесятый",
        90: "девяностый",

        // 100s
        100: "сотый",
        200: "двухсотый",
        300: "трёхсотый",
        400: "четырёхсотый",
        500: "пятисотый",
        600: "шестисотый",
        700: "семисотый",
        800: "восьмисотый",
        900: "девятисотый"
    }

    /**
     * Provides the interface to the dictionary data structure. Nothing should access the JSON data
     * directly.
     */
};
var Numbers = function () {
    function Numbers() {
        _classCallCheck(this, Numbers);
    }

    _createClass(Numbers, null, [{
        key: "getRandomCardinal",

        /**
         * Returns a randomly chosen cardinal number from the dictionary.
         */
        value: function getRandomCardinal(maxNumber) {
            var chosenNumber = Math.floor(Math.random() * maxNumber).toString();
            var translatedString = "";

            var hundreds = chosenNumber.length >= 3 ? chosenNumber[chosenNumber.length - 3] : undefined;
            var tens = chosenNumber.length >= 2 ? chosenNumber[chosenNumber.length - 2] : undefined;
            var ones = chosenNumber[chosenNumber.length - 1];

            var isDone = false;

            // Hundreds
            if (hundreds !== undefined) {
                translatedString += NUMBERS.cardinal[Number(hundreds) * 100] + " ";
            }

            // Tens
            if (tens !== undefined) {

                if (tens === "0") {
                    // Do nothing

                } else if (tens === "1" && ones !== 0) {
                    // Teens
                    isDone = true;
                    translatedString += NUMBERS.cardinal[Number(tens) * 10 + Number(ones)] + " ";
                } else {
                    // Normal 10s
                    translatedString += NUMBERS.cardinal[Number(tens) * 10] + " ";
                }
            }

            // Ones
            if (!isDone) {

                if (ones === "1") {
                    // One is a special case as it is gendered
                    var genders = ["masculine", "feminine", "neuter"];
                    var chosenGenderIdx = Math.floor(Math.random() * genders.length);

                    translatedString += NUMBERS.cardinal[Number(ones)][chosenGenderIdx];
                    chosenNumber += " (" + genders[chosenGenderIdx] + ")";
                } else {
                    // Don't put a "ноль" on the end of a number like 20, 350 etc
                    if (ones !== "0" || chosenNumber.length === 1) {
                        translatedString += NUMBERS.cardinal[Number(ones)];
                    }
                }
            }

            return [chosenNumber, translatedString.trim()];
        }

        /**
         * Returns a randomly chosen ordinal number from the dictionary.
         */

    }, {
        key: "getRandomOrdinal",
        value: function getRandomOrdinal(maxNumber) {
            var chosenNumber = Math.floor(Math.random() * (maxNumber - 1) + 1).toString(); // +1 because 0th doesn't count
            var translatedString = "";

            var hundreds = chosenNumber.length >= 3 ? chosenNumber[chosenNumber.length - 3] : undefined;
            var tens = chosenNumber.length >= 2 ? chosenNumber[chosenNumber.length - 2] : undefined;
            var ones = chosenNumber[chosenNumber.length - 1];

            var isDone = false;

            // Hundreds
            if (hundreds !== undefined) {

                if (tens !== "0" || ones !== "0") {
                    // Hundreds will be cardinal
                    translatedString += NUMBERS.cardinal[Number(hundreds) * 100] + " ";
                } else {
                    // Hundreds will be ordinal
                    translatedString = NUMBERS.ordinal[Number(hundreds) * 100];
                    chosenNumber += "th";
                    isDone = true;
                }
            }

            // Tens
            if (!isDone && tens !== undefined && tens !== "0") {

                if (tens !== "1" && ones !== "0") {
                    // Only the final digit is ordinal
                    translatedString += NUMBERS.cardinal[Number(tens) * 10] + " ";
                } else if (tens !== "1" && ones === "0") {
                    // The tens are ordinal
                    translatedString += NUMBERS.ordinal[Number(tens) * 10];
                    chosenNumber += "th";
                    isDone = true;
                } else {
                    // The teens are ordinal
                    translatedString += NUMBERS.ordinal[Number(tens) * 10 + Number(ones)];
                    chosenNumber += "th";
                    isDone = true;
                }
            }

            // Ones
            if (!isDone) {
                // The final digit must be ordinal
                translatedString += NUMBERS.ordinal[Number(ones)];

                if (ones === "1") {
                    chosenNumber += "st";
                } else if (ones == "2") {
                    chosenNumber += "nd";
                } else if (ones == "3") {
                    chosenNumber += "rd";
                } else {
                    chosenNumber += "th";
                }
            }

            return [chosenNumber, translatedString.trim()];
        }
    }]);

    return Numbers;
}();