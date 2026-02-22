// Data files for the portfolio

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Java", level: 75 },
  { name: "Python", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MongoDB", level: 65 },
  { name: "Express.js", level: 70 },
  { name: "C Language", level: 80 },
  { name: "C++ Language", level: 75 },
  { name: "Git", level: 80 },
];

export const projects = [
  {
    id: 1,
    title: "Kodbase",
    description: "A modern web-based code editor with user authentication, project management, and real-time code execution. Supports OAuth login (Google, GitHub, Facebook), Monaco Editor integration, and OTP-based password recovery.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Monaco Editor", "JWT", "Passport.js"],
    image: "/image.png",
    liveDemo: "https://kodbase.vercel.app/",
    github: "https://github.com/cjhimanshu/kodbase",
    featured: true,
  },
  {
    id: 2,
    title: "RailMadad – AI Railway Complaint System",
    description: "An AI-integrated MERN stack application that automates Indian Railways complaint management with auto-categorization, sentiment analysis, priority suggestion, and an admin analytics dashboard powered by Hugging Face AI.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Hugging Face AI", "JWT", "Cloudinary", "Recharts"],
    image: "/railmadad.png",
    liveDemo: "https://railmadad-gamma.vercel.app/",
    github: "https://github.com/cjhimanshu/railmadad",
    featured: true,
  },
  {
    id: 3,
    title: "Hotel Booking System",
    description: "A full-stack MERN hotel booking application with room browsing, real-time reservation, Razorpay payment integration, admin dashboard for managing rooms and bookings, and image upload support.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay", "JWT", "Multer", "Material-UI"],
    image: "/hotel-booking.png",
    liveDemo: "https://hotel-booking-system-one-chi.vercel.app/",
    github: "https://github.com/cjhimanshu/hotel-booking-system",
    featured: true,
  },
];

export const certifications = [
  {
    "title": "Advanced Java – 30 Hours Training Program",
    "issuer": "NS3EDU",
    "date": "2024",
  "certificate": "https://www.linkedin.com/in/himanshu-kumar-02ab40249/details/certifications/",
  "image": "/Advance_java.jpg"
  },
  {
    "title": "javascript – 30 Hours Training Program",
    "issuer": "kreativan technologies",
    "date": "2024",
    "certificate": "https://www.linkedin.com/in/himanshu-kumar-02ab40249/details/certifications/",
    "image": "/Advance_java.jpg"
  },
  {
    "title": "Participated in Smart india hackathon",
    "issuer": "St. Andrew's Institute",
    "date": "2024",
    "certificate": "https://www.linkedin.com/in/himanshu-kumar-02ab40249/details/certifications/",
    "image": "/sih.jpg"
  },
  {
    "title": "Certificate of Appreciation – INNOVIZ 2025",
    "issuer": "St. Andrew's Institute",
    "date": "2025",
    "certificate": "https://www.linkedin.com/in/himanshu-kumar-02ab40249/details/certifications/",
    "image": "/Innoviz.jpg"
  },
  {
    "title": "completion of 4 weeks of virtual internship in web dev",
    "issuer": "Codesoft",
    "date": "2023",
    "certificate": "https://www.linkedin.com/in/himanshu-kumar-02ab40249/details/certifications/",
    "image": "/codesoft.jpeg"
  },
 
];

export const personalInfo = {
  name: "Himanshu Kumar",
  title: "Full Stack Developer",
  email: "cjhimanshu49@gmail.com",
  phone: "9065022165",
  location: "Sheikhpura,Bihar",
  github: "https://github.com/cjhimanshu",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-02ab40249",
  bio: "I'm a passionate Full Stack Developer with expertise in modern web technologies. I love creating intuitive, user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I bring a holistic approach to every project I work on.",
  about: "With over 1 year of experience in web development, I've worked on a variety of projects ranging from e-commerce platforms to complex enterprise applications. I'm passionate about writing clean, efficient code and creating exceptional user experiences. I constantly keep up with the latest industry trends and technologies to deliver cutting-edge solutions.",
};