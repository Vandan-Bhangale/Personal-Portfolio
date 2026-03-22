import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean and maintainable code with a focus on best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building responsive applications with attention to performance and efficiency.",
  },
  {
    icon: Users,
    title: "Problem Solving",
    description:
      "Approaching challenges with logical thinking and building effective solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and continuously improving my development skills.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate MERN Stack Developer with a strong interest in
                building modern and user-friendly web applications. My journey
                started with curiosity about how the web works, which gradually
                turned into hands-on experience with real-world projects.
              </p>
              <p>
                I specialize in React, Node.js, Express, and MongoDB, developing
                everything from responsive frontend interfaces to full-stack
                applications. I focus on writing clean, efficient code and
                creating seamless user experiences.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies,
                improving my skills, and building projects that help me grow as
                a developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to create digital experiences that are not just
                functional, but truly delightful — products that users enjoy
                using and are built with clean, maintainable code."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
