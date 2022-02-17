import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import Popover from "@mui/material/Popover";
import { PostCardStyled } from "./PostCard.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import { deletePost } from "../../../../services/Post";
import { useDispatch } from "../../../../hooks/useDispatch";
import { deleteItemData } from "../../../../store/slices/post/postSlices";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostCard = ({ id, title, body }: any) => {
  let { push } = useHistory();

  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeRoute = () => {
    push(`/posts/id=${id}`);
  };

  const removePost = async () => {
    let response: any = await deletePost(id);

    if (response?.status === 200) {
      dispatch(deleteItemData(id));
    }
    console.log(response);
  };

  return (
    <PostCardStyled>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box>
         
          <IconButton aria-label="settings" color="error" onClick={removePost}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Popover>
      <CardMedia
        onClick={changeRoute}
        component="img"
        height="194"
        image="https://blog.sellfy.com/wp-content/uploads/2019/09/instagram-post-ideas-1200x600.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CommentIcon />
        </IconButton>
      </CardActions>
    </PostCardStyled>
  );
};
