import { toast } from "react-toastify";
import { Axios } from "../util/baseURL";

export const getPosts = () => {
  try {
    let res = Axios.get(`posts`);
    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};

export const getPostID = (id: number) => {
  try {
    let res = Axios.get(`posts/${id}?_embed=comments`);
    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};

export const addPost = (postForm: object) => {
  try {
    let res = Axios.post(`posts`, postForm);
    toast.success("Post successfully added");
    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};

export const updatePost = (id: number, data: object) => {
  try {
    let res = Axios.put(`posts/${id}`, data);
    toast.success("Post successfully updated");
    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};

export const deletePost = (id: number) => {
  try {
    let res = Axios.delete(`posts/${id}`);
    toast.success("Post successfully deleted");

    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};

export const createComment = (commentForm: object) => {
  try {
    let res = Axios.post(`comments`, commentForm);
    toast.success("Comment successfully added");
    return res;
  } catch (e) {
    toast.error("Server Error");
  }
};
