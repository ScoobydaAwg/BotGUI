import spacy
import re

nlp = spacy.load("en_core_web_sm")




aliases = {
    "principal": {
        "aliases": {
            "abrahamtmathew", "abrahamsir", "drabraham", "principalsroom", "principal",
            "Principal Sir", "Principal sir", "abraham t mathew", "principal office"
        },
        "keyword": "principal"
    },
    "bursar": {
        "aliases": {
            "father john varghese", "bursar office", "bursar achan", "father john", "bursar room", "bursar"
        },
        "keyword": "bursar"
    },
    "assistant_bursar": {
        "aliases": {
            "father thomas mukalumpurath", "father thomas", "thomas achan", "assistant bursar", "assistant bursar office",
            "assistantbursarroom"
        },
        "keyword": "assistant_bursar"
    },

    "vicePrincipal": {
        "aliases": {
            "vice principal", "vice principal office", "vice principalroom", "doctor viswanatha rao", "viswanatha rao", "viswanatha rao sir", "rao sir"
        },
        "keyword": "vicePrincipal"
    },
    "senatus": {
        "aliases": {
           "senatus hall", "senatus", "senatus room"
        },
        "keyword": "senatus"
    },
"nursing": {
        "aliases": {
           "nursing", "nursing room", "nurse", "nursing station", "sickroom"
        },
        "keyword": "nursing"
    },
"dinette": {
        "aliases": {
           "dinette", "diningroom", "dinetteroom"
        },
        "keyword": "dinette"
    },
"intel": {
        "aliases": {
           "intelunnatilab", "intellab", "intel", "unnati", "unnatilab"
        },
        "keyword": "intel"
    },
"basic_electronics_lab": {
        "aliases": {
           "basicelectronicslab", "electronicslab", "basicelectronics"
        },
        "keyword": "basic_electronics_lab"
    },
"visiors_lounge": {
        "aliases": {
            "visitorslounge", "visitorroom", "guestroom", "lounge", "visitors"
        },
        "keyword": "visiors_lounge"
    },
"chemistry_lab": {
        "aliases": {
            "chemistrylab", "chemistry"
        },
        "keyword": "chemistry_lab"
    },
"board_room": {
        "aliases": {
            "board room", "board", "boardroom"
        },
        "keyword": "board_room"
    },
"physics_lab": {
        "aliases": {
            "physicslab", "physics"
        },
        "keyword": "physics_lab"
    },
"office_room": {
        "aliases": {
            "officeroom", "office", "office room"
        },
        "keyword": "office_room"
    }
}


def extract_keywords(text):
    keywords = []
    for alias_info in aliases.values():
        for alias in alias_info["aliases"]:
            if re.search(r'\b' + re.escape(alias) + r'\b', text, re.IGNORECASE):
                keywords.append(alias_info["keyword"])
                break  # Once a keyword is found, no need to continue searching
    return keywords
