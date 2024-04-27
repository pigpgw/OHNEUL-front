import React from 'react';
import { IconReport } from '../../styles/Header';

type ReportIcon = {
    reportIconClick: () => void;
};

function ReportIcon({ reportIconClick }: ReportIcon) {
  return <IconReport onClick={reportIconClick} />;
}

export default React.memo(ReportIcon)