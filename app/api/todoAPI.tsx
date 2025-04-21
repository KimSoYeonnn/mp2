import axios from "axios";

const host = "http://localhost:8080/api/v1/todos";

export async function testTodoList(page:string, size:string) {

    const res = await axios.get(`${host}/list?page=${page}&size=${size}`)

    return res.data
    
}