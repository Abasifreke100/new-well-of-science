import axios from "axios";
import { formatDistance } from "date-fns";
import { useState } from "react";
import { MdReplyAll } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { useQuery, useQueryClient } from "react-query";
import ReplyReplyComment from "./ReplyReplyComment";
import CustomPagination from "./CustomPagination";
import ReplyPagination from "./ReplyPagination";




export function ReplyComments({ commentId, currentPage, reply }) {
  const [editReplyId, setEditReplyId] = useState(null);
  const [editedReplyText, setEditedReplyText] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [loadingIds, setLoadingIds] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
 const [currentResponseReply, setCurrentResponseReply] = useState({});
    const [loadingData, setLoadingData] = useState(false); 
  const pageSize = 10

  const queryClient = useQueryClient();

  const {
    data: replyComments,
    isLoading: loadingReplyComments,
    refetch,
  } = useQuery(["blogReply", commentId, currentPage], async () => {
    const response = await axios.get(
      `https://wellofsciencebackend.adaptable.app/api/v1/reply/${commentId}?&currentPage=${currentPage}`
    );
 
    const replyCommentIds = response.data.data.response.map(
      (replyComment) => replyComment._id
    );

    const queries = replyCommentIds.map((replyCommentId) =>
      queryClient.fetchQuery(["reply", replyCommentId], async () => {
  
        const replyResponse = await axios.get(
          `https://wellofsciencebackend.adaptable.app/api/v1/reply/response/${replyCommentId}?&currentPage=${currentResponseReply[replyCommentId]}`
        );
      
        return replyResponse.data;
      })
    );

    await Promise.all(queries);

    return response.data;
  });

  // Function to trigger the refetch
//   const refetchReplyComment = (replyQuery) => {
//     const replyCommentIds = replyQuery.data.data.response.map((replyComment) =>
//       console.log(replyComment)
//     );

//     // queryClient.refetchQueries(
//     //   replyCommentIds.map((replyCommentId) => ["reply", replyCommentId])
//     // );
//   };
// refetchReplyComment(replyQuery);
  

  if (loadingReplyComments) {
    return (
      <p className="text-[12px] font-[501] text-gray-500">
        Loading reply comments...
      </p>
    );
  }
 
console.log("CurrentRwply" ,currentResponseReply);


  

  return (
    <>
      {replyComments?.data?.response?.length > 0 ? (
        <div className="leading-4 ml-5">
          {replyComments.data.response.map((replyComment, index) => {
            const replyQuery = queryClient.getQueryData([
              "reply",
              replyComment._id,
            ]);

            const refetchReplyComment = () => {
              refetch();
              if (replyQuery && replyQuery.data && replyQuery.data.response) {
                const replyCommentIds = replyQuery.data.response.map(
                  (replyComment) => replyComment._id
                );
                console.log("replyCommentIds:", replyCommentIds);
                queryClient.refetchQueries(
                  replyCommentIds.map((replyCommentId) => [
                    "reply",
                    replyCommentId,
                  ])
                );
              }
            };

       const handlePageChange = (newPage, replyCommentId) => {
         setCurrentResponseReply((prevReplies) => {
           console.log(prevReplies);
           return {
             ...prevReplies,
             [replyCommentId]: newPage,
           };
         });

         refetch({
           currentResponseReply: newPage,
         });
       };


            // Call refetchReplyComment inside the loop

            return (
              <div
                key={replyComment._id}
                className="border-t border-b shadow-sm py-3 mt-2 flex gap-2 w-full"
              >
                <div className="w-[3px] rounded-[5px] bg-[#afabab] ml-3">
                  <hr />
                </div>
                <div className="w-full">
                  <div className="w-full mb-4">
                    <h5 className="text-[10px] text-[#939494] font-[501]">
                      {replyComment?.name ? replyComment?.name : "admin"}{" "}
                      replies ~{" "}
                      <span className="text-[#000000]">
                        {formatDistance(
                          new Date(),
                          new Date(replyComment?.createdAt)
                        )}{" "}
                        ago
                      </span>{" "}
                    </h5>
                    <div className="flex items-center gap-2">
                      <div className="text-[14px]">{replyComment.response}</div>
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
                  <div>
                    {replyQuery &&
                      replyQuery.data.response.length > 0 &&
                      replyQuery.data.response.map((res) => (
                        <div key={res._id}>
                          <h5 className="text-[10px] text-[#939494] font-[501] mt-1 flex items-center">
                            <TiTickOutline />{" "}
                            {replyComment?.name ? replyComment?.name : "admin"}{" "}
                            replies ~{" "}
                            <span className="text-[#000000]">
                              {formatDistance(
                                new Date(),
                                new Date(res?.createdAt)
                              )}{" "}
                              ago
                            </span>{" "}
                          </h5>
                          <div className="flex items-center">
                            <div className="text-[13px]">{res.response}</div>
                          </div>
                        </div>
                      ))}
                    {replyQuery?.data?.pagination?.total > 10 && (
                      <ReplyPagination
                        totalItems={replyQuery?.data?.pagination?.total}
                        itemsPerPage={pageSize}
                        currentPage={currentResponseReply[replyComment._id] ?? 1}
                        onPageChange={(newPage) =>
                          handlePageChange(newPage, replyComment._id)
                        }
                      />
                    )}
                  </div>

                  {selectedCommentId === replyComment._id && (
                    <ReplyReplyComment
                      setSelectedCommentId={setSelectedCommentId}
                      replyId={replyComment._id}
                      refetchReplyComment={refetchReplyComment}
                      // response={replyCommentIds}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-[12px] font-[501] text-gray-500 ml-5">
          No reply comments yet
        </p>
      )}
    </>
  );
}
