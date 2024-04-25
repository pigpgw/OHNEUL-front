import { IconExit, LogoContainer } from 'Components/styles/Header';
import React from 'react';

type ExitProps = {
  onForExitModal: () => void;
};

function Exit({ onForExitModal }: ExitProps) {
  return (
    <LogoContainer>
      <IconExit onClick={onForExitModal} />
    </LogoContainer>
  );
}

export default React.memo(Exit);
