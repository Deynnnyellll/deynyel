import Hero from "./section/Hero";
import Services from "./section/Services";

// components
import Banner from "./components/Banner";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Banner bannerBgColor={"bg-blue-600"} customStyle={"flex items-center justify-center flex-col text-white gap-4"}>
          <h1>Let's Build Something Amazing Together</h1>

          <p className="text-white! font-medium mb-4">
            I'm always excited to take on new challenges and collaborate on interesting projects.
          </p>

          <Button bgColor={"white"}>
            Start a Conversation
          </Button>
      </Banner>
    </>
  );
}
