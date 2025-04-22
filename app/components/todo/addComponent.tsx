
import { useTodoAddForm } from "~/hooks/useTodoAddForm";
import LoadingComponent from "../common/loadingComponent";
import ResultComponent from "../common/resultComponent";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

function TodoAddComponent() {

    const {message, formAction} = useTodoAddForm();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    // message가 생기면 로딩 종료 + 처리 결과 보여주기
    useEffect(() => {
        if (message) {
            console.log('message : ', message)
            setLoading(false);
            setResult(message);
            if (message.startsWith("등록 완료")) {
                console.log('message : ', message)
                const timer = setTimeout(() => navigate("/todo/list"), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [message, navigate]);

    const onSubmit = () => {
        setLoading(true);
    };
    

    return (
        <form action={formAction} className="p-4 space-y-4" onSubmit={onSubmit}>
            <div className="text-2xl font-bold">할 일 추가</div>

            <div>
                <label className="block mb-1">제목</label>
                <input
                    type="text"
                    name="title"
                    className="border rounded p-2 w-full"
                    required
                />
            </div>

            <div>
                <label className="block mb-1">내용</label>
                <textarea
                    name="content"
                    className="border rounded p-2 w-full"
                    rows={4}
                />
            </div>

            <div>
                <label className="block mb-1">작성자</label>
                <input
                    type="text"
                    name="writer"
                    className="border rounded p-2 w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                등록
            </button>

            <LoadingComponent isLoading={loading} />
            {result && <ResultComponent msg={result} closeFn={() => setResult("")} />}
        </form>
    );
}

export default TodoAddComponent;
