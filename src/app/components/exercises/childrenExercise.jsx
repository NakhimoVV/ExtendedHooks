import React from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <NumListComponents>
                <Component />
                <Component />
                <Component />
            </NumListComponents>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num ? `${num}.` : ""} Компонент списка</div>;
};
const NumListComponents = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            num: ++index
        });
    });
};

export default ChildrenExercise;
