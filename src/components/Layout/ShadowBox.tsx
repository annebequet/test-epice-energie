import React from "react";

import { BoxType } from "./types";


const ShadowBox: React.FC<BoxType> = ({ children }) => {
    return (
      <div className="
        bg-white
        border
        border-gray-200
        px-4
        md:px-8 
        g:px-10
        py-5
        rounded-lg
        shadow-2xl
        "
      >
        {children}
      </div>
    )
}

export default ShadowBox;
