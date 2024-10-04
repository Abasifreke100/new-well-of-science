import { useNavigate } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { useMemo, useState } from "react";

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
  const [clickedPosts, setClickedPosts] = useState([]);
  const navigate = useNavigate();
  // Filter recent posts based on the query
 const filteredPosts = useMemo(() => {
   return query
     ? recentPost?.data?.response.filter((post) =>
         post.name.toLowerCase().includes(query.toLowerCase())
       )
     : recentPost?.data?.response.slice(0, 3); // Display the first 3 posts if no query
 }, [query, recentPost?.data?.response]); // Display the first 3 posts if no query
  
  // const queryClient = useQueryClient();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleNavigate = async (recent) => {
    try {
      navigate(`/blog/${recent}`);

      setClickedPosts((prevClickedPosts) => [...prevClickedPosts, recent]);
      // await queryClient.refetchQueries(["blogPosts"]);
      await refetchBlog();
      await refetchPosts();
      await refetch();
      await refetchCommentCount();
      await setCurrentPage(1);
    } catch (error) {
      console.error("Error while navigating:", error);
    }
  };


  return (
    <>
      {query ? (
        <div className="mt-6">
          <div className="flex flex-col lg:flex-col gap-6 border-t border-b overflow-y-auto h-[410px] py-2">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((recent) => (
                <div className="flex gap-4 mt-6" key={recent._id}>
                  <div className="w-[80px] h-[80px] border rounded-md overflow-hidden">
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
              <p>No results found for &quot;{query}&quot;</p>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <h6 className="text-[#232323]">Recent Post</h6>

          <div className="flex flex-col lg:flex-col gap-6">
            {filteredPosts.map((recent) => (
              <div className="flex gap-4 mt-6" key={recent._id}>
                <div className="w-[80px] h-[80px] border rounded-md overflow-hidden">
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
            ))}
          </div>
        </div>
      )}
    </>
  );
};
