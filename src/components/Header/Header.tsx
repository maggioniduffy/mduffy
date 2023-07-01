import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import perfil from "../../../public/assets/perfil.png";
const Header = () => {
  return (
    <header className="w-full flex justify-between h-44 place-items-center px-9">
      <div className="flex flex-col space-y-1">
        <h5 className="text-xs"> Faustino </h5>
        <h1 className="font-bold text-5xl"> Maggioni Duffy </h1>
        <h3 className="font-medium text-xl">
          {" "}
          Software Developer <b className="text-myyellow-300"> || </b> Data
          Analyst
        </h3>
        <div className="w-fit flex">
          {" "}
          <a href="https://github.com/maggioniduffy" target={"_blank"}>
            <Image src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/maggioniduffy/"
            target={"_blank"}
          >
            <Image src={linkedin} />
          </a>
        </div>
      </div>
      <div className="bg-black bg-opacity-10 shadow-lg rounded-full overflow-hidden my-5 bg-myyellow-300">
        <Image
          src={perfil}
          placeholder="blur"
          className="h-36 w-36 rounded-full bg-myyellow-300"
        />
      </div>
    </header>
  );
};

export default Header;
