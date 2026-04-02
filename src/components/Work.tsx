import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectData = [
  {
    title: "AI-Powered LMS Chatbot",
    category: "AI & Machine Learning",
    tools: "React, LangChain, Vector Embeddings",
    image: "./images/ai_chatbot_1775047713904.png",
  },
  {
    title: "Vulnerability Management",
    category: "Cybersecurity Platform",
    tools: "Next.js, TypeScript, WebSockets",
    image: "./images/vuln_dashboard.png",
  },
  {
    title: "FinTech AEPS Application",
    category: "Financial Technology",
    tools: "React Native, Tailwind CSS, Biometrics",
    image: "./images/fintech_app_1775047806510.png",
  },
];

const Work = () => {
  useGSAP(() => {
  function getTranslateX(): number {
    const box = document.getElementsByClassName("work-box");
    const container = document.querySelector(".work-container");
    if (!box || box.length === 0 || !container) return 0;
    const rectLeft = container.getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) || 0;
    padding = padding / 2;
    return rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: () => `+=${getTranslateX()}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
      invalidateOnRefresh: true,
    },
  });

  timeline.to(".work-flex", {
    x: () => -getTranslateX(),
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
