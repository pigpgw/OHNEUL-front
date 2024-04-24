import {
  InfoTitleContainer,
  Title,
  InfoTitleContent,
} from 'Components/styles/Common';
import React from 'react';

type InfoHeaderProps = {
  infoTitle: string;
  infoContent: string;
};

const InfoHeader = ({ infoTitle, infoContent }: InfoHeaderProps) => {
  return (
    <InfoTitleContainer>
      <Title>{infoTitle}</Title>
      <InfoTitleContent>{infoContent}</InfoTitleContent>
    </InfoTitleContainer>
  );
};

export default React.memo(InfoHeader);
