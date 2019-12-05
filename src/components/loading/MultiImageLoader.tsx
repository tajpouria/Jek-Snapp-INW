import * as React from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface Props {
  attr: LazyLoadImageProps;
}

export default React.memo(({ attr }: Props) => {
  return <LazyLoadImage {...attr} />;
});
