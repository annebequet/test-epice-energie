import React from "react";

import LinkButton from "../../components/Buttons/LinkButton";
import Subtitle from "../../components/Text/Subtitle";
import Title from "../../components/Text/Title";
import BasicLayout from "../../components/Layout/BasicLayout";


const NotFound: React.FC = () => {
  return (
    <BasicLayout>
      <div className="mx-auto w-1/2 self-center">
          <div className="flex flex-col justify-center items-center">
            <Title title="404" />
            <Subtitle subtitle="La page n'existe pas" />
            <LinkButton link="/" text="Accueil" />            
          </div>
        </div>
    </BasicLayout>
);
}

export default NotFound;
