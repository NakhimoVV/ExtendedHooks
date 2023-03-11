import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current); //получили DOM-елемент
        inputRef.current.focus(); //ставим фокус на данный элемент
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    const handleClickTakeWidth = () => {
        console.log(inputRef.current.clientWidth);
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef} //вместо поиска по id в DOM-дереве
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-1" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary m-1"
                onClick={handleClickWidth}
            >
                Изменить ширину input
            </button>
            <button
                className="btn btn-danger m-1"
                onClick={handleClickTakeWidth}
            >
                Получить ширину елемента (input)
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
