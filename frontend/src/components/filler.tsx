import React from "react";

interface FillerProps {
  height: string;
}

const FillerComponent: React.FC<FillerProps> = ({ height }) => {
  return <div className={`h-[${height}]`}></div>;
};

export default FillerComponent;
