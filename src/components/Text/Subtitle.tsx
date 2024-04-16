import React from "react";

import { SubtitleProps } from "./types";


const Subtitle: React.FC<SubtitleProps> = (props) => {
    const { subtitle } = props;

  return (
    <h2 className="
      text-center
      font-bold
      tracking-wider
      text-gray-500
      "
    >
      {subtitle}
    </h2>
  )
}

export default Subtitle;