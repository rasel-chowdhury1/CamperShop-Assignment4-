import { ImgProps } from "../../types/global.type";

const Image = ({ imgSrc, className }: ImgProps) => {
  console.log({imgSrc, className})
  return <img className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
