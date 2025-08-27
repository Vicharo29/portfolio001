
import {
    mobile,
    backend,
    creator,
    sim,
    web,
    cpp,
    cpp2,
    python,
    matlab,
    qt,
    micon,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    titech,
    canon,
    inventor,
    mainGui,
    psGui,
    conti,
    irrigation,
    fgl,
    fs,
    linear,
    mecha,
    ml,
    football,
    running,
    snowboarding,
    ps,
    latex,
    github,
    weblogo,
    buddha,
    einstein,
    jobs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mechatronics",
      icon: mecha,
    },
    {
      title: "Programmming",
      icon: cpp,
    },
    {
      title: "Microcontroller Interfacing",
      icon: micon,
    },
    {
      title: "Robot Operating System",
      icon: backend,
    },
    {
      title: "3D CAD Design",
      icon: creator,
    },
    {
      title: "Data Preprocessing",
      icon: sim,
    },
    {
      title: "Machine Learning",
      icon: ml,
    },
    {
      title: "Fullstack Development",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Cpp",
      icon: cpp2,
    },
    {
      name: "Python ",
      icon: python,
    },
    {
      name: "Qt ",
      icon: qt,
    },
    {
      name: "MATLAB ",
      icon: matlab
    },
    {
      name: "Inventor",
      icon: inventor,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Photoshop",
      icon: ps,
    },
    {
      name: "latex",
      icon: latex,
    },
  ];
  
  const educations = [
    {
      school: "Tokyo Institute of Technology",
      company_name: "Bachelor of Engineering",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2018 - March 2022",
      points: [
        "Mechanical Engineering.",
        "Thesis: Wire-Driven Control of Exoskeleton Continuum Robot Using Deep Learning.",
        "Relevant Coursework: Engineering Mechanics, Thermodynamics, \
        Fluid Mechanics, Mechanics of Materials, Machine Design and Drawing, \
        Signal Processing, Vibration Analysis, Mechatronics,\
        Introduction to Space Engineering, Introduction to Nuclear Engineering, Robot Dynamics and Control.",
      ],
    },
    {
      school: "Tokyo Institute of Technology",
      company_name: "Master of Engineering",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2022 - March 2024",
      points: [
        "Mechanical Engineering in Human Centered Science and Biomedical Engineering.",
        "Thesis: Force Sensing of 5 mm Robotic Forceps With Flexible Wrist Joint Based on Cable Vibration.",
        "Relevant Coursework: Interdisciplinary Research, Human Centered Science and Biomedical Engineering,\
        From Data Analytics to Machine Learning, Medical Biotechnology, \
        Artificial Intelligence and Data Science, Intoduction to Neural Engineering, \
        Kinematics and Mechanism of Medical Robotics.",
      ],
    },
  ];

  const experiences = [
    {
      title: "Research Assistant",
      company_name: "Tadano Laboratory",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "June 2021 - March 2022",
      points: [
        "Collaborated in a joint research related to the development of an industrial continuum robot with a heavy tech industry.",
        "Assisted in the assembly and evaluation test of the robot.",
        "Performed experiment using optical motion tracking systems on the developed robot and analysed data using MATLAB and python.",
        "Created a deep learning model using python to calculate 3D coordinates of each joint of the developed robot given arbitrary joint angles.",
        "Responsible for the enhancement of the accuracy of the robot's movement."
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Omata Laboratory",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2022 - March 2024",
      points: [
        "Assisted in the manufacture of experiment equipment using CAD and Modela, a 3D modeling machine.",
        "Responsible for interfacing hardware to software and data acquisition using Python with a Contec board.",
        "Collaborated with a colleague to improve the quality of experiment data.",
        "Assisted in the writing of an international conference paper in the field of medical robots.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Canon Medical Systems",
      icon: canon,
      iconBg: "#E6DEDD",//383E56
      date: "April 2024 - Present",
      points: [
        "Collaborated with team members in the development of an ultrasound equipment.",
        "Responsible for improving the method of automation test.",
        "Fixed software bugs and responsible for the development of a new prototype function from determining the specifications to system test.",
      ],
    },
  ];

  const expCards = [
    {
      review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  
  const research = [
    {
      testimonial:
        "What you think, you become. What you feel, you attract. What you imagine, you create.",
      name: "Buddha",
      designation: "Philosopher",
      company: "Buddha",
      image: buddha,
      explaination: "This quote highlights the power of the mind in shaping our reality."
    },
    {
      testimonial:
        "In the middle of every difficulty lies opportunity.",
      name: "Albert Einstein",
      designation: "Physicist",
      company: "DEF Corp",
      image: einstein,
      explaination: "A reminder that challenges often lead to growth, strength, and new possibilities."
    },
    {
      testimonial:
        "Your time is limited, so don't waste it living someone else's life.",
      name: "Steve Jobs",
      designation: "Apple Founder",
      company: "456 Enterprises",
      image: jobs,
      explaination: "This quote encourages living authentically and following your true passions."
    },
  ];
  
  const projects = [
    {
      name: "Exoskeleton Continuum Robot",
      description:
        "The robot developed for turbine inspection and maintenance can move through constrained spaces and around obstacles. \
        I was responsible for the development of a deep learning model to calculate 3D coordinates of each joint of the robot given arbitrary joint angles.",
      tags: [
        {
          name: "research",
          color: "pink-text-gradient",
        },
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "deeplearning",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "green-text-gradient",
        },
        {
          name: "optotrak",
          color: "pink-text-gradient",
        },
      ],
      image: conti,
      source_code_link: "https://www.jstage.jst.go.jp/article/jsmermd/2022/0/2022_1A1-D01/_article/-char/en",
      icon: weblogo,
    },
    {
      name: "Robotic Forceps Capable of Force Sensing",
      description:
        "I designed, assembled, and programmed a robotic forceps system featuring \
         a flexible joint for minimally invasive surgeries. The device \
         is capable of sensing the force exerted on tissue through cable vibration analysis.\
         The force is calculated from the frequency and the dynamics of the forceps.",
      tags: [
        {
          name: "research",
          color: "pink-text-gradient",
        },
        {
          name: "inventor",
          color: "blue-text-gradient",
        },
        {
          name: "mechatronics",
          color: "green-text-gradient",
        },
        {
          name: "circuits",
          color: "pink-text-gradient",
        },
      ],
      image: fs,
      source_code_link: "",
      icon: weblogo,
    },
    {
      name: "Control System for the Robotic Forceps",
      description:
        "The control system consists of a micro-controller, 6 motor drivers and 6 encoders. \
        The control logic was written in C++ whereas the GUI shown was built from scratch using pyqt.\
        The communication between the GUI and the microcontroller is done via serial communication.",
      tags: [
        {
          name: "microcontroller",
          color: "pink-text-gradient",
        },
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "pyqt",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "green-text-gradient",
        },
        {
          name: "UIdesign",
          color: "pink-text-gradient",
        },
      ],
      image: mainGui,
      source_code_link: "",
      icon: github,
    },
    {
      name: "Data Acquisition for the Robotic Forceps",
      description:
        "The vibration data is acquired from a Contec board connected to the PCI express.\
         The GUI can log the signal and calculate the frequency with varying window size; the \
         result is updated in real time and can be used for quick analysis. For thorugh analysis, \
         however, the logged data is analysed using MATLAB.",
      tags: [
        {
          name: "pyqt",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "green-text-gradient",
        },
        {
          name: "contec",
          color: "pink-text-gradient",
        },
        {
          name: "cpp",
          color: "green-text-gradient",
        },
        {
          name: "UIdesign",
          color: "blue-text-gradient",
        },
      ],
      image: psGui,
      source_code_link: "",
      icon: github,
    },
    {
      name: "Future Gadget Laboratory Website",
      description:
        "The website showcases the inventions and gadgets created by the Future Gadget Laboratory members. \
        The website also features mathematics, physics and electronics lessons. \
        Future Gadget Laboratory aims to foster creativity and share knowledge with no boundaries.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "stem",
          color: "green-text-gradient",
        },
      ],
      image: fgl,
      source_code_link: "",
      icon: weblogo,
    },
    {
      name: "Automatic Irrigation System",
      description:
        "The automatic irrigation system uses moisture sensors to detect soil moisture levels \
        and automatically waters plants when the moisture is considered low. \
        The system can also water the plants periodically without moisture sensors and can be \
        manually control via a network.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "inventor",
          color: "pink-text-gradient",
        },
        {
          name: "3dprinting",
          color: "blue-text-gradient",
        },
        {
          name: "microcontroller",
          color: "green-text-gradient",
        },
        {
          name: "platformio",
          color: "pink-text-gradient",
        },
      ],
      image: irrigation,
      source_code_link: "",
      icon: github,
    },
    {
      name: "Linear Algebra Book for High School Students",
      description:
        "The book is written in Khmer language and is intended for high school students in Cambodia. \
        The book covers the basics of linear algebra and is written in an easy to understand manner \
        with detailed explanation. It is available for free download from my blog that I started \
        since 2014.",
      tags: [
        {
          name: "mathematic",
          color: "blue-text-gradient",
        },
        {
          name: "latex",
          color: "green-text-gradient",
        },
        {
          name: "tikz",
          color: "pink-text-gradient",
        },
        {
          name: "khmerlanguage",
          color: "blue-text-gradient",
        },
      ],
      image: linear,
      source_code_link: "https://blogforall777.wordpress.com/2020/10/01/%e1%9e%96%e1%9e%b7%e1%9e%87%e1%9e%82%e1%9e%8e%e1%9e%b7%e1%9e%8f-%e1%9e%95%e1%9f%92%e1%9e%93%e1%9f%82%e1%9e%80-i/",
      icon: weblogo,
    },
  ];


  const hobby = [
    {
      id: 1,
      name: 'Football',
      pos: 'Twice a month',
      duration: '',
      title: "Football is great for staying active, building teamwork, \
      and having fun with friends. It helps improve fitness, coordination, and social skills.",
      icon: football,
      animation: 'football',
    },
    {
      id: 2,
      name: 'Walking',
      pos: '5 km five times a week',
      duration: '2020 - 2022',
      title: "Walking is a simple and rewarding exercise that offers both physical and mental benefits.\
      It helps improve cardiovascular health, build endurance, and reduce stress.",
      icon: running,
      animation: 'running',
    },
    {
      id: 3,
      name: 'Snowboarding',
      pos: '3 to 4 times a year',
      duration: '2019 - 2020',
      title: "Snowboarding is a thrilling and adventurous hobby that combines balance, speed, and style.\
       It offers a unique way to connect with nature and improves strength, coordination, and confidence. ",
      icon: snowboarding,
      animation: 'snowboarding',
    },
  ];
  
  export { services, technologies, educations, experiences, research, projects, hobby,expCards };