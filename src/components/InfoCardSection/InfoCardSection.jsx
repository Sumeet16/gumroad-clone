import React from "react";

const InfoCardSection = ({ title, imageSrc, children }) => {
  return (
    <div className="best_seller_section">
      <p className="heading">{title}</p>
      <div className="card_dotted">
        <img style={{ width: "100%" }} src={imageSrc} alt={title} />
        {/* <h2 className="card_heading text-xl font-semibold mt-4">{heading}</h2>
        <p className="card_description text-gray-700 mt-2">{description}</p>
        <a href={linkHref} className="card_link underline text-blue-600 hover:text-blue-800 mt-2 inline-block">
          {linkText}
        </a> */}
        {children && <div className="children_content mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default InfoCardSection;
