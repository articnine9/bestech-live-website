import Link from "next/link";

const PageHeader = ({ title, breadcrumbs = [], bgImage = "/img/home/faq/2.jpg" }) => {

  return (
    <section className="page-header padding">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner text-center">
          <h1>{title}</h1>
          
          <ul className="thm-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="icon-right-arrow-5"></span>
            </li>
            {breadcrumbs?.map((item, index) => (
              <li key={index}>
                {index > 0 && (
                  <span className="icon-right-arrow-5" style={{marginRight:"10px"}}></span>
                )}

                {item.href ? (
                  <Link href={item.href} >{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
            {/* <li>
              <span className="icon-right-arrow-5"></span>
            </li> */}
            <li>
              {title === "404" ? "page not found" : ""}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
