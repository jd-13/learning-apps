
/**
 * Contains a selection of chords, and allows for a random chord and string
 * number to be chosen.
 */
class ChordAndStringSelector {
    constructor() {
        this._CHORDS = ["C", "C#", "D", "D#", "E", "F", "G", "G#", "A", "A#", "B"];
        this._CHORD_SUFFIXES = ["", "m", "7", "m7", "sus4"]

    }

    /**
     * Returns a random chord and string number from the selection.
     * @param {*} numberOfStrings 
     */
    select(numberOfStrings) {
        // Set the chord
        let chordName = this._CHORDS[Math.floor(Math.random() * this._CHORDS.length)];

        // set the chord suffix
        chordName += this._CHORD_SUFFIXES[Math.floor(Math.random() * this._CHORD_SUFFIXES.length)];

        // set the string number of the chord root
        const stringNumber = Math.floor(Math.random() * numberOfStrings);

        return [chordName, stringNumber];
    }
}


function updateSelection(selector) {
    [chordName, stringNumber] = selector.select(6);

    $("#chord").text(chordName);
    $("#stringNumber").text(stringNumber);

}

const main = function() {

    let selector = new ChordAndStringSelector();

    updateSelection(selector);

    $("#newSelectionBtn").click(function() {
        updateSelection(selector);
    });
}

$(document).ready(main);