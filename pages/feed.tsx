import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import PostItem from "../components/PostItem";
import { Post } from "./api/feed";

type FeedProps = {
  feed: {
    posts: Post[];
  };
};

const Feed: NextPage<FeedProps> = ({ feed }: FeedProps) => {
  return (
    <main>
      <Head>
        <title>Fanvue Challenge</title>
        <meta name="description" content="Fanvue Feed Page" key="description" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Grid
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", m: "0.5rem 0" }} variant="h1">
          Feed
        </Typography>

        {feed.posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();

  return {
    props: {
      feed,
    },
  };
}

export default Feed;
