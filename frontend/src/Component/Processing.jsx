import React from "react";

function Processing() {
  return (
    <>
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="motion-reduce:hidden animate-spin ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    </>
  );
}

export default Processing;
