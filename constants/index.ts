import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flutter",
    image: "flutter.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/sk0618054/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100012206505521",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Sanjeet23654053",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },

  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "C",
    image: "c.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CPP",
    image: "cpp.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "Airbnb Clone (Frontend and Backend)",
    description:
      "Explore a comprehensive Airbnb clone, featuring both frontend and backend implementations. This project showcases my full stack web development skills, providing a seamless user experience from browsing listings to managing bookings.",
    image: "/projects/airbnb-clone.png",
    link: "https://megaproject-hc8s.onrender.com/listings",
  },

  {
    title: "Razorpay (Frontend with HTML, Tailwind CSS)",
    description:
      "Discover my implementation of a Razorpay interface, created with HTML and Tailwind CSS. This project demonstrates my proficiency in modern CSS frameworks and frontend design principles.",
    image: "/projects/razorpay.png",
    link: "https://ron-swanson-quotes-ten.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Check the weather with this app, designed using React. This project emphasizes my ability to integrate APIs and manage state in a React application.",
    image: "/projects/weather-app.png",
    link: "https://weather-app-react-chi-olive.vercel.app/",
  },

  {
    title: "Lottery Game (with React)",
    description:
      "Play the Lottery Game, a web application built with React. This project highlights my skills in using React for dynamic, state-driven web development.",
    image: "/projects/lottery-game.png",
    link: "https://lottery-game-three.vercel.app/",
  },
  {
    title: "Simon Game (with HTML, CSS & JavaScript)",
    description:
      "Engage with the classic Simon Game, recreated using HTML, CSS, and JavaScript. This project showcases my ability to build interactive web applications with a focus on user experience.",
    image: "/projects/simon-game.png",
    link: "https://sk0618054.github.io/Simon-Game/",
  },
  {
    title: "Instagram Clone (Frontend and Backend with Flutter and Firebase)",
    description:
      "Experience an Instagram clone, developed with Flutter and Firebase. This project demonstrates my expertise in mobile development and backend integration, providing a full-featured social media application.",
    image: "/projects/instagram-clone.png",
    link: "https://github.com/sk0618054/Instagram-Clone",
  },
  {
    title: "Flipkart Clone (Frontend with HTML, CSS & JavaScript)",
    description:
      "Dive into a detailed Flipkart clone, built using HTML, CSS, and JavaScript. This project highlights my frontend development abilities, with a focus on responsive design and interactive features.",
    image: "/projects/flipkart-clone.png",
    link: "https://github.com/sk0618054/Flipkart-Clone",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sk0618054",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/users/sanjeetkumar4430",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/sk0618054/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/Sanjeet23654053",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sanjeet-kumar-9a187b256/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sk0618054/portfolio-space",
};
