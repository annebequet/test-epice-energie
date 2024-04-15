import React from "react";

import { BoxType } from "./types";


const ShadowBox: React.FC<BoxType> = ({ children }) => {
    return (
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl" >
        {children}
      </div>
    )
}

export default ShadowBox;
