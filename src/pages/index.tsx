import { DataPortfolio, Footer, Header } from "@/components";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-left justify-start main py-6`}
    >
      <Header />
      <DataPortfolio />
      <section className="w-fit my-4 mx-auto rounded-xl bg-opacity-50 place-items-center flex flex-col flex-wrap h-fit justify-center">
        {/* <div> */}
          {/* <h3 className="text-2xl font-medium mt-4"> About Me </h3> */}
          {/* <p className="mr-2 text-xl w-96">
          Proactive and creative, envolved in the tech world since 2019, I've never stop learning and finding my way to improve as a <b> software developer </b> or as a <b> data analyst</b>.
          My goal is to deliver nice and useful products and to constantly deep into new technlogies.
          </p> */}
        {/* </div> */}
        {/* <div className="flex md:space-x-2 flex-wrap">
        <Link
          href={"files/cv.pdf"}
          target="_blank"
          className="bg-myyellow-300 shadow rounded-full p-5 my-3 font-bold text-center"
        >
          My Resume
        </Link>
        <Link
          href={"#footer"}
          className="bg-mywhite shadow rounded-full p-5 my-3 font-bold text-center"
        >
          Get in touch
        </Link>
        </div> */}
      </section>
      <Footer />
    </main>
  );
}
