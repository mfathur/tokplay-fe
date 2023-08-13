import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentItem from "./comment-item.component";
import { useFormik } from "formik";
import { object, string } from "yup";
import useComments from "hooks/useComments";
import useAuthContext from "hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  videoId?: string;
};

const CommentsSection = ({ videoId }: Props) => {
  const { user } = useAuthContext();
  const userLoggedIn = user !== null;
  const navigate = useNavigate();

  const { comments, error, sendVideoComment, needLoginAgain } = useComments(
    videoId ?? ""
  );

  useEffect(() => {
    if (needLoginAgain) {
      navigate("/auth/login", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needLoginAgain]);

  const formik = useFormik({
    initialValues: { commentInput: "" },
    validationSchema: object({ commentInput: string().required() }),
    onSubmit: (values) => {
      sendVideoComment(values.commentInput);
      formik.resetForm();
    },
  });

  const handleTxtLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <div className="bg-nobleblack w-96 ml-4 px-4 py-4 flex flex-col-reverse">
      <div className="flex items-center">
        {userLoggedIn ? (
          <>
            <input
              className="grow h-8 bg-nobleblack focus:outline-0 placeholder:text-gray-700"
              id="commentInput"
              type="text"
              placeholder="Add a comment..."
              value={formik.values.commentInput}
              onChange={formik.handleChange}
            />
            <FontAwesomeIcon
              className="rounded-full ml-2 h-5 hover:cursor-pointer text-gray-700 hover:text-white hover:bg-infinitenight p-1 "
              icon={faPaperPlane}
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </>
        ) : (
          <div className="mt-2">
            You need to login to write a comment.{" "}
            <span
              onClick={handleTxtLoginClick}
              className="font-bold hover:cursor-pointer hover:text-gray-300"
            >
              Login
            </span>
          </div>
        )}
      </div>

      <div className="mb-2 grow flex-col-reverse flex overflow-y-auto">
        {comments && !error
          ? comments.map((comment) => (
              <CommentItem key={comment._id} comment={comment} />
            ))
          : null}
      </div>
    </div>
  );
};

export default CommentsSection;
