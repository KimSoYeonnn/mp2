import {useQuery} from "@tanstack/react-query";
import {testTodoList} from "~/api/todoAPI";


function TodoListComponent () {

    // Queries
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: async() => {


            await new Promise(resolve => setTimeout(resolve, 2000));

            const todos:Todo[] = await testTodoList()

            return todos
        }
    })

    const {isFetching, data, error } = query

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>
        </div>
    )
}

export default TodoListComponent