import React from "react";

import { SubtitleProps } from "./types";


const Subtitle: React.FC<SubtitleProps> = (props) => {
    const { subtitle } = props;

  return (
    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
      {subtitle}
    </h2>
  )
}

export default Subtitle;