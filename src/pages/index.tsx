import { DataPortfolio, Footer, Header } from "@/components";
import Link from "next/link";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-left justify-start bg-mygray py-6`}
    >
      <Header />
      <section className="mx-9 my-4 space-x-5 place-items-center flex h-fit justify-between">
        <div>
          <h3 className="text-2xl font-medium"> About Me </h3>
          <p className="mr-2">
            {" "}
            I am Faustino Maggioni Duffy, software developer and data analyst
            from Neuquen, Argentina.
          </p>
        </div>
        <Link
          href={"files/cv.pdf"}
          target="_blank"
          className="bg-myyellow-300 shadow rounded-full p-5 my-3 font-bold"
        >
          My Resume
        </Link>
      </section>
      <DataPortfolio />
      <Footer />
    </main>
  );
}
