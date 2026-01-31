"use client";

import { useState } from "react";

// Custom SVG Icons Components to replace lucide-react
const Icons = {
  Github: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Linkedin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  ExternalLink: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  ),
  Globe: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Cpu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  ),
  Layers: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Menu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const skills = [
    {
      name: "Frontend",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    { name: "Backend", tech: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
    { name: "Tools", tech: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform belanja online lengkap dengan sistem pembayaran dan manajemen inventaris.",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    },
    {
      title: "Real-time Chat App",
      description:
        "Aplikasi pesan instan menggunakan WebSocket untuk komunikasi real-time.",
      tech: ["Socket.io", "Express", "React"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Dashboard analitik untuk memantau performa bisnis dengan visualisasi data.",
      tech: ["Chart.js", "Tailwind", "Node.js"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            DevPortofolio
          </div>

          <div className="hidden md:flex gap-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize text-sm font-semibold transition-all duration-200 ${
                  activeSection === item
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                {item === "home"
                  ? "Beranda"
                  : item === "about"
                    ? "Tentang"
                    : item === "skills"
                      ? "Keahlian"
                      : item === "projects"
                        ? "Proyek"
                        : "Kontak"}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left capitalize text-slate-600 font-medium py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 z-10">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase">
                Available for Projects
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Membangun Solusi Digital{" "}
                <span className="text-blue-600">Full Stack.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Halo! Saya seorang Pengembang Full Stack yang berfokus pada
                pembuatan aplikasi web yang cepat, skalabel, dan ramah pengguna.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  Lihat Karya
                  <span className="group-hover:translate-x-1 transition-transform">
                    <Icons.ChevronRight />
                  </span>
                </button>
                <div className="flex items-center gap-6 px-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <Icons.Github />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Icons.Linkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl rotate-6 absolute -z-10 opacity-20 blur-3xl animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.05] hover:-rotate-2">
                <img
                  src="/profile.jpeg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300"><svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Keahlian Teknis
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-500 max-w-lg mx-auto">
                Teknologi yang saya gunakan untuk menghidupkan ide dan
                menyelesaikan tantangan kompleks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {index === 0 ? (
                      <Icons.Globe />
                    ) : index === 1 ? (
                      <Icons.Cpu />
                    ) : (
                      <Icons.Layers />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-slate-600 text-xs font-bold rounded-xl border border-slate-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  Proyek Terpilih
                </h2>
                <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
              >
                Lihat Semua Proyek <Icons.ExternalLink />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-4xl overflow-hidden border border-slate-200 group hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-56 bg-slate-50 flex items-center justify-center text-slate-200 border-b border-slate-100 group-hover:bg-blue-50/30 transition-colors overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-widest font-black text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all group/btn">
                      Lihat Detail <Icons.ChevronRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-slate-900 text-white px-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl font-extrabold mb-8 tracking-tighter">
                Mari Berkolaborasi.
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Punya proyek menarik atau ingin berdiskusi tentang teknologi?
                Saya selalu terbuka untuk obrolan baru dan peluang menarik.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Icons.Mail />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Email Saya
                    </p>
                    <p className="text-xl font-medium">halo@devnama.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Icons.Linkedin />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      LinkedIn
                    </p>
                    <p className="text-xl font-medium">
                      linkedin.com/in/username
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl transform md:rotate-2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Siapa nama Anda?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Kerja
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="email@perusahaan.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all">
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-slate-900">DevPortofolio</div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Portofolio Developer. Dibuat
            dengan ❤️ di Indonesia.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Icons.Github />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Icons.Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
