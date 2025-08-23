import React from "react";
import { useNavigate } from "react-router-dom";




export const Homepage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 flex flex-row gap-20 h-screen place-content-around my-10">
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
            href={`${import.meta.env.BASE_URL}documents/reut_mihai_cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1px] text-[var(--color-purple)] px-4 py-2 rounded"
          >
            My Resume
          </a>
          <button className="btn" onClick={() => navigate("projects")}>
            My Projects
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
           src={`${import.meta.env.BASE_URL}images/profile_home.jpg`}
          alt="Mihai - Web Developer"
          className="w-[300px] h-[500px] object-cover rounded-xl shadow-lg border border-gray-300 transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </main>
  );
};
