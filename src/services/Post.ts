import { toast } from "react-toastify"
import { Axios } from "../util/baseURL"



export const getPosts = () => {
    try {
        let res = Axios.get(`posts`)
        return res

    } catch (e) {
        toast.error("Server Error")
    }
}

export const getPostID = (id:number) => {
    try {
        let res = Axios.get(`posts/${id}?_embed=comments`)
        return res

    } catch (e) {
        toast.error("Server Error")
    }
}


export const addPost = (postForm:any) => {
    try {
        let res = Axios.post(`posts`,postForm)
        toast.success("Successfuly added")
        return res

    } catch (e) {
        toast.error("Server Error")
    }
}

export const updatePost = (id:number,data:any) => {
    try {
        let res = Axios.put(`posts/${id}`,data)
        toast.success("Successfuly updated")
        return res

    } catch (e) {
        toast.error("Server Error")
    }
}


export const deletePost = (id: number) => {
    try {
        let res = Axios.delete(`posts/${id}`)
        toast.success("Successfuly deleted")

        return res

    } catch (e) {
        toast.error("Server Error")
    }
}


export const createComment = (commentForm:any) =>{
    try {
        let res = Axios.post(`comments`,commentForm)
        toast.success("Successfuly added")
        return res

    } catch (e) {
        toast.error("Server Error")
    }
}