import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Cubet Techno Labs</h5>
              </div>
              <h3>2024 - PRESENT</h3>
            </div>
            <p>
              Led frontend architecture decisions, built a reusable component system, and developed an AI-powered chatbot using LangChain and a vulnerability management platform with real-time WebSockets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>MetricTreeLabs</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Developed FinTech applications supporting AEPS services, implemented biometric onboarding, built role-based portals, and reduced bundle size by 35% using code splitting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>iLearning Engines</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Contributed to a product-based LMS used across enterprise clients. Developed scalable frontend features with React and optimized backend SQL queries, reducing response time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Software Engineer</h4>
                <h5>Stackroots</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built responsive reusable UI components using React, worked with Redux for state management, and integrated APIs for dynamic data rendering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
