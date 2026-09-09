/* eslint-disable @next/next/no-img-element */

const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/img/resource/logo-2.webp";
  const logoSrc = imageSrc || defaultImageSrc;

  return <img src={logoSrc} alt="bestech" />;
};

export default BrandLogo;
