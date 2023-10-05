import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import perfil from "../../../public/assets/perfil.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full lg:w-9/12 m-auto flex justify-start flex-col space-y-5 lg:space-y-0 lg:justify-center min-h-screen place-items-center">
      <div className="flex justify-start flex-col lg:flex-row ">
        <div className="flex flex-col place-items-start m-2 lg:m-0">
          <h5 className="text-sm ml-2"> Hello there </h5>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl w-8/12 lg:w-6/12"> <b className="text-myyellow-800 drop-shadow-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_50%)]"> I&lsquo;m Faustino, </b>passionate dev & data analyst. </h1>
        </div>
        <p className="m-2 text-md md:text-xl w-11/12 lg:w-96 my-5 lg:my-auto lg:text-right">
            Proactive and creative, envolved in the tech world since 2019, I&lsquo;ve never stop learning and finding my way to improve as a <b> software developer </b> or as a <b> data analyst</b>.
            My goal is to deliver nice and useful products and to constantly deep into new technlogies.
        </p>
      </div>
      <div className="flex md:space-x-2 flex-wrap pt-10 place-items-center font-bold">
        <Link
          href={"#footer"}
          className="rounded-full p-5 my-3 text-center underline"
        >
          Get in touch
        </Link>
        <Link 
          href={"#projects"} 
          className="rounded-full p-5 my-3 text-center underline">
          My Projects
        </Link>
        <Link
          href={"files/cv.pdf"}
          target="_blank"
          className="rounded-full p-5 my-3 text-center underline"
        >
          My Resume
        </Link>
        </div>
    </header>
  );
};

export default Header;
