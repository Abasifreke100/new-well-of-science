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
import { RecentPost } from "../components/SearchResult";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaLinkedin, FaLinkedinIn, FaRegComment, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomPagination from "../components/CustomPagination";
import { useCookies } from "react-cookie";
import LinesEllipsis from "react-lines-ellipsis";
import { Facebook, Twitter, Instagram, Whatsapp, Telegram } from "../assets/reusables/SocialMedia";
import { TiSocialFacebook } from "react-icons/ti";
import { toast } from "react-toastify";
import { ReplyComments } from "../components/ReplyComponent";
import { format, formatDistance } from "date-fns";
import { FaXTwitter } from "react-icons/fa6";
import { MdReplyAll } from "react-icons/md";
import ReplyComment from "../components/ReplyComment";
import { CiShare2 } from "react-icons/ci";

const schema = yup.object().shape({
  name: yup.string().required("Email field cannot be empty"),
  email: yup.string().required("Password field cannot be empty"),
  comment: yup.string().required("Password field cannot be empty"),
});

export default function BlogDetails() {
  const { blogId } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLiked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchSuccessful, setSearchSuccessful] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [blogData, setBlogData] = useState({});
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [enableQuery, setEnableQuery] = useState(true);
  const [searchedPost, setSearchedPost] = useState(null);
  const [recentPost, setRecentPost] = useState(null);
  const [postReplyLoading, setPostReplyLoading] = useState(false);
  const [reply, setReply] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;
  const [likeStatusCookies, setLikeStatusCookie, removeLikeStatusCookie] =
    useCookies(["likeStatus"]);
  const [commentCookies, setCommentCookie, removeCommentCookie] = useCookies([
    "commentUserData",
  ]);
  const [rememberMe, setRememberMe] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const [commentId, setCommentId] = useState(null);
  const queryKey = ["blog", blogId];

  const [cookies, setCookie] = useCookies(["name", "email", "website"]);

 
 
  // Fetch Blog Content

  const {
    data: blog,
    isLoading,
    refetch: refetchBlog,
  } = useQuery(queryKey, async () => {
    const response = await axios.get(`${siteConfig.api_url}/post/${blogId}`);

    return response.data;
  });


     const {
       data: commentCount,
       isLoading: commentCountLoading,
       refetch: refetchCommentCount,
     } = useQuery(["commentCount"], async () => {
       const response = await axios.get(
         `${siteConfig.api_url}/comments/count/${blog?.data?.post?._id}`
       );

       return response.data;
     });

  
  
  // Fetch Reply

  const {
    data: posts,
    isLoading: loadingPosts,
    refetch: refetchPosts,
    isFetching,
  } = useQuery(
    "posts",
    () => fetchRecentPost(`/post${query ? `?name=${query}` : ""}`),
    {
      enabled: enableQuery,
      onSuccess: () => {
        setEnableQuery(false);
      },
    }
  );

  console.log("Enable query", enableQuery);
  const presentDay = new Date();

  console.log(posts);

  // Fetch Comments

  const {
    data: comments,
    isLoading: isLoadi, // Corrected property name
    refetch,
  } = useQuery(
    "comments",
    () => fetchRecentPost(`/comments/${blogId}?&currentPage=${currentPage}`),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    refetch();
  }, [currentPage]);

  useEffect(() => {
    if (!!query === false) {
      setEnableQuery(true);
    }
  }, [query]);
  // Refetch comments
  // useEffect(() => {
  //   refetch();
  // }, [blogId, currentPage, refetch]);

  // Post likes on click of the love icon

  const handleLikeClick = async () => {
    setLiked((prevIsLiked) => !prevIsLiked);

    setLikeCount((prevLikeCount) =>
      !isLiked
        ? (blog?.data?.likes[0]?.total || 0) - 1
        : (blog?.data?.likes[0]?.total || 0) + 1
    );

    const likes = {
      status: !isLiked ? 1 : 0,
    };

    setLikeStatusCookie("likeStatus", !isLiked, { path: "/" });

    try {
      const response = await axios.post(
        `${siteConfig.api_url}/post/like/${blogId}`,
        likes
      );

      await refetchBlog();
    } catch (error) {
      console.error("Error posting like:", error);
    }
  };

  // Set Likes based of already storesd likeStatusCookies

  useEffect(() => {
    const storedLikeStatus = likeStatusCookies.likeStatus;

    if (storedLikeStatus !== undefined) {
      const shouldSetLiked =
        blog?.data?.likes && blog.data.likes[0]?.total !== undefined;
      if (shouldSetLiked) {
        setLiked(storedLikeStatus);
      }
      // setLiked(storedLikeStatus);
    }
  }, [likeStatusCookies]);

  // Event handlers for search results

  const handleInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setQuery(newSearchQuery);
    setSearchParams({
      query: newSearchQuery,
    });

    console.log("Updated Search Query:", newSearchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setEnableQuery(true);
    }
  };

  // const {
  //   data: recentPost,
  //   isLoading: loading,
  //   refetch: refetchRecent,
  // } = useQuery(
  //   "recentPost",
  //   () => fetchRecentPost(`/post${query ? `?name=${query}` : " "}`),
  //   {
  //     enabled: false,
  //   }
  // );

  //  useEffect(() => {

  //  fetchData();
  //  }, []);

  // useEffect(() => {
  //   if (!query) {
  //   fetchData()
  //   }
  //  },[])

  useEffect(() => {
    if (blog?.data?.post?.description) {
      setEditorValue(blog.data.post.description);
    }
  }, [blog]);

  const handleChange = (value) => {
    setEditorValue(value);
  };

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const date = new Date(blog?.data.post.updatedAt);

  const {
    getValues,
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onSubmit",
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const previousBlogId = useRef(blogId);

  useEffect(() => {
    const shouldRemember = cookies.rememberMe;
    setRememberMe(shouldRemember);
    setValue("name", cookies.name);
    setValue("email", cookies.email);
    setValue("website", cookies.website);

    if (blogId !== previousBlogId.current) {
      setRememberMe(false);
      previousBlogId.current = blogId; // Update the previousBlogId ref
    }
  }, [cookies, blogId]);

  const postComment = async (data) => {
    const response = await axios.post(`${siteConfig.api_url}/comments`, data);
    queryClient.invalidateQueries("comments");
    return response.data;
  };

  const {
    mutate,
    isLoading: isLoad,
    isError,
    error,
  } = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("recentPost");
      reset();
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });

  const onSubmit = (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      website: data.website,
      comment: data.comment,
      post: blogId,
    };

    if (rememberMe) {
      setCookie("name", postData.name, { path: "/" });
      setCookie("email", postData.email, { path: "/" });
      setCookie("website", postData.website, { path: "/" });
    }
    setCookie("rememberMe", rememberMe.toString(), { path: "/" });

    mutate(postData);
  };

  refetchCommentCount()

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // console.log(blog);

  const handleShare = (platform) => {
    if (!blog) {
      console.error("Blog data is not available");
      return;
    }

    let shareUrl;

    // Share blog post on social media

    const sharedContent = {
      title: blog.data.post.name,
      date: new Date(blog?.data.post.updatedAt),
      url: "https://your-website-url.com",
      imageUrl: blog.data.post.image,
      description: blog.data.post.description,
    };

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          sharedContent.url
        )}&title=${encodeURIComponent(
          sharedContent.title
        )}&picture=${encodeURIComponent(sharedContent.imageUrl)}`;
        break;

      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          sharedContent.title
        )}&url=${encodeURIComponent(sharedContent.url)}&via=wellofscience`;
        break;

        break;
      case "whatsapp":
        shareUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
          `${sharedContent.title} - ${sharedContent.url}`
        )}`;
        window.open(shareUrl, "_blank");
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          sharedContent.url
        )}&title=${encodeURIComponent(
          sharedContent.title
        )}&source=${encodeURIComponent("Your Website Name")}`;
        break;

      default:
        console.error("Unsupported platform for sharing");
        return;
    }

    // Open a new window to share the content
    window.open(shareUrl, "_blank", "width=600,height=400");
  };


  // console.log("Blog" , blog.data.post._id);
  // console.log("Comment Count" , commentCount.data);


  return (
    <Layout>
      <>
        <div className="grid grid-cols-12 py-10 px-8 ">
          <div className=" col-span-12 lg:col-span-9  lg:px-24  ">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
              <p>Back</p>
            </button>

            <div className="relative w-full mb-10 overflow-hidden h-80 md:h-96 rounded-2xl ">
              {isLoading ? (
                <div className="w-full h-full bg-gray-100 animate-pulse" />
              ) : (
                <>
                  <img
                    src={blog?.data.post.image}
                    alt={blog?.data.post.name}
                    className="object-cover w-full h-full shadow-md rounded-2xl"
                  />
                </>
              )}

              {isLoading ? null : (
                <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              )}

              <h1 className="absolute text-2xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 md:text-3xl lg:text-4xl top-1/2 ">
                {blog?.data.post.name}
              </h1>
            </div>

            {isLoading ? (
              <div className="space-y-2">
                {Array(10)
                  .fill(0)
                  .map((_, idx) => (
                    <p
                      className="w-full h-4 bg-gray-100 animate-pulse"
                      key={idx}
                    />
                  ))}
              </div>
            ) : (
              <div className="mt-2">
                <div dangerouslySetInnerHTML={{ __html: editorValue }} />
              </div>
            )}
            {isLoading ? (
              <p className="h-6 bg-gray-100 w-80 animate-pulse" />
            ) : (
              <div className="flex flex-col md:flex-row items-start lg:items-center justify-between md:w-[629px]  py-3">
                <div className="flex items-center gap-2">
                  <div className=" p-[1px] px-[6px] rounded-[3px] bg-[#547a1f] text-white">
                    <CiShare2 />
                  </div>
                  <p className="text-[#9b9b9b] text-[13px] font-[501]">
                    by Admin at{" "}
                    {new Date(blog.data.post.updatedAt).toLocaleDateString()}{" "}
                    {format(blog?.data.post.updatedAt, "hh:mm a")}
                  </p>
                  <hr className="w-[1px] h-[22px] bg-gray-400" />
                  {commentCount?.data && (
                    <p className="font-medium text-[13px]">
                      {commentCount?.data ? commentCount?.data : "..."}{" "}
                      {commentCount?.data > 1 ? "Comments" : "Comment"}
                    </p>
                  )}{" "}
                </div>
                <div className="">
                  <div
                    className="flex  items-center gap-4 mt-2 md:mt-0"
                    onClick={handleLikeClick}
                  >
                    {isLiked ? (
                      <IoIosHeart
                        size={25}
                        color="red"
                        // style={{ backgroundColor: "red" }}
                      />
                    ) : (
                      <IoIosHeartEmpty size={25} />
                    )}
                    {blog?.data?.likes?.length >= 0 && (
                      <p>
                        {blog?.data?.likes[0]?.total &&
                          blog?.data?.likes[0]?.total}{" "}
                        {blog?.data?.likes[0]?.total < 2 ? "Like" : "Likes"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div>
              <p>Share this Story</p>
              {/* <div
                  class="border hover:bg-[#1877f2] w-8 h-8 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook />
                </div> */}
              <div className="flex  items-center gap-3">
                <div
                  className="bg-[#4267b2] w-[149px] h-[35.5px] text-[12px] mt-3 text-[#ffffff] rounded-[5px] gap-2 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:bg-opacity-80 hover:translate-y-[-5px] ease-in"
                  onClick={() => handleShare("facebook")}
                  style={{ transitionDuration: 650 }}
                >
                  <TiSocialFacebook size={20} />{" "}
                  <span className="hidden md:block">Share</span>
                </div>
                <div
                  className="bg-[#232323] w-[149px] h-[35.5px] text-[12px] mt-3 text-[#ffffff] rounded-[5px] gap-2 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:bg-opacity-90 hover:translate-y-[-5px] ease-in"
                  onClick={() => handleShare("twitter")}
                  style={{ transitionDuration: 650 }}
                >
                  <FaXTwitter />
                  <span className="hidden md:block">Tweet</span>
                </div>
                <div
                  className="bg-[#25d366] w-[149px] h-[35.5px] text-[12px] mt-3 text-[#ffffff] rounded-[5px] gap-2 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:bg-opacity-90 hover:translate-y-[-5px] ease-in"
                  onClick={() => handleShare("whatsapp")}
                  style={{ transitionDuration: 650 }}
                >
                  <FaWhatsapp size={20} />
                  <span className="hidden md:block">Share</span>
                </div>
                <div
                  className="bg-[#0077b5] w-[149px] h-[35.5px] text-[12px] mt-3 text-[#ffffff] rounded-[5px] gap-2 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:bg-opacity-90 hover:translate-y-[-5px] ease-in"
                  onClick={() => handleShare("linkedin")}
                  style={{ transitionDuration: 650 }}
                >
                  <FaLinkedin size={20} />
                  <span className="hidden md:block">Share</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-span-12 mt-4 lg:mt-0 lg:col-span-3  md:px-4">
            <h4>Search Post</h4>
            <div className="border border-[#e4e4e4] mt-4 w-full rounded-md h-10 flex items-center p-4 gap-3">
              <input
                type="text"
                placeholder="Enter your keywords..."
                className=" text-[#828282] text-sm outline-none  w-full"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="#0038e3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <RecentPost
              recentPost={posts}
              isLoading={loadingPosts}
              query={query}
              refetchPosts={refetchPosts}
              refetch={refetch}
              refetchCommentCount={refetchCommentCount}
              refetchBlog={refetchBlog}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        <div className="my-8 px-4 lg:px-[212px] bg-[#f9fafa] flex flex-col items-center py-4">
          <div className="w-full">
            <h5 className="flex items-center text-[20px] gap-3 text-[#232323]">
              {" "}
              <FaRegComment />
              <span>Comments</span>
            </h5>

            {isLoadi ? (
              <p>Loading comments...</p>
            ) : comments?.data?.response?.length > 0 ? (
              comments.data.response.map((comment) => (
                <div
                  className="bg-[#ffffff] shadow-md p-4 rounded-[8px] my-4 mt-8 w-full leading-5"
                  key={comment._id}
                >
                  <h5 className="text-[12px] text-[#939494] font-[501]">
                    {comment.name}'s comment ~{" "}
                    <span className="text-[#000000] text-[12px]">
                      {formatDistance(presentDay, new Date(comment?.createdAt))}{" "}
                      ago
                    </span>{" "}
                  </h5>
                  <div className="">
                    <p className="text-[15px]">{comment.comment}</p>{" "}
                  </div>
                  <span
                    className="text-[10px] hover:underline cursor-pointer"
                    onClick={() =>
                      setSelectedCommentId((prevId) =>
                        prevId === comment._id ? null : comment._id
                      )
                    }
                  >
                    Reply
                  </span>
                  {selectedCommentId === comment._id && (
                    <ReplyComment
                      setSelectedCommentId={setSelectedCommentId}
                      commentId={comment._id}
                      // handlePostReply={handlePostReply}
                      replyText={replyText}
                      setReplyText={setReplyText}
                      postReplyLoading={postReplyLoading}
                      setPostReplyLoading={setPostReplyLoading}
                      currentPage={currentPage}
                    />
                  )}
                  {comment._id && (
                    <ReplyComments
                      commentId={comment._id}
                      currentPage={currentPage}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className=" mt-4 ml-8">
                No comments yet, be the first to drop a comment.
              </p>
            )}
          </div>

          <div className=" w-full">
            <CustomPagination
              totalItems={comments?.data?.pagination?.total}
              itemsPerPage={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              refetch={refetch}
            />
          </div>
        </div>

        <div className="flex justify-center px-4 lg:px-[212px] mt-6">
          <div className="w-full">
            <div className="leading-6  lg:leading-10">
              <h2 className="text-[20px] text-[#232323]">Leave a comment</h2>
              <p className="text-[#828282] mt-2 lg:mt-0">
                Your email address will not be published. Required fields are
                marked
                <span className="text-[#fb4f58]"> *</span>
              </p>
            </div>

            <form
              className="grid grid-cols-12 my-4 mt-8 gap-6  "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-span-12 lg:col-span-6 ">
                <label htmlFor="" className="text-[#828282]">
                  {" "}
                  Your name
                  <span className="text-[#fb4f58]"> *</span>
                </label>
                <br />
                <input
                  type="text"
                  className={`border  ${
                    errors.name ? "border-red-500" : "border-[#dfdfdf]"
                  } h-[53px] text-[15px] w-full rounded-[4px] mt-5  p-3 text-[#232323] outline-none`}
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="col-span-12 lg:col-span-6 ">
                <label htmlFor="" className="text-[#828282]">
                  {" "}
                  Your email address
                  <span className="text-[#fb4f58]"> *</span>
                </label>
                <br />
                <input
                  type="text"
                  className={`border ${
                    errors.email ? "border-red-500" : "border-[#dfdfdf]"
                  } h-[53px]  text-[15px] w-full rounded-[4px] mt-5 outline-none p-3 text-[#232323]`}
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="col-span-12">
                <label htmlFor="" className="text-[#828282]">
                  {" "}
                  Website
                </label>
                <br />
                <input
                  type="text"
                  className={`border border-[#dfdfdf] h-[53px]  text-[15px] w-full col-span-12 rounded-[4px] mt-5 outline-none p-3 text-[#232323]`}
                  placeholder="Website"
                  {...register("website", { required: true })}
                />
              </div>
              <div className="col-span-12">
                <label htmlFor="" className="text-[#828282]">
                  {" "}
                  Your comment
                  <span className="text-[#fb4f58]"> *</span>
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className={`border ${
                    errors.comment ? "border-red-500" : "border-[#dfdfdf]"
                  } h-[120px] text-[15px] w-full col-span-12 rounded-[4px] mt-5 outline-none p-3 text-[#232323]`}
                  placeholder="Enter your comment"
                  {...register("comment", { required: true })}
                ></textarea>
              </div>

              <div className="col-span-12">
                <input
                  type="checkbox"
                  name="saveUserData"
                  id="saveUserData"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="saveUserData" className="text-[#828282]">
                  {" "}
                  Save my name, email, and website in this browser for the next
                  time I comment.
                  <span className="text-[#fb4f58]"> *</span>
                </label>
              </div>
              <input
                name="submit"
                type="submit"
                id="submit"
                className="submit btn border w-[151.72px] h-[38.5px] text-[10px] bg-[#232323] text-[#ffffff] rounded-[5px] hover:bg-[#ffffff] hover:border-[#232323] hover:text-[#232323] transition-all duration-400 cursor-pointer ease-in"
                value={isLoad ? "Posting..." : "Post Comment"}
                disabled={isLoad} // Add this line
              />
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
}
