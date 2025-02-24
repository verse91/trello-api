import { slugify } from "../utils/formatters";

const createNew = async (reqBody: any) =>{
    try {
        const newBoard ={
            ...reqBody,
            slug: slugify(reqBody.title),
        }
        return newBoard;
    }
    catch(error: any) {throw error;}
}


export const boardService = { createNew }
