const siteMetadata = {
  socials: {
    twitter: "https://twitter.com/anuragBand10",
    github: "https://github.com/Anurag-Band",
    linkedin: "https://www.linkedin.com/in/anurag-band/",
    instagram: "https://www.instagram.com/theanuuurag/",
    facebook: "https://www.facebook.com/profile.php?id=100009444654647",
  },
  email: "anuragband10@gmail.com",
  phoneNumber: "+91-9637072693",
  resumeLink:
    "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1715234197/Resume/bfhpgjy4mwo7dgpvus44.pdf",
  contactFormLink: "https://getform.io/f/ab18009e-b31c-4fa8-8ded-12c9d8632519",
  profilePicLink:
    "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1715234326/portfolio-website-assests/iapqzpd2egzenf6n2h8g.png",
  siteNavLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Experience & Education",
      href: "/experience-n-education",
    },
    {
      name: "Resume",
      href: "/resume",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  ProjectsData: [
    {
      srNo: 1,
      name: "Cash N Carry | Ecomm store",
      description: `Fully Functional Ecommerce Web Application having Three Roles available : Visitors, Users, & Admins
        It contains JWT Token Authentication, NodeMailer with MailTrap for sending password reset email
        User can add products in the Cart, and has functionality to Place an Order to their Location and also write their Reviews on the product also having Stripe Payment Gateway for Digital Payments
        Additionally, Integrated ADMIN have access to DASHBOARD where he can Add Product, update it, Keep track of Users, Reviews, Also Admin can Process Orders`,
      imageUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674622435/portfolio-website-assests/projects-images/Screenshot_from_2023-01-25_10-13-25_pylypc.png",
      tools: [
        "React.js",
        "Node.js",
        "MongoDb",
        "Express.js",
        "Tailwind CSS",
        "Material UI",
        "Chart JS",
        "Mailtrap",
        "Nodemailer",
        "Stripe Payments API",
      ],
      repoLink: "https://github.com/Anurag-Band/mern-ecommerce-marketplace",
      deployedLink: "https://cash-n-carry-store.netlify.app",
    },
    {
      srNo: 2,
      name: "Instagram Clone with Firebase Backend",
      description: `Social Networking Site that enables users to share their experiences as pictures and videos
      Implemented features include uploading posts (images and videos), Like posts, and Commenting on posts
      with User Authentication using Google OAuth as well as Email and Password.`,
      imageUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674622434/portfolio-website-assests/projects-images/Screenshot_from_2023-01-25_10-22-13_syhmq3.png",
      tools: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Firebase Auth",
        "Firebase Firestore",
        "Firebase Storage",
      ],
      repoLink: "https://github.com/Anurag-Band/Instagram-Firebase-Clone",
      deployedLink: "https://insta-clone-firebase-anurag-band.netlify.app",
    },
    {
      srNo: 3,
      name: "Flashcard Generator",
      description: `
      Using flashcards is one of the mosts common study methods, and it is the one many students are most familiar. Flashcards help students to engage in active recall or a process wherein students actively engage in learning by stimulating our memories and creating lasting connections to the material
      which has mainly 3 pages :-
      ->> Create Flashcard Page
      ->> My Flashcards Page
      ->>Flashcard Details Page
      `,
      imageUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674622900/portfolio-website-assests/projects-images/Screenshot_from_2023-01-25_10-24-57_gdxzys.png",
      tools: [
        "React.js",
        "Tailwind CSS",
        "FORMIK",
        "Redux Toolkit",
        "React Router",
        "Social Shares",
      ],
      repoLink: "https://github.com/Anurag-Band/Flashcard-Generator",
      deployedLink: "https://flashcard-generator-anurag-band.netlify.app",
    },
    {
      srNo: 4,
      name: "Shopping Cart App with Context API",
      description: `This project contains Shopping Cart application using React JS along with the usage of Context API for the Global state management of the application, and Styled with Tailwind CSS,
       In this project I learned about React Inbuilt Global State Management tool called Context API, as it an inbuilt functionality of react it is very lightweight doesn't unnecessarily increases the size of whole package`,
      imageUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674622902/portfolio-website-assests/projects-images/Screenshot_from_2023-01-25_10-31-12_h2dy9t.png",
      tools: ["React.js", "Tailwind CSS", "Context API"],
      repoLink: "https://github.com/Anurag-Band/Shopping-Cart",
      deployedLink: "https://your-shopping-cart.netlify.app",
    },
  ],
  skillsData: [
    {
      skillCategory: "Frontend",
      skillList: [
        {
          name: "HTML",
          iconPath: "/assets/skills-icons/html-5.png",
        },
        {
          name: "CSS",
          iconPath: "/assets/skills-icons/css-3.png",
        },
        {
          name: "JavaScript",
          iconPath: "/assets/skills-icons/js.png",
        },
        {
          name: "TypeScript",
          iconPath: "/assets/skills-icons/typescript.png",
        },
        {
          name: "React JS",
          iconPath: "/assets/skills-icons/react.png",
        },
        {
          name: "Next JS",
          iconPath: "/assets/skills-icons/next-js.png",
        },
        {
          name: "Material UI",
          iconPath: "/assets/skills-icons/material-ui.png",
        },
        {
          name: "Tailwind CSS",
          iconPath: "/assets/skills-icons/tailwind-css-icon.png",
        },
        {
          name: "Redux",
          iconPath: "/assets/skills-icons/redux.png",
        },
      ],
    },
    {
      skillCategory: "Backend",
      skillList: [
        {
          name: "Node JS",
          iconPath: "/assets/skills-icons/nodejs.png",
        },
        {
          name: "Express JS",
          iconPath: "/assets/skills-icons/express-js.png",
        },
        {
          name: "MongoDb",
          iconPath: "/assets/skills-icons/mongodb.png",
        },
        {
          name: "Firebase",
          iconPath: "/assets/skills-icons/firebase.png",
        },
      ],
    },
    {
      skillCategory: "Tools",
      skillList: [
        {
          name: "Linux",
          iconPath: "/assets/skills-icons/linux.png",
        },
        {
          name: "Docker",
          iconPath: "/assets/skills-icons/docker.png",
        },
        {
          name: "Postman",
          iconPath: "/assets/skills-icons/postman.png",
        },
        {
          name: "Git",
          iconPath: "/assets/skills-icons/git.png",
        },
        {
          name: "GitHub",
          iconPath: "/assets/skills-icons/github.png",
        },
        {
          name: "GitLab",
          iconPath: "/assets/skills-icons/gitlab.png",
        },
      ],
    },
    {
      skillCategory: "Familiar Languages",
      skillList: [
        {
          name: "Java",
          iconPath: "/assets/skills-icons/java.png",
        },
        {
          name: "Python",
          iconPath: "/assets/skills-icons/python.png",
        },
      ],
    },
  ],
  experienceData: [
    {
      srNo: 1,
      companyName: "TruScholar",
      jobTitle: "Full Stack Developer Intern",
      logoUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_24a0afcd110186009cc50b8f89dfdf4a/truscholar.png",
      companyUrl: "https://www.truscholar.io",
      startDate: "Oct 2022",
      endDate: "March 2023",
      workSummery: [
        "Worked in a Scrum-based environment, on a SaaS product that helps institutions to issue Blockchain Powered Digital Certificates and Badges used by more than 300 Institutions",
        "Using MERN Stack, Solved major Bugs in production related to custom email, certificates issuance, designer tool, Validations, etc",
        "Created feature for sending Custom email using template for individual issuance of Certificates & Badges",
        "Worked on Material UI to build interactive front ends with major focus on to improve User Experience with UI/UX Strategies",
      ],
    },
    {
      srNo: 2,
      companyName: "Edilitics",
      jobTitle: "Full Stack Developer Intern",
      logoUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1715236529/portfolio-website-assests/gywit1dybzwlhmdjyzkx.png",
      companyUrl: "https://www.edilitics.com",
      startDate: "March 2023",
      endDate: "May 2023",
      workSummery: [
        "Worked Independently on Initial Development of product includes - Finding the suitable technologies according to requirements, project codebase setup, folder structure, etc",
        "Refactored older application codebase to new project by following good development practices",
        "Created Authentication flow of application includes - OTP based registration, multiple step information form registration for organization profiles and personal profiles",
        "Created multiple layout structures for web application according to different needs of pages",
      ],
    },
  ],
  educationData: [
    {
      srNo: 1,
      instituteName: "Vidyabharti Mahavidyalaya, Amravati (SGBAU University)",
      courseName: "Bachelor of Computer Application (BCA)",
      logoUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674620705/portfolio-website-assests/vidyabharti-college_xz7ewq.jpg",
      instituteUrl: "https://www.vbmv.org",
      startDate: 2020,
      endDate: 2023,
    },
    {
      srNo: 2,
      instituteName: "Almabetter",
      courseName: "Full Stack Development Course",
      logoUrl:
        "https://res.cloudinary.com/dkoxjcwg7/image/upload/v1715235561/portfolio-website-assests/qjdw2dxmx1w5dyb0urjk.png",
      instituteUrl:
        "https://www.almabetter.com/courses/full-stack-web-development",
      startDate: "April 2022",
      endDate: "Sept 2022",
    },
  ],
};

export default siteMetadata;
