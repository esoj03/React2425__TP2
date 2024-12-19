import React, { useState } from "react";

const InputForm = ({ setArticles, setCurrentArticle, fetchArticleSummary }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchArticleSummary(url);
      const newArticle = { url, summary: "Fetching..." }; // Placeholder while fetching
      setArticles((prev) => [newArticle, ...prev]);
    } catch (error) {
      console.error("Error summarizing article:", error);
    }
    setUrl("");
  };

  return (
    <form className="flex flex-col items-center w-full max-w-md" onSubmit={handleSubmit}>
      <input
        type="url"
        className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
        placeholder="Paste article link here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit" className="p-1 relative left-44 hover:border-gray-700 hover:text-gray-700 my-1.5 mr-1.5 flex items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400">
        Summarize
      </button>
    </form>
  );
};

export default InputForm;
