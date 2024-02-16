// LoadingSpinner.js
import React from 'react';
import { css } from '@emotion/react';  // Correct import statement
import ScaleLoader from 'react-spinners/ScaleLoader';  // Updated import for ScaleLoader

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ScaleLoader color={'#ff0000'} loading={true} css={override} size={100} />
    </div>
  );
};

export default LoadingSpinner;
