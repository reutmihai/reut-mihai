
export const AboutMePage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-6">
        <h1 className="text-4xl font-inria font-bold">Meet The Developer</h1>
        <h2 className="text-2xl font-semibold">Who Am I?</h2>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold">MIHAI</span>, a web developer
          specialized in React and modern solutions for businesses.
        </p>
        <p className="text-lg leading-relaxed">
          My journey started with curiosity about how websites work and grew
          into a professional path where I specialize in: React, TypeScript,
          Tailwind and web performance optimization.
        </p>

        <p className="text-lg leading-relaxed">
          Besides my independent studies on the internet, I also completed the
          <span className="font-semibold"> Fullstack Web Development</span>
          course at GOIT, which gave me the opportunity to work on several
          individual and group projects.
        </p>

        <a
          href="documents/certificate_goit.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          &gt; Click to see the Certificate
        </a>
        <br />

        <a  href={`${import.meta.env.BASE_URL}projects`}>&gt; Click to see My Projects</a>

        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Skills & Tools:</h2>
          <ul className="grid grid-cols-2 gap-2 text-lg">
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git & GitHub</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Cloudflare</li>
          </ul>
        </div>
      </div>

      {/* Poză */}
      <div className="flex justify-center">
        <img
           src={`${import.meta.env.BASE_URL}images/profile.jpg`}
          alt="Mihai - Web Developer"
          className="w-[400px] h-[550px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </main>
  );
};
