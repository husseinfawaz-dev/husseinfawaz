import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
  const person = {
    firstName: "Hussein",
    lastName: "Fawaz",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "Europe/Zurich", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Arabic", " Italian"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
      <>
        I occasionally write about technology, software engineering concepts and
        share thoughts on the intersection of machine learning and real-life
        applications.
      </>
    ),
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/hussein-fawaz/",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/hussein--fawaz/",
    },
    {
      name: "X",
      icon: "x",
      link: "",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:hussein.fawaz@usi.ch",
    },
  ];

  const home = {
    label: "Home",
    title: `${person.name}`,
    description: `Portfolio showcasing my work`,
    headline: <>PhD Student and Software Engineer</>,
    subline: (
      <>
        I'm Hussein, a current PhD Student at{" "}
        <InlineCode>Università della Svizzera Italiana (USI)</InlineCode> and{" "}
        <></>
        <InlineCode>
          University of Applied Sciences and Arts of Southern Switzerland
          (SUPSI)
        </InlineCode>
        , where I am doing my research in Cybersecurity, Machine Learning, and
        Trustworthy AI.
        <br />{" "}
      </>
    ),
  };

  const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          I am a seasoned software engineer with a diverse background spanning
          web development and network engineering. As a university lecturer, I
          have taught courses in different areas including Computer Networks,
          Artificial Intelligence, Software Engineering, and Web Programming. My
          research interests encompass various fields such as Optical Networks,
          Cybersecurity, and Trustworthy AI.{" "}
        </>
      ),
    },
    work: {
      display: true, // set to false to hide this section
      title: "Work Experience",
      experiences: [
        {
          company: "CloudGate Consulting DWC-LLC",
          timeframe: "Jan 2022 - June 2024",
          role: "Software Engineer",
          location: "Dubai",
          achievements: [
            "Developed web-based network services utilizing cutting-edge technologies such as Python, MongoDB, ReactJS, and NextJS.",
            "Implemented robust security measures on frontend applications to mitigate vulnerabilities effectively.",
            "Actively engaged in research, exploring innovative solutions to enhance the performance and efficiency of our applications.",
          ],
          images: [
            {
              src: "/images/cgc.png",
              alt: "CGC",
              width: 12,
              height: 5,
            },
          ],
        },
        {
          company: "Lebanese International University (LIU)",
          timeframe: "Feb 2024 - July 2024",
          role: "Instructor",
          location: "Beirut",
          achievements: [
            "Taught a diverse range of courses, including AI, Web Programming, Java, Computer Networks and Security, and Software Engineering.",
          ],
          images: [
            {
              src: "/images/LIU.png",
              alt: "LIU",
              width: 8,
              height: 8,
            },
          ],
        },
        {
          company: "Lebanese University - SUPSI",
          timeframe: "Mar 2023 - Nov 2023",
          role: "Research Assistant",
          location: "Beirut",
          achievements: [
            "Conducted in-depth research on various Machine Learning models and Explainable AI methodologies within the context of Optical Networks.",
            "Developed innovative ML-based techniques to identify the most efficient models based on their inference speed.",
            "Utilized a range of methodologies, including Regression, SHAP XAI, Deep Neural Networks, and Knowledge Distillation.",
          ],
          images: [
            {
              src: "/images/supsi.png",
              alt: "supsi",
              width: 10,
              height: 6,
            },
          ],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Education",
      institutions: [
        {
          name: "Università della Svizzera italiana",
          description: (
            <>
              <img src="./images/USI.png" width={220}></img>
              <br />
              <br /> <i> 2024-- </i>
              <br />
              <br />
              <b style={{ color: "darkred" }}> PhD </b> in{" "}
              <b>
                Machine Learning for Cybersecurity, Explainability, Trustworthy
                AI.
              </b>
              <br /> <br />
              <hr />
            </>
          ),
        },

        //"The University of Applied Sciences and Arts of Southern Switzerland (SUPSI)",
        {
          name: "Lebanese University",
          description: (
            <>
              <img src="./images/lu.png" width={120}></img>
              <br />
              <br /> <i> 2021-2023 </i>
              <br />
              <br />
              <b style={{ color: "darkred" }}> MSc </b> in{" "}
              <b>
                {" "}
                <i> Information Systems and Data Intelligence</i>
              </b>
              <br /> <br />
              <b> Thesis title: </b>
              <i>
                {" "}
                Lightweight Lightpath Quality of Transmission Estimation Through
                SHAP-based Feature Selection
              </i>
              <br />
              <br />
              <b> Advisors:</b> Prof. Ihab Sbeity, Dr. Omran Ayoub, Dr. Farhad
              Arpanaei <br />
              <b> Thesis Grade: </b>83 <i> (Maximum Grade)</i>
              <br />
              <i>
                {" "}
                <b> Ranked 1st</b>{" "}
              </i>
              <br />
              <hr />
            </>
          ),
        },
        {
          name: "Lebanese University",
          description: (
            <>
              <img src="./images/lu.png" width={120}></img>
              <br />
              <br /> <i> 2018-2021 </i>
              <br />
              <br />
              <b style={{ color: "darkred" }}> BSc </b> in{" "}
              <b>
                {" "}
                <i>Computer Science</i>
              </b>
              <br />
              <br />
              <hr />
            </>
          ),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: "Technical skills",
      skills: [
        {
          title: "Programming Languages",
          description: "Python, JavaScript, Typescript, Java, C, C++, PHP",
          images: [],
        },
        {
          title: "ML Frameworks",
          description:
            "NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow, Keras, OpenCV",
          images: [],
        },
        {
          title: "Frontend",
          description: "ReactJS, NextJS, AngularJS, React Native",
          images: [],
        },
        {
          title: "Backend",
          description: "NodeJS, NestJS, Django, Pocketbase",
          images: [],
        },
        {
          title: "Databases",
          description: "MySQL, MSSQL, MongoDB, SurrealDB",
          images: [],
        },
        {
          title: "APIs",
          description: "REST, Swagger, GraphQL, gRPC, tRPC",
          images: [],
        },
        {
          title: "Testing",
          description: "Jest, Cypress",
          images: [],
        },
        {
          title: "Network & Security",
          description: "Wireshark, Cisco Packet Tracer, Nmap, Linux, OWASP",
          images: [],
        },
        {
          title: "Tools & Technologies",
          description: "Git, GitHub, GitLab, Figma, Elasticsearch, NiFi",
          images: [],
        },
        {
          title: "Other",
          description: "Matlab",
          images: [],
        },
      ],
    },
  };

  const blog = {
    label: "Blog",
    "title": "Writing about research and tech",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
      {
        src: "/images/gallery/img-01.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-02.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-03.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-04.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-05.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-06.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-07.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-08.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-09.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-10.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-11.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-12.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-13.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-14.jpg",
        alt: "image",
        orientation: "horizontal",
      },
    ],
  };

  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
