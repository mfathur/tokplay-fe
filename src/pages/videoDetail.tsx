import CommentsSection from "components/video/comment-section.component";
import ProductsSection from "components/video/product-section.component";
import TopBar from "components/video/top-bar.component";

type Props = {};

const VideoDetailPage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <TopBar />

      <div className="flex h-full mt-4 justify-center grow">
        <iframe
          className="grow"
          title="youtube"
          src="http://www.youtube.com/embed/W7qWa52k-nE"
          allowFullScreen
        ></iframe>
        <CommentsSection />
      </div>

      <ProductsSection />
    </div>
  );
};

export default VideoDetailPage;
