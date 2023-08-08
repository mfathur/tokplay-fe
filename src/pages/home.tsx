import Profile from "components/home/profile.components";
import SearchTextField from "components/home/tf-search.component";
import VideosSection from "components/home/videos-section.component";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen my-6 mx-9">
      <div className="flex items-center justify-between">
        <SearchTextField />
        <Profile />
      </div>
      <VideosSection />
    </div>
  );
};

export default HomePage;
