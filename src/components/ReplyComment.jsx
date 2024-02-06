import React from 'react'

export default function 
({setSelectedCommentId , commentId}) {
  return (
    <div className="bg-whitesmoke p-3 ">
      <div className="shadow-md bg-white flex-col py-6 flex items-center justify-center px-5">
        <textarea
          className="border-b-2 outline-none w-full  pt-2 px-2 h-[40px] text-[13px] font-[501] text-gray-500"
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
          <button className="rounded-[50px] bg-[#547a1f] text-[#c3d6bb] py-1 px-3">
            Respond
          </button>
        </div>
      </div>
    </div>
  );
}
