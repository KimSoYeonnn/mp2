
interface Todo {
    "tno": number,
    "title": string,
    "writer": string,
    "content": string,
    "regDate"?: Date | null,
    "modDate"?: Date | null
}

export interface PageResult<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number; 
    first: boolean;
    last: boolean;
}