import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import perfil from "../../../public/assets/perfil.png";
const Header = () => {
  return (
    <header className="w-full flex justify-start flex-col lg:flex-col space-y-5 lg:space-y-0 lg:justify-center h-screen place-items-center px-9 mb-8">
      <div className="flex flex-col space-y-1">
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
      <p className="mr-2 text-xl w-full lg:w-96 lg:text-left">
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
    </header>
  );
};

export default Header;
