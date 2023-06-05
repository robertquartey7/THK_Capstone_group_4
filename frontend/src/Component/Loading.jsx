import React from "react";

function Loading() {
  return (
    <div>
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    </div>
  );
}

export default Loading;
