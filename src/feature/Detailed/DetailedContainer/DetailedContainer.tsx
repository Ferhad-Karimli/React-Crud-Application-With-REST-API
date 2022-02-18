import { Box, Button, FormGroup, Grow} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { DrawerHeader } from "../../../components/Drawer/Drawer.styled";
import Image from "../../../components/Image";
import { getPostID, updatePost } from "../../../services/Post";
import CommentContent from "../components/CommentContent";
import { PostField, EditButton } from "./DetailedContainer.styled";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
export const DetailedContainer = () => {
  let [postState, setPostState] = useState<any>();
  let [commentState, setCommentState] = useState([]);
  let [editPost, setEditPost] = useState(false);
  let titleRef = useRef<any>();
  let bodyRef = useRef<any>();

  let { location, goBack } = useHistory();

  useEffect(() => {
    fillPostData();
  }, []);

  const fillPostData = async () => {
    let postID = +location?.pathname?.split("=")[1];
    let response = await getPostID(postID);
    setPostState(response?.data);
    setCommentState(response?.data.comments);
  };

  const handleEdit = () => {
    setEditPost((prev) => !prev);

    if (editPost) {
      let data = {
        title: titleRef?.current.value,
        body: bodyRef?.current.value,
      };

      updatePost(postState?.id, data);
    }
  };

  if (!postState) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Button variant="contained" color="warning" onClick={goBack}>
            Go Back
          </Button>
          <Image
            src={
              "https://blog.sellfy.com/wp-content/uploads/2019/09/instagram-post-ideas-1200x600.png"
            }
            height="500"
            cover="true"
          />
          <EditButton variant="contained" color="success" onClick={handleEdit}>
            {editPost ? <SaveAsIcon /> : <EditIcon />}
          </EditButton>
          <FormGroup>
            <PostField
              edit={editPost ? "true" : ""}
              ref={titleRef}
              font="45"
              readOnly={!editPost}
              defaultValue={postState?.title}
            />
            <PostField
              edit={editPost ? "true" : ""}
              ref={bodyRef}
              font="25"
              readOnly={!editPost}
              defaultValue={postState?.body}
            />
          </FormGroup>
          <CommentContent
            setCommentState={setCommentState}
            postId={postState?.id}
            comments={commentState}
          />
        </Box>
      </Grow>
    </>
  );
};
