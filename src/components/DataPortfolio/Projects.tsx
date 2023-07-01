import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { projects } from "./utils";
import Project from "./Project";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "transparent" : "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg mt-2.5">
      {projects.map(({ name, file, link, bg }, i) => {
        const exp = "panel" + i;
        const header = "panel" + i + "d-header";
        const content = "panel" + i + "d-content";
        return (
          <div className={bg} key={link}>
            <Accordion
              expanded={expanded === exp}
              onChange={handleChange(exp)}
              key={link}
              className={bg}
            >
              <div className={bg}>
                <AccordionSummary aria-controls={content} id={header}>
                  <h4 className="text-2xl"> {name} </h4>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Project name={name} link={link} file={file} />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
