type Props = {
  username: string;
  comment: string;
};

const CommentItem = ({ username, comment }: Props) => {
  return (
    <p>
      <span className="font-bold">{username} </span>
      {comment}
    </p>
  );
};

export default CommentItem;
