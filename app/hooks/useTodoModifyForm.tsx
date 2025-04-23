import { useActionState } from "react";
import { updateTodo } from "~/api/todoAPI";
import type { ActionResult } from "~/types/common";

export function useTodoModifyForm() {

  const modiTodoAction = async (_prevState: any, formData: FormData): Promise<string> => {

    const title = formData.get("title")

    if(!title) {
      return "제목과 작성자는 필수입니다."
    }

    try {
      const response = await updateTodo(formData);
      console.log("response in modify form:", response);

      if (response.result === "success") {
          const msg = `수정 완료`
          return msg;
      } else {
          const msg = "수정 실패: 서버 오류";
          return msg;
      }
    } catch (error) {
        const msg = "수정 중 오류 발생";
        return msg;
    }
  }

  const [message, formAction] = useActionState(modiTodoAction, "");


  return { message, formAction};
}
