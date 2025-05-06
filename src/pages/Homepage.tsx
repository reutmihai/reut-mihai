import React from "react";

export const Homepage: React.FC = () => {
  return (
    <main className="flex flex-row gap-20 place-content-around my-50">
      <div className="flex flex-col items-center rounded-lg shadow-lg p-10 bg-[var(--color-primary)]">
      <div className="typewriter">
        <h1 className="typewriter">Hi there! I'm Reut Mihai</h1>
      </div>
        <h2 className="text-[var(--color-gray)]">Frontend Web Developer</h2>
        <p>
          Passionate web developer creating custom,responsive, and
          SEO-optimizated websites. <br />
          Focused on performance and user-friendly solutions.
        </p>
        <div className="flex flex-row  gap-3 items-center justify-center mt-5">
          <button className="btn">
            My Resume
          </button>
          <button className="btn">
            My Projects
          </button>
        </div>
      </div>
      <div className="card">
        <h2 className="mb-3 text-white">My Skills</h2>
        <ul className="flex flex-col">
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
