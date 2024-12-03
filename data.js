const defaultTable = [
    [
        {},
        {subject: "Musik", room: "Altbau -19", teacher: "Daniel Leo Meier"},
        {subject: "Sport", room: "Turnhalle A", teacher: "Urs Krüttli"},
        {subject: "Chemie", room: "Neubau 109", teacher: "Eliane Fischer"},
        {subject: "Deutsch", room: "Altbau 21", teacher: "Simon Spinner"}
    ], [
        {subject: "Mathe", room: "Altbau 15", teacher: "Mattia Rutishauser"},
        {subject: "Französisch", room: "Altbau 16", teacher: "Elisabeth Frey-Martins"},
        {subject: "Sport", room: "Turnhalle A", teacher: "Urs Krüttli"},
        {subject: "Chemie", room: "Neubau 109", teacher: "Eliane Fischer"},
        {subject: "Deutsch", room: "Altbau 21", teacher: "Simon Spinner"}
    ], [
        {subject: "Mathe", room: "Altbau 15", teacher: "Mattia Rutishauser"},
        {subject: "Latein", room: "Altbau 14", teacher: "Johannes Comiotto"},
        {subject: "Deutsch", room: "Altbau 11", teacher: "Simon Spinner"},
        {subject: "Geschichte", room: "Neubau 004", teacher: "Marcel Jäger"},
        {subject: "Sport", room: "Turnhalle B", teacher: "Urs Krüttli"}
    ], [
        {subject: "Französisch", room: "Altbau 16", teacher: "Elisabeth Frey-Martins"},
        {subject: "Informatik", room: "Altbau 04", teacher: "Andreas Schaufelbühl"},
        {subject: "Bildnerisches Gestalten", room: "Altbau 37", teacher: "Larissa Troxler"},
        {subject: "Deutsch", room: "Altbau 21", teacher: "Simon Spinner"},
        {subject: "Geschichte", room: "Neubau 004", teacher: "Marcel Jäger"}
    ], [
        {subject: "Latein", room: "Altbau 14", teacher: "Johannes Comiotto"},
        {subject: "Englisch", room: "Kirchgemeindehaus 1", teacher: "Patrick Schetters"},
        {subject: "Bildnerisches Gestalten", room: "Altbau 37", teacher: "Larissa Troxler"},
        {subject: "Französisch", room: "Altbau 13", teacher: "Elisabeth Frey-Martins"},
        {subject: "Biologie", room: "Neubau 007", teacher: "Marc Eger"}
    ], [
        {subject: "Englisch", room: "Altbau 25", teacher: "Patrick Schetters"},
        {subject: "Religion, Kultur und Ethik", room: "Neubau 404", teacher: "Michel Borner"},
        {subject: "Instrumentalunterricht", room: "Kirchgemeindehaus 0.15", teacher: "Florian Reichle"},
        {subject: "Geographie", room: "Neubau 011", teacher: "Souria Nussbaumer"},
        {subject: "Geographie", room: "Neubau 011", teacher: "Souria Nussbaumer"}
    ], [
        {subject: "Englisch", room: "Altbau 25", teacher: "Patrick Schetters"},
        {subject: "Mathe", room: "Altbau 15", teacher: "Mattia Rutishauser"},
        {},
        {subject: "Mathe", room: "Altbau 15", teacher: "Mattia Rutishauser"},
        {subject: "Musik", room: "Kirchgemeindehaus MFR", teacher: "Daniel Leo Meier"}
    ], [
        {subject: "Biologie", room: "Neubau 008", teacher: "Marc Eger"},
        {},
        {},
        {subject: "Latein", room: "Altbau 15", teacher: "Johannes Comiotto"}
    ], [
        {subject: "Klassenstunde", room: "Neubau 009", teacher: "Souria Nussbaumer"}
    ]
];
const subjectList = {"Mathe": "math", "Französisch": "french", "Latein": "latin", "Englisch": "english", "Biologie": "biologie", "Klassenstunde": "classhour", "Musik": "music", "Informatik": "informatics", "Religion, Kultur und Ethik": "rke",
    "Sport": "sports", "Deutsch": "german", "Bildnerisches Gestalten": "bg", "Instrumentalunterricht": "iu", "Chemie": "chemistry", "Geschichte": "history", "Geographie": "geography", "Kein Fach": "none"};
const subjectArray = Object.keys(subjectList);