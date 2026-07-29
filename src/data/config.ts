const config = {
  title: "M Akbar Ramadhani | IoT & Full Stack Developer",
  description: {
    long: "Explore the portfolio of M Akbar Ramadhani, an Electrical Engineering student at Universitas Sebelas Maret with hands-on experience in IoT, Embedded Systems, Artificial Intelligence, and Smart Energy technologies. Proven experience leading technical development for energy technology startups while designing embedded systems, cloud-connected IoT platforms, and intelligent monitoring solutions.",
    short:
      "Portfolio of M Akbar Ramadhani — IoT Engineer, Embedded Systems Developer & Full Stack Developer based in Surakarta, Indonesia.",
  },
  keywords: [
    "M Akbar Ramadhani",
    "portfolio",
    "IoT developer",
    "embedded systems",
    "full stack developer",
    "electrical engineering",
    "smart energy",
    "Universitas Sebelas Maret",
    "Ainergy",
    "Trofis.tech",
    "Arduino",
    "ESP32",
    "React",
    "Node.js",
    "Indonesia",
  ],
  author: "M Akbar Ramadhani",
  email: "ramadhaniakbar39@gmail.com",
  site: "https://akbarramadhani.dev",

  // for github stars button
  githubUsername: "limegais",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/akbarramadhani",
    linkedin: "https://www.linkedin.com/in/muhammad-akbar-ramadhani/",
    instagram: "https://www.instagram.com/makbarrra",
    facebook: "https://www.facebook.com/akbarramadhani",
    github: "https://github.com/limegais",
  },
};
export { config };

