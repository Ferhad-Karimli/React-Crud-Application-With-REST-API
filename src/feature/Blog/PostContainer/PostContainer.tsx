// import { useEffect } from "react"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader, PostContentStyled } from "./PostContainer.styled";
import { Grow } from "@mui/material";
import PostAdd from "../components/PostAdd";
import PostList from "../components/PostList";
import { useEffect } from "react";
import { getPosts } from "../../../services/Post";
import { fillPosts } from "../../../store/slices/post/postSlices";
import { useDispatch } from "../../../hooks/useDispatch";

const PostContainer = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const fillData = async () => {
      let res = await getPosts();
      console.log(res);
      dispatch(fillPosts(res?.data));
    };
    fillData();
  }, [dispatch]);

  return (
    <PostContentStyled>
      <CssBaseline />
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <PostAdd />
          <PostList />
        </Box>
      </Grow>
    </PostContentStyled>
  );
};

export default PostContainer;
