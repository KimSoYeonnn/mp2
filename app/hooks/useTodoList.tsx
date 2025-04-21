import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { testTodoList } from "~/api/todoAPI";
import type { PageResult, Todo } from "~/types/todo";


export const useTodoList = (pageStr:string = "1", sizeStr:string = "10") => {

    return useQuery<PageResult<Todo>>({
        queryKey: ['todos', pageStr, sizeStr],
        queryFn: async() => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            return await testTodoList(pageStr, sizeStr);
        }
        
    });
}