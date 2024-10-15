import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div>
        <h2 className="text-center">
          A starter template created for saas indie devs
        </h2>
        <div className="flex items-center gap-6">
          {["Nextjs", "tailwindCSS", "AuthJS", "Prisma", "Supabase"].map(
            (tech) => (
              <h2
                key={tech}
                className="hover:bg-neutral-100 px-3 py-2 rounded-full"
              >
                {tech}
              </h2>
            )
          )}
        </div>
      </div>
    </div>
  );
}
