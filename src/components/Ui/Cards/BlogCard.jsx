import Link from "next/link";
import { getImageProps } from "next/image";

const BlogCard = ({ item }) => {
  // Keep the existing img and its CSS sizing. Only change the delivered resource:
  // the browser selects a suitable resolution instead of fetching every original.
  const { props: image } = getImageProps({
    src: item.image,
    alt: "#",
    width: 860,
    height: 505,
    sizes: "(max-width: 767px) calc(100vw - 24px), (max-width: 991px) calc(50vw - 27px), (max-width: 1199px) calc(33.333vw - 28px), (max-width: 1319px) calc(33.333vw - 42px), 399px",
  });

  return (
    <div className="blog-one__single">
      <Link prefetch={false} href={`/blog/${item?.link}`}>
        <div className="blog-one__single-img">
          <div className="inner">
            <img
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt="#"
            />
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
