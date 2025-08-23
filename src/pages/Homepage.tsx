import React from "react";

export const Homepage: React.FC = () => {
  return (
    <main className="flex flex-row gap-20 h-screen place-content-around my-10">
      <div className="card flex flex-col items-center justify-center">
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
        <div className="flex flex-row  gap-3 items-center justify-center mt-10">
          <a
            href="/reut_mihai_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1px] text-[var(--color-purple)] px-4 py-2 rounded"
          >
            My Resume
          </a>
          <button className="btn" onClick={() => window.open("/projects")}>
            My Projects
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="homepage-profile.jpg"
          alt="Mihai - Web Developer"
          className="w-[300px] h-[500px] object-cover rounded-xl shadow-lg border border-gray-300 transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </main>
  );
};
