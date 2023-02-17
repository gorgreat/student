import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import { validator } from "../utils/validator";
import { validatorConfig } from "../utils/validatorConfig";
import ModalPopup from "./modal";
import { Link } from "react-router-dom";

const StudentFormEdit = () => {
    const dataForm = localStorage.getItem("formData");
    const newData = JSON.parse(dataForm);
    const [isModalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState({ name: newData.name, surname: newData.surname, year: newData.year, url: newData.url });
    const [errors, setErrors] = useState({});
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
    };

    const handleFocus = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: ""
        }));
    };

    const handleUpdate = () => {
        const isValid = validate();
        if (!isValid) { return; };
        localStorage.clear();
        localStorage.setItem("formData", JSON.stringify(data));
        setModalVisible(true);
    };

    return <>
        {isModalVisible ? <ModalPopup message="Данные обновили"/> : false}
        <h1>Редактируем студента</h1>
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
        </form>
        <Link to="/" className="btn btn-secondary me-4">Назад</Link>
        <button type="button" className="btn btn-primary" onClick={handleUpdate} >Обновить</button>
    </>;
};

export default StudentFormEdit;
