
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import { CameraAlt } from '@material-ui/icons';
import { toBlob } from 'dom-to-image';
import { copyToClipboard } from './helpers';

const ClipBoardButton = ({ disabled }) => {

  const getImage = async () => {
    if(disabled) return;

    // eslint-disable-next-line no-undef
    const input = document.getElementById('screenshot-ref');
    const image = await toBlob(input, { bgcolor: '#282c34', width: 800 });
    if(image) await copyToClipboard(image)
  };

  return (
    <Tooltip title="Copy to clipboard">
      <IconButton aria-label="Copy to clipboard" disabled={disabled} onClick={getImage}>
        <CameraAlt />
      </IconButton>
    </Tooltip>
  );
};

ClipBoardButton.propTypes = {
  disabled: PropTypes.bool
};

ClipBoardButton.defaultProps = {
  disabled: false
};

export default ClipBoardButton;