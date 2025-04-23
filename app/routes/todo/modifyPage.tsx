import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Todo } from "~/types/todo";
import { getTodo } from "~/api/todoAPI";
import TodoModifyComponent from "~/components/todo/modifyComponent";


function TodoModifyPage() {
    const { tno } = useParams();
    const [todo, setTodo] = useState(null);
  
    useEffect(() => {
      if (!tno) return;
      getTodo(tno).then((data) => {
        setTodo(data);
      });
    }, [tno]);
  
    if (!todo) {
      return <div>Loading...</div>;
    }
  
    return <TodoModifyComponent todo={todo} />;
  
}

export default TodoModifyPage;
