import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1; //тяжелая функция
}
function runFactorial(n) {
    console.log("Run Factorial");
    return factorial(n);
}
//добавили runFactorial чтобы было видно что при изменении цвета
//(стороннего setState) не только ререндерится страница, но
// и запускается тяжёлая функция runFactorial

const ComplexCalculateExample = () => {
    //сделаем так чтобы компонент ререндерился - для это добавим value
    const [value, setValue] = useState(100);
    useEffect(() => {
        console.log("Render page");
    });
    // const fact = runFactorial(value); //при использовании без useMemo()
    const fact = useMemo(() => runFactorial(value), [value]);
    //Теперь, тяжёлая функция runFactorial не будет запускаться от кнопки change color

    const [otherState, setOtherState] = useState(false);
    //в зависимости от этого otherState будем менять цвет кнопки
    const buttonColor = otherState ? "primary" : "secondary";
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    onClick={() => setValue((prevState) => prevState + 10)}
                    className="btn btn-primary mx-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => setValue((prevState) => prevState - 10)}
                    className="btn btn-primary mx-2"
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    onClick={() => setOtherState((prevState) => !prevState)}
                    className={"btn mx-2 btn-" + buttonColor}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
