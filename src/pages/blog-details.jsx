import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import { siteConfig } from "../config/site";
import Layout from "../components/layout";
import { formatTextForReadability } from "../lib/utils";
import imageTest from "../assets/core-logo.webp";
import { useQuery } from "react-query";
import { fetchRecentPost } from "../api/config";
import { useEffect, useState } from "react";
import SearchResults from "../components/SearchResult";
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

const RecentPost = () => {
  const text =
    "There was a gathering of 196 countries including Nigeria at the UN Climate Change Conference (COP21) in Paris, France, on 12 December 2015 where all the countries in attendance signed an agreement known as “The Paris Agreement” to legally start a combined move to achieve the 17 sustainable development goals on or before 2040.";

  const [clickedPosts, setClickedPosts] = useState([]);
  const navigate = useNavigate();
  const { data: recentPost, isLoading } = useQuery("recentPost", () =>
    fetchRecentPost("/post")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNavigate = (recent) => {
    navigate(`/blog/${recent}`);
    setClickedPosts((prevClickedPosts) => [...prevClickedPosts, recent]);
  };

  return (
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
  );
};

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
  const [blogData, setBlogData] = useState({});
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const location = useLocation();
  const pageSize = 10;
  const [likeStatusCookies, setLikeStatusCookie, removeLikeStatusCookie] =
    useCookies(["likeStatus"]);
  const [commentCookies, setCommentCookie, removeCommentCookie] = useCookies([
    "commentUserData",
  ]);
  const [rememberMe, setRememberMe] = useState(false);
const [editorValue, setEditorValue] = useState("");
  const queryKey = ["blog", blogId];

  const [cookies, setCookie] = useCookies(["name", "email", "website"]);

  const {
    data: blog,
    isLoading,
    refetch: refetchBlog,
  } = useQuery(queryKey, async () => {
    const response = await axios.get(`${siteConfig.api_url}/post/${blogId}`);
    return response.data;
  });



 useEffect(() => {
   if (blog?.data?.post?.description) {
     setEditorValue(blog.data.post.description);
   }
 }, [blog]);

  
  const handleChange = (value) => {
    setEditorValue(value);
  };
  

  const {
    data: comments,
    isLoadi,
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
  }, [blogId, currentPage, refetch]);

  useEffect(() => {
    // This effect runs when the component is mounted
    setIsPageLoaded(true);
  }, []); // Empty dependency array ensures it runs only once on mount

  const date = new Date(blog?.data.post.updatedAt);

const handleLikeClick = async () => {
  // Toggle the like state
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

  const handleInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    // Debugging log
    console.log("Updated Search Query:", newSearchQuery);
  };

  const handleSearch = async () => {
    try {
      // Call the API with the searchQuery
      const results = await fetchRecentPost(`/post?name=${searchQuery}`);
      setSearchText(searchQuery);
      setSearchResults(results.data.response);
      setSearchSuccessful(true);
    } catch (error) {
      console.error("Error during search:", error);
      setSearchSuccessful(false);
    } finally {
      setSearchQuery("");
    }
  };

  // Handle the Enter key press event
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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

  useEffect(() => {
    const shouldRemember = cookies.rememberMe;
    setRememberMe(shouldRemember);
    setValue("name", cookies.name);
    setValue("email", cookies.email);
    setValue("website", cookies.website);
  }, [cookies]);

  const postComment = async (data) => {
    const response = await axios.post(`${siteConfig.api_url}/comments`, data);
    queryClient.invalidateQueries("comments"); // Invalidate the 'comments' query
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
      // You can handle errors here
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleShare = (platform) => {
    if (!blog) {
      console.error("Blog data is not available");
      return;
    }

    let shareUrl;

    // Define the content to share
    const sharedContent = {
      title: blog.data.name,
      date: new Date(blog?.data.updatedAt),
      url: "https://your-website-url.com",
      imageUrl: blog.data.image,
      description: blog.data.description,
    };

    // Create share URL based on the selected platform
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          sharedContent.url
        )}&title=${encodeURIComponent(
          sharedContent.title
        )}&description=${encodeURIComponent(
          sharedContent.description
        )}&picture=${encodeURIComponent(sharedContent.imageUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          sharedContent.title
        )}&url=${encodeURIComponent(
          sharedContent.url
        )}&hashtags=${encodeURIComponent(
          sharedContent.description
        )}&via=${encodeURIComponent(
          sharedContent.url
        )}&media=${encodeURIComponent(sharedContent.imageUrl)}`;
        break;
      case "whatsapp":
        shareUrl = `whatsapp://send?text=${encodeURIComponent(
          `${sharedContent.title} - ${sharedContent.url}`
        )}`;
        break;
      case "instagram":
        const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
          sharedContent.url
        )}&media=${encodeURIComponent(
          sharedContent.imageUrl
        )}&description=${encodeURIComponent(sharedContent.description)}`;
        window.open(instagramShareUrl, "_blank", "width=600,height=400");
        return;
      default:
        console.error("Unsupported platform for sharing");
        return;
    }

    // Open a new window to share the content
    window.open(shareUrl, "_blank", "width=600,height=400");
  };





  return (
    <Layout>
      <>
        <div className="grid grid-cols-12 py-10 px-8 ">
          <div className=" col-span-12 lg:col-span-9  lg:px-10  ">
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
                <img
                  src={blog?.data.post.image}
                  alt={blog?.data.post.name}
                  className="object-cover w-full h-full shadow-md rounded-2xl"
                />
              )}

              {isLoading ? null : (
                <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              )}

              <h1 className="absolute text-2xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 md:text-3xl lg:text-4xl top-1/2 ">
                {blog?.data.post.name}
              </h1>
            </div>

            {isLoading ? (
              <p className="h-6 bg-gray-100 w-80 animate-pulse" />
            ) : (
              <p className="mb-6 font-medium">{date.toDateString()}</p>
            )}

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
                {/* <h2>{post?.data?.name}</h2> */}
                {/* <ReactQuill
              theme="snow"
              value={editorValue}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              className="h-[300px]"
            /> */}
                <div dangerouslySetInnerHTML={{ __html: editorValue }} />
              </div>
            )}

            <div className=" my-3 flex flex-col md:flex-row gap-2 md:gap-6 mt-8">
              <div
                className="flex  items-center gap-4"
                onClick={handleLikeClick}
              >
                {isLiked ? (
                  <IoIosHeart
                    size={30}
                    color="red"
                    // style={{ backgroundColor: "red" }}
                  />
                ) : (
                  <IoIosHeartEmpty size={30} />
                )}
                {blog?.data?.likes?.length >= 0 && (
                  <p>
                    {blog?.data?.likes[0]?.total && blog?.data?.likes[0]?.total}{" "}
                    {blog?.data?.likes[0]?.total < 2 ? "Like" : "Likes"}
                  </p>
                )}
              </div>

              <div class="flex justify-around gap-4 items-center ">
                <div
                  class="border hover:bg-[#1877f2] w-8 h-8 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
                  onClick={() => handleShare("facebook")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </div>
                <div
                  class="border hover:bg-[#1d9bf0] w-8 h-8 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                  onClick={() => handleShare("twitter")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </div>
                <div
                  class="border hover:bg-[#bc2a8d] w-8 h-8 fill-[#bc2a8d] hover:fill-white border-pink-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer"
                  onClick={() => handleShare("instagram")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </div>

                <div class="border hover:bg-[#25D366] w-8 h-8 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    ></path>
                  </svg>
                </div>

                <div class="border hover:bg-[#229ED9] w-8 h-8 fill-[#229ED9] hover:fill-white border-sky-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-span-12 mt-4 lg:mt-0 lg:col-span-3  px-4">
            <h4>Search Post</h4>
            <div className="border border-[#e4e4e4] mt-4 w-full rounded-md h-10 flex items-center p-4 gap-3">
              <input
                type="text"
                placeholder="Enter your keywords..."
                className=" text-[#828282] text-sm outline-none  w-full"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
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
            {isSearchSuccessful ? (
              <>
                {searchResults.length > 0 ? (
                  <SearchResults
                    searchResults={searchResults}
                    isLoading={isLoading}
                  />
                ) : (
                  <p className="mt-4 ml-8">
                    No results found for {searchText}.
                  </p>
                )}
              </>
            ) : (
              <RecentPost />
            )}
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
                  className="bg-[#ffffff] p-4 rounded-[8px] my-4 w-full"
                  key={comment._id}
                >
                  <h5 className="text-[11px] text-blue-500">{comment.name}</h5>
                  <p className="text-[14px]">{comment.comment}</p>
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
            />
          </div>
        </div>
      </>
    </Layout>
  );
}
