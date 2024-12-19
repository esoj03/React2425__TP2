import React from "react";

const SavedArticles = ({ articles, setCurrentArticle }) => (
  <div className="w-full max-w-md mt-5">
    <h2 className="text-xl font-semibold text-gray-800">Saved Articles</h2>
    <div className="flex flex-col gap-2 mt-2">
      {articles.map((article, index) => (
        <div
          key={index}
          className="p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer;
}"
          onClick={() => setCurrentArticle(article)}
        >
          <p className="text-blue-700 text-sm truncate">{article.url}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SavedArticles;
