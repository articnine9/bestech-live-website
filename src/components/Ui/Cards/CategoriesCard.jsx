import Link from "next/link";

const CategoriesCard = ({ menuName, parentLink }) => {
  const { categories } = menuName;
  return (
    <div
      className="sidebar__single sidebar__services wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="title-box">
        <h2>Categories</h2>
      </div>
      <ul className="sidebar__services-list">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/${parentLink}/${category.slug}`}>
              {category.name} <span className="icon-right-arrow-5"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesCard;
