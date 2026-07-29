import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  // IoT & Hardware skills
  iot: {
    title: "IoT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">IoT</span>,
  },
  embedded: {
    title: "Embedded Systems",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Emb</span>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Uno</span>,
  },
  esp32: {
    title: "ESP32",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">ESP</span>,
  },
  pcb: {
    title: "PCB Design",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PCB</span>,
  },
  wsn: {
    title: "Wireless Sensors",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">WSN</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "adaptive-ac",
    category: "Smart Buildings & IoT",
    title: "Adaptive Air Conditioner Control System",
    src: "/assets/projects-screenshots/portfolio/adaptive-ac.jpg", 
    screenshots: ["adaptive-ac.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.iot, PROJECT_SKILLS.esp32],
      backend: [PROJECT_SKILLS.embedded, PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Adaptive Air Conditioner Control System Using IoT and Genetic Algorithm
          </TypographyP>
          <TypographyP className="font-mono ">
            Jan 2026 – Jun 2026 | Associated with Internet of Things (IoT) Laboratory – Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Researcher &amp; IoT System Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/adaptive-ac.jpg",
                "/assets/projects-screenshots/portfolio/adaptive-ac-2.png",
                "/assets/projects-screenshots/portfolio/adaptive-ac-3.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Developed an adaptive HVAC control system integrating ESP32, environmental sensors, infrared communication, and Genetic Algorithm optimization. The system continuously analyzes temperature and humidity data to determine optimal AC operating parameters, enabling autonomous control through IoT connectivity and real-time monitoring via a web dashboard, resulting in improved energy efficiency and occupant thermal comfort.
          </p>
          <p className="font-mono mb-2">
            Designed and developed an adaptive IoT-based air conditioning control system using ESP32 and a Genetic Algorithm to optimize thermal comfort and energy consumption. Integrated environmental sensors, infrared AC control, cloud-based monitoring, and a web dashboard for real-time visualization. The system automatically adjusts AC settings based on indoor conditions, improving energy efficiency while maintaining occupant comfort.
          </p>
        </div>
      );
    },
  },
  {
    id: "chem-e-car",
    category: "Embedded Systems & Robotics",
    title: "Chem-E-Car Team Control System",
    src: "/assets/projects-screenshots/portfolio/chemecar-1.png",
    screenshots: ["chemecar-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.embedded, PROJECT_SKILLS.arduino],
      backend: [PROJECT_SKILLS.pcb],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Electrical Control System for Chem-E-Car Competition Vehicle
          </TypographyP>
          <TypographyP className="font-mono ">
            Jan 2024 – Dec 2025 | Associated with Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Electrical Technician</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/chemecar-1.png",
                "/assets/projects-screenshots/portfolio/chemecar-2.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and developed the electrical control system for a Chem-E-Car competition vehicle, integrating electronic circuits, embedded systems, and actuator control to achieve precise autonomous operation based on chemical reaction parameters.
          </p>
          <p className="font-mono mb-2">
            Responsible for designing circuit schematics, selecting electronic components, assembling hardware, and implementing the control system using Arduino-based embedded programming. Developed motor control logic, relay circuits, power distribution, and sensor integration to ensure stable and reliable vehicle operation throughout testing and competition.
          </p>
          <p className="font-mono mb-2">
            Collaborated closely with multidisciplinary teams, including mechanical and chemical engineering members, to optimize system performance, improve reliability, and satisfy competition requirements.
          </p>
          <p className="font-mono mb-2">
            Represented Universitas Sebelas Maret at the 2025 Global Friendly Chem-E-Car Competition in China as part of the Chem-E-Car Team. Contributed to the development of the vehicle's electrical control system, embedded programming, and system integration. The team received the Best Design Award in recognition of outstanding engineering design, innovation, and technical implementation.
          </p>
        </div>
      );
    },
  },
  {
    id: "early-warning",
    category: "IoT & Environmental Monitoring",
    title: "Earthquake and Landslide Early Warning System",
    src: "/assets/projects-screenshots/portfolio/earthquake-1.png",
    screenshots: ["earthquake-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.iot, PROJECT_SKILLS.esp32],
      backend: [PROJECT_SKILLS.wsn, PROJECT_SKILLS.embedded],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            IoT-Based Earthquake and Landslide Monitoring &amp; Early Warning System
          </TypographyP>
          <TypographyP className="font-mono ">
            Aug 2025 – Dec 2025 | Associated with Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">IoT System Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/earthquake-1.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and developed an end-to-end IoT-based earthquake and landslide monitoring and early warning system using ESP32. Integrated MPU6050, soil moisture, and rain sensors for real-time environmental monitoring and hazard detection. 
          </p>
          <p className="font-mono mb-2">
            Developed embedded firmware, cloud communication, and a web dashboard with automated alerts, demonstrating expertise in embedded systems, IoT architecture, sensor integration, and full-stack system development.
          </p>
        </div>
      );
    },
  },
  {
    id: "security-door",
    category: "Embedded Security",
    title: "Security Door Lock Prototype",
    src: "/assets/projects-screenshots/portfolio/doorlock-1.jpeg",
    screenshots: ["doorlock-1.jpeg"],
    skills: {
      frontend: [PROJECT_SKILLS.embedded, PROJECT_SKILLS.arduino],
      backend: [PROJECT_SKILLS.iot],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Embedded Security Door Lock System
          </TypographyP>
          <TypographyP className="font-mono ">
            Jul 2025 – Dec 2025 | Associated with Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Embedded Systems Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/doorlock-1.jpeg"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and developed an embedded security door lock system to provide secure access control through password-based authentication. The prototype was built using an Arduino Uno as the primary controller, integrating a matrix keypad for user input, an LCD display for system feedback, relay modules, and a servo motor to actuate the door locking mechanism.
          </p>
          <p className="font-mono mb-2">
            Developed the embedded firmware to validate access credentials, control lock and unlock operations, and manage system status in real time. The project emphasized hardware-software integration, digital input processing, actuator control, and embedded programming to create a reliable access control system.
          </p>
          <p className="font-mono mb-2">
            Through this project, practical experience was gained in embedded system design, electronic circuit integration, and secure control system implementation. Strengthened expertise in embedded programming, system integration, and electronic security.
          </p>
        </div>
      );
    },
  },
  {
    id: "smart-hydroponic",
    category: "IoT & Agriculture",
    title: "Smart Hidroponic Monitoring System",
    src: "/assets/projects-screenshots/portfolio/hydroponic-1.png",
    screenshots: ["hydroponic-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.iot, PROJECT_SKILLS.esp32],
      backend: [PROJECT_SKILLS.wsn, PROJECT_SKILLS.embedded],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            IoT-Based Smart Hidroponic Monitoring System
          </TypographyP>
          <TypographyP className="font-mono ">
            Jul 2024 – Jan 2025 | Associated with Internet of Things (IoT) Laboratory – Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">IoT System Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/hydroponic-1.png",
                "/assets/projects-screenshots/portfolio/hydroponic-2.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and implemented an IoT-based environmental and water quality monitoring system using ESP32. Integrated multiple sensors, including pH, TDS, DS18B20, DHT11, MQ-7, and PM2.5, to collect real-time environmental data. 
          </p>
          <p className="font-mono mb-2">
            Developed embedded firmware, cloud communication, and dashboard integration for continuous monitoring, data visualization, and environmental analysis while ensuring reliable sensor calibration and system performance.
          </p>
          <p className="font-mono mb-2">
            Developed embedded firmware, sensor calibration, hardware integration, and data acquisition while enabling remote monitoring for environmental analysis and smart monitoring applications.
          </p>
        </div>
      );
    },
  },
  {
    id: "pke-2",
    category: "Robotics & Automation",
    title: "Proyek Kreatif Elektro 2 (Autonomous Robot)",
    src: "/assets/projects-screenshots/portfolio/pke2-1.png",
    screenshots: ["pke2-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.embedded, PROJECT_SKILLS.esp32],
      backend: [PROJECT_SKILLS.iot],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous Floor-Cleaning Robot
          </TypographyP>
          <TypographyP className="font-mono ">
            Dec 2023 | Associated with Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Project Lead &amp; Embedded Systems Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/pke2-1.png",
                "/assets/projects-screenshots/portfolio/pke2-2.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and developed an autonomous floor-cleaning robot capable of navigating indoor environments and performing basic cleaning tasks without human intervention. The system was built around an ESP32 microcontroller, integrating ultrasonic sensors (HC-SR04), DC motors, and an L298N motor driver to enable obstacle detection, autonomous navigation, and real-time motion control.
          </p>
          <p className="font-mono mb-2">
            Developed the embedded firmware to process sensor data, execute obstacle avoidance algorithms, and coordinate motor movements for continuous navigation. The robot was programmed to detect surrounding objects, dynamically adjust its direction, and maintain stable operation during cleaning.
          </p>
          <p className="font-mono mb-2">
            This project strengthened practical expertise in embedded systems, robotics, sensor integration, motor control, and autonomous navigation while demonstrating the implementation of intelligent robotic systems using low-cost embedded hardware.
          </p>
        </div>
      );
    },
  },
  {
    id: "pke-1",
    category: "IoT Automation",
    title: "Proyek Kreatif Elektro 1 (Fish Feeder)",
    src: "/assets/projects-screenshots/portfolio/pke1-1.png",
    screenshots: ["pke1-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.iot, PROJECT_SKILLS.esp32],
      backend: [PROJECT_SKILLS.embedded],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automatic Fish Feeding System
          </TypographyP>
          <TypographyP className="font-mono ">
            Jul 2023 | Associated with Universitas Sebelas Maret
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">IoT System Developer</TypographyH3>
          <div className="my-6 w-full">
            <SlideShow 
              images={[
                "/assets/projects-screenshots/portfolio/pke1-1.png"
              ]} 
            />
          </div>
          <p className="font-mono mb-2">
            Designed and implemented an Internet of Things (IoT)-based automatic fish feeding system using an ESP32 microcontroller and a servo actuator. The system enables both scheduled and manual feeding operations through a cloud-connected mobile application using the Blynk platform.
          </p>
          <p className="font-mono mb-2">
            Developed the embedded firmware to manage Wi-Fi communication, feeding schedules, servo motor control, and real-time command execution. Successfully integrated hardware and software components into a functional prototype capable of providing consistent feed dispensing and responsive remote operation.
          </p>
          <p className="font-mono mb-2">
            The project strengthened practical skills in embedded programming, IoT system architecture, hardware-software integration, and wireless automation.
          </p>
        </div>
      );
    },
  },
];
export default projects;
