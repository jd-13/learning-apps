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

    "nounChoicePhrases": [
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
    ],

    "pronouns": {
        "personal": [
            {
                "nominative": "я",
                "genitive": "меня",
                "accusative": "меня",
                "dative": "мне",
                "instrumental": "мной"
            },
            {
                "nominative": "ты",
                "genitive": "тебя",
                "accusative": "тебя",
                "dative": "тебе",
                "instrumental": "тобой"
            },
            // TODO: confirm where we need to use него, неё, них
            // {
            //     "nominative": "он",
            //     "genitive": "его",
            //     "accusative": "его",
            //     "dative": "ему",
            //     "instrumental": "им"
            // },
            // {
            //     "nominative": "она",
            //     "genitive": "её",
            //     "accusative": "её",
            //     "dative": "ей",
            //     "instrumental": "ей"
            // },
            // {
            //     "nominative": "оно",
            //     "genitive": "его",
            //     "accusative": "его",
            //     "dative": "ему",
            //     "instrumental": "им"
            // },
            // {
            //     "nominative": "они",
            //     "genitive": "их",
            //     "accusative": "их",
            //     "dative": "им",
            //     "instrumental": "ими"
            // },
            {
                "nominative": "вы",
                "genitive": "вас",
                "accusative": "вас",
                "dative": "вам",
                "instrumental": "вами"
            },
            {
                "nominative": "мы",
                "genitive": "нас",
                "accusative": "нас",
                "dative": "нам",
                "instrumental": "нами"
            }
        ],

        "possessive":
        {
            "masculine": [
                {
                    "nominative": "мой",
                    "genitive": "моего",
                    "accusative": {"inanimate": "мой", "animate": "моего"},
                    "dative": "моему",
                    "instrumental": "моим"
                },
                {
                    "nominative": "твой",
                    "genitive": "твоего",
                    "accusative": {"inanimate": "твой", "animate": "твоего"},
                    "dative": "твоему",
                    "instrumental": "твоим"
                },
                {
                    "nominative": "наш",
                    "genitive": "нашего",
                    "accusative": {"inanimate": "наш", "animate": "нашего"},
                    "dative": "нашему",
                    "instrumental": "нашим"
                },
                {
                    "nominative": "ваш",
                    "genitive": "вашего",
                    "accusative": {"inanimate": "ваш", "animate": "вашего"},
                    "dative": "вашему",
                    "instrumental": "вашим"
                }
            ],
            "feminine": [
                {
                    "nominative": "моя",
                    "genitive": "моей",
                    "accusative": {"inanimate": "мою", "animate": "мою"},
                    "dative": "моей",
                    "instrumental": "моей"
                },
                {
                    "nominative": "твоя",
                    "genitive": "твоей",
                    "accusative": {"inanimate": "твою", "animate": "твою"},
                    "dative": "твоей",
                    "instrumental": "твоей"
                },
                {
                    "nominative": "наша",
                    "genitive": "нашей",
                    "accusative": {"inanimate": "нашу", "animate": "нашу"},
                    "dative": "нашей",
                    "instrumental": "нашей"
                },
                {
                    "nominative": "ваша",
                    "genitive": "вашей",
                    "accusative": {"inanimate": "вашу", "animate": "вашу"},
                    "dative": "вашей",
                    "instrumental": "вашей"
                }
            ],
            "neuter": [
                {
                    "nominative": "моё",
                    "genitive": "моего",
                    "accusative": {"inanimate": "моё", "animate": "моё"},
                    "dative": "моему",
                    "instrumental": "моим"
                },
                {
                    "nominative": "твоё",
                    "genitive": "твоего",
                    "accusative": {"inanimate": "твоё", "animate": "твоё"},
                    "dative": "твоему",
                    "instrumental": "твоим"
                },
                {
                    "nominative": "наше",
                    "genitive": "нашего",
                    "accusative": {"inanimate": "наше", "animate": "наше"},
                    "dative": "нашему",
                    "instrumental": "нашим"
                },
                {
                    "nominative": "ваше",
                    "genitive": "вашего",
                    "accusative": {"inanimate": "ваше", "animate": "ваше"},
                    "dative": "вашему",
                    "instrumental": "вашим"
                }
            ],
            "plural": [
                {
                    "nominative": "мои",
                    "genitive": "моих",
                    "accusative": {"inanimate": "мои", "animate": "моих"},
                    "dative": "моим",
                    "instrumental": "моими"
                },
                {
                    "nominative": "твои",
                    "genitive": "твоих",
                    "accusative": {"inanimate": "твои", "animate": "твоих"},
                    "dative": "твоим",
                    "instrumental": "твоими"
                },
                {
                    "nominative": "наши",
                    "genitive": "наших",
                    "accusative": {"inanimate": "наши", "animate": "наших"},
                    "dative": "нашим",
                    "instrumental": "нашими"
                },
                {
                    "nominative": "ваши",
                    "genitive": "ваших",
                    "accusative": {"inanimate": "ваши", "animate": "ваших"},
                    "dative": "вашим",
                    "instrumental": "вашими"
                }
            ]
        }
    },

    "pronounChoicePhrases": [
        // Personal
        {
            "text": "|| учител",
            "targetCase": "nominative",
            "pronounType": "personal",
        },

        // Possessive
        {
            "text": "|| дом",
            "targetCase": "genitive",
            "pronounType": "possessive",
            "gender": "masculine",
            "animate": false
        },
        {
            "text": "|| кошка",
            "targetCase": "genitive",
            "pronounType": "possessive",
            "gender": "feminine",
            "animate": false
        }
    ]
};