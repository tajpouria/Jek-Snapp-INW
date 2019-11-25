import * as React from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps
} from "react-lazy-load-image-component";

interface Props {
  attr: LazyLoadImageProps;
}

export default ({ attr }: Props) => {
  return <LazyLoadImage {...attr} />;
};
