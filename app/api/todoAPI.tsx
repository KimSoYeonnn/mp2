import axios from "axios";
import type { ActionResult } from "~/types/common";
import type { Todo, TodoAdd } from "~/types/todo";

const host = "http://localhost:8080/api/v1/todos";

export async function testTodoList(page:string, size:string) {

    const res = await axios.get(`${host}/list?page=${page}&size=${size}`)

    return res.data
    
}

export async function getTodo(tno: string) {
    console.log(tno)
    const res = await axios.get(`${host}/read/${tno}`)
    return res.data
}

export async function deleteTodo(tno: number) {
    const res = await axios.delete(`${host}/${tno}`);
    return res.data;
}
  

export async function updateTodo(formData:FormData):Promise<ActionResult<number>> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const tno = formData.get("tno");
    const title = formData.get("title");
    const content = formData.get("content");

    console.log("tno!!! ", tno)

    if (!tno) {
        throw new Error("tno가 없습니다.");
    }
    
    const res = await axios.put(`${host}/${tno}`, formData)
    console.log("서버 응답:", res.data); 

    return res.data;
}

export async function testTodoAddForm(formData:FormData):Promise<ActionResult<number>> {

    await new Promise(resolve => setTimeout(resolve, 1500));
    // console.log(formData)

    const res = await axios.post(`${host}`, formData);
    
    console.log("서버 응답:", res.data)

    console.log(res)

    return res.data

}