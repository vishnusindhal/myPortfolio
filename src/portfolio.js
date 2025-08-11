/* Updated Portfolio Config for Vishnu Sindhal */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Vishnu Sindhal",
  title: "Hi all, I'm Vishnu 👋",
  subTitle: emoji(
    "A passionate Computer Science student 🚀 at IIIT Surat, building Web and Mobile applications using JavaScript, React, Node.js, MongoDB, and exploring emerging tech like Drones and AI."
  ),
  resumeLink:
    "https://drive.google.com/YOUR_RESUME_LINK", // Replace with your actual resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/YOUR_GITHUB",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
  gmail: "YOUR_EMAIL@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer & Tech Enthusiast",
  skills: [
    emoji("⚡ Develop responsive and interactive Frontend interfaces"),
    emoji("⚡ Build scalable Backend systems with Node.js and Express"),
    emoji("⚡ Work with APIs, Databases, and Cloud Services like Firebase/AWS")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Surat",
      logo: require("./assets/images/IIIT-Surat-Logo.webp"), // keeping original image
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      desc: "Focused on full-stack development, open source contributions, and emerging technologies.",
      descBullets: [
        "Volunteer in art & culture at Yuvasangam"
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experiences
const workExperiences = {
  display: false,
  experience: []
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Eventopia",
      projectDesc:
        "A web platform to discover and manage engineering events across IIITs, NITs, and IITs.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/YOUR_EVENTOPIA_REPO" }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Highlights of my academic and tech journey",
  achievementsCards: [
   
    {
      title: "gareeb aadmi hai be 😢",
      subtitle: "kya be co-lead.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Air Taxi",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about tech, open source, and my learning journey.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks
const talkSection = { display: false };

// Podcast
const podcastSection = { display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "I'm open to opportunities and collaborations.",
  number: "+91-7340172151",
  email_address: "vishnusindhal5040@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
