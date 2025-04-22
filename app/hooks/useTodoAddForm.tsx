
import { useActionState, useState } from "react";
import { testTodoAddForm } from "~/api/todoAPI";

export function useTodoAddForm() {

    // const [loading, setLoading] = useState(false);
    // const [result, setResult] = useState("");
    
    const addTodoAction = async (_prevState: any, formData: FormData): Promise<string> => {

        const title = formData.get("title");
        const writer = formData.get("writer");

        if (!title || !writer) {
            return "제목과 작성자는 필수입니다.";
        }

   
        try {
            const response = await testTodoAddForm(formData);


            if (response.result === "success") {
                const msg = `등록 완료 (번호: ${response.data})`
                return msg;
            } else {
                const msg = "등록 실패: 서버 오류";
                return msg;
            }
        } catch (err) {
            console.error("등록 에러:", err);
            const msg = "등록 중 오류 발생";
            return msg;
        }
        
    };

    const [message, formAction] = useActionState(addTodoAction, "");

    return { message, formAction};
}
