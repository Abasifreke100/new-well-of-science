import Layout from "../components/layout";
import BlogCard, { BlogCardSkeleton } from "../components/ui/blog-card";
import { siteConfig } from "../config/site";
import useFetch from "../hooks/use-fetch";

export default function BlogPage() {
  const { data: blogs, isLoading } = useFetch(`${siteConfig.api_url}/post`);

  return (
    <Layout>
      <section className="relative max-w-6xl py-10 mx-auto bg-white ">
        <header className="pt-4 pb-10 mx-auto mb-10 space-y-6 text-center px-7 md:mb-16">
          <h1 className="text-dark_text font-semibold font-gen_sans text-2xl md:text-[32px] leading-[130%] lg:text-[40px] ">
            Well Of Science Blog
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10 px-4 sml:grid-cols-2 msl:grid-cols-3 lg:grid-cols-3 md:px-10">
          {isLoading
            ? Array(9)
                .fill(0)
                .map((_, idx) => <BlogCardSkeleton key={idx} />)
            : blogs.data.response.map((item) => (
                <BlogCard key={item._id} blog={item} />
              ))}
        </div>
      </section>
    </Layout>
  );
}
