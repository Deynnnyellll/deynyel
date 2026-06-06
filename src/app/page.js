import Hero from "./section/Hero";
import Services from "./section/Services";

// components
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Banner bannerBgColor={"bg-blue-950"} customStyle={"flex items-center justify-center flex-col text-white gap-4"}>
          
          <h1>{"Let's Build Something Amazing Together"}</h1>

          <p className="text-white! font-medium mb-4">
            {"I'm always excited to take on new challenges and collaborate on interesting projects."}
          </p>
      </Banner>
    </>
  );
}
