import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const [stateBlock, setStateBlock] = useState(false);

    const blockRef = useRef();
    const prevState = useRef();

    useEffect(() => {
        prevState.current = stateBlock;
    }, [stateBlock]);

    const handleClickChange = () => {
        setStateBlock((prevState) => {
            if (prevState === false) {
                blockRef.current.style.width = "150px";
                blockRef.current.style.height = "80px";
                blockRef.current.innerHTML = "<small>text</small>";
                return true;
            } else {
                blockRef.current.style.width = "60px";
                blockRef.current.style.height = "40px";
                blockRef.current.innerHTML = "<small>Блок</small>";
                return false;
            }
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockRef}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-secondary mt-1"
                onClick={handleClickChange}
            >
                {stateBlock ? "Вернуть обратно" : "Изменить Блок"}
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
