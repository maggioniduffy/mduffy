import React from "react";
import Projects from "./Projects";

const DataPortfolio = () => {
  return (
    <main className="w-full bg-mywhite z-index-90 rounded-t-3xl p-8 shadow-t drop-shadow-lg">
      <h2 className="font-medium text-3xl">
        {" "}
        Data Analysis & Machine Learning Projects{" "}
      </h2>
      <Projects />
    </main>
  );
};

export default DataPortfolio;
