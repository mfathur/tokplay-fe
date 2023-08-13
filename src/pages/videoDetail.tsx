import CommentsSection from "components/video/comment-section.component";
import ProductsSection from "components/video/product-section.component";
import TopBar from "components/video/top-bar.component";
import { useLocation, useParams } from "react-router-dom";

const VideoDetailPage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <TopBar title={state.title} merchant={state.merchant} />

      <div className="flex h-full mt-4 justify-center grow">
        <iframe
          className="grow"
          title="youtube"
          src={state.link}
          allowFullScreen
        ></iframe>
        <CommentsSection videoId={id} />
      </div>

      <ProductsSection videoId={id} />
    </div>
  );
};

export default VideoDetailPage;
