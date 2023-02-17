export const validatorConfig = {
    name: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isRus: {
            message: "Имя должно быть на русском"
        }
    },
    surname: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isRus: {
            message: "Фамилия должна быть на русском"
        }
    },
    year: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isDigit: {
            message: "Можно только цифры"
        },
        min: {
            message: "В году должно быть 4 цифры",
            value: 4
        },
        isValidYear: {
            message: "Данные год еще не наступил",
            currentYear: 2023
        }
    },
    url: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isUrl: {
            message: "Ссылка неверная"
        }
    }
};
