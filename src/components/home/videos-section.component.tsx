import React from "react";
import VideoItem from "./video-item.component";

type Props = {};

const VideosSection = (props: Props) => {
  return (
    <div className="flex mt-6 grow gap-4">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};

export default VideosSection;
