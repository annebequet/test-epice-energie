import React from "react";

import { SubtitleProps } from "./types";


const Subtitle: React.FC<SubtitleProps> = (props) => {
    const { subtitle } = props;

  return (
    <h2 className="
      text-center
      font-bold
      tracking-wider
      text-custom-light-gray
      "
    >
      {subtitle}
    </h2>
  )
}

export default Subtitle;