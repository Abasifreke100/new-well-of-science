import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { formatDistance } from "date-fns";
import { GiMailbox } from "react-icons/gi";
import { MdReplyAll } from "react-icons/md";
import ReplyComment from "./ReplyComment";

// const fetchReplyComments = async (commentId, currentPage) => {
//   try {
//     const response = await axios.get(
//       `/reply/${commentId}?&currentPage=${currentPage}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching reply comments:", error);
//     throw error; // Rethrow the error to let React Query handle it
//   }
// };



export function ReplyComments({ commentId, currentPage }) {
  const [editReplyId, setEditReplyId] = useState(null);
  const [editedReplyText, setEditedReplyText] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
    const [loadingIds, setLoadingIds] = useState(false);
    const [replyComments, setReplyComments] = useState([]);
    const [loadingReplyComments, setLoadingReplyComments] = useState(false)
      const [selectedCommentId, setSelectedCommentId] = useState(null);

    

    const fetchReplyComments = async () => {
      try {
        setLoadingReplyComments(true);
        const response = await axios.get(
          `https://wellofsciencebackend.adaptable.app/api/v1/reply/${commentId}?&currentPage=${currentPage}`
        );
        setReplyComments(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching reply comments:", error);
      } finally {
        setLoadingReplyComments(false);
      }
    };


      useEffect(() => {
        fetchReplyComments();
      }, [commentId, currentPage]);
    

    

  if (loadingReplyComments) {
    return (
      <p className="text-[12px] font-[501] text-gray-500">
        Loading reply comments...
      </p>
    );
  }

  return (
    <>
      {replyComments?.data?.response?.length > 0 ? (
        <div className="leading-4  ml-5">
          {/* <p className="text-[12px] text-blue-800 font-[501] flex items-center">
            <GiMailbox size={20} />{" "}
            {replyComments.data.response.length > 1 ? "Replies" : "Reply"}
          </p> */}
          {replyComments.data.response.map((replyComment) => (
            <div
              key={replyComment._id}
              className="border-t border-b shadow-sm py-3 mt-2 flex gap-2  w-full"
            >
              <div className="w-[3px] rounded-[5px] bg-[#afabab] ml-3">
                <hr />
              </div>
              <div className="w-full">
                <div className=" w-full mb-4">
                  <h5 className="text-[10px] text-[#939494] font-[501] ">
                    {replyComment?.name ? replyComment?.name : "admin"} replies
                    ~{" "}
                    <span className="text-[#000000] ">
                      {formatDistance(
                        new Date(),
                        new Date(replyComment?.createdAt)
                      )}{" "}
                      ago
                    </span>{" "}
                  </h5>
                  <div className="flex  items-center gap-2">
                    <div className=" text-[14px]">{replyComment.response}</div>
                  </div>

                  <button
                    className="bg-[#547a1f] mt-3 text-white w-[55px] gap-1 h-5 flex items-center justify-center rounded-sm transition-transform transform hover:scale-95"
                    onClick={() =>
                      setSelectedCommentId((prevId) =>
                        prevId === replyComment._id ? null : replyComment._id
                      )
                    }
                  >
                    <MdReplyAll /> <span className="text-[10px]">Reply</span>
                  </button>
                </div>
                {selectedCommentId === replyComment._id && (
                  <ReplyComment
                    setSelectedCommentId={setSelectedCommentId}
                    commentId={replyComment._id}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[12px] font-[501] text-gray-500 ml-5">
          No reply comments yet
        </p>
      )}
    </>
  );
}
