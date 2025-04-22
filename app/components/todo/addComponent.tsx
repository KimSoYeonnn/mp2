
import { useTodoAddForm } from "~/hooks/useTodoAddForm";

function TodoAddComponent() {

    const {message, formAction} = useTodoAddForm();
    

    return (
        <form action={formAction} className="p-4 space-y-4">
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

            {message && <div className="mt-4 text-green-600">{message}</div>}
        </form>
    );
}

export default TodoAddComponent;
