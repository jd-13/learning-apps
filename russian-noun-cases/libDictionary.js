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

        "inanimate": [
            {
                "nominative": {"text": "чай"},
                "genitive": {"text": "чая", "caseRule": 1},
                "accusative": {"text": "чая", "caseRule": 2},
                "dative": {"text": "чаю", "caseRule": 1},
                "instrumental": {"text": "чаем", "caseRule": 1}
            },
            {
                "nominative": {"text": "масло"},
                "genitive": {"text": "масла", "caseRule": 4},
                "accusative": {"text": "масло", "caseRule": 6},
                "dative": {"text": "маслу", "caseRule": 4},
                "instrumental": {"text": "маслом", "caseRule": 6}
            },
            {
                "nominative": {"text": "мяч"},
                "genitive": {"text": "мяча", "caseRule": 0},
                "accusative": {"text": "мяч", "caseRule": 0},
                "dative": {"text": "мячу", "caseRule": 0},
                "instrumental": {"text": "мячом", "caseRule": 0}
            }
        ]
    },

    "caseRules": {
        "genitive": [
            /*0*/"For masculine nouns ending in a consonant, add а",
            /*1*/"For masculine nouns ending in й or ь, replace with я",
            /*2*/"For feminine nouns ending in а, replace with ы",
            /*3*/"For feminine nouns ending in я or ь, replace with и",
            /*4*/"For neuter nouns ending in о, replace with а",
            /*5*/"For neuter nouns ending in е, replace with я"
        ],
        "accusative": [
            /*0*/"For inanimate masculine nouns there is no change",
            /*1*/"For animate masculine nouns ending in a consonant, add а",
            /*2*/"For animate masculine nouns ending in й, replace with я",
            /*3*/"For animate masculine nouns ending in ь, replace with я",
            /*4*/"For feminine nouns ending in а, replace with у",
            /*5*/"For feminine nouns ending in я, replace with ю",
            /*6*/"For inanimate neuter nouns there is no change"
        ],
        "dative": [
            /*0*/"For masculine nouns ending in a consonant, add у",
            /*1*/"For masculine nouns ending in й or ь, replace with ю",
            /*2*/"For feminine nouns ending in а or я, replace with е",
            /*3*/"For feminine nouns ending in ь, replace with и",
            /*4*/"For neuter nouns ending in о, replace with у",
            /*5*/"For neuter nouns ending in е, replace with ю"
        ],
        "instrumental": [
            /*0*/"For masculine nouns ending in a consonant (except й), add ом",
            /*1*/"For masculine nouns ending in й, replace with eм (ём if stressed)",
            /*2*/"For masculing nouns ending in ь, replace with ем (ём if stressed)",
            /*3*/"For feminine nouns ending in а, replace with ой (or rarely ою)",
            /*4*/"For feminine nouns ending in я, replace with ей (ёй if stressed)",
            /*5*/"For feminine nouns ending in ь, add ю",
            /*6*/"For neuter nouns add м"
        ]
    },

    "spellingRules": [
        // Spelling rules for most cases
        /*0*/"Except here this would put ы after one of 'г, к, х, ж, ч, ш, щ', so instead use и",
        /*1*/"Except here this would put an unstressed о after one of 'ж, ч, ш, щ, ц', so instead use е",
        /*2*/"Except here this would put я after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use а",
        /*3*/"Except here this would put ю after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use у",

        // Spelling rules for instrumental case
        /*0*/"Except here this would put ом after one of 'ж, ч, ш, щ, ц', so instead use ем",
        /*1*/"Except here this would put ой after one of 'ж, ч, ш, щ, ц', so instead use ей"
    ],

    "nounChoicePhrases": [
        {
            "text": "мяч ||",
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
            "text": "у || есть мяч",
            "targetCase": "genitive",
            "nounType": "animate"
        },
        {
            "text": "|| пожалуйста",
            "targetCase": "nominative",
            "nounType": "inanimate"
        },
        {
            "text": "у неё нет ||",
            "targetCase": "genitive",
            "nounType": "inanimate"
        },
        {
            "text": "у ребёнка нет ||",
            "targetCase": "genitive",
            "nounType": "inanimate"
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

            // TODO: handle plurals nouns
            // {
            //     "nominative": "мы",
            //     "genitive": "нас",
            //     "accusative": "нас",
            //     "dative": "нам",
            //     "instrumental": "нами"
            // }
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
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "masculine",
            "isAnimate": false
        },
        {
            "text": "|| кошка",
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        }
    ]
};