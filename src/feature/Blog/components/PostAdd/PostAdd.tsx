import React, { useState } from "react";
import {
  PostAddButton,
  PostAddContent,
  PostField,
  Form,
} from "./PostAdd.styled";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { addItemData } from "../../../../store/slices/post/postSlices";
import { useDispatch } from "../../../../hooks/useDispatch";
import { addPost } from "../../../../services/Post";

const PostAdd: React.FunctionComponent<any> = ({ addTodo }) => {
  let dispatch = useDispatch();

  let formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values, actions) => {
      addTodoItem(values);
      actions.resetForm();
    },
  });

  const addTodoItem = async (form: any) => {
    let response = await addPost(form);

    if (response?.status === 201) {
      dispatch(addItemData(response.data));
    }
  };

  return (
    <PostAddContent>
      <Form onSubmit={formik.handleSubmit}>
        <PostField
          name="title"
          placeholder={"Title"}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <PostField
          placeholder={"Blog"}
          name="body"
          value={formik.values.body}
          rows={4}
          onChange={formik.handleChange}
        />
        <PostAddButton type={"submit"} onClick={addTodoItem}>
          <AddIcon />
        </PostAddButton>
      </Form>
    </PostAddContent>
  );
};

export default PostAdd;
