import React from "react";

const SummaryDisplay = ({ currentArticle }) => (
  <div className="w-full max-w-md mt-5">
    {currentArticle ? (
      <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4;
}">
        <h2 className="text-lg font-semibold text-gray-800">Summary</h2>
        <p className="text-gray-700 text-sm mt-2">{currentArticle.summary}</p>
      </div>
    ) : (
      <p className="text-gray-500">No article selected.</p>
    )}
  </div>
);

export default SummaryDisplay;
