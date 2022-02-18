import { useState } from "react";
import { CommentButton, CommentField, CommentBox } from "./AddComment.styled";
import { createComment } from "../../../../services/Post";

export const AddComment = ({ postId, setCommentState }: any) => {
  let [body, setBody] = useState("");

  const addComment = async () => {
    let response = await createComment({ postId, body });

    if (response?.status === 201) {
      setCommentState((prev: any) => [response?.data, ...prev]);
      setBody("");
    }
  };

  return (
    <CommentBox>
      <CommentField
        onChange={(e) => setBody(e.target.value)}
        value={body}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === "Enter" && addComment()
        }
      />
      <CommentButton onClick={addComment}>Add</CommentButton>
    </CommentBox>
  );
};
