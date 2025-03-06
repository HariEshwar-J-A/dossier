export const WorkData = [
  {
    company: "Freelance",
    designation: "Freelance React Developer – Part Time",
    startDate: "Aug-2023",
    endDate: "Present",
    logo: require("../../assets/images/logo-freelance.svg").default,
    companyLogo: "https://yourdomain.com/path-to-freelance-logo.png",
    description: {
      general:
        "Delivered optimized web solutions and innovative features as an independent contractor.",
      learningsOrAchievements: [
        "Optimized complex data visualizations, reducing render times by 35% and enhancing responsiveness.",
        "Built an AI-powered chatbot using the OpenAI API and Next.js, boosting customer engagement by 30%.",
        "Deployed and maintained scalable, cloud-hosted applications with 99.9% uptime.",
      ],
    },
  },
  {
    company: "SOTI Inc.",
    designation: "DevOps Engineer Coop – Full Time",
    startDate: "May-2024",
    endDate: "Dec-2024",
    logo: require("../../assets/images/logo-soti.svg").default,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/SOTI_logo.svg/1200px-SOTI_logo.svg.png",
    description: {
      general:
        "Engineered robust CI/CD pipelines and enhanced testing frameworks to streamline deployments.",
      learningsOrAchievements: [
        "Developed end-to-end CI/CD pipelines in Jenkins using Groovy scripting, reducing deployment times by 30%.",
        "Automated PowerShell-based reindexing scripts for JFrog Xray vulnerability scans, reducing manual effort by 40%.",
        "Improved BDD testing frameworks by resolving Angular.js & .NET UI issues, increasing usability and system efficiency.",
      ],
    },
  },
  {
    company: "Soliton Technologies",
    designation: "Technical Project Engineer – Full Time",
    startDate: "Jun-2022",
    endDate: "Jul-2023",
    logo: require("../../assets/images/logo-soliton.svg").default,
    companyLogo:
      "https://1414g3edy9az5.cdn.shift8web.com/wp-content/uploads/2023/01/Soliton-Logo.png",
    description: {
      general:
        "Led complex projects while partnering with NI to deliver innovative solutions in cinema robotics and industrial IoT.",
      learningsOrAchievements: [
        "Architected IoT edge modules using OPC UA and MQTT protocols for an industrial IoT – cloud agnostic monitoring and control system featuring microservices architecture.",
        "Developed and owned an Agile cinema robotics software project using React JS, Node JS, LabVIEW, C++, Math, and Python technologies; secured long-term engagements worth over 100k USD.",
        "Collaborated with UI/UX designers, developers, and stakeholders to develop a Human Machine Interface (HMI) for a knife sharpening system and multi-lingual dashboards, resulting in high stakeholder satisfaction and a 1-year contract extension.",
        "Standardized React JS usage within the organization by leveraging the developer community and drafting comprehensive documentation, which improved efficiency by 35% and reduced delivery time by 15%.",
        "Created an internal resource and asset management software using React JS, AJAX, Node JS, PostgreSQL, and SVG/XML, winning second place in a shark-tank contest and securing further funding.",
        "Counseled 10 college students for career preparedness as part of a Corporate Social Responsibility initiative, achieving 100% student placement and satisfaction.",
        "Drafted a pull request checklist by standardizing conventional commits and hosting Knowledge Sharing Sessions (KSS), enhancing estimation accuracy and productivity.",
        "Engaged in external product discussions to deepen customer insights, converting one-year contracts into long-term engagements.",
        "Received two ‘Star Soliton’ awards, recognizing exceptional hard work and significant value addition.",
      ],
    },
  },
  {
    company: "Soliton Technologies",
    designation: "Project Engineer – Full Time",
    startDate: "Aug-2020",
    endDate: "Jun-2022",
    logo: require("../../assets/images/logo-soliton.svg").default,
    companyLogo:
      "https://1414g3edy9az5.cdn.shift8web.com/wp-content/uploads/2023/01/Soliton-Logo.png",
    description: {
      general:
        "Developed full-stack solutions that advanced semiconductor validation and boosted overall product quality.",
      learningsOrAchievements: [
        "Pioneered semiconductor validation software using React JS, Node JS, Python, MySQL, and Electron with a data-driven architecture and multi-scale sampling, leading to accelerated GUI development and multiple product-license acquisitions.",
        "Mentored a machine learning project for anomaly detection in semiconductor data, reducing loss functions by up to 35% and enhancing software performance.",
        "Implemented unit testing with Jest and React Testing Library, achieving 100% test coverage and a 30% improvement in application quality.",
        "Tailored and led Scrum events for a cinema-robotics project, increasing story point completion by 30% and promoting Agile adoption across teams.",
        "Created an industrial IoT edge module using Python FastAPI and Docker to facilitate data transfer via OPC UA and Azure, enabling remote monitoring for 40% of engineers.",
        "Researched and developed an IoT proof of concept using NI sensor device drivers to extract high-volume data streams, bolstering confidence in winning industrial projects.",
        "Initiated and led career preparedness training for college students under the Corporate Social Responsibility banner, including material development and stakeholder coordination.",
        "Coordinated festive company events to foster cross-team connectivity and boost organizational morale.",
      ],
    },
  },
  {
    company: "Soliton Technologies",
    designation: "Project Engineer - Intern",
    startDate: "Jan-2020",
    endDate: "Mar-2020",
    logo: require("../../assets/images/logo-soliton.svg").default,
    companyLogo:
      "https://1414g3edy9az5.cdn.shift8web.com/wp-content/uploads/2023/01/Soliton-Logo.png",
    description: {
      general:
        "Gained foundational skills in LabVIEW and IT services, contributing to real-time application development.",
      learningsOrAchievements: [
        "Trained in LabVIEW and developed real-time applications such as a virtual calculator, flight ticket booking system, and ATM, which exceeded expectations and secured a full-time role.",
      ],
    },
  },
  {
    company: "Zoho Corporation",
    designation: "Backend Developer - Intern",
    startDate: "May-2020",
    endDate: "Jun-2020",
    logo: require("../../assets/images/logo-zoho.svg").default,
    companyLogo:
      "https://1414g3edy9az5.cdn.shift8web.com/wp-content/uploads/2023/01/Soliton-Logo.png",
    description: {
      general:
        "Contributed to backend development for Zoho Assist, quickly adapting to new technologies and agile workflows.",
      learningsOrAchievements: [
        "Earned recognition for rapid learning and impactful contributions while developing core Java backend modules.",
      ],
    },
  },
];

export const WorkCompanyData = {
  Freelance: {
    fullName: "Freelance",
    location: { city: "", country: "" },
    about:
      "Independent contractor specializing in React development and modern, scalable web applications.",
    website: "",
    logo: require("../../assets/images/logo-freelance.svg").default,
  },
  "SOTI Inc.": {
    fullName: "SOTI Inc.",
    location: { city: "Mississauga", country: "Canada" },
    about:
      "SOTI Inc. is a leading provider of enterprise mobility management and IoT solutions.",
    website: "https://www.soti.net/",
    logo: require("../../assets/images/logo-soti.svg").default,
  },
  "Soliton Technologies": {
    fullName: "Soliton Technologies Private Limited",
    location: { city: "Bangalore", country: "India" },
    about:
      "Soliton partners with global companies to drive digital transformation through innovative IT solutions across industries.",
    website: "https://www.solitontech.com/",
    logo: require("../../assets/images/logo-soliton.svg").default,
  },
  "Zoho Corporation": {
    fullName: "Zoho Corporation",
    location: { city: "Chennai", country: "India" },
    about:
      "An Indian multinational technology company offering a comprehensive suite of web-based business tools.",
    website: "https://www.zoho.com/",
    logo: require("../../assets/images/logo-zoho.svg").default,
  },
};
