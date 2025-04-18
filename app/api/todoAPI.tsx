import axios from "axios";

const host = "http://localhost:8080/api/v1/todos";

export async function testTodoList() {

    const res = await axios.get(`${host}/list`)

    return res.data
    
}