import Link from "next/link";
import data from "~/db/blogsData.json";
import PageHeader from "~/components/Section/Common/PageHeader";

export default function CategoryListPage() {
    // get unique categories
    const categories = [
        ...new Set(data.map((blog) => blog.category)),
    ];

    return (
        <>
            <div className="body-dark-bg">
                <div className="fix">
                    <section className="page-header padding">
                        <div
                            className="page-header__bg"
                            style={{ backgroundImage: 'url("/img/home/faq/2.jpg")' }}
                        ></div>
                        <div className="container">
                            <div className="page-header__inner text-center">
                                <h1>Blog Categories</h1>
                                <ul className="thm-breadcrumb">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <span className="icon-right-arrow-5"></span>
                                    </li>
                                    <li>
                                        <Link href="/blog">blog</Link>
                                    </li>
                                    <li>
                                        <span className="icon-right-arrow-5"></span>
                                    </li>
                                    <li>
                                        <Link href="/blog/category">Category</Link>
                                    </li>

                                    {/* <li>
              {title} {title === "404" ? "page not found" : ""}
            </li> */}
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="container pt-5">
                        <div className="row">

                            {categories.map((cat, index) => {

                                const slug = cat.toLowerCase().replace(/ /g, "-");

                                return (

                                    <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
                                        <div className="blog-two__single">
                                            <div className="blog-two__single-img">
                                                 <Link href={`/blog/category/${slug}`}>
                                                <div className="inner">
                                                    <img src="/img/product-default-img.jpg" alt={cat} />
                                                </div>
                                                </Link>
                                            </div>
                                            <div className="blog-two__single-content">
                                                <ul className="mb-3 d-flex align-items-center gap-2">
                                                    <li key={index}>
                                                        <span className="icon-right-arrow-5"></span>
                                                        <Link href={`/blog/category/${slug}`}>
                                                            {cat}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}