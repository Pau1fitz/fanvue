import { ImageListItem, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Photo } from "../pages/api/vault";
import CloseIcon from "@mui/icons-material/Close";

type PhotoItemProps = {
  photo: Photo;
};

const PhotoItem = ({ photo }: PhotoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleOpen = (url: string) => {
    setIsOpen(true);
    setCurrentImage(url);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ImageListItem sx={{ cursor: "pointer" }}>
        <img
          onClick={() => handleOpen(photo.url)}
          src={`${photo.thumbnailUrl}?h=300fit=crop&auto=format`}
          alt={photo.title}
          loading="lazy"
        />
      </ImageListItem>

      {currentImage && (
        <Modal
          open={isOpen}
          onClose={handleClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CloseIcon
              sx={{
                fill: "#fff",
                position: "absolute",
                top: "1rem",
                left: "1rem",
              }}
              onClick={handleClose}
            />
            <img
              src={currentImage}
              alt={photo.title}
              style={{ width: "100%" }}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default PhotoItem;
