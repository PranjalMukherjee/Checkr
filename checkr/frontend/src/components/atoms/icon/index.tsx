import React from "react";

interface PropTypes {
  src?: any;
  alt?: string;
  width?: string;
  height?: string;
}

export default function Icon(props: PropTypes) {
  return (
    <React.Fragment>
      <img
        data-testid="image-element"
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </React.Fragment>
  );
}
