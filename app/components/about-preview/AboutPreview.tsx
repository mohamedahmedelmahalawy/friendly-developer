import { Link } from "react-router";

function AboutPreview() {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <figure className="w-32 h-32 shrink-0 rounded-full border-4 border-blue-500 shadow-md overflow-hidden m-0">
        <img
          src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </figure>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-200 mab-4 max-w 4xl">~</p>
        <Link
          to="/about"
          className="inline-block text-blue-400 hover:underline text-sm"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;
