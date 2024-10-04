import { useParams } from "react-router-dom";
import { siteConfig } from "../config/site";
import { useQuery } from "react-query";
import { fetchRecentPost } from "../api/config";
import { useEffect, useRef, useState } from "react";
import { RecentPost } from "../components/SearchResult";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaLinkedin, FaRegComment, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomPagination from "../components/CustomPagination";
import { useCookies } from "react-cookie";
import { TiSocialFacebook } from "react-icons/ti";
import { ReplyComments } from "../components/ReplyComponent";
import { format, formatDistance } from "date-fns";
import { FaXTwitter } from "react-icons/fa6";
import ReplyComment from "../components/ReplyComment";
import { CiShare2 } from "react-icons/ci";
import ShareButton from "../components/blog/reusables/ShareButton";
import CommentForm from "../components/blog/CommentForm";
import { handleShare } from "../store/data/blog";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const schema = yup.object().shape({
  name: yup.string().required("Email field cannot be empty"),
  email: yup.string().required("Password field cannot be empty"),
  comment: yup.string().required("Password field cannot be empty"),
});



export default function BlogDetails() {
  const { blogId } = useParams();
  const [isLiked, setLiked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [likeCount, setLikeCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [replyText, setReplyText] = useState("");
  const [query, setQuery] = useState("");
  const [enableQuery, setEnableQuery] = useState(true);
  const [postReplyLoading, setPostReplyLoading] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const pageSize = 10;
  const [likeStatusCookies, setLikeStatusCookie] = useCookies(["likeStatus"]);
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

  const { data: commentCount, refetch: refetchCommentCount } = useQuery(
    ["commentCount"],
    async () => {
      const response = await axios.get(
        `${siteConfig.api_url}/comments/count/${blog?.data?.post?._id}`
      );

      return response.data;
    }
  );


  const {
    data: posts,
    isLoading: loadingPosts,
    refetch: refetchPosts,
  } = useQuery("posts", () => fetchRecentPost(`/post`), {
    enabled: !!enableQuery,
    onSuccess: () => {
      setEnableQuery(false);
    },
  });

  const presentDay = new Date();

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


  const handleLikeClick = async () => {
    setLiked((prevIsLiked) => !prevIsLiked);

    setLikeCount(() =>
      !isLiked
        ? (blog?.data?.likes[0]?.total || 0) - 1
        : (blog?.data?.likes[0]?.total || 0) + 1
    );

    const likes = {
      status: !isLiked ? 1 : 0,
    };

    setLikeStatusCookie("likeStatus", !isLiked, { path: "/" });

    try {
      await axios.post(`${siteConfig.api_url}/post/like/${blogId}`, likes);

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
      // setLiked(stor/edLikeStatus);
    }
  }, [likeStatusCookies]);

  useEffect(() => {
    if (blog?.data?.post?.description) {
      setEditorValue(blog.data.post.description);
    }
  }, [blog]);

  const {
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

  const { mutate, isLoading: isLoad } = useMutation(postComment, {
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

  // refetchCommentCount();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // SEO OPTIMIZATION
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog?.data.post.name,
    image: blog?.data.post.image,
    datePublished: blog?.data.post.createdAt,
    dateModified: blog?.data.post.updatedAt,
    author: {
      "@type": "Person",
      name: "Admin",
    },
    articleBody: blog?.data.post.description,
  };


  return (
    <Layout>
      <Helmet>
        <title>
          {blog?.data.post.name
            ? `${blog.data.post.name} - My Blog`
            : "My Blog"}
        </title>
        <meta
          name="description"
          content={blog?.data.post.description || "A detailed blog post."}
        />
        <meta property="og:title" content={blog?.data.post.name || "My Blog"} />
        <meta
          property="og:description"
          content={blog?.data.post.description || "A detailed blog post."}
        />
        <meta
          property="og:image"
          content={blog?.data.post.image || "/default-image.jpg"}
        />
        <meta
          property="og:url"
          content={`${siteConfig.siteUrl}/blog/${blogId}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup || {})}
        </script>
      </Helmet>

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
                      <IoIosHeart size={25} color="red" />
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
              <div className="flex items-center gap-3">
                <ShareButton
                  backgroundColor="#4267b2"
                  icon={<TiSocialFacebook size={20} />}
                  label="Share"
                  onClick={() => handleShare("facebook")}
                />
                <ShareButton
                  backgroundColor="#232323"
                  icon={<FaXTwitter />}
                  label="Tweet"
                  onClick={() => handleShare("twitter")}
                />
                <ShareButton
                  backgroundColor="#25d366"
                  icon={<FaWhatsapp size={20} />}
                  label="Share"
                  onClick={() => handleShare("whatsapp")}
                />
                <ShareButton
                  backgroundColor="#0077b5"
                  icon={<FaLinkedin size={20} />}
                  label="Share"
                  onClick={() => handleShare("linkedin")}
                />
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
                // value={query}
                onChange={(e) => setQuery(e.target.value)} // onKeyDown={handleKeyPress}
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                    {comment.name}&apos;s comment ~{" "}
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
            <CommentForm
              register={register}
              errors={errors}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              isLoad={isLoad}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />{" "}
          </div>
        </div>
      </>
    </Layout>
  );
}
