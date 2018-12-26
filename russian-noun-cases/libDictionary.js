DICTIONARY = {
    "nouns": [
        {
            "nominative": "собака",
            "genitive": {"text": "собаки", "caseRule": 2, "spellingRule": 0},
            "dative": {"text": "собаке", "caseRule": 2},
            "gender": "f"
        },
        {
            "nominative": "кошка",
            "genitive": {"text": "кошки", "caseRule": 2, "spellingRule": 0},
            "dative": {"text": "кошке", "caseRule": 2},
            "gender": "f"
        },
        {
            "nominative": "человек",
            "genitive": {"text": "человека", "caseRule": 0},
            "dative": {"text": "человеку", "caseRule": 0},
            "gender": "m"
        }
    ],

    "caseRules": {
        "genitive": [
            "For masculine nouns ending in a consonant, add а",
            "For masculine nouns ending in й or ь, replace with я",
            "For feminine nouns ending in а, replace with ы",
            "For feminine nouns ending in я or ь, replace with и",
            "For neuter nouns ending in о, replace with а",
            "For neuter nouns ending in е, replace with я"
        ],
        "dative": [
            "For masculine nouns ending in a consonant, add у",
            "For masculine nouns ending in й or ь, replace with ю",
            "For feminine nouns ending in а or я, replace with е",
            "For feminine nouns ending in ь, replace with и",
            "For neuter nouns ending in о, replace with у",
            "For neuter nouns ending in е, replace with ю"
        ]
    },

    "spellingRules": [
        "Except here this would put ы after one of 'г, к, х, ж, ч, ш, щ', so instead use и",
        "Except here this would put an unstressed о after one of 'ж, ч, ш, щ, ц', so instead use е",
        "Except here this would put я after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use а",
        "Except here this would put ю after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use у"
    ]
};