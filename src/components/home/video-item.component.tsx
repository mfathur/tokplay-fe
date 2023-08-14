import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  imgSrc: string;
  title: string;
  merchant: string;
  link: string;
};

const VideoItem = ({ id, imgSrc, title, merchant, link }: Props) => {
  const navigate = useNavigate();

  const goToVideoDetailPage = () => {
    navigate(`videos/${id}`, {
      state: { title, merchant, link },
    });
  };

  return (
    <div
      onClick={goToVideoDetailPage}
      className="relative rounded-lg bg-red-200 w-1/5 h-96 hover:cursor-pointer"
    >
      <img className="rounded-lg  h-96" src={imgSrc} alt={title} />
      <p className="font-bold absolute bottom-8 left-2">{title}</p>
      <p className="absolute left-2 bottom-2 text-sm">{merchant}</p>
    </div>
  );
};

export default VideoItem;
