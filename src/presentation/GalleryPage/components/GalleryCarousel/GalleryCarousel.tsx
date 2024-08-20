import { IconButton, Stack } from "@mui/material";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./GalleryCarousel.css";

type T_GalleryCarousel = {
  type: string;
  title: string;
  image: string;
  nextButton: () => void;
  backButton: () => void;
};

const GalleryCarousel: React.FC<T_GalleryCarousel> = ({ type, title, image, nextButton, backButton }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {type === "picture" && <img src={image} alt={title} className="galleryPicture" />}
      {type === "video" && (
        <Stack direction={"row"}>
          <Stack justifyContent={"center"} className="galleryNav">
            <IconButton onClick={backButton} className="galleryIcon" color="secondary">
              <FaChevronLeft />
            </IconButton>
          </Stack>
          <iframe src={image} title={title} width="700" height="400" className="galleryPicture" />
          <Stack justifyContent={"center"} className="galleryNav">
            <IconButton onClick={nextButton} className="galleryIcon" color="secondary">
              <FaChevronRight />
            </IconButton>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default GalleryCarousel;
