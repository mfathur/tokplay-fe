import Profile from "components/home/profile.components";
import SearchTextField from "components/home/tf-search.component";
import VideosSection from "components/home/videos-section.component";
import Spinner from "components/spinner.component";
import { useAxiosGet } from "hooks/useAxiosGet";
import { useEffect, useState } from "react";
import Video from "types/video";

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] = useState<
    string | null
  >(null);

  const {
    data: videos,
    error,
    refetch,
  } = useAxiosGet<Video[]>("/videos", {
    params: { keyword: debouncedSearchKeyword },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchKeyword]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchKeyword(searchKeyword);
    }, 600);

    return () => clearTimeout(timerId);
  }, [searchKeyword]);

  return (
    <div className="flex flex-col min-h-screen py-6 px-9">
      <div className="flex items-center justify-between">
        <SearchTextField
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Profile />
      </div>
      {!videos ? (
        <Spinner className="text-gray-500 self-center my-auto loading-lg" />
      ) : null}
      {videos && !error ? <VideosSection videos={videos} /> : null}
    </div>
  );
};

export default HomePage;
