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
        <h5 className="text-sm"> Hello there </h5>
        <h1 className="font-bold text-7xl w-6/12"> <b className="text-myyellow-800"> I'm Faustino, </b>passionate dev & data analyst. </h1>
        {/* <h3 className="font-medium text-xl">
          {" "}
          Software Developer <b className="text-myyellow-300"> || </b> Data
          Analyst
        </h3>
        <div className="w-fit flex">
          {" "}
          <a href="https://github.com/maggioniduffy" target={"_blank"}>
            <Image src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/maggioniduffy/"
            target={"_blank"}
          >
            <Image src={linkedin} alt="linkedin" />
          </a>
        </div> */}
      </div>
      <p className="m-2 text-xl w-full lg:w-96 my-5 lg:my-auto lg:text-right">
          Proactive and creative, envolved in the tech world since 2019, I've never stop learning and finding my way to improve as a <b> software developer </b> or as a <b> data analyst</b>.
          My goal is to deliver nice and useful products and to constantly deep into new technlogies.
          </p>
      {/* <div className="bg-mywhite bg-opacity-0 shadow-lg rounded-full overflow-hidden my-5 bg-myyellow-300">
        <Image
          src={perfil}
          placeholder="blur"
          className="h-fit w-36 rounded-full bg-yellow-300"
          alt="me"
        />
      </div> */}
      </div>
      <div className="flex space-x-5 md:space-x-2 flex-wrap mt-5 place-items-center font-bold">
        <Link
          href={"#footer"}
          // className="bg-mywhite border-2 shadow rounded-full p-5 my-3 font-bold text-center"
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
