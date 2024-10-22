import React from "react";
import Projects from "./Projects";
import Link from "next/link";

const DevPortfolio = () => {
  return (
    <main
      id="dev"
      className="p-2 w-full my-8 flex flex-col place-items-left lg:place-items-center justify-center space-y-10 bg-mygray rounded-xl bg-opacity-70 border"
    >
      <h2 className="font-bold text-3xl md:text-5xl w-5/12 text-left">
        {" "}
        Dev Projects{" "}
      </h2>
      <Projects />
      <Link
        href={"#footer"}
        className="bg-mygray border-2 shadow rounded-full p-5 my-3 font-bold text-center underline m-2"
      >
        Get in touch
      </Link>
    </main>
  );
};

export default DevPortfolio;
