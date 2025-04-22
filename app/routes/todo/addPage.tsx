import React from "react";
import TodoAddComponent from "~/components/todo/addComponent";

function TodoAddPage() {
    return (
        <div>
            <div className={'text-4xl'}>Todo Add Page</div>
            <TodoAddComponent></TodoAddComponent>
        </div>
    )
}

export default TodoAddPage;