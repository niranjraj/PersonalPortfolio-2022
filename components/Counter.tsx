import React from "react";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  newPercentage: number;
  progressState: boolean;
};
const Counter = (props: Props) => {
  return (
    <div className="circular-counter">
      <ProgressProvider
        valueStart={0}
        valueEnd={props.newPercentage}
        progressState={props.progressState}
      >
        {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
      </ProgressProvider>
    </div>
  );
};

export default Counter;
