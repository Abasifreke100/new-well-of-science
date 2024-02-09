import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useUploadContext } from "../hooks/UseContext";
import { useState } from "react";

export default function ({ replyComments}) {

  return (
  <div>
  {replyComments?.data?.response &&
    replyComments.data.response.length > 0 && (
      <div className="leading-4 ml-5">
        {replyComments.data.response.map((replyComment) => (
          <div
            key={replyComment._id}
            className="border-t border-b shadow-sm py-3 mt-2 flex gap-2 w-full"
          >
            <div className="w-[3px] rounded-[5px] bg-[#afabab] ml-3">
              <hr />
            </div>
            <div className="w-full">
              <div className="w-full mb-4">
                <h5 className="text-[10px] text-[#939494] font-[501] ">
                  {replyComment?.name ? replyComment?.name : "admin"}{" "}
                  replies ~{" "}
                  <span className="text-[#000000] ">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
</div>
  )
}
