const ProjectInfoCard = ({ product, category }) => {
  return (
    <div className="project-details__sidebar">
      <div className="project-details__sidebar-project-info">
        <div className="title">
          <h2>Product Info</h2>
        </div>
        <ul>
          <li>
            <div className="title-box">
              <p>
                Product Name <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.name ? product.name : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Description <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.description ? product.description : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Product Code <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{product?.code ? product.code : "-"}</p>
            </div>
          </li>

          <li>
            <div className="title-box">
              <p>
                Category <span>:</span>
              </p>
            </div>
            <div className="text-box">
              <p>{category?.page_name ? category.page_name : "-"}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
