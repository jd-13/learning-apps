DICTIONARY = {
    "nouns": [
        {
            "nominative": {"text": "собака"},
            "genitive": {"text": "собаки", "caseRule": 2, "spellingRule": 0},
            "accusative": {"text": "собаку", "caseRule": 4},
            "dative": {"text": "собаке", "caseRule": 2},
        },
        {
            "nominative": {"text": "кошка"},
            "genitive": {"text": "кошки", "caseRule": 2, "spellingRule": 0},
            "accusative": {"text": "кошку", "caseRule": 4},
            "dative": {"text": "кошке", "caseRule": 2},
        },
        {
            "nominative": {"text": "человек"},
            "genitive": {"text": "человека", "caseRule": 0},
            "accusative": {"text": "человека", "caseRule": 1},
            "dative": {"text": "человеку", "caseRule": 0},
        },
        {
            "nominative": {"text": "женщина"},
            "genitive": {"text": "женщины", "caseRule": 2},
            "accusative": {"text": "женщину", "caseRule": 4},
            "dative": {"text": "женщине", "caseRule": 2}
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
        "accusative": [
            "For inanimate masculine nouns there is no change",
            "For animate masculine nouns ending in a consonant, add а",
            "For animate masculine nouns ending in й, replace with я",
            "For animate masculine nouns ending in ь, replace with я",
            "For feminine nouns ending in а, replace with у",
            "For feminine nouns ending in я, replace with ю",
            "For inanimate neuter nouns there is no change"
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
    ],

    "caseChoicePhrases": [
        {
            "text": "мячь ||",
            "targetCase": "genitive"
        },
        {
            "text": "дом ||",
            "targetCase": "genitive"
        },
        {
            "text": "у || есть яблоки",
            "targetCase": "genitive"
        },
        {
            "text": "у || есть мячь",
            "targetCase": "genitive"
        }
    ]
};