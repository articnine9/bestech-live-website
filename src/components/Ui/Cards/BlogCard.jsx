import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <div className="blog-one__single">
      <Link prefetch={false} href={`/blog/${item?.link}`}>
        <div className="blog-one__single-img">
          <div className="inner">
            <img decoding="async" src={item?.image} alt="#" />
            <div className="text-box">{item?.category}</div>
          </div>
        </div>
      </Link>
      <div className="blog-one__single-content">
        <h2>
          <Link prefetch={false} href={`/blog/${item?.link}`}>{item?.title}</Link>
        </h2>
        <ul className="meta-box">
          <li>
            <Link prefetch={false} href="blog">By {item?.author}</Link>
          </li>
          <li>-</li>
          <li>{item?.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCard;
