import React, { memo } from "react";

const checker = ({ name }) => {
  return (
    <>
      {console.log("CustomLabel component render")}
      <label>
        <b>{name}</b>
      </label>
    </>
  );
};
export default memo(checker);
