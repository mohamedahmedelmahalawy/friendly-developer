import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
function AboutPage() {
  return (
    <div className="max-5xl mx-auto px-6 py-16 bg-gray-900">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <figure className="w-40 h-40 shrink-0 rounded-full border-4 border-blue-500 shadow-md overflow-hidden m-0">
          <img
            src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </figure>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hey, I'm Brad</h1>
          <p className="text-gray-300 text-lg">
            11m a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>
      {/*Bio*/}
      <div className="mb-12">
        <h2 className="text-xl font-semi-bold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          After turning my life around, I made it my mission to help
          entrepreneurs build meaningful, successful businesses — not just by
          teaching them how to code, but by guiding them through the real-world
          skills needed to understand their customers and deliver value that
          truly satisfies client needs. Through practical tutorials, hands-on
          courses, and real-world project examples, I aim to empower creators to
          build businesses they’re proud of and clients who trust and value
          their work.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-4">Tech I use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "React",
          "Nextjs",
          "Tailwind",
          "SASS",
          "CSS",
          "HTML",
          "Prizma",
          "Supabase",
          "Zod",
          "Form Hook",
          "Convex",
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
