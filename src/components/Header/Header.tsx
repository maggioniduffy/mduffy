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
          <div className="flex space-x-1 animate__animated animate__bounce">
            <Image src={perfil} alt={""} width={20} />
            <h5 className="text-sm">Hello! </h5>
          </div>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl w-8/12 lg:w-6/12">
            {" "}
            <b className="text-mypink-600 drop-shadow-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_50%)]">
              {" "}
              I&lsquo;m Faustino,{" "}
            </b>
            passionate dev & data analyst.{" "}
          </h1>
        </div>
        <p className="m-2 ml-4 animate__animated animate__delay-2s animate__pulse text-md md:text-xl w-11/12 lg:w-96 my-5 lg:my-auto lg:text-right">
          Proactive and creative, envolved in the tech world since 2019,
          I&lsquo;ve never stop learning and finding my way to improve as a{" "}
          <b> software developer </b> or as a <b> data analyst</b>. My goal is
          to deliver nice and useful products and to constantly deep into new
          technlogies.
        </p>
      </div>
      <div className="flex space-x-1 md:space-x-2 flex-wrap pt-10 place-items-center font-bold">
        <Link
          href={"#footer"}
          className="rounded-full p-5 my-3 text-center text-black bg-mygray bg-opacity-80 animate__animated animate__delay-3s animate__pulse"
        >
          Get in touch
        </Link>
        <Link
          href={"#dev"}
          className="rounded-full p-5 my-3 text-center bg-mypink-300 animate__animated animate__delay-4s animate__pulse"
        >
          Dev Projects
        </Link>
        <Link
          href={"#data"}
          className="rounded-full p-5 my-3 text-center bg-myyellow-500 animate__animated animate__delay-5s animate__pulse"
        >
          Data & ML Projects
        </Link>
        <Link
          href={"files/cv.pdf"}
          target="_blank"
          className="rounded-full p-5 my-3 text-center text-white bg-black"
        >
          My Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
