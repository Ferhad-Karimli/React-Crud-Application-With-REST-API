import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CommentCardStyled } from "./CommentCard.styled";

export const CommentCard = ({ id, body }: any) => {
  return (
    <CommentCardStyled>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Comment
        </Typography>
        <Typography variant="h6" component="div">
          {body}
        </Typography>
      </CardContent>
    </CommentCardStyled>
  );
};
