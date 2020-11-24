CHOICE_PHRASES = {
    // Noun choice phrases - these may contain multiple nouns that could be substituted
    "nouns": [
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
        { // дай мне чай пожалуйста
            "text": "дай мне || пожалуйста",
            "substitutions": [
                {
                    "targetCase": "accusative",
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
        },
        { // под окном собака
            "text": "под || ||",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "nominative",
                    "nounType": "animate"
                }
            ]
        },
        { // поговори с женщиной
            "text": "поговори с ||",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "animate"
                }
            ]
        },
        { // мальчик с медведем читают книгу
            "text": "мальчик с || читают книгу",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "animate"
                }
            ]
        }
    ],

    // Pronoun choice phrases - these may contain only a single pronoun that could be substituted
    "pronouns": [
        // TODO: restructure this, it's a little messy
        // Personal (does not use isAnimate)
        {
            "text": "кто учител? || учител",
            "targetCase": "nominative",
            "pronounType": "personal",
            "genders": ["singular", "masculine", "feminine"]
        },
        {
            "text": "как || зовут?",
            "targetCase": "genitive",
            "pronounType": "personal",
            "genders": ["singular", "masculine", "feminine"]
        },
        {
            "text": "сколько || лет?",
            "targetCase": "dative",
            "pronounType": "personal",
            "genders": ["singular", "masculine", "feminine"]
        },
        {
            "text": "он хотел бы поехать с ||?",
            "targetCase": "instrumental",
            "pronounType": "personal",
            "genders": ["singular", "masculine", "feminine", "plural"]
        },
        {
            "text": "теперь || готова",
            "targetCase": "nominative",
            "pronounType": "personal",
            "genders": ["feminine"]
        },

        // Possessive (uses gender and isAnimate)
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
