import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip, Fade } from '@material-ui/core';

const LightTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.background.default,
  },
  tooltip: {
    maxWidth: 220,
    backgroundColor: theme.palette.background.default,
    fontSize: '0.8rem',
    color: theme.palette.text.primary,
  },
}))(Tooltip);

export default function BalloonTip({ children, content, placement }) {
  return (
    <LightTooltip
      title={content}
      placement={placement}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      arrow
    >
      {children}
    </LightTooltip>
  );
}
