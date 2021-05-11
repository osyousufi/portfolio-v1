// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNpm,
  FaGitAlt,
  FaGithubSquare,
  FaDiscord,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { GrGatsbyjs } from "react-icons/gr";

// Projects Images (add your images to the /assets/images directory and import below)
import bathroombotlogo from "./assets/images/bathroombotlogo.png";
import blackjacklogo from "./assets/images/blackjacklogo.png";
import yanhualogo from "./assets/images/yanhualogolight.png";
import abetextlogo from "./assets/images/abetextlogo.png";


/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "osyousufi";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaDiscord className="display-4" />,
    name: "discord.js",
  },
  {
    id: 5,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <FaNpm className="display-4" />,
    name: "npm",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <FaNodeJs className="display-4" />,
    name: "NodeJS",
  },
  {
    id: 11,
    skill: <SiMongodb className="display-4" />,
    name: "MongoDB/Mongoose",
  },
  {
    id: 11,
    skill: <GrGatsbyjs className="display-4" />,
    name: "Gatsby",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "yanhua-v2",
  "blackjack",
  "bathroom-bot",
  "abetext",
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: abetextlogo,
    url: 'https://osy-abetext.netlify.app/'
  },
  {
    image: bathroombotlogo,
    url: 'https://discord.com/oauth2/authorize?client_id=820429062676938823&permissions=387136&scope=bot'
  },
  {
    image: blackjacklogo,
    url: 'https://osyblackjack.netlify.app/'
  },
  {
    image: yanhualogo,
    url: 'https://yanhua.herokuapp.com/'
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "osyousufi@gmail.com",
  phone: "9514631183",
};
