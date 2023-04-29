import {
    mobile,
    backend,
    creator,
    web,
    javascript,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Node JS",
      icon: nodejs,
    },
 
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: redux
    }
    
    
  ];
  
  const experiences = [
    {
      title: "Project Intern",
      company_name: "Infosys",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Dec 2022 - Mar 2023",
      points: [
        "Developing and maintaining web applications using MERN stack and other related technologies.",
        "Collaborating with cross-functional teams to create a question bank for online contest",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "GOGOSOON",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Mar 2023",
      points: [
        "Developed Webapplications using Next Js.",
        "Designed using HTML,CSS and Javascript.",
        "Ensuring its responsiveness using Tailwind CSS.",
        "Integrated using Restful API's.",
      ],
    },
    {
      title: "Campus Representative",
      company_name: "Techgig",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Apr 2023",
      points: [
        "Collect feedback and insights from students to better understand the needs of the target market.",
        "Promote and represent the company on campus,This involve organizing events and connecting with students and faculty members",
        "Primary responsibility would be to promote and represent the company in college campus",
        "Provide feedback on product development from the feedback of Students.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Joseph Peter is an outstanding developer with a remarkable ability to solve complex problems in unique and innovative ways. His technical skills and attention to detail are impressive.",
      name: "Devaharish M",
      designation: "Student",
      company: "CIT",
      image: "https://media.licdn.com/dms/image/D5603AQEEwOLllqcfsw/profile-displayphoto-shrink_400_400/0/1672215587528?e=1685577600&v=beta&t=mxDv9FmbpRIjQL4qIHhIziUZP85gSDEZU3bTJT2w60s",
    },
    {
      testimonial:
        "Joseph indeed is a talented person and thinks creatively.His idea and innovation always turns out to be unique and creative. That's not all He has a great problem solving ability too..             ",
      name: "Keerthana J",
      designation: "student",
      company: "Alliance University",
      image: "https://media.licdn.com/dms/image/D4E03AQFTs5AStTWBdQ/profile-displayphoto-shrink_100_100/0/1637597913205?e=1685577600&v=beta&t=k4aihIYm1L_R2bpS0viONrpn2BPabggXePls7T8BLVA",
    },
    {
      testimonial:
        "Working with Joseph as a web developer was an absolute pleasure. Their technical skills and attention to detail were impressive, and they consistently delivered high-quality work within tight deadlines",
      name: "Surieya N",
      designation: "Student",
      company: "CIT",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG",
    },
  ];
  
  const projects = [
    {
      name: "Power Saver",
      description:
        "Designed sensor-based system to collect data and transmit to cloud Analyzed using web development for Saving power.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "webserver",
          color: "green-text-gradient",
        },
        {
          name: "Sensor",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:6967032350257946624/",
    },
    {
      name: "Covid-19 Dashboard",
      description:
        "Made a Web application to plot covid cases and analyse it in a chart form using React Js and chart Js             .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Chart Js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/josephpeter231",
    },
    {
      name: "Compensation System",
      description:
        "Analyzed pre and post-disaster images to calculate level of disaster and estimate compensation caused by the disaster.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "Image Processing",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/josephpeter231",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
