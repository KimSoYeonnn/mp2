
import { useTodoAddForm } from "~/hooks/useTodoAddForm";
import LoadingComponent from "../common/loadingComponent";
import ResultComponent from "../common/resultComponent";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { PencilLine, FileText, User } from "lucide-react";

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
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
            <form action={formAction} className="space-y-4" onSubmit={onSubmit}>
                <div className="text-2xl font-bold text-center">✏️ 할 일 추가</div>
    
                <div>
                    <label className="block mb-1 font-semibold">📌 제목</label>
                    <input
                        type="text"
                        name="title"
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
    
                <div>
                    <label className="block mb-1 font-semibold">📝 내용</label>
                    <textarea
                        name="content"
                        className="border rounded p-2 w-full"
                        rows={4}
                    />
                </div>
    
                <div>
                    <label className="block mb-1 font-semibold">👤 작성자</label>
                    <input
                        type="text"
                        name="writer"
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
    
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    ➕ 등록
                </button>
    
                <LoadingComponent isLoading={loading} />
                {result && <ResultComponent msg={result} closeFn={() => setResult("")} />}
            </form>
        </div>
    );
    
    
}

export default TodoAddComponent;
