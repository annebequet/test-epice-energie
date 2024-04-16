import React from "react";

import { TitleProps } from "./types";


const Title: React.FC<TitleProps> = (props) => {
  const { title } = props;

  return (
    <h1 className="
      text-6xl
      *md:text-7xl
      lg:text-9xl
      font-bold
      tracking-wider
      text-gray-300
      text-center
      "
    >
      {title}
    </h1>
  )
}

export default Title;