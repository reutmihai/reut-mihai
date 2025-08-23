import React from "react";
import bpsProjectImg from "../assets/projects/bps-project.png";
import moneyGuardProjectImg from "../assets/projects/money-guard-project.png";
import healthAppProjectImg from "../assets/projects/health-app-project.png";

const ProjectsPage: React.FC = () => {
  return (
    <main className="flex flex-col max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="leading-relaxed mt-5">
        Here you will find a collection of my projects that showcase my skills
        and creativity in web development.
      </p>
      <div className="my-8 flex flex-col gap-3 border border-[var(--color-purple)]  p-15">
        <h2>BPS PAVING APP - INDIVIDUAL REAL PROJECT</h2>

        <div className="mt-10 mb-10">
          <img
            src={bpsProjectImg}
            alt="Mihai - Web Developer"
            className="max-w-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <p className="text-lg leading-relaxed">
          &gt; I developed a full business website for Bil Pave Solutions, a
          paving company. <br /> &gt; The project included a responsive design,
          service presentation, portfolio galleries, client reviews, and a
          contact form. <br />
          &gt; I implemented it with React, TypeScript, and Material UI,
          optimized it for SEO and performance, and hosted it on Cloudflare with
          R2 storage for images.
        </p>

        <a
          href="https://github.com/reutmihai/Bil-Pave-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>&gt; Click here for github project </strong>
        </a>
      </div>
      <div className="my-8 flex flex-col gap-3 border border-[var(--color-purple)] p-15">
        <h2>HEALTH APP - INDIVIDUAL PROJECT</h2>
        <div className="mt-10 mb-10">
          <img
            src={healthAppProjectImg}
            alt="Mihai - Web Developer"
            className="max-w-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <p className="text-lg leading-relaxed">
          &gt; Health App, a nutrition tracking application. It allows users to
          log meals, calculate calories, and view their progress in a dashboard.{" "}
          <br />
          &gt; Built with React, TypeScript, and Tailwind, the app emphasizes
          clean UI and efficient state management.
        </p>
        <a
          href="https://github.com/reutmihai/Health-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> &gt; Click here for github project </strong>
        </a>
      </div>
      <div className="my-8 flex flex-col gap-3 border border-[var(--color-purple)] p-15">
        <h2>MONEY GUARD - TEAM PROJECT</h2>
        <div className="mt-10 mb-10">
          <img
            src={moneyGuardProjectImg}
            alt="Mihai - Web Developer"
            className="max-w-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <p className="text-lg leading-relaxed">
          &gt; I collaborated in a team project called Money Guard, a web
          application for managing personal finances. The app allows users to
          track income and expenses, visualize statistics in a dashboard, and
          manage transactions. <br />
          &gt; I contributed to the frontend, implementing React components,
          state management with Redux, and API integrations.
        </p>
        <a
          href="https://github.com/reutmihai/Money-Guard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>&gt; Click here for github project </strong>
        </a>
      </div>
    </main>
  );
};

export default ProjectsPage;
