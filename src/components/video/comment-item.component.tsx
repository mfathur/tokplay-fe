import Comment from "types/comment";

type Props = {
  comment: Comment;
};

const CommentItem = ({ comment }: Props) => {
  return (
    <p className="text-gray-200">
      <span className="font-bold text-gray-400">{comment.username} </span>
      {comment.comment}
    </p>
  );
};

export default CommentItem;
