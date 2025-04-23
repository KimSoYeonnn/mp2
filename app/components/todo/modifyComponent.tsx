
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTodoModifyForm } from "~/hooks/useTodoModifyForm";
import type { Todo } from "~/types/todo";
import LoadingComponent from "../common/loadingComponent";
import ResultComponent from "../common/resultComponent";
import { deleteTodo } from "~/api/todoAPI";

interface TodoModifyProps {
    todo: Todo;
}

function TodoModifyComponent({todo}: TodoModifyProps) {

    const {message, formAction} = useTodoModifyForm();

    console.log("res!!!", message? message: "null")
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    // message가 생기면 로딩 종료 + 처리 결과 보여주기
    useEffect(() => {
        if (message) {
            setLoading(false);
            setResult(message);
            if (message.startsWith("수정 완료")) {
                console.log('message : ', message)
                const timer = setTimeout(() => navigate(`/todo/read/${todo.tno}`), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [message, navigate]);

    const onSubmit = () => {
        setLoading(true);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
        <form action={formAction} className="p-4 space-y-4" onSubmit={onSubmit}>
            <div className="text-2xl font-bold text-center">✏️ 수정</div>

            <input type="hidden" name="tno" value={todo.tno} />

            <div>
            <label className="block mb-1">📌 제목</label>
            <input
                type="text"
                name="title"
                className="border rounded p-2 w-full"
                defaultValue={todo.title}
                required
            />
            </div>

            <div>
            <label className="block mb-1">📝 내용</label>
            <textarea
                name="content"
                className="border rounded p-2 w-full"
                defaultValue={todo.content}
                rows={4}
            />
            </div>

            <div>
            <label className="block mb-1">👤 작성자</label>
            <input
                type="text"
                name="writer"
                className="border rounded p-2 w-full"
                defaultValue={todo.writer}
                readOnly
            />
            </div>

            <div className="flex gap-2">
            <button
                type="submit"
                className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                ✏️ 수정
            </button>
            <button
                type="button"
                className="w-1/2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={async () => {
                if (confirm("정말 삭제하시겠습니까?")) {
                    const result = await deleteTodo(todo.tno);
                    if (result.result === "success") {
                    alert("삭제 완료!");
                    navigate("/todo/list");
                    } else {
                    alert("삭제 실패!");
                    }
                }
                }}
            >
                🗑️ 삭제
            </button>
            </div>

            <LoadingComponent isLoading={loading} />
            {result && <ResultComponent msg={result} closeFn={() => setResult("")} />}
        </form>
        </div>

    );
}

export default TodoModifyComponent;