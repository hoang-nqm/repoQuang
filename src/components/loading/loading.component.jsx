import React from "react";
import "./loading.style.scss";
import { CircularProgress } from '@mui/material';

function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}

export default Loading;
