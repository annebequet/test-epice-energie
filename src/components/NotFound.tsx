import React from "react";

import LinkButton from "./Buttons/LinkButton";
import ShadowBox from "./Layout/ShadowBox";
import Subtitle from "./Text/Subtitle";
import Title from "./Text/Title";
import BasicLayout from "./Layout/BasicLayout";


const NotFound: React.FC = () => {
  return (
    <BasicLayout>
      <div className="mx-auto w-1/2 self-center">
        <ShadowBox>
          <>
            <Title title="404" />
            <Subtitle subtitle="La page n'existe pas" />
            <LinkButton link="/" text="Accueil" />            
          </>
        </ShadowBox>
        </div>
    </BasicLayout>
);
}

export default NotFound;
