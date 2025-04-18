import React from "react";
import TodoListComponent from "~/components/todo/listComponent";

function TodoListPage() {
    return (
        <div>
            <div className={'text-4xl'}>Todo List Page</div>

            <TodoListComponent></TodoListComponent>

        </div>
    )
}

export default TodoListPage;