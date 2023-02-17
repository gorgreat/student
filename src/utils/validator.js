export function validator(data, config) {
    const errors = {};

    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired": {
                statusValidate = data.trim() === "";
                break;
            }
            case "isRus": {
                const rusRegExp = /^[а-яА-Я]+/g;
                statusValidate = !rusRegExp.test(data);
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }
            case "isDigit": {
                const rusRegExp = /^\d+/g;
                statusValidate = !rusRegExp.test(data);
                break;
            }
            case "isUrl": {
                const urlRegExp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/im;
                statusValidate = !urlRegExp.test(data);
                break;
            }
            case "isValidYear": {
                statusValidate = Number(data) > Number(config.currentYear);
                break;
            }
            default:
                break;
        };
        if (statusValidate) return config.message;
    };

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            };
        };
    };

    return errors;
};
