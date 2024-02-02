import useFetch from "../hooks/use-fetch";
import { siteConfig } from "../config/site";
import Layout from "../components/layout";
import { formatTextForReadability } from "../lib/utils";
import imageTest from "../assets/core-logo.webp";
import { useQuery } from "react-query";
import { fetchRecentPost } from "../api/config";
import { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomPagination from "../components/CustomPagination";
import { useNavigate } from "react-router-dom";

const truncateAfterWords = (text, wordsCount) => {
  const words = text.split(" ");
  const truncatedWords = words.slice(0, wordsCount);
  return truncatedWords.join(" ") + (words.length > wordsCount ? "..." : "");
};

const SearchResults = ({ searchResults , isLoading }) => {
  const [clickedPosts, setClickedPosts] = useState([]);
  const navigate = useNavigate();


  const handleNavigate = (recent) => {
    navigate(`/blog/${recent}`);
    setClickedPosts((prevClickedPosts) => [...prevClickedPosts, recent]);
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mt-6">
      <h6 className="text-[#232323]">Results</h6>

      <div className="flex flex-col  lg:flex-col gap-6">
        {searchResults?.map((recent) => (
          <div className="flex gap-4 mt-6">
            <div className="w-[80px] h-[80px] border rounded-md overflow-hidden">
              <img
                src={recent.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>

            <div className=" w-36 ">
              <h4
                className={`font-[501] text-sm leading-[22px] cursor-pointer hover:text-[#547A1F] ${
                  clickedPosts.includes(recent._id) ? "text-blue-700" : ""
                }`}
                onClick={() => handleNavigate(recent._id)}
              >
                {recent.name}
              </h4>
              <p
                className="text-[#828282] text-[14px] w-[120px] mt-2 leading-5"
                dangerouslySetInnerHTML={{
                  __html: formatTextForReadability(
                    `${truncateAfterWords(recent?.description || "", 5)}`
                  ),
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SearchResults;
