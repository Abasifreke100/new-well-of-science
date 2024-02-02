import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-between items-center py-4 ">
      {totalPages !== 0 && ( // Add this conditional rendering
        <div>
          <h4 className="text-[#000000] text-[12px]  font-[501]">
            Showing {currentPage} of {totalPages} entries
          </h4>
        </div>
      )}

      <div className="custom-pagination flex  gap-2 h-[26px]  rounded-[6px] font-normal font-gilroy  ">
        <button
          className={` text-[#000000] text-[20px]  font-semibold  ${
            currentPage === 1 || totalPages === 0 ? "text-[#D9D9D9]" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || totalPages === 0}
        >
          <GrFormPrevious />
        </button>

        <button
          className={`text-[#000000] text-[20px] font-semibold   ${
            currentPage === totalPages || totalPages === 0
              ? "text-[#D9D9D9]"
              : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;

