import React from "react";

export const Homepage: React.FC = () => {
  return (
    <main className="flex flex-row gap-20 place-content-around my-50">
      <div className="card flex flex-col items-center justify-center border-[1px] border-[var(--color-purple)] p-10">
        <div className="typewriter">
          <h1 className="typewriter">
            Hi there! I'm{" "}
            <span className="text-[var(--color-purple)]">Reuț Mihai</span>.{" "}
          </h1>
        </div>
        <h2 className="text-[var(--color-gray)]">Frontend Web Developer</h2>
        <p>
          Passionate web developer creating custom,responsive, and
          SEO-optimizated websites. <br />
          Focused on performance and user-friendly solutions.
        </p>
        <div className="flex flex-row  gap-3 items-center justify-center mt-5">
          <button className="btn">My Resume</button>
          <button className="btn">My Projects</button>
        </div>
      </div>
      <div className="card flex flex-col items-center justify-center border-[1px] border-[var(--color-purple)] p-20">
        <h2 className="mb-3 text-[var(--color-purple)] ">My Skills</h2>
        <ul className="skills">
          <li>HTML5 & CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>TYPEASCRIPT</li>
          <li>TAILWIND</li>
          <li>MATERIAL UI</li>
          <li>GITHUB</li>
          <li>CLOUDFLARE</li>
        </ul>
      </div>
    </main>
  );
};
