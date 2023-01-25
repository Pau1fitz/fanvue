import { Divider, Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Post } from "../pages/api/feed";
import MessageIcon from "@mui/icons-material/Message";
import Comments from "./Comments";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const [comments, setComments] = useState([]);
  const [areCommentsDisplayed, setAreCommentsDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        const json = await response.json();
        setComments(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleToggleComments = () => {
    setAreCommentsDisplayed(!areCommentsDisplayed);
  };

  return (
    <Box
      sx={{
        borderRadius: "1rem",
        boxShadow: "rgb(0 0 0 / 8%) 1px 1px 9px",
        background:
          "linear-gradient(95.92deg, rgb(244, 138, 108) 0%, rgb(244, 135, 108) 3.05%, rgb(253, 29, 93) 100%)",
        mb: "1rem",
        p: "1rem",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "1.25rem", mb: "0.5rem" }}>
        {post.title}
      </Typography>
      <Typography sx={{ mb: "0.5rem" }}>{post.body}</Typography>

      {!isLoading && comments.length > 0 && (
        <Box
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={handleToggleComments}
        >
          <MessageIcon />
          <Typography sx={{ ml: "0.5rem" }}>{comments.length}</Typography>
        </Box>
      )}

      {areCommentsDisplayed && (
        <>
          <Divider sx={{ mt: "1rem" }} />
          <Fade in={areCommentsDisplayed} easing="ease-in-out">
            <Box>
              <Comments comments={comments} />
            </Box>
          </Fade>
        </>
      )}
    </Box>
  );
};

export default PostItem;
