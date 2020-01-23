DICTIONARY = {
    "nouns": {
        "animate": ANIMATE_NOUNS,
        "inanimate": INANIMATE_NOUNS
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
        ],
        "prepositional": [
            /*0*/"For nouns ending in a consonant, add е",
            /*1*/"For nouns ending in ь (masculine), replace with е",
            /*2*/"For nouns ending in а, я or й, replace with е",
            /*3*/"For nouns ending in ь (feminine), replace with и",
            /*4*/"For nouns ending in о, replace with е",
            /*5*/"For nouns ending in ия, ий, or ие, replace with ии"
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
        { // мяч собаки
            "text": "|| ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                }
            ]
        },
        { // у меня есть яблоки
            "text": "у || есть ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                },
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                }
            ]
        },
        { // чай пожалуйста
            "text": "|| пожалуйста",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                }
            ]
        },
        { // у неё нет масла
            "text": "у неё нет ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "inanimate"
                }
            ]
        },
        { // у ребёнка нет яблоки
            "text": "у || нет ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                },
                {
                    "targetCase": "genitive",
                    "nounType": "inanimate"
                }
            ]
        },
        { // на доме TODO: на can also take accusative case, need to clarify
            "text": "на ||",
            "substitutions": [
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // в доме TODO: в can also take nominative case, need to clarify
            "text": "в ||",
            "substitutions": [
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // яблоко на столе
            "text": "|| на ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // девочка видит маму
            "text": "|| видит ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "animate"
                },
                {
                    "targetCase": "accusative",
                    "nounType": "inanimate"
                }
            ]
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
        },
        {
            "text": "это || книга",
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        },
        {
            "text": "я вижу || маму",
            "targetCase": "accusative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        }
    ]
};