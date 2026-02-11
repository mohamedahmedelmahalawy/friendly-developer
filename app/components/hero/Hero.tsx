import { FaHandSparkles } from "react-icons/fa6";
import { Link } from "react-router";

interface HeroProps {
  name: string;
  text: string;
}

function Hero({ name = "[Name]", text }: HeroProps) {
  return (
    <div className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4 flex gap-4 items-center justify-center">
        <span>Hey, I'm {name}</span> <FaHandSparkles />
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">{text}</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}

export default Hero;
