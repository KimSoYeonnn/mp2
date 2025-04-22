
import type { Todo } from "~/types/todo";

interface TodoReadProps {
    todo: Todo;
}

function TodoReadComponent({todo}: TodoReadProps) {

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-xl space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">{todo.title}</h2>
      
      <div className="text-sm text-gray-500">
        <span className="mr-4">작성자: <span className="font-semibold">{todo.writer}</span></span>
        <span>
          등록일: {todo.regDate ? new Date(todo.regDate).toLocaleString() : "-"}
        </span>
      </div>

      <div className="border rounded p-4 text-gray-700 whitespace-pre-line min-h-[120px] bg-gray-50">
        {todo.content?.trim() ? todo.content : <span className="italic text-gray-400">(빈 내용입니다.)</span>}
      </div>

      {todo.modDate && (
        <div className="text-xs text-gray-400 pt-2">
          수정일: {new Date(todo.modDate).toLocaleString()}
        </div>
      )}
    </div>
    );
}

export default TodoReadComponent;