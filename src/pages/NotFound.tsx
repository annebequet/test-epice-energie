import React from "react";

import LinkButton from "../components/Buttons/LinkButton";
import ShadowBox from "../components/Layout/ShadowBox";
import Subtitle from "../components/Text/Subtitle";
import Title from "../components/Text/Title";
import BasicLayout from "../components/Layout/BasicLayout";


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
