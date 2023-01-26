import { Box, ImageList, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import PhotoItem from "../components/PhotoItem";

import { Photo } from "./api/vault";

type VaultProps = {
  photoFeed: {
    photos: Photo[];
  };
};

const Vault: NextPage<VaultProps> = ({ photoFeed }: VaultProps) => {
  return (
    <main>
      <Head>
        <title>Fanvue Challenge</title>
        <meta
          name="description"
          content="Fanvue Vault Page"
          key="description"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Fanvue" />
        <meta property="og:type" content="website" />
      </Head>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ fontSize: "1.5rem", m: "0.5rem 0" }} variant="h1">
          Vault
        </Typography>
      </Box>

      <ImageList cols={5} rowHeight={300}>
        {photoFeed.photos.map((photo) => {
          return <PhotoItem key={photo.id} photo={photo} />;
        })}
      </ImageList>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/vault");
  const photoFeed = await res.json();

  return {
    props: {
      photoFeed,
    },
  };
}

export default Vault;
