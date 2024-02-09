import { useQueryClient } from "react-query";
import axios from "axios";
import { useUploadContext } from "../hooks/UseContext";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name field cannot be empty"),
  reply: yup.string().required("Reply field cannot be empty"),
});

export default function ({
  setSelectedCommentId,
  replyId,
  currentPage,
  refetchReplyComment,
}) {
  const queryClient = useQueryClient();
  const { refetch, setRefetch } = useUploadContext();
  const [replyText, setReplyText] = useState("");
  const [postReplyLoading, setPostReplyLoading] = useState("");
  const [inputName, setInputName] = useState("");

  const { getValues, register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onSubmit",
    mode: "onChange",
  });

  const handlePostReply = async () => {
    const data = getValues();

    try {
      const post = {
        name: data.name,
        reply: `${replyId}`,
        response: data.reply,
      };
      setPostReplyLoading(true);

      const response = await axios.post(
        "https://wellofsciencebackend.adaptable.app/api/v1/reply/response",
        post
      );

      setPostReplyLoading(false);
      setReplyText("");
      setInputName("");
      setSelectedCommentId(null);
      console.log("Before refetchReplyComment");
      refetchReplyComment();
      console.log("After refetchReplyComment");
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  return (
    <div>
      <div className="bg-whitesmoke p-3 ">
        <form
          onSubmit={handleSubmit(handlePostReply)}
          className="shadow-md bg-white flex-col py-6 flex items-center justify-center px-5"
        >
          <div className="self-start flex flex-col ">
            <label htmlFor="name" className="text-[12px]">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id=""
              {...register("name")}
              placeholder="Please input name"
              className="self-start border-b-2 text-[13px] h-[30px] px-2 outline-none w-[300px] bg-transparent text-gray-500 font-[501]"
            />
          </div>
          <textarea
            className="border-b-2 outline-none w-full pt-2 px-2 h-[40px] text-[13px] font-[501] text-gray-500 mt-4"
            {...register("reply")}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="What are your thoughts ?"
          ></textarea>
          <div className="self-end text-[12px] mt-3">
            <button
              className="mx-[20px]"
              onClick={() =>
                setSelectedCommentId((prevId) =>
                  prevId === replyId ? null : replyId
                )
              }
            >
              Cancel
            </button>
            <button
              className="rounded-[50px] bg-[#547a1f] text-[#c3d6bb] py-1 px-3"
              type="submit"
            >
              {postReplyLoading ? <>Posting</> : <>Post Reply</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
