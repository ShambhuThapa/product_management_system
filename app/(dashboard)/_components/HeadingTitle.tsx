import React from "react";
const HeadingTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h6 className="d-block d-md-none">{title}</h6>
      <h4 className="d-none d-md-block">{title}</h4>
    </>
  );
};

export default HeadingTitle;