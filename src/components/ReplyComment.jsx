import { useQueryClient } from "react-query";
import axios from "axios";
import { useUploadContext } from "../hooks/UseContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";


const schema = yup.object().shape({
  name: yup.string().required("Email field cannot be empty"),
  response: yup.string().required("Password field cannot be empty"),
});


export default function ({
  setSelectedCommentId,
  commentId,
  replyText,
  setReplyText,
  postReplyLoading,
  setPostReplyLoading,
  currentPage,
  
}) {
  const queryClient = useQueryClient();
  const { refetch, setRefetch } = useUploadContext();
const [input , setInput ] = useState("")
   

console.log("ComentId" , commentId);

  const handlePostReply = async (commentId) => {
    try {
      const post = {
        name: input,
        response: replyText,
        comments: commentId,
      };
      setPostReplyLoading(true);
      const response = await axios.post(
        "https://wellofsciencebackend.adaptable.app/api/v1/reply",
        post
      );
      setPostReplyLoading(false);
      queryClient.refetchQueries(["blogReply", commentId, currentPage]);
      setReplyText("");
      setSelectedCommentId(null);
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };





  return (
    <div className="bg-whitesmoke p-3 ">
      <div
        // onSubmit={handleSubmit(onSubmit)}
        className="shadow-md bg-white flex-col py-6 flex items-center justify-center px-5"
      >
        <div className="self-start flex flex-col ">
          <label htmlFor="name" className="text-[12px]">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Please input name"
            className="self-start border-b-2 text-[13px] font-[501] text-gray-500 h-[30px] px-2 outline-none w-[300px] bg-transparent"
          />
        </div>
        <textarea
          className="border-b-2 outline-none w-full  pt-2 px-2 h-[40px] text-[13px] font-[501] text-gray-500 mt-2"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="What are your thoughts ?"
        ></textarea>
        <div className="self-end text-[12px] mt-3">
          <button
            className="mx-[20px]"
            onClick={() =>
              setSelectedCommentId((prevId) =>
                prevId === commentId ? null : commentId
              )
            }
          >
            Cancel
          </button>
          <button
            className="rounded-[50px] bg-[#547a1f] text-[#c3d6bb] py-1 px-3"
            onClick={() => handlePostReply(commentId)}
            type="submit"
          >
            {postReplyLoading ? <>Posting</> : <>Post Reply</>}
          </button>
        </div>
      </div>
    </div>
  );
}
