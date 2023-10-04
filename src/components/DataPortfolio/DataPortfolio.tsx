import React from "react";
import Projects from "./Projects";
import Link from "next/link";

const DataPortfolio = () => {
  return (
    <main id="projects" className="w-full min-h-screen flex flex-col place-items-center justify-center space-y-10 bg-mygray rounded-xl bg-opacity-70 border">
      <h2 className="font-bold text-5xl w-5/12 text-left">
        {" "}
        Data Analysis & Machine Learning Projects{" "}
      </h2>
      <Projects />
      <Link
          href={"#footer"}
          className="bg-mygray border-2 shadow rounded-full p-5 my-3 font-bold text-center underline"
        >
          Get in touch
        </Link>
    </main>
  );
};

export default DataPortfolio;
