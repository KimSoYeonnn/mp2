
import { useActionState } from "react";
import { testTodoAddForm } from "~/api/todoAPI";

export function useTodoAddForm() {
    const addTodoAction = async (_prevState: any, formData: FormData): Promise<string> => {
        const title = formData.get("title");
        const writer = formData.get("writer");

        if (!title || !writer) {
            return "제목과 작성자는 필수입니다.";
        }

        try {
            const result = await testTodoAddForm(formData);

            if (result.result === "success") {
                return `등록 완료 (번호: ${result.data})`;
            } else {
                return "등록 실패: 서버 오류";
            }
        } catch (err) {
            console.error("등록 에러:", err);
            return "등록 중 오류 발생";
        }
    };

    const [message, formAction] = useActionState(addTodoAction, "");

    return { message, formAction };
}
