import { Link } from "react-router-dom";
import Layout from "../components/layout";
import BlogCard, { BlogCardSkeleton } from "../components/ui/blog-card";
import { Button } from "../components/ui/button";
import { siteConfig } from "../config/site";
import useFetch from "../hooks/use-fetch";

export default function BlogPage() {
  const { data: blogs, isLoading } = useFetch(`${siteConfig.api_url}/post`);

  const initBlog =
    blogs?.data.response[
      Math.floor(Math.random() * blogs?.data.response.length)
    ];

  return (
    <Layout>
      <section className="relative max-w-6xl py-10 mx-auto bg-white ">
        <header className="pt-4 pb-10 mx-auto mb-10 space-y-6 text-center px-7 md:mb-16 ">
          <div className="relative w-full h-80 lg:h-[420px] overflow-hidden rounded-2xl">
            {isLoading ? (
              <div className="w-full h-full bg-gray-100 animate-pulse" />
            ) : (
              <img
                src={initBlog?.image}
                alt={initBlog?.name}
                className="object-cover w-full h-full shadow-md "
              />
            )}

            {isLoading ? null : (
              <>
                <div className="absolute inset-0 w-full h-full bg-black/70" />
                <div className="absolute flex flex-col items-start pr-5 space-y-2 -translate-y-1/2 lg:space-y-5 left-5 md:left-10 top-1/2">
                  <h1 className="max-w-2xl text-2xl font-bold text-left text-white md:text-3xl lg:text-4xl">
                    {initBlog?.name}
                  </h1>
                  <p
                    className="max-w-md text-sm font-medium text-left text-white md:text-base line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: initBlog?.description,
                    }}
                  />
                  {blogs?.data?.response && (
                    <Button className={"py-2 px-5 "}>
                      <Link to={`/blog/${initBlog?._id}`}>Read more..</Link>
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </header>

        <h2 className="px-4 mb-10 text-2xl font-semibold md:px-10 md:text-3xl">
          Recent Blogs
        </h2>

        <div className="grid grid-cols-1 gap-10 px-4 sml:grid-cols-2 msl:grid-cols-3 lg:grid-cols-3 md:px-10">
          {isLoading || !blogs?.data?.response
            ? Array(9)
                .fill(0)
                .map((_, idx) => <BlogCardSkeleton key={idx} />)
            : blogs?.data?.response.map((item) => (
                <BlogCard key={item._id} blog={item} />
              ))}
        </div>
      </section>
    </Layout>
  );
}
