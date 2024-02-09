import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import { siteConfig } from "../config/site";
import Layout from "../components/layout";
import { formatTextForReadability } from "../lib/utils";
import imageTest from "../assets/core-logo.webp";
import { useQuery } from "react-query";
import { fetchRecentPost } from "../api/config";
import { useEffect, useRef, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomPagination from "../components/CustomPagination";
import { useCookies } from "react-cookie";
import LinesEllipsis from "react-lines-ellipsis";

const truncateAfterWords = (text, wordsCount) => {
  const words = text.split(" ");
  const truncatedWords = words.slice(0, wordsCount);
  return truncatedWords.join(" ") + (words.length > wordsCount ? "..." : "");
};

const extractPlainText = (htmlContent) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;
  return tempElement.textContent || tempElement.innerText;
};

export const RecentPost = ({
  recentPost,
  isLoading,
  query,
  refetchPosts,
  refetch,
  refetchCommentCount,
  refetchBlog,
  setCurrentPage,
}) => {
  const text =
    "There was a gathering of 196 countries including Nigeria at the UN Climate Change Conference (COP21) in Paris, France, on 12 December 2015 where all the countries in attendance signed an agreement known as “The Paris Agreement” to legally start a combined move to achieve the 17 sustainable development goals on or before 2040.";

  const [clickedPosts, setClickedPosts] = useState([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // const { data: recentPost, isLoading } = useQuery("recentPost", () =>
  //   fetchRecentPost("/post")
  // );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNavigate = async (recent) => {
    try {
      // Navigate to the new URL
      navigate(`/blog/${recent}`);

      // Update the state and refetch posts
      setClickedPosts((prevClickedPosts) => [...prevClickedPosts, recent]);

      // Refetch data from the queryClient
      await queryClient.refetchQueries(["blogPosts"]);
      await refetchBlog()
      await refetchPosts();
      await refetch();
      await refetchCommentCount();
      await setCurrentPage(1)
    } catch (error) {
      console.error("Error while navigating:", error);
    }
  };
  console.log(!!query);

  return (
    <>
      {!!query ? (
        <div className=" mt-6 ">
          <div className="flex flex-col  lg:flex-col gap-6 border-t border-b overflow-y-auto h-[410px] py-2">
            {recentPost.data.response.length > 0 ? (
              recentPost.data.response.map((recent) => (
                <div className="flex gap-4 mt-6" key={recent._id}>
                  <div className="w-[80px] h-[80px] border rounded-md overflow-hidden ">
                    <img
                      src={recent.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="w-36">
                    <h4
                      className={`font-[501] text-sm leading-[22px] cursor-pointer hover:text-[#547A1F] ${
                        clickedPosts.includes(recent._id) ? "text-blue-700" : ""
                      }`}
                      onClick={() => handleNavigate(recent._id)}
                    >
                      {recent.name}
                    </h4>
                    <LinesEllipsis
                      className="text-[#828282] text-[14px] w-[150px] mt-2 truncate leading-5 h-6"
                      text={extractPlainText(recent.description)}
                      maxLine="1"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>No results found for "{query}"</p>
            )}
          </div>
        </div>
      ) : (
        <div className=" mt-6">
          <h6 className="text-[#232323]">Recent Post</h6>

          <div className="flex flex-col  lg:flex-col gap-6">
            {recentPost.data.response.slice(0, 3).map((recent) => (
              <div className="flex gap-4 mt-6" key={recent._id}>
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
                  <LinesEllipsis
                    className="text-[#828282] text-[14px] w-[150px] mt-2 truncate leading-5  h-6"
                    text={extractPlainText(recent.description)}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
