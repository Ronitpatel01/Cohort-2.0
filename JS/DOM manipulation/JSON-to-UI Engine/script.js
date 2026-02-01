const teamMembers = [
  {
    name: "Aarav Sharma",
    profession: "Frontend Developer",
    description:
      "Specializes in React.js and creative UI animations. Loves coffee and clean code.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    profession: "UI/UX Designer",
    description:
      "Expert in Figma and user-centered design. Focuses on accessibility and minimalism.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    profession: "Backend Engineer",
    description:
      "Builds robust APIs with Node.js and Python. Passionate about cloud architecture.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    profession: "Project Manager",
    description:
      "Keeps the team organized and on track. Master of Scrum and Agile methodologies.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chang",
    profession: "DevOps Specialist",
    description:
      "Automates deployment pipelines. Ensures 99.9% server uptime and security.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    profession: "Data Scientist",
    description:
      "Turns complex data into actionable insights using Python and Machine Learning.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    profession: "Mobile Developer",
    description:
      "Crafts seamless mobile experiences for iOS and Android using Flutter.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Linda Kim",
    profession: "QA Engineer",
    description:
      "Finds bugs before users do. meticulously tests software for flaws and glitches.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Robert Fox",
    profession: "System Architect",
    description:
      "Designs the blueprint for scalable enterprise software solutions.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sophia Martinez",
    profession: "Digital Marketer",
    description:
      "Connects products with people. Expert in SEO, content strategy, and branding.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

let main = document.querySelector("main");

let sum = "";

teamMembers.forEach((member) => {
  sum += `<div class="card">
        <img
          src=${member.image}
          alt=""
        />
        <h3>${member.name}</h3>
        <h3>${member.profession}</h3>
        <p> 
          ${member.description}
        </p>
      </div>`;
});

main.innerHTML = sum;
