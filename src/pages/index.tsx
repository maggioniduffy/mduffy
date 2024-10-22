import { DataPortfolio, DevPortfolio, Footer, Header } from "@/components";
import "animate.css";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-left justify-start main py-6`}
    >
      <Header />
      <DevPortfolio />
      <DataPortfolio />
      <Footer />
    </main>
  );
}
