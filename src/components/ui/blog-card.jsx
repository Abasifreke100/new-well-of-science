/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blog/${blog._id}`}
      className="w-full p-3 bg-white shadow-md cursor-pointer select-none rounded-xl "
    >
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={blog.image}
          alt={blog.name}
          className="object-cover w-full h-64"
        />
      </div>

      <div className="w-full px-4 py-4">
        <p className="text-lg font-semibold text-dark_text md:text-xl lg:text-2xl line-clamp-2">
          {blog.name}
        </p>

        <div
          className="text-sm font-normal break-words break-all text-normal_text line-clamp-2 md:text-base"
          dangerouslySetInnerHTML={{
            __html: blog.description
          }}
        />
      </div>
    </Link>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="w-full shadow-md cursor-pointer rounded-xl">
      <div className="w-full overflow-hidden rounded-xl">
        <div className="w-full h-64 bg-gray-100 animate-pulse" />
      </div>
      <div className="w-full px-4 py-4">
        <div className="w-2/3 h-4 mb-4 bg-gray-100 animate-pulse" />
        <div className="w-full h-4 bg-gray-100 animate-pulse" />
      </div>
    </div>
  );
}
