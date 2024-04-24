import { InfoText } from 'Components/styles/Common';
import React from 'react';

type InfoFooterProps = {
    infoText: string;
};

const InfoFooter = ({ infoText }: InfoFooterProps) => {
  return (
    <InfoText>{infoText}</InfoText>
  );
};

export default React.memo(InfoFooter);
