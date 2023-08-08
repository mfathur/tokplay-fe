type Props = {};

const VideoItem = (props: Props) => {
  return (
    <div className="relative rounded-lg bg-red-200 w-1/5 h-96 hover:cursor-pointer">
      <img
        className="rounded-lg bg-cover h-96"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
        alt=""
      />
      <p className="font-bold absolute bottom-8 left-2">Video title</p>
      <p className="absolute left-2 bottom-2 text-sm">Merchant</p>
    </div>
  );
};

export default VideoItem;
