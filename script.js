const PROFILE = {
  name: "Shivam Rai",
  email: "s.rai02072002@gmail.com",
  phone: "+91 6307253732",
  github: "https://github.com/S-h-i-v-a-m-R-a-i",
  linkedin: "https://www.linkedin.com/in/shivam-rai-598191287/",
};

const PROJECTS = [
  {
    id: "food-ordering-system",
    title: "Online Food Ordering System (Production-ready)",
    tech: "React, Tailwind, Node.js, MongoDB, JWT",
    summary:
      "A full-stack web application for browsing restaurants, ordering food, and processing payments.",
    details: `◦ Developed a platform for users to order food and for restaurants to manage orders.<br>
◦ Built the frontend with React and Tailwind, featuring restaurant menus, a shopping cart, and a checkout process.<br>
◦ Created a secure RESTful API with Node.js and MongoDB to manage users, orders, and restaurant data.<br>
◦ Implemented JWT for secure user authentication and role-based access (user vs. restaurant admin).<br>
◦ Integrated a payment gateway for processing transactions.`,
    link: "https://github.com/S-h-i-v-a-m-R-a-i/GoFoord",
  },
  //
  // --- THIS SECTION IS NOW CORRECT ---
  // The extra { and } wrapper has been removed.
  //
  {
    id: "autism-prediction",
    title: "Autism Prediction (Machine Learning)",
    tech: "Python, Scikit-learn, Pandas, Matplotlib",
    summary:
      "A machine learning model to predict Autism Spectrum Disorder (ASD) with 93% accuracy.",
    details: `◦ Developed a machine learning model to predict Autism Spectrum Disorder (ASD) using a clinical dataset.<br>
◦ Implemented a full data science pipeline, including data preprocessing, feature selection, and model evaluation.<br>
◦ Compared multiple classification algorithms to identify the most effective model for ASD prediction.<br>
◦ Achieved 93% accuracy on the test dataset, demonstrating a strong predictive capability.`,
    link: "https://github.com/S-h-i-v-a-m-R-a-i/Autism-Prediction-using-Machine-Learning",
  },
  //
  // ------------------------------------
  //
//   {
//     id: "chat-app",
//     title: "Real-Time Chat Application",
//     tech: "MERN, Socket.IO",
//     summary:
//       "Real-time chat with typing indicators, message history, online presence and JWT auth.",
//     details: `◦ Created a full-stack chat application to provide fast and reliable one-on-one and group communication.<br>
// ◦ Solves the need for real-time interaction with features like typing indicators, message history, and
// online presence.<br>
// ◦ Built using the MERN stack with Socket.IO to achieve sub-100ms real-time message delivery.<br>
// ◦ Implemented JWT authentication, user profiles, and secure session management for privacy.<br>
// ◦ Optimized backend with Express.js and MongoDB to handle concurrent users efficiently.`,
//     link: "https://github.com/Vidhiverma602/Real_Time_ChatVV/tree/master",
//   },
  {
    id: "mini-compiler",
    title: "C Compiler",
    tech: "C++, BNF Grammar",
    summary:
      "Teaching compiler implementing lexical analysis, parsing, semantic checks and code-gen for a subset of C.",
    details: `◦ Developed a mini compiler to understand and implement the core concepts of compiler design.<br>
◦ Aimed at translating a subset of C programs into intermediate code, ensuring type safety and error
detection.<br>
◦ Implemented five phases: Lexical Analysis, Syntax Analysis, AST construction, Semantic Analysis,
and Code Generation.<br>
◦ Built a custom lexer using enums/structs for tokenization and a Recursive Descent Parser guided by
BNF grammar.<br>
◦ Integrated semantic checks, a symbol table for scope/type tracking, and generated pseudo-code for
supported constructs.`,
    link: "https://github.com/S-h-i-v-a-m-R-a-i/C-compiler",
  },
  {
    id: "ransomware-sim",
    title: "Ransomware Simulation (Academic)",
    tech: "Python, cryptography, Tkinter",
    summary:
      "Academic simulation to study file-encryption workflows and countermeasures.",
    details: `◦ Designed a ransomware simulation project for academic research and cybersecurity awareness.<br>
◦ Objective was to study how file encryption threats work and explore countermeasures in a safe envi-
ronment.<br>
◦ Implemented file encryption using Fernet (symmetric encryption) from the Python cryptography li-
brary.<br>
◦ Built a Tkinter-based GUI to mimic real ransomware behavior and user interaction.<br>
◦ Integrated a safe decryption workflow to restore files and presented the project in academic demon-
strations.`,
    link: "https://github.com/S-h-i-v-a-m-R-a-i/RANSOMWARE_project",
  },
];

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Inject projects
const projectList = document.getElementById("projectList");
PROJECTS.forEach((p) => {
  const el = document.createElement("article");
  el.className = "project reveal";
  el.innerHTML = `
    <h3 style="margin:0">${p.title}</h3>
    <div style="color:var(--muted);font-size:13px;margin-top:6px">${
      p.tech
    }</div>
    <p style="margin-top:10px;color:var(--muted)">${p.summary}</p>
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end">
      <button data-id="${p.id}" class="btn ghost">Details</button>
      <a class="btn" href="${p.link || "#"}" target="_blank">View Code</a>
    </div>`;
  projectList.appendChild(el);
});

// Modal
document.getElementById("projectList").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  const id = btn.getAttribute("data-id");
  const p = PROJECTS.find((x) => x.id === id);
  document.getElementById("modalContent").innerHTML = `
    <h2 style="margin-top:0">${p.title}</h2>
    <p style="color:var(--muted)">${p.details}</p>
   g<p style="margin-top:12px;color:var(--muted)">Tech stack: ${p.tech}</p>`;
  document.getElementById("modal").style.display = "flex";
});
document
  .getElementById("closeModal")
  .addEventListener(
    "click",
    () => (document.getElementById("modal").style.display = "none")
  );

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "Thanks! This is a demo contact form. Wire it to an email service or backend to receive messages."
  );
  e.target.reset();
});

// Navigation highlight + scroll
const links = Array.from(document.querySelectorAll("[data-link]"));
function setActive(hash) {
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === hash)
  );
}
function go(hash) {
  location.hash = hash;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  setActive(hash);
}
links.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const h = a.getAttribute("href");
    go(h);
  })
);
if (location.hash) setActive(location.hash);
else setActive("#home");

// reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ESC to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.getElementById("modal").style.display = "none";
});