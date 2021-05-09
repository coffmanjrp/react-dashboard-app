import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const LightTooltip = withStyles({
  arrow: {
    color: '#f5f5f9',
  },
  tooltip: {
    maxWidth: 220,
    backgroundColor: '#f5f5f9',
    fontSize: '0.8rem',
    color: 'rgba(0, 0, 0, 0.87)',
  },
})(Tooltip);

export default function Annotation({ children, content, placement }) {
  return (
    <LightTooltip
      arrow
      title={content}
      placement={placement}
      TransitionComponent={Zoom}
    >
      {children}
    </LightTooltip>
  );
}
