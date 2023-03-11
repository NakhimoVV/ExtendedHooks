import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
/*
//функция называется "areEqual"
(prevProps, nextProps) => {
    if (prevProps === nextProps) return true;
    return false;
}
*/
//--> Собственный "areEqual" для нашего случая:
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            {/* <LogOutButton onLogOut={handleLogOut} /> */}
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
