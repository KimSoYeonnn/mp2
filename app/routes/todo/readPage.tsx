import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTodo } from "~/api/todoAPI";
import TodoReadComponent from "~/components/todo/readComponent";


function ReadPage() {
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

  return <TodoReadComponent todo={todo} />;
}

export default ReadPage;
