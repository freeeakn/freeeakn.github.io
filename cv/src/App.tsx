import Gallery from './components/Gallery';

function App() {
  return (
    <>
      {/* HEADER */}
      <header id="start" className="relative text-[#38B000] flex justify-center items-center w-full min-h-screen bg-black overflow-hidden font-mono">
        <div className="max-w-[1000px] flex flex-col items-center justify-center gap-8 px-4 py-20 z-10">
            <p className="font-bold tracking-widest bg-[#38B000]/10 px-4 py-1 rounded-full">&copy; 2026</p>
            <h1 className="logo text-nowrap text-5xl md:text-7xl lg:text-8xl shadow-2xl text-center font-black tracking-tighter hover:scale-105 transition-transform duration-500 cursor-default">
                Arthur Pechenkin
            </h1>
            <div className="text-center space-y-2">
              <h2 className="text-xl md:text-3xl font-bold text-[#9EF01A]">Frontend Developer at R-One</h2>
              <p className="text-lg text-[#38B000]/80">Novosibirsk, Russia</p>
            </div>

            <p className="max-w-2xl text-center text-lg md:text-xl leading-relaxed text-[#CCFF33]/90">
                Frontend Engineer with 2+ years of experience delivering scalable web applications. 
                I focus on performance, component architecture, and developer experience.
            </p>

            {/* Navigation / Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold italic text-lg md:text-xl mt-4">
                <a href="#about" className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">About</a>
                <span className="opacity-50">/</span>
                <a href="#experience" className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">Experience</a>
                <span className="opacity-50">/</span>
                <a href="#demo" className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">Work</a>
                <span className="opacity-50">/</span>
                <a href="#contact" className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">Contact</a>
            </div>

            <div className="arrow-down absolute bottom-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-[#38B000]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        {/* Background mesh or effect could go here */}
      </header>

      <main>
        {/* ABOUT SECTION */}
        <section className="flex flex-col justify-center items-center w-full min-h-screen py-20 bg-[#004B23] text-[#9EF01A]" id="about">
            <div className="max-w-[1000px] w-full px-6 flex flex-col gap-16">
                <div className="flex flex-col gap-6">
                   <h2 className="text-4xl md:text-7xl font-black italic tracking-tight border-b-4 border-[#9EF01A] inline-block self-start pb-2">About Me</h2>
                   <div className="flex flex-col gap-4 text-[#9EF01A] max-w-none text-justify md:text-left">
                      <p className="text-xl leading-relaxed">
                        I am a <strong>Frontend Engineer</strong> with a strong focus on the React ecosystem. I specialize in building complex, high-performance Single Page Applications (SPAs) and Server-Side Rendered (SSR) platforms using <strong>Next.js and TypeScript</strong>.
                      </p>
                      <p className="text-xl leading-relaxed">
                        My expertise extends to modern state management (Zustand, TanStack Query), architectural patterns, and CI/CD automation. I have a proven track record of refactoring legacy codebases, optimizing Core Web Vitals, and mentoring junior developers in Agile environments.
                      </p>
                      <p className="mt-4 text-xl">
                        I am currently expanding my skill set into backend development (NestJS, Go) to become a T-shaped engineer. I am open to remote challenges and relocation opportunities within the EU.
                      </p>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-black/20 p-8 rounded-xl backdrop-blur-sm border border-[#9EF01A]/20 hover:border-[#9EF01A] transition-colors">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                           <span className="text-3xl">🛠</span> Tech Stack
                        </h3>
                        <ul className="space-y-3 font-mono text-lg">
                            <li className="flex items-start gap-2">
                                <span className="text-[#CCFF33] font-bold">Languages:</span> JavaScript (ES6+), TypeScript, HTML, CSS, Python, C/C++, Go (Basic)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#CCFF33] font-bold">Core:</span> React, Next.js, NestJS
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#CCFF33] font-bold">Styling:</span> TailwindCSS, Vanilla CSS
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#CCFF33] font-bold">Tools:</span> Git, CI/CD, Linux, Figma
                            </li>
                        </ul>
                    </div>

                    <div className="bg-black/20 p-8 rounded-xl backdrop-blur-sm border border-[#9EF01A]/20 hover:border-[#9EF01A] transition-colors">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-3xl">🧠</span> Top Skills
                        </h3>
                         <div className="flex flex-wrap gap-3">
                            {['React Ecosystem', 'Next.js (App Router)', 'TypeScript', 'State Management', 'Performance Optimization', 'CI/CD & DevOps', 'System Design', 'Module Federation'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-[#9EF01A]/10 border border-[#9EF01A] rounded-full text-sm font-bold hover:bg-[#9EF01A] hover:text-black transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="flex flex-col justify-center items-center w-full min-h-screen py-20 bg-black text-[#CCFF33]" id="experience">
           <div className="max-w-[1000px] w-full px-6 flex flex-col gap-16">
              <h2 className="text-4xl md:text-7xl font-black italic tracking-tight border-b-4 border-[#CCFF33] inline-block self-end pb-2">Experience</h2>

              <div className="flex flex-col gap-12 relative animate-fade-in-up">
                 
                  {/* Job 1 */}
                  <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">R-One</h3>
                             <p className="text-sm font-mono opacity-70">Nov 2025 - Present</p>
                             <p className="text-sm opacity-50">Novosibirsk, Russia</p>
                         </div>
                         <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                         <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                              <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Frontend developer</h4>
                             <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li>Developing complex enterprise dashboards with complex data visualization.</li>
                                 <li>Architecting and integrating scalable RESTful API layers.</li>
                                 <li>Refactoring legacy codebase to modern React patterns, reducing technical debt and improving maintainability.</li>
                             </ul>
                         </div>
                     </div>
                  </div>

                  {/* Job 2 */}
                  <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Freelance</h3>
                             <p className="text-sm font-mono opacity-70">Nov 2022 - Present</p>
                             <p className="text-sm opacity-50">Remote</p>
                         </div>
                         <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                         <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                             <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Frontend Engineer</h4>
                             <p className="mb-2 italic opacity-80">Full-cycle development: Requirements {'=>'} Architecture {'=>'} Deployment.</p>
                             <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li><strong>Astrology SaaS Platform:</strong> Built a high-load subscription service. Integrated CloudPayments and a custom Telegram bot for automated sales funnels. Tech stack: Next.js, Zustand.</li>
                                 <li><strong>Charitable Foundation:</strong> Developed a performant, accessible website using ShadcnUI and Tailwind, optimizing for SEO and speed.</li>
                             </ul>
                         </div>
                     </div>
                  </div>

                   {/* Job 3 */}
                   <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">KiberOne</h3>
                             <p className="text-sm font-mono opacity-70">Feb 2025 - Oct 2025</p>
                             <p className="text-sm opacity-50">Plantation, FL (Remote/Onsite)</p>
                         </div>
                         <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                         <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                             <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Programming Mentor</h4>
                             <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li>Mentored 100+ children in modern web technologies (JS, Python).</li>
                                 <li>Designed a comprehensive curriculum for Frontend Development, improving student engagement and code quality.</li>
                             </ul>
                         </div>
                     </div>
                  </div>

                 {/* Job 4 */}
                  <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Wildberries</h3>
                              <p className="text-sm font-mono opacity-70">June 2025 - Aug 2025</p>
                         </div>
                         <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                          <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                              <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Full Stack Engineer work practice</h4>
                              <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li>Developed "Cities of Russia" - a high-performance geo-service using Go and React.</li>
                                 <li>Implemented optimized REST API endpoints to handle map data efficiently.</li>
                              </ul>
                         </div>
                     </div>
                  </div>

                  {/* Job 5 */}
                  <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Nil IT</h3>
                              <p className="text-sm font-mono opacity-70">Dec 2023 - Mar 2025</p>
                              <p className="text-sm opacity-50">Novosibirsk, Russia</p>
                         </div>
                         <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                          <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                              <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Frontend Engineer</h4>
                              <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li><strong>CRM Referral System (NDA):</strong> Built a complex logic client-side application with Zustand and TanStack Query, improving load times by 30%.</li>
                                 <li><strong>Telegram Web App (NDA):</strong> Developed a fully functional marketplace within Telegram using vanilla JS for minimal bundle size.</li>
                                 <li>Worked under strict NDA on a foreign student management system.</li>
                              </ul>
                         </div>
                     </div>
                  </div>

                  {/* Job 6 */}
                  <div className="relative pl-8 md:pl-0">
                     <div className="md:flex gap-10 items-start group">
                         <div className="md:w-1/3 md:text-right mb-2 md:mb-0">
                             <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Enter IT</h3>
                              <p className="text-sm font-mono opacity-70">Jan 2024 - May 2024</p>
                              <p className="text-sm opacity-50">Internship {'=>'} Junior</p>
                         </div>
                        <div className="hidden md:block w-px bg-[#CCFF33] self-stretch relative">
                             <span className="absolute top-2 -left-[5px] w-3 h-3 bg-[#CCFF33] rounded-full"></span>
                         </div>
                          <div className="md:w-2/3 pb-8 border-l md:border-l-0 border-[#CCFF33]/30 pl-6 md:pl-0">
                              <div className="absolute left-0 top-2 md:hidden w-3 h-3 bg-[#CCFF33] rounded-full -translate-x-[5px]"></div>
                             <h4 className="text-xl font-bold mb-2">Frontend Developer</h4>
                              <ul className="list-disc list-outside ml-4 space-y-2 text-lg text-[#CCFF33]/80">
                                 <li>Migrated e-commerce platform to Next.js 14 (App Router).</li>
                              </ul>
                         </div>
                     </div>
                  </div>
              </div>
              
              {/* EDUCATION */}
               <div className="mt-12 pt-12 border-t border-[#CCFF33]/20">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tight mb-10 text-right md:text-left">Education</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                         <div className="bg-[#CCFF33]/10 p-6 rounded-lg text-right md:text-left">
                            <h3 className="text-xl font-bold text-white">Novosibirsk State University of Economics and Management</h3>
                            <p className="opacity-80">Bachelor's degree, Information Technology</p>
                            <p className="opacity-60 font-mono text-sm mt-1">Sep 2022 - May 2026</p>
                         </div>
                         <div className="bg-[#CCFF33]/10 p-6 rounded-lg text-right md:text-left">
                            <h3 className="text-xl font-bold text-white">School 21</h3>
                            <p className="opacity-80">Information Technology</p>
                            <p className="opacity-60 font-mono text-sm mt-1">Sep 2023 - Feb 2024</p>
                         </div>
                    </div>
               </div>
           </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="bg-[#CCFF33] text-black w-full min-h-[900px] flex flex-col justify-center items-center py-20" id="demo">
             <div className="max-w-[1200px] w-full px-6 flex flex-col gap-10 h-full">
                <h2 className="text-4xl md:text-8xl italic font-black text-center md:text-left">Selected Works</h2>
                <div className="w-full h-[600px] shadow-2xl rounded-xl overflow-hidden bg-black/5">
                    <Gallery />
                </div>
            </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="flex justify-center items-center w-full min-h-[600px] bg-[#004B23] text-[#9EF01A]" id="contact">
             <div className="max-w-[1000px] flex flex-col justify-center items-center gap-16 py-16">
                <h2 className="text-5xl md:text-8xl italic font-black text-center">Get In Touch</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <a className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-[#9EF01A] rounded-2xl hover:bg-[#9EF01A] hover:text-[#004B23] transition-all group" href="mailto:1rycont@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="text-xl md:text-2xl font-bold">1rycont@gmail.com</span>
                    </a>
                     <a className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-[#9EF01A] rounded-2xl hover:bg-[#9EF01A] hover:text-[#004B23] transition-all group" href="https://www.linkedin.com/in/arthur-pechenkin-5b04693a5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span className="text-xl md:text-2xl font-bold">LinkedIn</span>
                    </a>
                     <a className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-[#9EF01A] rounded-2xl hover:bg-[#9EF01A] hover:text-[#004B23] transition-all group" href="https://github.com/freeeakn">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-current"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span className="text-xl md:text-2xl font-bold">GitHub</span>
                    </a>
                     <a className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-[#9EF01A] rounded-2xl hover:bg-[#9EF01A] hover:text-[#004B23] transition-all group" href="https://t.me/maaachine">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-current"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        <span className="text-xl md:text-2xl font-bold">Telegram</span>
                    </a>
                     <a className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-[#9EF01A] rounded-2xl hover:bg-[#9EF01A] hover:text-[#004B23] transition-all group md:col-span-2" href="https://openfly.tech">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <span className="text-xl md:text-2xl font-bold">My Team: openfly.tech</span>
                    </a>
                </div>
            </div>
        </section>

      </main>

      <footer className="text-[#38B000] bg-[#000]">
        <div className="flex justify-center items-center w-full py-10" id="footer">
            <div className="max-w-[1000px] flex flex-col justify-center items-center gap-5">
                <h2 className="logo text-3xl font-black">Arthur Pechenkin</h2>
                <p className="text-justify text-xl">
                    &copy; Copyright 2026
                </p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
