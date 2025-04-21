import { useState } from "react";
import { useTodoList } from "~/hooks/useTodoList";
import Pagination from "../common/pageComponent";
import { useSearchParams } from "react-router";

function TodoListComponent() {
    
    const [searchParams] = useSearchParams();
    const pageStr = searchParams.get("page") || "1"
    const sizeStr = searchParams.get("size") || "10"

    const { data: todosData, isLoading, error } = useTodoList(pageStr, sizeStr);

    //보기 타입
    const [viewType, setViewType] = useState<"board" | "gallery">("board");

    const toggleView = () => {
        setViewType(prev => (prev === "board" ? "gallery" : "board"));
    };

    if (error) return <div className="p-4">에러 발생!</div>;
    if (isLoading) return <div className="p-4">로딩 중...</div>;

    const todos = todosData?.content || [];

    return (
        <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Todo List</h2>
            <button
            onClick={toggleView}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
            {viewType === "board" ? "갤러리 보기" : "게시판 보기"}
            </button>
        </div>

        {viewType === "board" ? (
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0 bg-white rounded-lg shadow-md">
        <thead className="bg-slate-200">
            <tr className="text-left border-b">
            <th className="px-4 py-2 text-lg font-semibold text-gray-800">제목</th>
            <th className="px-4 py-2 text-lg font-semibold text-gray-800 text-right">작성자</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
            <tr
                key={todo.tno}
                className="border-b hover:bg-gray-100 cursor-pointer transition"
            >
                <td className="px-4 py-2 text-md text-gray-800">{todo.title}</td>
                <td className="px-4 py-2 text-md text-gray-600 text-right">{todo.writer}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {todos.map(todo => (
                <div
                key={todo.tno}
                className="bg-white shadow-md rounded-lg p-4 aspect-square flex flex-col justify-between"
                >
                <div>
                    <div className="font-bold text-xl mb-1">{todo.title}</div>
                    <div className="text-gray-700 text-sm line-clamp-3">{todo.content}</div>
                </div>
                <div className="text-xs text-gray-500 text-right mt-2">{todo.writer}</div>
                </div>
            ))}
            </div>
        )}
        <Pagination currentPage={Number(pageStr)} totalPages={todosData?.totalPages ?? 1}></Pagination>
        </div>
        
    );
}

export default TodoListComponent;
