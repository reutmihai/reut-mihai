import React from "react";

export const AboutMePage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center min-h-screen">
      {/* Poză */}
      <div className="flex justify-center md:justify-start">
        <img
          src={`${import.meta.env.BASE_URL}images/profile.jpg`}
          alt="Mihai - QA Engineer & Web Developer"
          className="w-full max-w-sm h-[400px] object-cover rounded-2xl shadow-lg border border-gray-800"
        />
      </div>

      {/* Text */}
      <div className="space-y-6">
        <h1 className="text-4xl font-inria font-bold text-gray-100">Meet The QA Engineer</h1>
        <h2 className="text-2xl font-semibold text-[var(--color-purple)]">Who Am I?</h2>

        <p className="text-lg leading-relaxed text-gray-300">
          I'm <span className="font-semibold text-white">MIHAI</span>, a 
          <span className="font-semibold text-white"> QA Engineer / Software Tester</span> with a solid background in 
          Frontend Web Development. 
        </p>
        
        <p className="text-lg leading-relaxed text-gray-300">
          My journey in IT began with building web applications, which naturally evolved into a passion for software quality assurance. Having deep knowledge of <span className="text-[var(--color-purple)] font-medium">React, JavaScript, and TypeScript</span> allows me to approach testing with a developer’s lens—enabling me to understand system architecture, perform technical API testing, and catch critical edge cases efficiently.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I specialize in structured manual testing, API validation using 
          <span className="font-semibold text-white"> Postman</span>, and managing entire test lifecycles inside 
          <span className="font-semibold text-white"> Jira (Zephyr Scale)</span> and 
          <span className="font-semibold text-white"> Qase.io</span>, always ensuring that applications are robust, secure, and user-friendly.
        </p>

        {/* Link-uri Utile */}
        <div className="flex flex-col gap-3 pt-2">
          <a
            href="documents/certificate_goit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-purple)] hover:underline font-bold text-sm w-fit"
          >
            &gt; Click to see Fullstack Certificate
          </a>

          <a 
            href={`${import.meta.env.BASE_URL}qa-projects`}
            className="text-[var(--color-purple)] hover:underline font-bold text-sm w-fit"
          >
            &gt; Click to see My QA Projects
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}web-dev-projects`}
            className="text-[var(--color-purple)] hover:underline font-bold text-sm w-fit"
          >
            &gt; Click to see My Web Dev Projects
          </a>
        </div>

        {/* Secțiunea de Abilități Reorganizată Profesional */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Skills & Tools Matrix:</h2>
          <div className="grid grid-cols-2 gap-6 text-base">
            
            {/* Coloana QA */}
            <div>
              <h3 className="font-bold text-[var(--color-purple)] mb-2 text-sm uppercase tracking-wider">Quality Assurance</h3>
              <ul className="space-y-1 text-gray-300 list-disc list-inside pl-1">
                <li>Manual Testing</li>
                <li>API Testing (Postman)</li>
                <li>Jira & Zephyr Scale</li>
                <li>Qase.io (Test Management)</li>
                <li>Bug Reporting & Tracking</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>

            {/* Coloana Engineering */}
            <div>
              <h3 className="font-bold text-[var(--color-purple)] mb-2 text-sm uppercase tracking-wider">Development & Tools</h3>
              <ul className="space-y-1 text-gray-300 list-disc list-inside pl-1">
                <li>JavaScript & TypeScript</li>
                <li>React & Redux</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Cloudflare & Figma</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};