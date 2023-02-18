import React, { useState } from "react";
import { Link } from "react-router-dom";

function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const StudentCard = () => {
    const CURRENT_YEAR = 2023;
    const dataForm = localStorage.getItem("formData");
    const data = JSON.parse(dataForm);
    const [, setStudent] = useState(data);

    const handleDelete = () => {
        localStorage.clear();
        setStudent();
    };

    const yearPhrase = (data, year) => {
        const yearOfBirth = year - data.year;
        return declOfNum(yearOfBirth.toString().slice(-1), ["год", "года", "лет"]);
    };

    return <>
        {data ? <>
            <h1>Наш студент</h1>
            <p><b>Имя: </b> {data.name}</p>
            <p><b>Фамилия: </b> {data.surname}</p>
            <p><b>Год рождения: </b> {data.year} </p>
            <p><b>Возраст: </b>{CURRENT_YEAR - data.year} {yearPhrase(data, CURRENT_YEAR)}</p>
            <p><b>Портфель: </b> <a href={data.url}>{data.url}</a></p>
            <Link to="/edit" className="btn btn-secondary mr-3">Редактировать</Link>
            <button className="btn btn-danger mx-2" onClick={handleDelete}>Удалить</button>
        </>
            : <>
                <h1>Добавить студента</h1>
                <p>Данных нету</p>
                <Link className="btn btn-primary" to="/add">Добавить</Link>
            </>
        }

    </>;
};

export default StudentCard;
