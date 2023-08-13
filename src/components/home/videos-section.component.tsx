import Video from "types/video";
import VideoItem from "./video-item.component";

type Props = {
  videos: Video[] | null;
};

const VideosSection = ({ videos }: Props) => {
  return (
    <div className="flex mt-6 grow gap-4">
      {videos?.map((video) => (
        <VideoItem
          key={video._id}
          id={video._id}
          title={video.title}
          merchant={video.merchant}
          imgSrc={video.thumbnail}
          link={video.link}
        />
      ))}
    </div>
  );
};

export default VideosSection;
