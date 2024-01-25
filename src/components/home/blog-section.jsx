import useFetch from "../../hooks/use-fetch";
import { siteConfig } from "../../config/site";
import BlogCard, { BlogCardSkeleton } from "../ui/blog-card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const { data: blogs, isLoading } = useFetch(`${siteConfig.api_url}/post`);

  return (
    <section className="relative py-10 bg-white">
      <header className="pt-4 pb-10 mx-auto mb-10 space-y-6 text-center px-7 md:mb-16">
        <h5 className="text-dark_text font-semibold font-gen_sans text-2xl md:text-[32px] leading-[130%] lg:text-[40px] ">
          Explore our Blog
        </h5>

        <p className="text-sm font-inter lg:text-base">
          Here are some of the blogs we&apos;ve published
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 msl:grid-cols-3 md:px-10 place-items-center md:place-items-start msl:place-items-center">
        {isLoading
          ? Array(3)
              .fill(0)
              .map((_, idx) => <BlogCardSkeleton key={idx} />)
          : blogs.data.response
              .splice(0, 3)
              .map((item) => <BlogCard key={item._id} blog={item} />)}
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to={"/blog"}>View More</Link>
        </Button>
      </div>
    </section>
  );
}
