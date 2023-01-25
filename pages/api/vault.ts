import type { NextApiRequest, NextApiResponse } from "next";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Data {
  photos?: Photo;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url =
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=200";

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({ photos: data });
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
}
