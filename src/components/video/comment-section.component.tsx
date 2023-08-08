import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentItem from "./comment-item.component";

type Props = {};

const CommentsSection = (props: Props) => {
  return (
    <div className="bg-nobleblack w-96 ml-4 px-4 py-4 flex flex-col-reverse">
      <div className="flex items-center">
        <input
          className="grow h-8 bg-nobleblack focus:outline-0 placeholder:text-gray-700"
          type="text"
          placeholder="Add a comment..."
        />
        <FontAwesomeIcon
          className="rounded-full ml-2 h-5 hover:cursor-pointer text-gray-700 hover:text-white hover:bg-infinitenight p-1 "
          icon={faPaperPlane}
        />
      </div>

      <div className="mb-2">
        <CommentItem
          username="username1"
          comment="Lorem ipsum dolor sit
          amet"
        />
        <CommentItem
          username="username2"
          comment="Lorem ipsum dolor sit
          amet"
        />
      </div>
    </div>
  );
};

export default CommentsSection;
