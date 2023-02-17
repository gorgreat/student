import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import { validator } from "../utils/validator";
import { validatorConfig } from "../utils/validatorConfig";
import ModalPopup from "../components/modal";
import { Link } from "react-router-dom";

const StudentFormAdd = () => {
    const [data, setData] = useState({ name: "Василий", surname: "Алибабаевич", year: "1980", url: "https://gitgub.com" });
    const [errors, setErrors] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) { return; };
        setData(data);
        console.log("данные есть", data);
        localStorage.setItem("formData", JSON.stringify(data));
        setModalVisible(true);
    };

    const handleFocus = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: ""
        }));
    };

    return <>
        {isModalVisible ? <ModalPopup message="Студент создан"/> : false}
        <h1>Создать студента </h1>
        <form onSubmit={handleSubmit}>
            <InputField
                label="Введите ваше имя"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
                onFocus={handleFocus}
            />
            <InputField
                label="Введите вашу фамилию"
                type="text"
                name="surname"
                value={data.surname}
                onChange={handleChange}
                error={errors.surname}
                onFocus={handleFocus}
            />
            <InputField
                label="Введите год рождения"
                type="number"
                name="year"
                value={data.year}
                onChange={handleChange}
                error={errors.year}
                onFocus={handleFocus}
            />
            <InputField
                label="Ссылка на ваше портфолио"
                type="text"
                name="url"
                value={data.url}
                onChange={handleChange}
                error={errors.url}
                onFocus={handleFocus}
            />
            <Link to="/" className="btn btn-secondary me-4">Назад</Link>
            <button type="submit" className="btn btn-primary">Создать</button>

        </form>
    </>;
};

export default StudentFormAdd;
