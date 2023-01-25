import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Comment } from "../pages/api/feed";
import EmailIcon from "@mui/icons-material/Email";

type CommentProps = {
  comments: Comment[];
};

const Comments = ({ comments }: CommentProps) => {
  return (
    <Box sx={{ mt: "1rem" }}>
      {comments.map((comment) => {
        return (
          <Box key={comment.id}>
            <Box sx={{ display: "flex" }}>
              <EmailIcon />
              <Typography sx={{ ml: "0.5rem", mb: "0.5rem" }}>
                {comment.email}
              </Typography>
            </Box>

            <Typography>{comment.name}</Typography>
            <Typography sx={{ mb: "1rem" }}>{comment.body}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Comments;
