const lang = {
    en: {
        search: "search",
        gptSearchPlaceHolder: "What would you like to watch today?"
    },
    kannada: {
        search: "ಹುಡುಕಿ",
        gptSearchPlaceHolder: "ನೀವು ಇಂದು ಏನನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುತ್ತೀರಿ?"
    },
    spanish: {
        search: "buscar",
        gptSearchPlaceHolder: "¿Qué te gustaría ver hoy?"
    }
}

export default lang;

export const SUPPORTED_LANGUAGE = [
    {
        identifier: "English",
        value: "en"
    },
    {
        identifier: "ಕನ್ನಡ",
        value: "kannada"
    },
    {
        identifier: "canarés",
        value: "spanish"
    }
];