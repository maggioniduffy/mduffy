import { StaticImageData } from "next/image";
import pacifico from "../../../public/pacifico.png";
import mmw from "../../../public/makemyweek.png";
import weekly from "../../../public/weekly.png";
import quotes from "../../../public/quotes.png";

export interface DevProject {
  name: string;
  description?: string;
  image: StaticImageData;
  link: string;
  bg: string;
}

export const projects: DevProject[] = [
  {
    name: "Club Pacifico Site",
    image: pacifico,
    description:
      "News and info site for the Club Atletico Pacifico basketball branch. Project is finished but the organization never made use of it",
    link: "https://pacifico-frontend.vercel.app/",
    bg: "bg-mypink-100",
  },
  {
    name: "Make My Week",
    description:
      "WORK IN PROGRESS. Weekly calendar helper. Schedules recommended for you to organize your activities the best way, in an easy way.",
    image: mmw,
    link: "https://makemyweek.vercel.app/",
    bg: "bg-mypink-300",
  },
  {
    name: "Frontend Challenge: Static Weekly Calendar",
    image: weekly,
    link: "https://guileless-dasik-6d9b38.netlify.app/",
    bg: "bg-mypink-500",
    description:
      "Static but nice weekly calender. Static, made for a frontend mentor challenge.",
  },
  {
    name: "Frontend Challenge: Random Quote Generator",
    image: quotes,
    link: "https://vocal-otter-e4a45a.netlify.app/",
    bg: "bg-mypink-600",
    description:
      "Random quote generator. Made for a frontend mentor challenge too.",
  },
];
