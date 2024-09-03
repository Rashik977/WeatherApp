import { IImage } from "../Interface/IImage";

const Image: React.FC<IImage> = (props: IImage) => {
  const { src, height = "50px", width = "50px", alt = "image" } = props;

  return <img src={src} height={height} width={width} alt={alt}></img>;
};

export default Image;
