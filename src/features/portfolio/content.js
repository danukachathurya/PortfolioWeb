export const siteMetadata = {
  title: "Danuka Chathurya - Full Stack Developer Portfolio",
  description:
    "Portfolio of Danuka Chathurya, a 4th-year IT undergraduate and Full Stack Developer Intern from Sri Lanka. Projects, experience, skills, and contact.",
  ogTitle: "Danuka Chathurya - Full Stack Developer",
  ogDescription:
    "Building polished full stack experiences with strong UI thinking, clean API design, and production-focused engineering habits.",
  author: "Danuka Chathurya",
};

export const profile = {
  fullName: "Danuka Chathurya",
  shortName: "Danuka",
  initials: "DC",
  role: "Full Stack Developer",
  location: "Sri Lanka",
  email: "danukachathurya8@gmail.com",
  phoneDisplay: "0707078024",
  phoneHref: "tel:+94707078024",
  responseWindow: "Usually within 24-48 hours",
  availability: "Available for opportunities",
  currentRole: "Full Stack Developer Intern",
  coreStrength: "Frontend to backend delivery",
  university: "SLIIT University",
  company: "Gamage Recruiters",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroHighlights = [
  { label: "Open to", value: "Internships and full stack developer roles" },
  { label: "Building with", value: "Modern web apps, APIs, and scalable product workflows" },
];

export const heroStats = [
  { label: "4th Year IT", value: profile.university },
  { label: "Focus", value: "Full Stack Development" },
];

export const aboutTags = [
  "Software Engineering",
  "Full Stack Development",
  "Frontend Engineering",
  "REST APIs",
  "Databases",
  "Scalable Applications",
];

export const aboutCards = [
  { icon: "education", label: "Education", text: "4th-year IT undergraduate at SLIIT University" },
  {
    icon: "internship",
    label: "Internship",
    text: "Software Engineer Intern at Gamage Recruiters",
  },
  {
    icon: "focus",
    label: "Focus",
    text: "Responsive interfaces, REST APIs, and database-driven full stack apps",
  },
];

export const educationItems = [
  {
    period: "2022 - Present",
    place: "SLIIT University",
    status: "Current",
    detail: "BSc (Hons) in Information Technology",
    note: "Specializing in Information Technology",
  },
  {
    period: "2011 - 2020",
    place: "Ampara D.S Senanayake National School",
    status: "Completed",
    detail: "G.C.E. Advanced Level - Physical Science stream (3Cs)",
    note: "",
  },
];

export const experienceSnapshots = [
  {
    label: "Product Scope",
    text: "Worked across public-facing and internal platforms, contributing to solutions used by both external users and internal teams.",
  },
  {
    label: "What I Did",
    text: "My internship work included wireframing, UI/UX design in Figma, responsive layout building, and frontend implementation.",
  },
  {
    label: "Key Areas",
    text: "The projects covered education, vehicle rental, and recruitment workflows, giving me practical exposure to real product requirements.",
  },
];

export const experienceProjects = [
  {
    n: "01",
    title: "Veritas University Website",
    body: "Built a modern responsive university website covering pages such as Home, Why Us, Our Team, Our Partners, Campus Life, Programs, Courses, and Course Details.",
    points: [
      "Started the project with UI/UX exploration and page planning in Figma.",
      "Developed frontend layouts for the final web experience.",
    ],
  },
  {
    n: "02",
    title: "Rent a Car System",
    body: "Supported a vehicle rental platform designed to manage day-to-day rental operations and user interactions.",
    points: [
      "Worked on flows for login and registration, owner profiles, and booking management.",
      "Helped shape features around notifications and document handling.",
    ],
  },
  {
    n: "03",
    title: "ATS (Applicant Tracking System)",
    body: "Contributed to an internal hiring system used to manage recruitment workflows and candidate information.",
    points: [
      "Worked on wireframing to define the structure of core screens and interactions.",
      "Handled frontend development for job postings, candidate profiles, listings, and detail views.",
    ],
  },
];

export const skillCategories = [
  {
    icon: "frontend",
    name: "Frontend",
    desc: "Responsive interfaces and component-driven UI development for modern web experiences.",
    skills: [
      { abbr: "HT", name: "HTML" },
      { abbr: "CS", name: "CSS" },
      { abbr: "JS", name: "JavaScript" },
      { abbr: "RE", name: "React.js" },
    ],
  },
  {
    icon: "backend",
    name: "Backend",
    desc: "Server-side application logic and backend frameworks centered around scalable systems.",
    skills: [
      { abbr: "ND", name: "Node.js" },
      { abbr: "JV", name: "Java" },
      { abbr: "SB", name: "Spring Boot" },
    ],
  },
  {
    icon: "database",
    name: "Database",
    desc: "Data persistence, modeling, and day-to-day database work across document and relational systems.",
    skills: [
      { abbr: "MG", name: "MongoDB" },
      { abbr: "MY", name: "MySQL" },
    ],
  },
  {
    icon: "tools",
    name: "DevOps and Tools",
    desc: "Version control, delivery tooling, container workflows, and cloud-adjacent development tools.",
    skills: [
      { abbr: "GH", name: "GitHub" },
      { abbr: "DK", name: "Docker" },
      { abbr: "AW", name: "AWS" },
      { abbr: "JK", name: "Jenkins" },
    ],
  },
];

export const universityProjects = [
  {
    n: "01",
    title: "Online Vehicle Parking System",
    stack: ["React.js", "Node.js", "MongoDB"],
    desc: "A university project focused on managing parking availability, vehicle flow, and slot-based coordination through a streamlined digital system.",
  },
  {
    n: "02",
    title: "Vehicle Rental System",
    stack: ["React.js", "Spring Boot", "MySQL"],
    desc: "A rental management platform designed to handle bookings, vehicle listings, and operational workflows for a modern vehicle rental experience.",
  },
  {
    n: "03",
    title: "Game App and Note App",
    stack: ["HTML", "CSS", "JavaScript", "React.js"],
    desc: "A pair of application builds used to strengthen frontend interaction patterns, state handling, and practical CRUD-based feature development.",
  },
  {
    n: "04",
    title: "Wooden Handmade Marketplace System",
    stack: ["React.js", "Node.js", "MySQL"],
    desc: "A marketplace concept for showcasing handmade wooden products with product browsing, seller flows, and order-oriented features.",
  },
  {
    n: "05",
    title: "Social Media Application",
    stack: ["React.js", "Node.js", "MongoDB"],
    desc: "A social platform project centered on posts, profiles, interaction flows, and a full-stack structure for community-style features.",
  },
  {
    n: "06",
    title: "Home-Stock System",
    stack: ["Java", "Spring Boot", "MySQL"],
    desc: "An inventory-style application for tracking household or small-scale stock data with organized records and efficient item management.",
  },
];

export const personalProjects = [
  {
    abbr: "MB",
    title: "MERN Blog App",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    desc: "A full-stack blogging platform for creating, managing, and browsing posts with a clean content-focused experience.",
  },
  {
    abbr: "HB",
    title: "MERN Hotel Booking App",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    desc: "A booking-oriented web application built around hotel listings, reservations, and user-friendly accommodation flows.",
  },
  {
    abbr: "EC",
    title: "MERN E-commerce Site",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    desc: "An online store experience with product browsing, cart flows, and full-stack commerce-oriented functionality.",
  },
  {
    abbr: "TR",
    title: "Travel Site",
    stack: ["HTML", "CSS", "JavaScript", "React.js"],
    desc: "A travel-focused website designed to present destinations, inspire exploration, and deliver a polished front-facing experience.",
  },
];

export const certificates = [
  {
    n: "01",
    title: "AWS Certified Solutions Architect SAA-C03: 30-Day Bootcamp",
    issuer: "Udemy",
    date: "Dec 2024",
  },
  {
    n: "02",
    title: "Linux Zero To Hero: 5 Hours Course Best for Beginners",
    issuer: "Udemy",
    date: "Jan 2025",
  },
  { n: "03", title: "Learn Docker and DevOps and Containerize", issuer: "Udemy", date: "Jan 2025" },
];

export const reflectionHighlights = [
  "Web development foundations",
  "React and full stack integration",
  "Debugging and teamwork growth",
];

export const reflections = [
  {
    n: "01",
    title: "What I learned in PPW",
    body: "PPW helped me connect the full web development flow, from building interfaces to understanding how complete application layers communicate.",
    tags: ["Web development", "React", "Full stack integration", "APIs"],
  },
  {
    n: "02",
    title: "Skills developed",
    body: "The subject strengthened not only my technical foundation, but also the way I approach challenges and collaborate while building applications.",
    tags: ["Problem solving", "Debugging", "Teamwork"],
  },
  {
    n: "03",
    title: "Challenges faced",
    body: "Some of the most difficult parts came from connecting frontend behavior, API logic, and debugging issues that were not immediately obvious.",
    tags: ["Connecting full stack flows", "Debugging errors"],
  },
  {
    n: "04",
    title: "Solutions",
    body: "I improved by practicing consistently, relying on documentation, and learning through collaboration instead of trying to solve everything alone.",
    tags: ["Practice", "Documentation", "Teamwork"],
  },
  {
    n: "05",
    title: "Future improvements",
    body: "Going forward, I want to expand beyond application development into the broader systems and delivery side of engineering.",
    tags: ["DevOps", "Cloud", "System design"],
  },
];

export const careerPhases = [
  {
    n: "01",
    term: "Short-term",
    time: "1 year",
    title: "Build stronger execution and land the right opportunity",
    points: ["Improve full stack product skills", "Get internship or job"],
  },
  {
    n: "02",
    term: "Mid-term",
    time: "3 years",
    title: "Grow into a confident full-stack engineer with real delivery experience",
    points: ["Become a full-stack developer", "Gain industry experience"],
  },
  {
    n: "03",
    term: "Long-term",
    time: "5+ years",
    title: "Move toward senior full stack leadership and product-scale thinking",
    points: ["Become a senior full stack engineer", "Build scalable end-to-end systems"],
  },
];

export const learningPriorities = [
  { name: "AWS", value: 82 },
  { name: "Kubernetes", value: 68 },
  { name: "CI/CD", value: 76 },
];

export const contactMethods = [
  {
    icon: "phone",
    label: "Phone",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    note: "Best for quick follow-ups and direct conversation.",
  },
  {
    icon: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for internship opportunities, project ideas, and detailed messages.",
  },
];

export const footerHighlights = [
  "Education",
  "University Projects",
  "Personal Projects",
  "Certificates",
];
