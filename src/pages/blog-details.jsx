import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import { siteConfig } from "../config/site";
import Layout from "../components/layout";
import { formatTextForReadability } from "../lib/utils";

export default function BlogDetails() {
  const { blogId } = useParams();

  const { data: blog, isLoading } = useFetch(
    `${siteConfig.api_url}/post/${blogId}`
  );

  const date = new Date(blog?.data.updatedAt);

  return (
    <Layout>
      <div className="max-w-3xl px-4 py-10 mx-auto md:px-0">
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
              src={blog?.data.image}
              alt={blog.data.name}
              className="object-cover w-full h-full shadow-md rounded-2xl"
            />
          )}

          {isLoading ? null : (
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          )}

          <h1 className="absolute text-2xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 md:text-3xl lg:text-4xl top-1/2 ">
            {blog?.data.name}
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
                <p className="w-full h-4 bg-gray-100 animate-pulse" key={idx} />
              ))}
          </div>
        ) : (
          <div
            className="text-sm font-normal md:text-base"
            dangerouslySetInnerHTML={{
              __html: formatTextForReadability(blog?.data.description)
            }}
          />
        )}
      </div>
    </Layout>
  );
}
