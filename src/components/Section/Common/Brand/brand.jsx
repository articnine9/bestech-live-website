"use client";

import Link from "next/link";
import CategoriesCard from "~/components/Ui/Cards/CategoriesCard";

const menuData = {
  categories: [
    { name: "Hyundai Parts", slug: "hyundai", code: "HY" },
    { name: "KONE Parts", slug: "kone", code: "KN" },
    { name: "Mitsubishi Parts", slug: "mitsubishi", code: "MI" },
    { name: "Otis Parts", slug: "otis", code: "OT" },
    { name: "Schindler Parts", slug: "schindler", code: "SH" },
    { name: "Thyssenkrupp Parts", slug: "thyssenkrupp", code: "TK" },
  ],
};

const Brand = ({ category }) => {
  const { slug, groups = [] } = category;

  return (
    <section className="blog-two blog-two--three padding">
      <section className="container">
        <div className="alert alert-warning">
          <strong>Note:</strong> This is a general reference list of popular
          spare parts used globally across major elevator brands.
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <CategoriesCard menuName={menuData} parentLink={"brands"} />
          </div>

          <div className="col-xl-9">
            <div className="row">
              {groups.map((group, index) => {
                const groupSlug = group.slug.toLowerCase().replace(/\s+/g, "-");
                console.log(`sd ${groupSlug}`);
                return (
                  <div key={index} className="col-md-6 col-lg-4 mb-4">
                    <Link
                      href={`/brands/${slug}/${group.slug}`}
                      className="card shadow-sm h-100 text-decoration-none"
                    >
                      <img
                        src={group.image || "/img/product-default-img.jpg"}
                        alt={group.group_name}
                        className="card-img-top"
                        style={{ height: "180px", objectFit: "cover" }}
                      />

                      <div className="card-body text-center">
                        <h5 className="fw-bold text-dark">
                          {group.group_name}
                        </h5>
                        <p className="text-muted mb-0">
                          {group.items?.length || 0} Products
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
