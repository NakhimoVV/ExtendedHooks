import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without useCallback()
    const validateWithOutCallback = (data) => {
        console.log(data);
        //каждый раз эта функция инициализируется
        //т.е. каждый раз она не равна предыдущей
    };

    useEffect(() => {
        //просто отслеживаем количество рендеров
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    // With useCallback()
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []); //без зависимостей в этом примере

    useEffect(() => {
        //просто отслеживаем количество рендеров
        withCallback.current++;
    }, [validateWithCallback]);
    //--------------------------------------------------
    //запускаем функции при изменении data
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
