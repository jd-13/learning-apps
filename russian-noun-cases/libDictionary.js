DICTIONARY = {
    "nouns": {
        "animate": [
            // We're not including gender exceptions such as папа for now
            {
                "nominative": {"text": "собака"},
                "genitive": {"text": "собаки", "caseRule": 2, "spellingRule": 0},
                "accusative": {"text": "собаку", "caseRule": 4},
                "dative": {"text": "собаке", "caseRule": 2},
                "instrumental": {"text": "собакой", "caseRule": 3}
            },
            {
                "nominative": {"text": "кошка"},
                "genitive": {"text": "кошки", "caseRule": 2, "spellingRule": 0},
                "accusative": {"text": "кошку", "caseRule": 4},
                "dative": {"text": "кошке", "caseRule": 2},
                "instrumental": {"text": "кошкой", "caseRule": 3}
            },
            {
                "nominative": {"text": "человек"},
                "genitive": {"text": "человека", "caseRule": 0},
                "accusative": {"text": "человека", "caseRule": 1},
                "dative": {"text": "человеку", "caseRule": 0},
                "instrumental": {"text": "человеком", "caseRule": 0}
            },
            {
                "nominative": {"text": "женщина"},
                "genitive": {"text": "женщины", "caseRule": 2},
                "accusative": {"text": "женщину", "caseRule": 4},
                "dative": {"text": "женщине", "caseRule": 2},
                "instrumental": {"text": "женщиной", "caseRule": 3}
            }
        ],

        "inanimate": []
    },

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
        ],
        "instrumental": [
            "For masculine nouns ending in a consonant (except й), add ом",
            "For masculine nouns ending in й, replace with eм (ём if stressed)",
            "For masculing nouns ending in ь, replace with ем (ём if stressed)",
            "For feminine nouns ending in а, replace with ой (or rarely ою)",
            "For feminine nouns ending in я, replace with ей (ёй if stressed)",
            "For feminine nouns ending in ь, add ю",
            "For neuter nouns add м"
        ]
    },

    "spellingRules": [
        // Spelling rules for most cases
        "Except here this would put ы after one of 'г, к, х, ж, ч, ш, щ', so instead use и",
        "Except here this would put an unstressed о after one of 'ж, ч, ш, щ, ц', so instead use е",
        "Except here this would put я after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use а",
        "Except here this would put ю after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use у",

        // Spelling rules for instrumental case
        "Except here this would put ом after one of 'ж, ч, ш, щ, ц', so instead use ем",
        "Except here this would put ой after one of 'ж, ч, ш, щ, ц', so instead use ей"
    ],

    "caseChoicePhrases": [
        {
            "text": "мячь ||",
            "targetCase": "genitive",
            "nounType": "animate"
        },
        {
            "text": "дом ||",
            "targetCase": "genitive",
            "nounType": "animate"
        },
        {
            "text": "у || есть яблоки",
            "targetCase": "genitive",
            "nounType": "animate"
        },
        {
            "text": "у || есть мячь",
            "targetCase": "genitive",
            "nounType": "animate"
        }
    ]
};