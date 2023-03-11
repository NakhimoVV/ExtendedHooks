import React, { useRef, useState, useEffect } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef(""); //референс prevState изначально будет хранить в себе пустую строку
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState; //референс prevState будет хранить в себе предыдущее значение otherState
    }, [otherState]); //(т.к. мы его изменяем когда меняется otherState (ререндериться))

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State:{prevState.current}</p>
            <p>current State:{otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
