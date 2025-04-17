// src/pages/todo/layoutPage.tsx
import { useNavigate } from "react-router";

const TodoLayoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Todo 관리
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* 메모 추가 카드 */}
        <div
          onClick={() => navigate("/todo/add")}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">메모 추가</h2>
          <p className="text-gray-500 text-sm">새로운 메모를 작성해보세요</p>
        </div>

        {/* 메모 목록 카드 */}
        <div
          onClick={() => navigate("/todo/list")}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">메모 목록</h2>
          <p className="text-gray-500 text-sm">작성한 메모들을 확인하세요</p>
        </div>
      </div>
    </div>
  );
};

export default TodoLayoutPage;
