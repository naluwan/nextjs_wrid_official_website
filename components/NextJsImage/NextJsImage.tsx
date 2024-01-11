import Image from 'next/image';
import {
  ContainerRect,
  Slide,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox';

const isNextJsImage = (slide: Slide) => {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  );
};

type NextJsImageProps = {
  slide: Slide;
  rect: ContainerRect;
};

const NextJsImage = ({ slide, rect }: NextJsImageProps) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);
  console.log('[cover]', cover);

  if (!isNextJsImage(slide)) return undefined;

  const width =
    !cover && slide.width && slide.height
      ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
      : rect.width;

  const height =
    !cover && slide.width && slide.height
      ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
      : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=''
        src={slide.src}
        loading='eager'
        draggable={false}
        // placeholder={slide.src ? 'blur' : undefined}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};

export default NextJsImage;
