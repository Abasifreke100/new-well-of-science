import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";


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
        <>
          <p className="text-[11px] text-blue-500">
            {replyComments.data.response.length > 1 ? "Replies" : "Reply"}
          </p>
          {replyComments.data.response.map((replyComment) => (
            <div key={replyComment._id}>
              <div className="flex  items-center gap-2">
                <div className="w-[90%] mt-2 text-gray-600 text-[14px]">
                  {replyComment.response}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-[12px] font-[501] text-gray-500">
          No reply comments yet
        </p>
      )}
    </>
  );
}
