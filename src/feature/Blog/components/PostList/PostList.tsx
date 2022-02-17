import { useSelector } from "../../../../hooks/useSelector";
import PostCard from "../PostCard";
import { PostListContent } from "./PostList.styled";
import Image from "../../../../components/Image";
import emptyImage from "../../../../image/empty.png";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

export const PostList = () => {
  let posts = useSelector((state) => state.post.posts);

  return (
    <PostListContent>
      {posts?.length ? (
        <TransitionGroup>
          {posts?.map((item: any) => {
            return (
              <Collapse key={`post-id-${item.id}`}>
                <PostCard {...item} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      ) : (
        <Image src={emptyImage} width="400" />
      )}
    </PostListContent>
  );
};
