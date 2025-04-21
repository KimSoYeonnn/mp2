import { useQuery } from "@tanstack/react-query";
import { testTodoList } from "~/api/todoAPI";
import type { PageResult, Todo } from "~/types/todo";


export const useTodoList = () => {

    return useQuery<PageResult<Todo>>({
        queryKey: ['todos'],
        queryFn: async() => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            return await testTodoList();
        }
        
    });
}