import type { NextApiRequest, NextApiResponse } from "next";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type Data = {
  posts?: Post;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = "http://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({ posts: data });
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
}
