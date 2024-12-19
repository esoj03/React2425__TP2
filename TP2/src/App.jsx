import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import SavedArticles from "./components/SavedArticles";
import SummaryDisplay from "./components/SummaryDisplay";
import "./index.css"

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);


  const fetchArticleSummary = async (url) => {
    const apiUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(url)}&html=true&lang=pt&engine=2`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c0dc9dc2acmshc50000bae744c71p18c5f9jsnd5288ff17de1',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      const result = await response.json(); // Assuming the API returns JSON
      const summary = result.summary || "Nenhum resumo disponível.";
      setCurrentArticle({ url, summary });
      setArticles((prev) => [{ url, summary }, ...prev]);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setCurrentArticle({ url, summary: "Erro ao buscar o resumo." });
    }

  };

  return (
    <div className="app">
      <Header />
      <div className=" container mt-20 text-center">
        <div className="text-5xl font-bold mb-2">
          <h1>Faça Resumo de Artigos com</h1>
          <h1 className="text-orange-500">API de OpenAI</h1>
        </div>

        <p className="text-gray-500 p-6">
          Esta é um ferramenta para trabalhar com artigos e que pode ser usado
          para transformar artigos longos num resumo claro e conciso
        </p>
      </div>
      <div className="flex flex-col items-center w-full mt-10">
        <InputForm setArticles={setArticles} setCurrentArticle={setCurrentArticle} fetchArticleSummary={fetchArticleSummary} />
        <SavedArticles articles={articles} setCurrentArticle={setCurrentArticle} />
        <SummaryDisplay currentArticle={currentArticle} />
      </div>
    </div>
  );
};

export default App;
