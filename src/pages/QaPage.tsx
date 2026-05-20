import React, { useState, useEffect } from "react";
import trelloImg from "../assets/projects/trello-project.png";
import postmanImg from "../assets/projects/postman-project.png";
import jiraImg from "../assets/projects/jyra-project.png"; 
import todoImg from "../assets/projects/todo-project.png";
import todoCreateImg from "../assets/projects/todo-create.jpg";
import todoReadImg from "../assets/projects/todo-read.jpg";
import todoUpdateImg from "../assets/projects/todo-update.jpg";
import todoDeleteImg from "../assets/projects/todo-delete.jpg";
import todoDefectImg from "../assets/projects/todo-defect.jpg";
import todoDefect2Img from "../assets/projects/todo-defect2.jpg";
import qaseDefectImg from "../assets/projects/qase-defect-project.png";
import qaseTestCasesImg from "../assets/projects/qase-test-cases-project.png";
import qaseUserStoryImg from "../assets/projects/qase-user-story.png";

interface Project {
  title: string;
  linkText: string;
  linkUrl: string;
  images?: string[];
  descriptionTitle: string;
  descriptionText: string;
  highlightsTitle: string;
  highlights: string[];
  technologiesTitle: string;
  technologies: string[];
}

const QaPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  
  // Stare pentru a ține minte la ce imagine ne uităm în interiorul proiectului curent
  const [imageIndex, setImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "API Automation & Testing - Trello API Suite",
      linkText: "🔗 Interactive Postman Documentation",
      linkUrl: "https://documenter.getpostman.com/view/54865079/2sBXwjuCtX",
      images: [trelloImg, postmanImg],
      descriptionTitle: "Project Description",
      descriptionText: "This is an automated end-to-end (E2E) testing project built in Postman to test the Trello REST API. The goal was to create a complete testing flow for creating, reading, updating, and deleting (CRUD) Trello items like Boards, Lists, and Cards.",
      highlightsTitle: "What I did in this project:",
      highlights: [
        "Dynamic Data Sharing: I used Postman environment variables to pass data automatically between requests. For example, when a new Board or Card is created, the script saves its unique ID and uses it automatically in the next GET, PUT, or DELETE requests.",
        "Automated Test Cases: I wrote over 40 automated tests using JavaScript and the Chai library. These tests automatically check if the HTTP status codes are correct (200 OK, 404 Not Found) and if the server response contains the right data.",
        "Performance Testing: Every request has a built-in check to make sure the response time is fast and stays under 1000ms.",
        "Negative Testing: I added tests to verify what happens after deleting an item. The scripts check that the API correctly returns a 404 Not Found error when trying to access a board or a card that no longer exists."
      ],
      technologiesTitle: "Technologies Used:",
      technologies: [
        "Postman (API testing and automation)",
        "JavaScript (For writing test scripts)",
        "Postman Environment Variables (For dynamic data handling)"
      ]
    },
    {
      title: "Manual Testing & Test Management - Agile Travel Platform",
      linkText: "✈️ Site Testing Environment",
      linkUrl: "https://travel.agileway.net/login", 
      images: [jiraImg], 
      descriptionTitle: "Project Description",
      descriptionText: "This is a manual testing project where I validated a flight booking web platform using an Agile approach. I analyzed user stories, broke down requirements, and organized my testing workflow directly inside Jira.",
      highlightsTitle: "What I did in this project:",
      highlights: [
        "Test Case Design: Created and managed 37 detailed test cases using Zephyr Scale, covering positive and negative flows for core features like Login, Sign Up, and Flight Booking.",
        "Functional Testing: Validated complex business logic, such as ensuring users cannot book flights with past dates, invalid credit cards, or matching origins and destinations.",
        "Defect Management: Executed test cycles, tracked results, and managed the complete bug lifecycle for all discovered issues."
      ],
      technologiesTitle: "Technologies Used:",
      technologies: [
        "Jira",
        "Zephyr Scale",
        "Agile/Scrum Methodology"
      ]
    },
    {
      title: "End-to-End Manual Testing & Bug Reporting - Sweet Shop E-Commerce",
      linkText: "🍬 Secure Sandbox Project",
      linkUrl: "https://sweetshop.vivrichards.co.uk/", 
      images: [qaseUserStoryImg, qaseDefectImg, qaseTestCasesImg], 
      descriptionTitle: "Project Description",
      descriptionText: "This project demonstrates web testing on an e-commerce platform using Qase.io for professional test management. I focused heavily on the checkout funnel and the shopping cart logic.",
      highlightsTitle: "What I did in this project:",
      highlights: [
        "Requirement Mapping: Analyzed the 'Guest Checkout' User Story and created targeted test scenarios to verify acceptance criteria.",
        "Test Suite Creation: Wrote 18 structured test cases in Qase covering payment processing, promo code validation, and input fields.",
        "Technical Bug Reporting: Logged critical bugs with professional descriptions, such as payment validation bypasses and total price calculation errors (where string concatenation was used instead of numerical addition)."
      ],
      technologiesTitle: "Technologies Used:",
      technologies: [
        "Qase.io (Test Management)",
        "Requirement Analysis",
        "E-Commerce Testing"
      ]
    },
    {
      title: "Functional & UI/UX Manual Testing - To Do Productivity App",
      linkText: "📋 Bug Tracking Board",
      linkUrl: "https://todolist.james.am/#/",
      images: [todoImg, todoCreateImg, todoReadImg, todoUpdateImg, todoDeleteImg, todoDefectImg, todoDefect2Img], 
      descriptionTitle: "Project Description",
      descriptionText: "In this project, I performed functional and exploratory manual testing on a To Do List web application. I used Trello as a lightweight bug tracking system to log and organize issues found during my testing sessions.",
      highlightsTitle: "What I did in this project:",
      highlights: [
        "Bug Reporting: Found and documented multiple defects, organizing them logically into UI/UX, functional, and usability issues.",
        "Boundary & Edge Cases: Tested the application's limits, identifying critical functional flaws like broken task counters and missing submission buttons.",
        "Visual & Text Validation: Verified user interface consistency, reporting low-contrast elements and incorrect grammatical placeholders to improve the overall user experience."
      ],
      technologiesTitle: "Technologies Used:",
      technologies: [
        "Trello (Bug Tracking)",
        "Black-Box Testing",
        "UI/UX Verification"
      ]
    },

  ];

  // Resetăm indexul imaginii la zero ori de câte ori utilizatorul schimbă proiectul principal
  useEffect(() => {
    setImageIndex(0);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = (e: React.MouseEvent, maxImages: number) => {
    e.stopPropagation(); // Evită acțiuni secundare nedorite
    setImageIndex((prev) => (prev === 0 ? maxImages - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent, maxImages: number) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === maxImages - 1 ? 0 : prev + 1));
  };

  const closeLightbox = () => {
    setActiveImage(null);
    setIsZoomed(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <main className="flex flex-col max-w-6xl mx-auto px-6 py-16 min-h-screen relative">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="leading-relaxed mt-5">
        Here you will find a collection of my projects that showcase my skills
        and creativity in Quality Assurance.
      </p>

      {/* Controller de Navigare Sus */}
      <div className="flex justify-between items-center mt-10 mb-4 bg-[var(--color-purple)] bg-opacity-10 p-4 rounded-lg">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-[var(--color-purple)] text-white font-semibold rounded hover:opacity-90 transition-opacity"
        >
          &larr; Previous
        </button>
        <span className="font-medium text-sm">
          Project {currentIndex + 1} of {projects.length}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[var(--color-purple)] text-white font-semibold rounded hover:opacity-90 transition-opacity"
        >
          Next &rarr;
        </button>
      </div>

      {/* Containerul Proiectului Curent */}
      <div className="my-4 flex flex-col gap-4 border-y-[2px] border-[var(--color-purple)] py-10 px-4 sm:px-10 transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-100">{currentProject.title}</h2>
        
        {currentProject.linkUrl !== "visuals-only" ? (
          <a
            href={currentProject.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-purple)] hover:underline inline-block mt-1 font-bold"
          >
            {currentProject.linkText}
          </a>
        ) : (
          <span className="text-gray-400 font-semibold mt-1 bg-gray-800 bg-opacity-50 px-3 py-1 rounded border border-gray-700 inline-block w-fit text-xs">
            {currentProject.linkText}
          </span>
        )}

        {/* SUB-CARUSEL DE IMAGINI INTEGENT (Afișează doar o imagine odată cu paginare dedesubt) */}
        {currentProject.images && currentProject.images.length > 0 && (
          <div className="mt-8 mb-6 flex flex-col items-center">
            <div className="relative group w-full max-w-2xl flex items-center justify-center">
              
              {/* Buton Stânga Imagine (Apare doar dacă proiectul are mai mult de o poză) */}
              {currentProject.images.length > 1 && (
                <button
                  onClick={(e) => handlePrevImage(e, currentProject.images!.length)}
                  className="absolute left-2 z-10 p-3 rounded-full bg-black bg-opacity-60 text-white font-bold hover:bg-opacity-90 transition-all opacity-0 group-hover:opacity-100 border border-gray-700"
                >
                  &larr;
                </button>
              )}

              {/* Imaginea Activă din Carusel */}
              <div className="cursor-zoom-in relative overflow-hidden rounded-lg border border-gray-800 shadow-xl bg-gray-950">
                <img
                  src={currentProject.images[imageIndex]}
                  alt={`${currentProject.title} frame ${imageIndex + 1}`}
                  onClick={() => setActiveImage(currentProject.images![imageIndex])}
                  className="max-w-full h-auto max-h-[400px] object-contain mx-auto transition-all duration-300 group-hover:brightness-110"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-[10px] px-2 py-1 rounded text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  🔍 Click to expand & double-zoom
                </span>
              </div>

              {/* Buton Dreapta Imagine */}
              {currentProject.images.length > 1 && (
                <button
                  onClick={(e) => handleNextImage(e, currentProject.images!.length)}
                  className="absolute right-2 z-10 p-3 rounded-full bg-black bg-opacity-60 text-white font-bold hover:bg-opacity-90 transition-all opacity-0 group-hover:opacity-100 border border-gray-700"
                >
                  &rarr;
                </button>
              )}
            </div>

            {/* Bullets / Puncte de ghidaj sub imagine pentru navigare rapidă */}
            {currentProject.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {currentProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === imageIndex ? "w-8 bg-[var(--color-purple)]" : "w-2.5 bg-gray-600 hover:bg-gray-400"
                    }`}
                    title={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Descriere */}
        <h3 className="text-xl font-semibold mt-4 text-gray-200">{currentProject.descriptionTitle}</h3>
        <p className="leading-relaxed text-gray-300">{currentProject.descriptionText}</p>

        {/* Puncte Cheie */}
        <h3 className="text-xl font-semibold mt-4 text-gray-200">{currentProject.highlightsTitle}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
          {currentProject.highlights.map((highlight, idx) => (
            <li key={idx} className="leading-relaxed">{highlight}</li>
          ))}
        </ul>

        {/* Tehnologii */}
        <h3 className="text-xl font-semibold mt-4 text-gray-200">{currentProject.technologiesTitle}</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300 pl-2">
          {currentProject.technologies.map((tech, idx) => (
            <li key={idx} className="font-medium text-[var(--color-purple)]">{tech}</li>
          ))}
        </ul>
      </div>

      {/* Controller de Navigare Jos */}
      <div className="flex justify-between items-center mt-4 bg-[var(--color-purple)] bg-opacity-10 p-4 rounded-lg">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-[var(--color-purple)] text-white font-semibold rounded hover:opacity-90 transition-opacity"
        >
          &larr; Previous Project
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[var(--color-purple)] text-white font-semibold rounded hover:opacity-90 transition-opacity"
        >
          Next Project &rarr;
        </button>
      </div>

      {/* LIGHTBOX OVERLAY COMPLET - CU DOUBLE-ZOOM ȘI SCROLL FLUID */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          <div 
            className={`relative rounded-lg shadow-2xl transition-all duration-300 ${
              isZoomed ? "overflow-auto max-h-screen max-w-full w-full h-full flex items-start justify-start p-10" : "flex flex-col justify-center max-w-5xl max-h-[85vh]"
            }`}
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="fixed top-6 right-6 z-50 text-white font-bold text-sm bg-gray-800 bg-opacity-90 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors shadow-xl border border-gray-600"
              onClick={closeLightbox}
            >
              ✕ Close
            </button>

            <img 
              src={activeImage} 
              alt="Expanded view" 
              onClick={() => setIsZoomed(!isZoomed)} 
              className={`rounded-lg object-contain bg-gray-900 shadow-inner max-w-full transition-transform duration-300 ease-in-out ${
                isZoomed 
                  ? "scale-150 sm:scale-[2] cursor-zoom-out origin-top-left m-auto my-4" 
                  : "max-h-[80vh] cursor-zoom-in"
              }`}
            />

            <p className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 px-4 py-1.5 rounded-full text-center text-gray-300 text-xs pointer-events-none border border-gray-700 shadow-lg">
              {isZoomed 
                ? "💡 Click on the image to unzoom. Drag or scroll to navigate text fields." 
                : "💡 Click directly on the image to deeply zoom in on log data."
              }
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default QaPage;